import fs from 'fs';
import yaml from 'js-yaml';

try {
  const file = fs.readFileSync('pnpm-lock.yaml', 'utf8');
  const pnpmLock = yaml.load(file);
  const playwrightProject = 'examples/lit-ts-playwright';
  const devDependencies = pnpmLock['importers'][playwrightProject]['devDependencies'];
  const playwrightVersion = devDependencies['@playwright/test']['version'];
  console.log(playwrightVersion);
} catch {
  console.log('1.0.0');
}
