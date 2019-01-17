## Instructions

 * Set the node correct node version: `nvm install v8.11.3` or `nvm use 8.11.3` if already installed
 
 * Use `yarn install` to install all dependencies for a project. **DO NOT USE NPM INSTALL.** If you did, please see the fix below

 * Run Server: `yarn run dev-server`
 
 * Build assets: `yarn run build` or `yarn run build:dev` or `yarn run build:prod`
 
 * To add an npm package or babel plugin use: `yarn add {your thingy here}`
 
  > e.g. `yarn add babel-plugin-transform-class-properties@6.24.1`
  > or `yarn add --save-dev babel-plugin-transform-class-properties`
  

## NPM Install Fix

Did you run `npm install` instead of `yarn install`? Oh boy then this text block is for you.  Having decided to use yarn for this project, if npm is used to install then a `package-lock.json` is created that conflicts with the `yarn.lock` file and heroku has a bit of a spazz.  This prevents the app from launching to heroku.  So, here's what you do:
 
 * if you have not committed or pushed the change, remove the `package-lock.json` and `package.json` files.
 
 * if you DID commit and push changes after having used `npm install`, type `git rm package-lock.json` into the command line.  Check that `package-lock.json` and `package.json` files are removed.
 
 * delete the `node_modules` folder
 
 * run `yarn install`
 
This should resolve the issue.  