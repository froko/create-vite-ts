import { green } from 'colorette';
import inquirer from 'inquirer';
import path from 'path';
import { parse } from 'ts-command-line-args';

import { argumentConfig, ArgumentOptions, argumentQuestions, CliOptions } from './options';
import { createTasks } from './tasks';
import { createProjectPath } from './template';

const run = async () => {
  const args = parse<ArgumentOptions>(argumentConfig, { helpArg: 'help' });
  const answers = await inquirer.prompt(argumentQuestions(args));
  const template = answers.template ?? args.template;
  const projectName = answers.projectName ?? args.projectName;
  const testingFramework = answers.testingFramework ?? args.testingFramework;
  const componentExplorer = answers.componentExplorer ?? args.componentExplorer;
  const options = {
    ...args,
    ...answers,
    templatePath: path.join(__dirname, 'templates', template),
    projectPath: path.join(process.cwd(), projectName),
    lit: template.includes('lit'),
    react: template.includes('react'),
    vue: template.includes('vue'),
    svelte: template.includes('svelte'),
    cypress: testingFramework.includes('cypress'),
    playwright: testingFramework.includes('playwright'),
    storybook: componentExplorer.includes('storybook'),
    ladle: componentExplorer.includes('ladle'),
    histoire: componentExplorer.includes('histoire')
  } as CliOptions;

  if (await createProjectPath(options)) {
    const tasks = createTasks(options);
    await tasks.run();
    console.log(green('Done.'));
  }
};

run();
