import { execa } from 'execa';

const getTemplate = (projectName) => {
  const templates = ['lit-ts-tailwind', 'lit-ts', 'react-ts-tailwind', 'react-ts', 'svelte-ts-tailwind', 'svelte-ts', 'vanilla-ts-tailwind', 'vanilla-ts', 'vue-ts-tailwind', 'vue-ts'];
  const matchingTemplate = templates.find((template) => projectName.indexOf(template) !== -1)

  return matchingTemplate ? ['--template', matchingTemplate] : [];
}

const getTestingFramework = (projectName) => {
  const testingFrameworks = ['cypress', 'playwright'];
  const matchingFramework = testingFrameworks.find((framework) => projectName.indexOf(framework) !== -1) ?? 'none';

  return ['--testingFramework', matchingFramework];
}

const getComponentExplorer = (projectName) => {
  const componentExplorers = ['storybook', 'ladle', 'histoire'];
  const matchingComponentExplorer = componentExplorers.find((framework) => projectName.indexOf(framework) !== -1) ?? 'none';

  return ['--componentExplorer', matchingComponentExplorer];
}


const runGenerator = async (args) => {
  const { stdout } = await execa('pnpm', ['start', ...args]);
  console.log(stdout);
};

const createProject = async (projectName) => {
  const playgroundDirectory = 'playground/';

  const template = getTemplate(projectName);
  const testingFramework = getTestingFramework(projectName);
  const componentExplorer = getComponentExplorer(projectName);

  if (template.length === 0) {
    console.log('Please provide a valid template');
    return;
  }

  const args = [`${playgroundDirectory}${projectName}`, ...template, ...testingFramework, ...componentExplorer];
  await runGenerator(args);
}

await createProject('lit-ts-cypress-storybook');
await createProject('lit-ts-playwright');
await createProject('lit-ts-tailwind-cypress-storybook');
await createProject('lit-ts-tailwind-playwright');

await createProject('react-ts-cypress-storybook');
await createProject('react-ts-playwright-ladle');
await createProject('react-ts-tailwind-cypress-storybook');
await createProject('react-ts-tailwind-playwright-ladle');

await createProject('svelte-ts-cypress-storybook');
await createProject('svelte-ts-playwright-histoire');
await createProject('svelte-ts-tailwind-cypress-storybook');
await createProject('svelte-ts-tailwind-playwright-histoire');

await createProject('vanilla-ts-cypress');
await createProject('vanilla-ts-playwright');
await createProject('vanilla-ts-tailwind-cypress');
await createProject('vanilla-ts-tailwind-playwright');

await createProject('vue-ts-cypress-storybook');
await createProject('vue-ts-playwright-histoire');
await createProject('vue-ts-tailwind-cypress-storybook');
await createProject('vue-ts-tailwind-playwright-histoire');
