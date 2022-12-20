import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  await install(
    {
      storybook: 'next',
      '@storybook/addon-essentials': 'next'
    },
    { cwd: options.projectPath, dev: true }
  );

  if (options.lit) {
    await install(
      {
        '@storybook/web-components': 'next',
        '@storybook/web-components-vite': 'next'
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.react) {
    await install(
      {
        '@storybook/react': 'next',
        '@storybook/react-vite': 'next'
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.vue) {
    await install(
      {
        '@storybook/vue3': 'next',
        '@storybook/vue3-vite': 'next'
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.svelte) {
    await install(
      {
        '@storybook/svelte': 'next',
        '@storybook/svelte-vite': 'next'
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.react || options.vue || options.svelte) {
    await install(
      {
        '@storybook/addon-a11y': 'next',
        '@storybook/addon-interactions': 'next',
        '@storybook/jest': 'next',
        '@storybook/testing-library': 'next'
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.lit || options.vue || options.svelte) {
    await install(
      {
        react: undefined,
        'react-dom': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.storybook=storybook dev -p 6006'], {
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
