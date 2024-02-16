import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  await install(
    {
      storybook: undefined,
      '@storybook/addon-essentials': undefined
    },
    { cwd: options.projectPath, dev: true }
  );

  if (options.lit) {
    await install(
      {
        '@storybook/web-components': undefined,
        '@storybook/web-components-vite': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.react) {
    await install(
      {
        '@storybook/react': undefined,
        '@storybook/react-vite': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.vue) {
    await install(
      {
        '@storybook/vue3': undefined,
        '@storybook/vue3-vite': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.svelte) {
    await install(
      {
        '@storybook/svelte': undefined,
        '@storybook/svelte-vite': undefined
      },
      { cwd: options.projectPath, dev: true }
    );
  }

  if (options.react || options.vue || options.svelte) {
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
