import Listr from 'listr';
import { projectInstall } from 'pkg-install';

import { createCypressTasks } from './cypress';
import { createHistoireTasks } from './histoire';
import { createLadleTasks } from './ladle';
import { CliOptions } from './options';
import { createPlaywrightTasks } from './playwright';
import { createStorybookTasks } from './storybook';
import { copyTemplate } from './template';

export const createTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Copy template files',
      task: () => copyTemplate(options.templatePath, options)
    },
    {
      title: 'Install dependencies',
      task: () =>
        projectInstall({
          cwd: options.projectPath
        })
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
