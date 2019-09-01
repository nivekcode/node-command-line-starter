import * as chalk from 'chalk';
import * as jsonfile from 'jsonfile';

export function writeFile(fileName, order) {
    jsonfile.writeFile(fileName, order, function(err) {
        err
            ? console.log((chalk as any).red(err))
            : console.log(
                  (chalk as any).green('Order successfully written to file')
              );
    });
}
