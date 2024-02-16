import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createHistoireTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Add dependencies',
      task: async () => {
        const version = '^0.17.8';

        await addDevDependency('histoire', version, options);
        if (options.vue) {
          await addDevDependency('@histoire/plugin-vue', version, options);
        }
        if (options.svelte) {
          await addDevDependency('@histoire/plugin-svelte', version, options);
        }
      }
    },
    {
      title: 'Set up npm scripts',
      task: async () => {
        await addPackageScript('histoire', 'histoire dev', options);
      }
    }
  ]);
};
