export interface CliOptions {
  projectName: string;
  template: string;
  testingFramework: string;
  templatePath: string;
  projectPath: string;
  lit: boolean;
  react: boolean;
  tailwind: boolean;
  cypress: boolean;
  playwright: boolean;
  storybook: boolean;
}

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

const testingFrameworks: Template[] = [
  { value: 'none', name: 'None' },
  { value: 'cypress', name: 'Cypress.io' },
  { value: 'playwright', name: 'Playwright' }
];

export const argumentQuestions = () => {
  return [
    {
      name: 'projectName',
      type: 'input',
      message: 'Project name:',
      validate: (input: string) => {
        if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
        else return 'Project name may only include letters, numbers, underscores and hashes.';
      }
    },
    {
      name: 'template',
      type: 'list',
      message: 'Chose template:',
      choices: templates
    },
    {
      name: 'testingFramework',
      type: 'list',
      message: 'Chose testing framework:',
      choices: testingFrameworks
    },
    {
      name: 'storybook',
      type: 'confirm',
      message: 'Include Storybook',
      when: (answers: CliOptions) => {
        return answers.template.includes('lit') || answers.template.includes('react');
      },
      default: false
    }
  ];
};
