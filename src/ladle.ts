import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  await install({ '@ladle/react': undefined }, { cwd: options.projectPath, dev: true });
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.ladle=ladle serve'], {
    cwd: options.projectPath
  });
};

export const createLadleTasks = (options: CliOptions): Listr => {
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
