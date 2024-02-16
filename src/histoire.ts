import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  await install({ histoire: undefined }, { cwd: options.projectPath, dev: true });

  if (options.vue) {
    await install({ '@histoire/plugin-vue': undefined }, { cwd: options.projectPath, dev: true });
  }

  if (options.svelte) {
    await install({ '@histoire/plugin-svelte': undefined }, { cwd: options.projectPath, dev: true });
  }
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.histoire=histoire dev'], {
    cwd: options.projectPath
  });
};

export const createHistoireTasks = (options: CliOptions): Listr => {
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
