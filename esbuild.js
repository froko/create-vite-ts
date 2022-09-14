/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import { writeFile, mkdir } from 'fs/promises';

import * as esbuild from 'esbuild';

const script = esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  write: false,
  target: ['node14'],
  format: 'esm',
  banner: {
    js: `
    import { createRequire } from "module";
    import path from 'path';
    import url from 'url';
    const require = createRequire(import.meta.url);
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    `
  }
});

(async () => {
  await mkdir('dist');
  await writeFile('dist/index.js', `#!/usr/bin/env node\n${script.outputFiles[0].text}`);
})();
