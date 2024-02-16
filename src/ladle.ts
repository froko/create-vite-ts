import Listr from 'listr';

import { CliOptions } from './options';
import { addDevDependency, addPackageScript } from './utils';

export const createLadleTasks = (options: CliOptions): Listr => {
  return new Listr([
    {
      title: 'Add dependencies',
      task: () => addDevDependency('@ladle/react', '^4.0.2', options)
    },
    {
      title: 'Set up npm scripts',
      task: () => addPackageScript('ladle', 'ladle serve', options)
    }
  ]);
};
