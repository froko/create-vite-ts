import { existsSync } from 'fs';
import { mkdir, readdir, readFile, writeFile, stat } from 'fs/promises';
import path from 'path';

import { red } from 'colorette';
import ejs from 'ejs';

import { CliOptions } from './options';

export const createProjectPath = async (options: CliOptions): Promise<boolean> => {
  const { projectName } = options;
  if (existsSync(projectName)) {
    console.log(red(`Folder ${projectName} already exists. Delete or use another name.`));
    return false;
  }

  await mkdir(projectName);
  return true;
};

export const copyTemplate = async (templatePath: string, options: CliOptions, subDirectory = ''): Promise<void> => {
  const ignoreFiles: string[] = [];

  if (!options.cypress) {
    ignoreFiles.push('cypress', 'cy.ts');
  }

  if (!options.storybook) {
    ignoreFiles.push('.storybook', 'stories.ts', '.npmrc');
  }

  const currentPath = process.cwd();
  const files = await readdir(templatePath);
  files.forEach(async (file) => {
    if (ignoreFiles.filter((pattern) => file.includes(pattern)).length > 0) return;

    const sourcePath = path.join(templatePath, file);
    const targetPath = path.join(
      currentPath,
      options.projectName,
      subDirectory,
      file === '_gitignore' ? '.gitignore' : file
    );
    const stats = await stat(sourcePath);

    if (stats.isFile()) {
      const contents = await readFile(sourcePath, 'utf8');
      await writeFile(targetPath, ejs.render(contents, options), 'utf8');
    } else if (stats.isDirectory()) {
      await mkdir(targetPath);
      await copyTemplate(path.join(templatePath, file), options, file);
    }
  });
};
