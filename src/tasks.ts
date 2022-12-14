import { execa } from 'execa';
import Listr from 'listr';
import { projectInstall } from 'pkg-install';

import { createCypressTasks } from './cypress';
import { createHistoireTasks } from './histoire';
import { createLadleTasks } from './ladle';
import { CliOptions } from './options';
import { createPlaywrightTasks } from './playwright';
import { createStorybookTasks } from './storybook';
import { copyTemplate } from './template';

const initGit = async (options: CliOptions) => {
  await execa('git', ['init'], {
    cwd: options.projectPath
  });
};

const installHusky = async (options: CliOptions) => {
  await execa('npx', ['husky', 'install'], {
    cwd: options.projectPath
  });
  await execa('npm', ['pkg', 'set', 'scripts.prepare=npx --yes husky install'], {
    cwd: options.projectPath
  });
  await execa('npx', ['husky', 'add', '.husky/pre-commit', 'npx lint-staged'], {
    cwd: options.projectPath
  });
};

export const createTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Copy template files',
      task: () => copyTemplate(options.templatePath, options)
    },
    {
      title: 'Initialize git',
      task: () => initGit(options)
    },
    {
      title: 'Install dependencies',
      task: () =>
        projectInstall({
          cwd: options.projectPath
        })
    },
    {
      title: 'Install Husky',
      task: () => installHusky(options)
    },
    {
      title: 'Install Cypress.io',
      task: () => createCypressTasks(options),
      enabled: () => options.cypress
    },
    {
      title: 'Install Playwright',
      task: () => createPlaywrightTasks(options),
      enabled: () => options.playwright
    },
    {
      title: 'Install Storybook',
      task: () => createStorybookTasks(options),
      enabled: () => options.storybook
    },
    {
      title: 'Install Ladle',
      task: () => createLadleTasks(options),
      enabled: () => options.ladle
    },
    {
      title: 'Install Histoire',
      task: () => createHistoireTasks(options),
      enabled: () => options.histoire
    }
  ]);
};
