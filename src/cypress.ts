import { execa } from 'execa';
import Listr from 'listr';
import { install } from 'pkg-install';

import { CliOptions } from './options';

const setupNpmScripts = async (options: CliOptions) => {
  await execa('npm', ['pkg', 'set', 'scripts.cypress=run-p start cypress:open'], {
    cwd: options.projectPath
  });
  await execa('npm', ['pkg', 'set', 'scripts.cypress:ci=npm run build && run-p -rs preview cypress:run'], {
    cwd: options.projectPath
  });
  if (options.react || options.vue || options.svelte) {
    await execa('npm', ['pkg', 'set', 'scripts.cypress:open=cypress open'], {
      cwd: options.projectPath
    });
  } else {
    await execa('npm', ['pkg', 'set', 'scripts.cypress:open=cypress open --e2e --browser electron'], {
      cwd: options.projectPath
    });
  }
  await execa('npm', ['pkg', 'set', "scripts.cypress:run=cypress run --spec 'cypress/e2e/*.cy.ts'"], {
    cwd: options.projectPath
  });
};

export const createCypressTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Install dependencies',
      task: () => install({ cypress: undefined, 'npm-run-all': undefined }, { cwd: options.projectPath, dev: true })
    },
    {
      title: 'Set up npm scripts',
      task: () => setupNpmScripts(options)
    }
  ]);
};
