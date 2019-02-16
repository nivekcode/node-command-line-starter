const chalk = require('chalk');

function order(food, drink) {
    console.log(
        '\n' +
            '                                         _           \n' +
            '  _   _  ___  _   _ _ __    ___  _ __ __| | ___ _ __ \n' +
            " | | | |/ _ \\| | | | '__|  / _ \\| '__/ _` |/ _ \\ '__|\n" +
            ' | |_| | (_) | |_| | |    | (_) | | | (_| |  __/ |   \n' +
            '  \\__, |\\___/ \\__,_|_|     \\___/|_|  \\__,_|\\___|_|   \n' +
            '  |___/                                              \n'
    );
    console.log(
        `${chalk.green('You ordered the following food: ')} ${chalk.blue.bold(
            food
        )}`
    );
    console.log(
        `${chalk.green('You ordered the following drink: ')} ${chalk.blue.bold(
            drink
        )}`
    );
}

module.exports = { order };
