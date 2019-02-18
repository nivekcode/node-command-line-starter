# node-command-line-starter
Progammers are lazy. As soon as we have to do the same task over and over again we start on automizing it.
Automization is often done in the form of a command line utility.

This starter provides you with all the necessary setup to quickly create your node-command-line utility. It provides you all the
necessary setup so that you can focus on your util and don't loose time with
the project setup.

The starter also provides you all the setup for quickly pushing new versions to your npm repositiory.

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






