import { existsSync } from 'fs';
import { mkdir, readdir, readFile, writeFile, stat } from 'fs/promises';
import path from 'path';

import ejs from 'ejs';
import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const cypressSourcePath = () => path.join(__dirname, 'templates', 'cypress');
const cypressTargetPath = (options: CliOptions) => path.join(process.cwd(), options.projectName, 'cypress');

const copyCypressConfig = async (options: CliOptions) => {
  const configFile = path.join(cypressSourcePath(), 'cypress.config.ts');
  const contents = await readFile(configFile, 'utf8');
  await writeFile(
    path.join(process.cwd(), options.projectName, 'cypress.config.ts'),
    ejs.render(contents, options),
    'utf8'
  );
};

const createCypressFolder = async (options: CliOptions) => {
  await mkdir(cypressTargetPath(options));
};

const copyTemplate = async (options: CliOptions, subDirectory = '') => {
  const templatePath = path.join(cypressSourcePath(), 'cypress', subDirectory);
  const files = await readdir(templatePath);
  const ignoreFiles = ['e2e'];
  files.forEach(async (file) => {
    if (ignoreFiles.indexOf(file) >= 0) return;

    const sourcePath = path.join(templatePath, file);
    const targetPath = path.join(cypressTargetPath(options), subDirectory, file);
    const stats = await stat(sourcePath);

    if (stats.isFile()) {
      const contents = await readFile(sourcePath, 'utf8');
      await writeFile(path.join(targetPath), ejs.render(contents, options), 'utf8');
    } else if (stats.isDirectory()) {
      if (!existsSync(targetPath)) {
        await mkdir(targetPath);
      }
      await copyTemplate(options, file);
    }
  });
};

const copySpecs = async (options: CliOptions) => {
  const specFile = path.join(cypressSourcePath(), 'cypress', 'e2e', `app.cy-${options.template}.ts`);
  const targetPath = path.join(cypressTargetPath(options), 'e2e');
  const specFileContents = await readFile(specFile, 'utf8');
  await mkdir(targetPath);
  await writeFile(path.join(targetPath, 'app.cy.ts'), ejs.render(specFileContents, options), 'utf8');
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.cypress=run-p start cypress:open'], {
    cwd: options.projectPath
  });
  await execa('npm', ['pkg', 'set', 'scripts.cypress:ci=npm run build && run-p -r preview cypress:run'], {
    cwd: options.projectPath
  });
  await execa('npm', ['pkg', 'set', 'scripts.cypress:open=cypress open --e2e --browser electron'], {
    cwd: options.projectPath
  });
  await execa('npm', ['pkg', 'set', "scripts.cypress:run=cypress run --spec 'cypress/e2e/*.cy.ts'"], {
    cwd: options.projectPath
  });
};

export const createCypressTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Copy template files',
      task: async () => {
        await copyCypressConfig(options);
        await createCypressFolder(options);
        await copyTemplate(options);
        await copySpecs(options);
      }
    },
    {
      title: 'Install dependencies',
      task: () => install({ cypress: undefined, 'npm-run-all': undefined }, { cwd: options.projectPath, dev: true })
    },
    {
      title: 'Set up npm scripts',
      task: () => setupNpmScripts(options)
    }
  ]);
};
