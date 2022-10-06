import path from 'path';

import { green } from 'colorette';
import inquirer from 'inquirer';

import { argumentQuestions, CliOptions, getTemplate } from './options';
import { createTasks } from './tasks';
import { createProjectPath } from './template';

const run = async () => {
  const answers = await inquirer.prompt(argumentQuestions());
  const template = getTemplate(answers);
  const options = {
    ...answers,
    template,
    templatePath: path.join(__dirname, 'templates', template),
    projectPath: path.join(process.cwd(), answers.projectName),
    lit: template.includes('lit'),
    react: template.includes('react'),
    tailwind: template.includes('tailwind')
  } as CliOptions;

  if (await createProjectPath(options)) {
    const tasks = createTasks(options);
    await tasks.run();
    console.log(green('Done.'));
  }
};

run();
