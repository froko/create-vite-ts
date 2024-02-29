import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createPlaywrightTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Add dependencies',
      task: async () => {
        const version = '^1.41.1';

        await addDevDependency('@playwright/test', version, options);
        if (options.react) {
          await addDevDependency('@playwright/experimental-ct-react', version, options);
        }
        if (options.vue) {
          await addDevDependency('@playwright/experimental-ct-vue', version, options);
        }
        if (options.svelte) {
          await addDevDependency('@playwright/experimental-ct-svelte', version, options);
        }
      }
    },
    {
      title: 'Set up npm scripts',
      task: async () => {
        await addPackageScript('playwright', 'playwright test', options);
        if (options.react || options.vue || options.svelte) {
          await addPackageScript('playwright:ct', 'playwright test -c playwright-ct.config.ts', options);
        }
        await addPackageScript('playwright:report', 'playwright show-report', options);
      }
    }
  ]);
};
