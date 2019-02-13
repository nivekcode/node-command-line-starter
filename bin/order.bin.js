#!/usr/bin/env node
const commander = require('commander');
const version = require('../package').version;
const greet = require('../src/greet');

commander
    .version(version)
    .arguments('<food> <drink>')
    .option(
        '-w --wine-card [string]',
        'Additional to the food and drink you want to order the wine card'
    )
    .action(function(food, drink) {
        const includeWineCard = commander.wineCard;
        greet.restaurant();
    })
    .parse(process.argv);
