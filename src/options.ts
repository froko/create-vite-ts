/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CliOptions {
  projectName: string;
  projectPath: string;
  lit: boolean;
  tailwind: boolean;
  template: string;
  templatePath: string;
}

export const argumentOptions: any = {
  lit: { type: 'boolean', alias: 'l', description: 'Add Lit dependency' },
  tailwind: { type: 'boolean', alias: 't', description: 'Add TailwindCSS dependency' }
};

interface Template {
  value: string;
  name: string;
}

const templates: Template[] = [
  { value: 'vanilla-ts', name: 'Vanilla TypeScript' },
  { value: 'vanilla-ts-tailwind', name: 'Vanilla TypeScript with TailwindCSS' },
  { value: 'lit-ts', name: 'Lit' },
  { value: 'lit-ts-tailwind', name: 'Lit with TailwindCSS' }
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
      when: () => !typedOptions.lit && !typedOptions.tailwind
    }
  ];
};

export const getTemplate = (options: CliOptions): string => {
  if (options.template) {
    return options.template;
  }

  const mainVariant = options.lit ? 'lit-ts' : 'vanilla-ts';
  return options.tailwind ? `${mainVariant}-tailwind` : mainVariant;
};
