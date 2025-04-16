#!/usr/bin/env node

import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {spawn} from 'node:child_process';

const excludedDirectories = ['node_modules', 'dist']

async function copyTemplateFilesAndFolders(source, destination, projectName) {
  const filesAndFolders = await fs.readdir(source);

  for (const entry of filesAndFolders) {
    const currentSource = path.join(source, entry);
    const currentDestination = path.join(destination, entry);
    const stat = await fs.lstat(currentSource);
    const basename = path.basename(currentDestination)

    if (stat.isDirectory()) {
      if (excludedDirectories.includes(basename)) {
        continue;
      }

      await fs.mkdir(currentDestination);
      await copyTemplateFilesAndFolders(currentSource, currentDestination);
    } else {
      if (basename === 'package.json') {
        const currentPackageJson = await fs.readFile(currentSource, 'utf8');
        const newFileContent = currentPackageJson.replace(/project-name/g, projectName);

        await fs.writeFile(currentDestination, newFileContent, 'utf8');
      } else {
        await fs.copyFile(currentSource, currentDestination);
      }
    }
  }
}


const projectName = path.basename(process.cwd());
const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "template");

try {
  console.log('Copying files...');
  await copyTemplateFilesAndFolders(source, process.cwd(), projectName);
  console.log('Files copied...');

  const npmInstall = spawn('npm', ['install'], {stdio: 'inherit'});

  npmInstall.once("exit", () => {
    console.log('-------------------------------');
    console.log(' To start server run command:');
    console.log('   npm run dev');
    console.log('-------------------------------');
  })

} catch (error) {
  console.log(error);
}
