import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createCypressTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Add dependencies',
      task: async () => {
        await addDevDependency('cypress', '^13.15.0', options);
        await addDevDependency('start-server-and-test', '^2.0.8', options);
      }
    },
    {
      title: 'Set up npm scripts',
      task: async () => {
        await addPackageScript('cypress', 'start-server-and-test dev http://localhost:3000 cypress:open', options);
        await addPackageScript(
          'cypress:ci',
          'start-server-and-test preview http://localhost:3000 cypress:run',
          options
        );
        await addPackageScript('cypress:open', 'cypress open --e2e --browser electron', options);
        await addPackageScript('cypress:run', "cypress run --spec 'cypress/e2e/*.cy.ts'", options);
      }
    }
  ]);
};
