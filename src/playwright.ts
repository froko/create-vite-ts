import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const installDependencies = async (options: CliOptions) => {
  await install({ '@playwright/test': undefined }, { cwd: options.projectPath, dev: true });
  if (options.react) {
    await install({ '@playwright/experimental-ct-react': undefined }, { cwd: options.projectPath, dev: true });
  }
  if (options.vue) {
    await install({ '@playwright/experimental-ct-vue': undefined }, { cwd: options.projectPath, dev: true });
  }
  if (options.svelte) {
    await install({ '@playwright/experimental-ct-svelte': undefined }, { cwd: options.projectPath, dev: true });
  }
};

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.playwright=playwright test'], {
    cwd: options.projectPath
  });
  if (options.react || options.vue || options.svelte) {
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
      task: () => installDependencies(options)
    },
    {
      title: 'Set up npm scripts',
      task: () => setupNpmScripts(options)
    }
  ]);
};
