const chalk = require('chalk');
const jsonfile = require('jsonfile');

function writeFile(fileName, order) {
    jsonfile.writeFile(fileName, order, function(err) {
        err
            ? console.log(chalk.red(err))
            : console.log(chalk.green('Order successfully written to file'));
    });
}

module.exports = { writeFile };
