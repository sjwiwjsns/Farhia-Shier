// Node resolve hook: maps the bare 'three' specifier (handled by the import
// map in index.html when running in a browser) to the vendored build.
import { pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const threeUrl = pathToFileURL(
  join(dirname(fileURLToPath(import.meta.url)), '..', 'vendor', 'three.module.js')
).href;

export function resolve(specifier, context, next) {
  if (specifier === 'three') return { url: threeUrl, shortCircuit: true };
  return next(specifier, context);
}
