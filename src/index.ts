import path from 'path';

import { green } from 'colorette';
import inquirer from 'inquirer';
import yargs from 'yargs/yargs';

import { argumentOptions, argumentQuestions, CliOptions, getTemplate } from './options';
import { createTasks } from './tasks';
import { createProjectPath } from './template';

const run = async () => {
  const args = await yargs(process.argv.slice(2))
    .positional('projectName', {
      describe: 'The project name',
      type: 'string'
    })
    .options(argumentOptions)
    .help()
    .parse();

  const argsWithProjectName = { ...args, projectName: args._[0] };
  const answers = await inquirer.prompt(argumentQuestions(argsWithProjectName));
  const template = getTemplate(answers);
  const options = {
    ...argsWithProjectName,
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
