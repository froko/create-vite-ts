export interface CliOptions {
  projectName: string;
  template: string;
  testingFramework: string;
  componentExplorer: string;
  templatePath: string;
  projectPath: string;
  lit: boolean;
  react: boolean;
  vue: boolean;
  svelte: boolean;
  tailwind: boolean;
  cypress: boolean;
  playwright: boolean;
  storybook: boolean;
  ladle: boolean;
  histoire: boolean;
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
  { value: 'react-ts-tailwind', name: 'React with TailwindCSS' },
  { value: 'vue-ts', name: 'Vue.js' },
  { value: 'vue-ts-tailwind', name: 'Vue.js with TailwindCSS' },
  { value: 'svelte-ts', name: 'Svelte' },
  { value: 'svelte-ts-tailwind', name: 'Svelte with TailwindCSS' }
];

const testingFrameworks: Template[] = [
  { value: 'none', name: 'None' },
  { value: 'cypress', name: 'Cypress.io' },
  { value: 'playwright', name: 'Playwright' }
];

const componentExplorers: Template[] = [
  { value: 'none', name: 'None' },
  { value: 'storybook', name: 'Storybook' }
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
      name: 'componentExplorer',
      type: 'list',
      message: 'Chose component explorer:',
      when: (answers: CliOptions) => !answers.template.includes('vanilla-ts'),
      choices: (answers: CliOptions) => {
        const choices = componentExplorers;
        if (answers.template.includes('react')) {
          choices.push({ value: 'ladle', name: 'Ladle' });
        }

        if (answers.template.includes('vue') || answers.template.includes('svelte')) {
          choices.push({ value: 'histoire', name: 'Histoire' });
        }

        return choices;
      }
    }
  ];
};
