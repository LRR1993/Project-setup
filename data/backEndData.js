const project = require('../bin/CLI');

const packageJ = JSON.stringify(
  {
    name: project.projectName,
    version: '1.0.0',
    description: project.projectDesc,
    main: 'app.js',
    scripts: {
      test: 'psql -f db/seed.sql && mocha spec',
      dev: 'nodemon listen.js'
    },
    repository: {
      type: 'git',
      url: 'git+' + project.gitHubRemote
    },
    keywords: [],
    author: '',
    license: 'ISC',
    bugs: {
      url: project.gitURL
    },
    homepage: project.gitHomepage,
    devDependencies: {
      chai: '^4.2.0',
      mocha: '^6.0.2',
      nodemon: '^1.18.10',
      supertest: '^4.0.2'
    },
    dependencies: {
      'body-parser': '^1.18.3',
      express: '^4.16.4',
      pg: '^7.9.0'
    }
  },
  null,
  2
);

const seed = `DROP DATABASE IF EXISTS ${
  project.projectName
};\nCREATE DATABASE ${project.projectName};\n\\c ${project.projectName};`;

const git = `node_modules\n.DS_Store\n.log\n.vscode\nbundle.js\nbundle.js.map\n./db/config.js`;

const app =
  "const app = require('express')()\nconst bodyParser = require('body-parser')\nconst { apiRouter } = require('./routers/apiRouter')\napp.use(bodyParser.json())\napp.use('/api', apiRouter)\nmodule.exports = app";

const listen =
  "const app = require('./ app')\napp.listen(9090, err => {if (err) console.log(err)\nelse console.log('server listening on port 9090...')})";

const spec =
  "const { expect } = require('chai')\nconst request = require('supertest')\nconst app = require('../app')\nconst db = require('../db/index')\n\ndescribe('/api', () => {\nafter(() => {\ndb.end()\n})\n})";

const apiRouter =
  "const apiRouter = require('express').Router()\n\napiRouter.use();\n\nmodule.exports = {apiRouter}";

const modelIndex = "const db = require('../db /index')";

const configDb = `const dbConfig = {
  database: '${project.projectName}',
  host: 'localhost',
  port: 5432
}\n
module.exports = dbConfig;`;

const dBIndex =
  "const { Client } = require('pg')\nconst dbConfig = require('./config')\n\nconst client = new Client(dbConfig)\n\nclient\n.connect()\n.then(() =>\nconsole.log(`connected to ${dbConfig.database} on PORT ${dbConfig.port}`)\n)\n.catch(err => console.log('connection error:', err))\n\nmodule.exports = client";

module.exports = {
  packageJ,
  seed,
  git,
  app,
  listen,
  spec,
  apiRouter,
  modelIndex,
  configDb,
  dBIndex
};
