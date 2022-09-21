/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CliOptions {
  projectName: string;
  projectPath: string;
  template: string;
  templatePath: string;
  lit: boolean;
  react: boolean;
  tailwind: boolean;
  cypress: boolean;
  storybook: boolean;
}

export const argumentOptions: any = {
  lit: { type: 'boolean', alias: 'l', description: 'Add Lit dependency' },
  react: { type: 'boolean', alias: 'r', description: 'Add React dependency' },
  tailwind: { type: 'boolean', alias: 't', description: 'Add TailwindCSS dependency' },
  cypress: { type: 'boolean', alias: 'c', description: 'Add Cypress.io dependency' },
  storybook: { type: 'boolean', alias: 's', description: 'Add Storybook dependency' }
};

interface Template {
  value: string;
  name: string;
}

const templates: Template[] = [
  { value: 'vanilla-ts', name: 'Vanilla TypeScript' },
  { value: 'vanilla-ts-tailwind', name: 'Vanilla TypeScript with TailwindCSS' },
  { value: 'lit-ts', name: 'Lit' },
  { value: 'lit-ts-tailwind', name: 'Lit with TailwindCSS' },
  { value: 'react-ts', name: 'React' },
  { value: 'react-ts-tailwind', name: 'React with TailwindCSS' }
];

export const argumentQuestions = (options: any) => {
  const typedOptions = options as Partial<CliOptions>;
  typedOptions.template = getTemplate(options);

  return [
    {
      name: 'projectName',
      type: 'input',
      message: 'Project name:',
      when: () => !typedOptions.projectName,
      validate: (input: string) => {
        if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
        else return 'Project name may only include letters, numbers, underscores and hashes.';
      }
    },
    {
      name: 'template',
      type: 'list',
      message: 'Chose template:',
      choices: templates,
      when: () => !typedOptions.lit && !typedOptions.tailwind && !typedOptions.react
    },
    {
      name: 'cypress',
      type: 'confirm',
      message: 'Include Cypress.io?',
      when: () => !typedOptions.cypress,
      default: false
    },
    {
      name: 'storybook',
      type: 'confirm',
      message: 'Include Storybook',
      when: (answers: CliOptions) => {
        return (
          (answers.template.includes('lit') ||
            typedOptions.lit ||
            answers.template.includes('react') ||
            typedOptions.react) &&
          !typedOptions.storybook
        );
      },
      default: false
    }
  ];
};

export const getTemplate = (options: CliOptions): string => {
  if (options.template) {
    return options.template;
  }

  const mainVariant = options.lit ? 'lit-ts' : options.react ? 'react-ts' : 'vanilla-ts';
  return options.tailwind ? `${mainVariant}-tailwind` : mainVariant;
};
