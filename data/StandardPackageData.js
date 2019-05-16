const project = require('../bin/CLI');

const packageJ = JSON.stringify(
  {
    name: project.projectName,
    version: '1.0.0',
    description: project.projectDesc,
    main: 'index.js',
    scripts: {
      test: 'mocha spec'
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
      eslint: '^5.15.1',
      mocha: '^6.0.2',
      prettier: '^1.16.4',
      sinon: '^7.2.7'
    }
  },
  null,
  2
);

const esLint = JSON.stringify(
  {
    env: {
      es6: true,
      mocha: true,
      node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      sourceType: 'module'
    },
    rules: {
      indent: ['warn', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'space-before-blocks': 'warn',
      'arrow-spacing': 'warn',
      'keyword-spacing': 'warn',
      'space-infix-ops': 'warn',
      'space-in-parens': 'warn',
      'spaced-comment': 'warn',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      camelcase: 'warn',
      'comma-spacing': 'warn'
    }
  },
  null,
  2
);

const git = `node_modules\n.DS_Store\n.log\n.vscode\nbundle.js\nbundle.js.map`;

module.exports = { git, packageJ, esLint };
