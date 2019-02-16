const chalk = require('chalk');
const jsonfile = require('jsonfile');

function writeFile(fileName, order) {
    jsonfile.writeFile(fileName, order, function(err) {
        if (err) {
            console.log(chalk.red(err));
        } else {
            console.log(chalk.green(`Success`));
        }
    });
}

module.exports = { writeFile };
