import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createStorybookTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Install dependencies',
      task: async () => {
        const version = '^8.3.5';

        await addDevDependency('storybook', version, options);
        await addDevDependency('@storybook/addon-essentials', version, options);

        if (options.lit) {
          await addDevDependency('@storybook/web-components', version, options);
          await addDevDependency('@storybook/web-components-vite', version, options);
        }
        if (options.react) {
          await addDevDependency('@storybook/react', version, options);
          await addDevDependency('@storybook/react-vite', version, options);
          await addDevDependency('jest-mock', '^29.7.0', options);
        }
        if (options.vue) {
          await addDevDependency('@storybook/vue3', version, options);
          await addDevDependency('@storybook/vue3-vite', version, options);
        }
        if (options.svelte) {
          await addDevDependency('@storybook/svelte', version, options);
          await addDevDependency('@storybook/svelte-vite', version, options);
        }
        if (options.react || options.vue || options.svelte) {
          await addDevDependency('@storybook/addon-a11y', version, options);
          await addDevDependency('@storybook/addon-interactions', version, options);
          await addDevDependency('@storybook/test', version, options);
        }
      }
    },
    {
      title: 'Set up npm scripts',
      task: async () => await addPackageScript('storybook', 'storybook dev -p 6006', options)
    }
  ]);
};
