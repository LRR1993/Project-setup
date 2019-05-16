const { exec } = require('child_process');
const fs = require('fs');
const { projectName, gitHubRemote } = require('./bin/CLI');
const data = require('./data/StandardPackageData');

const path = `./${projectName}`;
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
      console.log('installing...npm packages');
      exec(`cd ${path}/ && npm install`, () => {});
    });
    exec(`mkdir ${path}/spec`, () => {
      exec(`cd ${path}/spec && touch index.spec.js `);
    });
  });
  console.log('git initialising...');
  exec(`cd ${path}/ && git init`, () => {
    console.log(gitHubRemote);
    if (gitHubRemote) {
      exec(`cd ${path}/ && git remote add origin ${gitHubRemote}`, () => {
        console.log('git remote added...');
        exec(`cd ${path}/ && git add .`, () => {
          exec(`cd ${path}/ && git commit -m "first commit"`, () => {
            exec(`cd ${path}/ && git push -u origin master`);
          });
        });
      });
    } else {
      console.log('Remember update gitHub/gitLab later...');
    }
  });
});
