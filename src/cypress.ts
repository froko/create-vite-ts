import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createCypressTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Add dependencies',
      task: async () => {
        await addDevDependency('cypress', '^13.6.3', options);
        await addDevDependency('npm-run-all', '^4.1.5', options);
      }
    },
    {
      title: 'Set up npm scripts',
      task: async () => {
        await addPackageScript('cypress', 'run-p start cypress:open', options);
        await addPackageScript('cypress:ci', 'npm run build && run-p -rs preview cypress:run', options);
        await addPackageScript('cypress:open', 'cypress open --e2e --browser electron', options);
        await addPackageScript('cypress:run', "cypress run --spec 'cypress/e2e/*.cy.ts'", options);
      }
    }
  ]);
};
