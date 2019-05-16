#!/usr/bin/env node

console.log('Create new project');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Project Name:'
  },
  {
    type: 'input',
    name: 'projectDesciption',
    message: 'Project Desciption:'
  },
  {
    type: 'list',
    name: 'projectType',
    message: 'What project type:',
    choices: ['Standard', 'Backend']
  },
  {
    type: 'input',
    name: 'gitHubRemote',
    message: 'GitHub Remote:'
  }
];

inquirer.prompt(questions).then(answers => {
  const projectName = answers.projectName;
  const projectDesc = answers.projectDesciption;
  const gitHubRemote = answers.gitHubRemote;
  const gitURL = gitHubRemote.replace(/\.git/g, '/issues');
  const gitHomepage = gitHubRemote.replace(/\.git/g, '#readme');
  console.log(projectName, gitHubRemote, gitURL);
  console.log(answers.projectType);

  module.exports = {
    projectName,
    gitHubRemote,
    gitURL,
    gitHomepage,
    projectDesc
  };

  if (answers.projectType === 'Standard') {
    const standardProject = require('../ProjectStandard');
  }
  if (answers.projectType === 'Backend') {
    const backEndProject = require('../BackEnd');
  }
});
