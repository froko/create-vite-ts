import inquirer from 'inquirer';
import yargs from 'yargs/yargs';

import { argumentOptions, argumentQuestions, CliOptions } from './options';

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
  console.log(argsWithProjectName);
  const answers = await inquirer.prompt(argumentQuestions(argsWithProjectName));
  const options = { ...argsWithProjectName, ...answers } as CliOptions;

  console.log('You have chosen the following options:', options);
};

run();
