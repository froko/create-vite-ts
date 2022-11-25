import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  await install(
    {
      '@babel/core': undefined,
      '@storybook/addon-essentials': undefined,
      '@storybook/builder-vite': undefined,
      'babel-loader': undefined
    },
    { cwd: options.projectPath, dev: true }
  );

  if (options.lit) {
    await install(
      {
        '@storybook/web-components': undefined,
        react: '^17.0.2',
        'react-dom': '^17.0.2'
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  // todo: add other frameworks, such as vue.js
  if (options.react) {
    await install(
      {
        '@storybook/addon-a11y': undefined,
        '@storybook/addon-interactions': undefined,
        '@storybook/jest': undefined,
        '@storybook/testing-library': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.react) {
    await install(
      {
        '@storybook/react': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.storybook=start-storybook -p 6006'], {
    cwd: options.projectPath
  });
};

export const createStorybookTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Install dependencies',
      task: () => installDependencies(options)
    },
    {
      title: 'Set up npm scripts',
      task: () => setupNpmScripts(options)
    }
  ]);
};
