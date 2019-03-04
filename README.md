# node-command-line-starter
Progammers are lazy. As soon as we have to do the same task over and over again we start on automizing it.
Automization is often done in the form of a command line utility.

[![node-command-line-starter image](https://i.ibb.co/VjzD8bF/nodecommandlinestarter-project-setup-5c7a49.jpg)](https://imgbb.com/)

This starter provides you with all the necessary setup to quickly create your node-command-line utility. Focus on your util and don't loose time with
the project setup.

The starter provides you with a setup to perform fully automated releases with Travis. Publish new versions quickly and automated to your npm repositiory. If this is
new to you, you may want to read my blog-post about [The way to fully automated releases in open source projects](https://medium.com/@kevinkreuzer/the-way-to-fully-automated-releases-in-open-source-projects-44c015f38fd6)

## What's included?

### Testing
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- Jest configurations to mock third party libaries
- Sample tests

### Command line utils
- [Commander](https://github.com/tj/commander.js) - Complete solution for node.js command-line interfaces.
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Boxen](https://github.com/sindresorhus/boxen#readme) - Create boxes in terminal

### Dev utilities
- [Prettier](https://prettier.io/) - Code formater
- [Commitizen](https://github.com/commitizen/cz-cli) Util that helps to create conventional commit messages
- [Commitlint](https://github.com/conventional-changelog/commitlint) Lint your commit messages to ensure you use conventional commits
- [Husky](https://github.com/typicode/husky) and [Lint-staged](https://github.com/okonet/lint-staged) to run prettier on each commit on staged files. Husky is also used to run commitlint on a commit.

### Build tools
- [Codecov](https://codecov.io/) - Integration to upload your coverage report to codecov
- [Travis](https://travis-ci.org/) - Sample travis file with all the necessary build steps
- [SemanticRelease](https://github.com/semantic-release/semantic-release) - All the setup to use semantic release. Publish your command line utility to npm by using conventional commits

## Folder structure

|__ **__mocks__** Folder that contains the mocks for third party libraries

|__ **bin** contains your file with the commander instructions - this is the entry to your command line tool

|__ **src** contains your implementation and the logic - is called by the file in your bin folder

## Getting started

### Development
1. Fork this repo
2. Adjust the URLs and names in package.json
3. Adjust the files in bin, src and __mocks__
4. Adjust the bin command in package.json

### Setup CI (Travis)
1. Go to https://travis-ci.org/ and sign up with your Github account. Accept the Authorizaiton of GitHub. Activate Travis for your repository.
2. The starter allready contains a .travis.yml file that will be interpreted up by travis.

### Setup npm account
Sign up on https://www.npmjs.com/.

### Setup using semantic-release-cli
```
npm install -g semantic-release-cli

cd your-module
semantic-release-cli setup
```
Enter the required informations. The CLI will do the setup and add the necessary tokens to your Travie repository settings.

### Visualize coverage
To visualize coverage just sign up on https://codecov.io/.
Go to Settings and copy the token. Add this token as CODECOV_TOKEN to your travis repository settings.

### Merge your feature branch into master
Use conventional commit messages for your commits. A merge on master
will then analyze the commits, automatically bump the version, create
the release assets and then publish the package.

## Play around with the example
If you are curious about how this example is used, just try it out. Open up a terminal
and run:
```
npx node-command-line-starter pizza beer
```
which will output the following:
```                    _
  _   _  ___  _   _ _ __    ___  _ __ __| | ___ _ __
 | | | |/ _ \| | | | '__|  / _ \| '__/ _` |/ _ \ '__|
 | |_| | (_) | |_| | |    | (_) | | | (_| |  __/ |
  \__, |\___/ \__,_|_|     \___/|_|  \__,_|\___|_|
  |___/

   ╭─────────────────────────────────────────────╮
   │                                             │
   │   You ordered the following food:  pizza    │
   │   You ordered the following drink:  beer    │
   │                                             │
   ╰─────────────────────────────────────────────╯
```
additionally the starter example also allows you to use a -w option followed
by a filename. In case you do so, your order is written to the file you specified.






