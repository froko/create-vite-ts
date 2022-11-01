# @froko/create-vite-ts

A CLI to bootstrap new vite-based TypeScript projects. Rely on hand-crafted installation and configuration of the following products:

- vite.js
- TypeScript
- EsLint
- Prettier
- Husky
- Visual Studio Code Extension recommendations
- Visual Studio Code settings (format & lint your code on save)
- TailwindCSS (optional)
- Lit (optional)
- React (optional)
- Cypress.io (optional)
- Playwright (optional)
- Storybook (optional)

## Quick start

`npm init @froko/vite-ts@latest`

It will ask the following questions:

- Project name
- Template type
- Testing framework
- Include Storybook?

The CLI will create a new directory named by the project name.
The git repo is already initialized due to the installation of Husky. It's recommended to create an initial git commit before playing around with the new project.

## Available template types

- Vanilla Typescript
- Vanilla TypeScript with TailwindCSS
- Lit
- Lit with TailwindCSS
- React
- React with TailwindCSS

## Available testing frameworks

- Cypress.io
- Playwright
- None (if you don't want to benefit from e2e and component testing)

## npm scripts

### Available in all templates:

- `npm start`: Starts the application at http://localhost:3000
- `npm run build`: Builds the application into the `dist` folder
- `npm run preview`: Serves the built application at http://localhost:3000

### Only available with Cypress.io option:

- `npm run cypress`: Starts the application & runs Cypress.io in visual mode
- `npm run cypress:ci`: Builds and serves the application & runs Cypress.io in headless mode

### Only available with Playwright option:

- `npm run playwright`: Runs your playwright e2e tests in different headless browsers
- `npm run playwright:report`: Shows the Playwright HTML report of the last test run

### Only available with Storybook option:

- `npm run storybook`: Starts storybook at http://localhost:6006

## Sample application

All templates provide a simple rating app. While building this product, I wanted to have something more than just a Click-Counter-Button to showcase the capabilities of web components together with Cypress.io and Storybook.

The rating app looks like this:
![Rating App](assets/rating-app.png)

Feel free to delete all the sample application related code in the `src` folder and start over with your own project!

## What's next?

- Include svelte templates
- Include solidjs templates
- ...
