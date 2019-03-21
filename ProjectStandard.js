const { exec } = require('child_process');
const fs = require('fs');
const project = require('./bin/CLI');
const data = require('./data/StandardPackageData');

const folderName = project.projectName;
const path = `./${folderName}`;

const files = {
  'index.js': '',
  'README.md': '',
  'eslintrc.json': data.esLint,
  'package.json': data.packageJ,
  '.gitignore': data.git
};

exec(`mkdir ${path}`, () => {
  Object.keys(files).forEach(key => {
    fs.writeFile(`${path}/${key}`, `${files[key]}`, () => {
      exec(`cd ${path}/ && npm install`, () => {
        console.log('installing...npm packages');
      });
    });
    exec(`mkdir ${path}/spec`, () => {
      exec(`cd ${path}/spec && touch index.spec.js `);
    });
  });
  exec(`cd ${path}/ && git init`, () => {
    console.log('git initialising...');
    if (project.gitHubRemote) {
      exec(
        `cd ${path}/ && git remote add origin ${project.gitHubRemote}`,
        () => {
          exec(`cd ${path}/ && git add .`, () => {
            exec(`cd ${path}/ && git commit -m "first commit"`, () => {
              exec(`cd ${path}/ && git push -u origin master`);
            });
          });
        }
      );
    }
  });
});
