const chalk = require('chalk');
const logPrefix = chalk.inverse.bold('Replace-json-property:');

const success = message =>
    console.log(`${logPrefix} ${chalk.green.bold(message)}`);
const info = message => console.log(`${logPrefix} ${chalk.blue.bold(message)}`);
const error = message => console.log(`${logPrefix} ${chalk.red.bold(message)}`);

module.exports = { success, info, error };
