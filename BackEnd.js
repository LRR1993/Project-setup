const { exec } = require('child_process');
const fs = require('fs');
const project = require('./bin/CLI');
const data = require('./data/backEndData');

const folderName = project.projectName;
const path = `./${folderName}`;

const files = {
  'README.md': '',
  'config.js': data.configDb,
  'seed.sql': data.seed,
  'dBIndex.js': data.dBIndex,
  'package.json': data.packageJ,
  'app.js': data.app,
  'listen.js': data.listen,
  '.gitignore': data.git,
  'api.spec.js': data.spec,
  'apiRouter.js': data.apiRouter,
  'modelIndex.js': data.modelIndex
};
