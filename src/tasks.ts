import { execa } from 'execa';
import Listr from 'listr';
import { projectInstall } from 'pkg-install';

import { CliOptions } from './options';
import { copyTemplate } from './template';

const initGit = async (options: CliOptions) => {
  const result = await execa('git', ['init'], {
    cwd: options.projectPath
  });
  if (result.failed) {
    return Promise.reject(new Error('Failed to initialize git'));
  }
  return;
};

const initHusky = async (options: CliOptions) => {
  await execa('npx', ['husky', 'install'], {
    cwd: options.projectPath
  });
  await execa('npm', ['pkg', 'set', 'scripts.prepare=husky install'], {
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
      title: 'Initialize husky',
      task: () => initHusky(options)
    }
  ]);
};
