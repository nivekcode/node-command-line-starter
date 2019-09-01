#!/usr/bin/env node
import * as packgeJSON from '../../package.json';
import commander from 'commander';
import { placeOrder } from '../waiter';
import { writeFile } from '../file-access';

commander
    .version(packgeJSON.version)
    .arguments('<food> <drink>')
    .option(
        '-w --write <string>',
        'Specifies the path of the file the order will be written to'
    )
    .action(function(food, drink) {
        const fileName = commander.write;
        placeOrder(food, drink);
        if (fileName) {
            writeFile(fileName, { food, drink });
        }
    })
    .parse(process.argv);
