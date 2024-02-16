import path from 'path';

import { green } from 'colorette';
import inquirer from 'inquirer';

import { argumentQuestions, CliOptions } from './options';
import { createTasks } from './tasks';
import { createProjectPath } from './template';

const run = async () => {
  const answers = await inquirer.prompt(argumentQuestions());
  const options = {
    ...answers,
    templatePath: path.join(__dirname, 'templates', answers.template),
    projectPath: path.join(process.cwd(), answers.projectName),
    lit: answers.template.includes('lit'),
    react: answers.template.includes('react'),
    vue: answers.template.includes('vue'),
    svelte: answers.template.includes('svelte'),
    tailwind: answers.template.includes('tailwind'),
    cypress: answers.testingFramework.includes('cypress'),
    playwright: answers.testingFramework.includes('playwright'),
    storybook: answers.componentExplorer?.includes('storybook'),
    ladle: answers.componentExplorer?.includes('ladle'),
    histoire: answers.componentExplorer?.includes('histoire')
  } as CliOptions;

  if (await createProjectPath(options)) {
    const tasks = createTasks(options);
    await tasks.run();
    console.log(green('Done.'));
  }
};

run();
