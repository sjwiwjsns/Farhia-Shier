CONUS=[(-124.7,48.4),(-122.8,47),(-124,43),(-124.4,40),(-122,37),(-120.6,34.5),(-118.4,33.7),
(-117.1,32.5),(-114.6,32.7),(-111,31.3),(-108.2,31.3),(-106.5,31.8),(-104.9,29.3),(-102.3,29.8),
(-99.1,26.4),(-97.1,25.9),(-97.2,28),(-95,29),(-93.8,29.7),(-91.2,29.2),(-89,29),(-88.4,30.4),
(-85,29.7),(-84,30),(-82.8,29),(-80.1,25.2),(-80.1,27),(-81,31),(-79,33),(-76,35.2),(-75.5,37),
(-74,40),(-71.9,41.3),(-70,41.7),(-70.8,42.9),(-69,44),(-67,44.5),(-67.8,47.1),(-71.5,45),
(-74.7,45),(-76.9,43.3),(-79,43.3),(-82.5,41.7),(-83,45),(-84.8,45.8),(-87,46),(-88,48),
(-90,48.1),(-95,49),(-124.7,49)]
def inside(x,y,poly):
    n=len(poly);c=False;j=n-1
    for i in range(n):
        xi,yi=poly[i];xj,yj=poly[j]
        if ((yi>y)!=(yj>y)) and (x<(xj-xi)*(y-yi)/(yj-yi)+xi): c=not c
        j=i
    return c
W,H=132,62
L,R,T,B=-125.0,-66.5,49.5,24.4
rows=[]
for r in range(H):
    lat=T-(r+0.5)*(T-B)/H
    rows.append("".join("1" if inside(L+(c+0.5)*(R-L)/W,lat,CONUS) else "0" for c in range(W)))
for r in rows: print(r.replace("0"," ").replace("1","#"))
mask="".join(rows)
runs=[];cur=mask[0];n=0
for ch in mask:
    if ch==cur:n+=1
    else:runs.append(n);cur=ch;n=1
runs.append(n)
if mask[0]=="1": runs.insert(0,0)
open("usmask.txt","w").write(",".join(format(v,'x') for v in runs))
import sys; print("cells:",mask.count("1"),"rle:",len(open("usmask.txt").read()),file=sys.stderr)
