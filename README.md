# Project Generators

Below are the list of project generators thats are avaliable to be run.

1. **Standard**:
   This should includes:

- an index.js
- a spec folder
  - an index.spec.js
- a package.json set up with the basic dependencies and scripts installed
- a README.md file
- an eslint config file
- a .gitignore file
- a git repository initialised

2. **Servers** (Backend) using express:
   This should includes:

- an app.js
- a listen.js
- a routes folder
- a controllers folder
- a database folder
  - index.js
  - config.js
  - seed.sql
- a models folder
- a README.md file
- spec folder
  - app.spec.js
  - an index.spec.js
- an eslint config file
- a .gitignore file
- a package.json set up with the basic dependencies and scripts

Example folder format below

```
 ├─── node_modules/
 ├─── controllers/
 │  └──── xx.js
 ├─── db/
 │  ├──── index.js <-- node-postrgres connection configuration
 │  ├──── config.js <-- database info (port/host/database name)
 │  └──── seed.sql
 ├── models/
 ├── routes/
 │  └──── api.js
 │  └──── xx.js
 ├── app.js
 ├── index.js
 ├── .gitignore
 ├── package-lock.json
 └── package.json
```
