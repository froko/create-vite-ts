import { existsSync } from 'fs';
import { mkdir, readdir, readFile, writeFile, stat } from 'fs/promises';
import path from 'path';

import ejs from 'ejs';
import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const cypressSourcePath = () => path.join(__dirname, 'templates', '_cypress');
const subDirectory = (templatePath: string) => {
  if (!templatePath) return '';

  const directoryParts = templatePath.split('/');
  const index = directoryParts.lastIndexOf('_cypress');
  return directoryParts.slice(index + 1).join('/');
};

const copyTemplate = async (templatePath: string, options: CliOptions) => {
  let ignoreFiles = ['component'];
  let ignoreFolders = ['e2e', 'react', 'tailwind'];

  if (options.react) {
    ignoreFiles = ignoreFiles.filter((f) => f !== 'component');
    ignoreFolders = ignoreFolders.filter((f) => f !== 'react');
  }

  if (options.tailwind) {
    ignoreFolders = ignoreFolders.filter((f) => f !== 'tailwind');
  }

  const files = await readdir(templatePath);
  files.forEach(async (file) => {
    const sourcePath = path.join(templatePath, file);
    const targetPath = path.join(process.cwd(), options.projectName, subDirectory(templatePath), file);
    const stats = await stat(sourcePath);

    if (stats.isFile()) {
      if (ignoreFiles.filter((pattern) => file.includes(pattern)).length > 0) return;

      const contents = await readFile(sourcePath, 'utf8');
      await writeFile(path.join(targetPath), ejs.render(contents, options), 'utf8');
    } else if (stats.isDirectory()) {
      if (ignoreFolders.filter((pattern) => file.includes(pattern)).length > 0) return;

      if (!existsSync(targetPath)) {
        await mkdir(targetPath);
      }
      await copyTemplate(path.join(templatePath, file), options);
    }
  });
};

const copySpecs = async (options: CliOptions) => {
  const specFile = path.join(cypressSourcePath(), 'cypress', 'e2e', `app.cy-${options.template}.ts`);
  const targetPath = path.join(process.cwd(), options.projectName, 'cypress', 'e2e');
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
  if (options.react) {
    await execa('npm', ['pkg', 'set', 'scripts.cypress:open=cypress open'], {
      cwd: options.projectPath
    });
  } else {
    await execa('npm', ['pkg', 'set', 'scripts.cypress:open=cypress open --e2e --browser electron'], {
      cwd: options.projectPath
    });
  }
  await execa('npm', ['pkg', 'set', "scripts.cypress:run=cypress run --spec 'cypress/e2e/*.cy.ts'"], {
    cwd: options.projectPath
  });
};

export const createCypressTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Copy template files',
      task: async () => {
        await copyTemplate(cypressSourcePath(), options);
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
