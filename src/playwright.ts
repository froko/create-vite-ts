import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.playwright=playwright test'], {
    cwd: options.projectPath
  });
  if (options.react) {
    await execa('npm', ['pkg', 'set', 'scripts.playwright:ct=playwright test -c playwright-ct.config.ts'], {
      cwd: options.projectPath
    });
  }
  await execa('npm', ['pkg', 'set', 'scripts.playwright:report=playwright show-report'], {
    cwd: options.projectPath
  });
};

export const createPlaywrightTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Install dependencies',
      task: () => {
        install({ '@playwright/test': undefined }, { cwd: options.projectPath });
        if (options.react) {
          install({ '@playwright/experimental-ct-react': undefined }, { cwd: options.projectPath });
        }
      }
    },
    {
      title: 'Set up npm scripts',
      task: () => setupNpmScripts(options)
    }
  ]);
};
