import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createLadleTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Add dependencies',
      task: async () => await addDevDependency('@ladle/react', '^4.1.0', options)
    },
    {
      title: 'Set up npm scripts',
      task: async () => await addPackageScript('ladle', 'ladle serve', options)
    }
  ]);
};
