#!/usr/bin/env node
const commander = require('commander');
const version = require('../package').version;
const waiter = require('../src/waiter');
const fileAccess = require('../src/file-access');

commander
    .version(version)
    .arguments('<food> <drink>')
    .option(
        '-w --write <string>',
        'Specifies the path of the file the order will be written to'
    )
    .action(function(food, drink) {
        const fileName = commander.write;
        waiter.placeOrder(food, drink);
        if (fileName) {
            fileAccess.writeFile(fileName, { food, drink });
        }
    })
    .parse(process.argv);
