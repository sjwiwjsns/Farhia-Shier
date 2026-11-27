"""Download Overture Maps buildings for the baked Beylikdüzü area and write them as JSON polygons.

usage: python fetch-overture.py <release, e.g. 2026-11-18.0> <out.json> [https proxy]
needs: pip install pyarrow shapely
"""
import json, sys, time
import pyarrow as pa, pyarrow.compute as pc, pyarrow.fs as pfs, pyarrow.parquet as pq
from shapely import wkb

release, out_path = sys.argv[1], sys.argv[2]
proxy = sys.argv[3] if len(sys.argv) > 3 else None
W, S, E, N = 28.5644, 40.9466, 28.7402, 41.0466  # z14 tiles x 9492-9499, y 6140-6145
s3 = pfs.S3FileSystem(anonymous=True, region='us-west-2', **({'proxy_options': proxy} if proxy else {}))
base = f'overturemaps-us-west-2/release/{release}/theme=buildings/type=building/'
files = [f.path for f in s3.get_file_info(pfs.FileSelector(base)) if f.path.endswith('.parquet')]
t0, hits = time.time(), []
for fp in files:  # row-group bbox statistics narrow ~500 files down to a handful of row groups
    md = pq.ParquetFile(s3.open_input_file(fp)).metadata
    col = {md.schema.column(j).path: j for j in range(md.num_columns)}
    for rg in range(md.num_row_groups):
        st = {k: md.row_group(rg).column(col['bbox.' + k]).statistics for k in ('xmin', 'xmax', 'ymin', 'ymax')}
        if st['xmin'].min < E and st['xmax'].max > W and st['ymin'].min < N and st['ymax'].max > S:
            hits.append((fp, rg))
rows = []
for fp, rg in hits:
    tb = pq.ParquetFile(s3.open_input_file(fp)).read_row_group(rg, columns=['geometry', 'bbox', 'height', 'num_floors', 'min_height', 'class', 'roof_shape', 'sources', 'names'])
    bb = tb.column('bbox').combine_chunks()
    m = pc.and_(pc.and_(pc.less(pc.struct_field(bb, 'xmin'), E), pc.greater(pc.struct_field(bb, 'xmax'), W)),
                pc.and_(pc.less(pc.struct_field(bb, 'ymin'), N), pc.greater(pc.struct_field(bb, 'ymax'), S)))
    rows += tb.filter(m).to_pylist()
out = []
for r in rows:
    g = wkb.loads(r['geometry'])
    polys = [g] if g.geom_type == 'Polygon' else list(g.geoms) if g.geom_type == 'MultiPolygon' else []
    src = r['sources'][0]['dataset'] if r['sources'] else ''
    for p in polys:
        rings = [[[round(x, 7), round(y, 7)] for x, y in p.exterior.coords]] + [[[round(x, 7), round(y, 7)] for x, y in i.coords] for i in p.interiors]
        out.append({'rings': rings, 'h': r['height'], 'fl': r['num_floors'], 'mh': r['min_height'], 'cls': r['class'],
                    'src': 'osm' if src == 'OpenStreetMap' else 'ml', 'roof': r['roof_shape']})
json.dump(out, open(out_path, 'w'))
print(len(out), 'polygons from', len(hits), 'row groups in', round(time.time() - t0), 's')
