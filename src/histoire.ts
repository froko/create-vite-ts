import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  // Todo: Remove if Histoire supports vite4
  await install({ '@vitejs/plugin-vue': '^3.2.0', vite: '^3.2.4' }, { cwd: options.projectPath, dev: true });

  await install({ histoire: undefined }, { cwd: options.projectPath, dev: true });

  if (options.vue) {
    await install({ '@histoire/plugin-vue': undefined }, { cwd: options.projectPath, dev: true });
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
