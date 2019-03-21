#!/usr/bin/env node

console.log('Please answers questions below to create new project');
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
  module.exports = {
    projectName,
    gitHubRemote,
    gitURL,
    gitHomepage,
    projectDesc
  };
});
