import { existsSync } from 'fs';
import { mkdir, readdir, readFile, writeFile, stat } from 'fs/promises';
import path from 'path';

import ejs from 'ejs';
import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const storybookSourcePath = () => path.join(__dirname, 'templates', 'storybook');

const copyTemplate = async (options: CliOptions, subDirectory = '') => {
  const templatePath = path.join(storybookSourcePath(), subDirectory);
  const currentPath = process.cwd();
  const files = await readdir(templatePath);
  const ignoreFiles = options.tailwind ? [] : ['preview-body.html'];
  files.forEach(async (file) => {
    if (ignoreFiles.indexOf(file) >= 0) return;

    const sourcePath = path.join(templatePath, file);
    const targetPath = path.join(currentPath, options.projectName, subDirectory, file);
    const stats = await stat(sourcePath);

    if (stats.isFile()) {
      const contents = await readFile(sourcePath, 'utf8');
      await writeFile(targetPath, ejs.render(contents, options), 'utf8');
    } else if (stats.isDirectory()) {
      if (!existsSync(targetPath)) {
        await mkdir(targetPath);
      }
      await copyTemplate(options, file);
    }
  });
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.storybook=start-storybook -p 6006'], {
    cwd: options.projectPath
  });
};

export const createStorybookTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Copy template files',
      task: () => copyTemplate(options)
    },
    {
      title: 'Install dependencies',
      task: () =>
        install(
          {
            '@babel/core': undefined,
            '@storybook/addon-essentials': undefined,
            '@storybook/builder-vite': undefined,
            '@storybook/web-components': undefined,
            'babel-loader': undefined,
            react: '^17.0.2',
            'react-dom': '^17.0.2'
          },
          { cwd: options.projectPath, dev: true }
        )
    },
    {
      title: 'Set up npm scripts',
      task: () => setupNpmScripts(options)
    }
  ]);
};
