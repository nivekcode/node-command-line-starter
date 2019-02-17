'use strict';
const jsonfile = jest.genMockFromModule('jsonfile');

let throwError;

const setup = withError => (throwError = withError);

const writeFile = jest.fn((fileName, order, cb) => {
    throwError ? cb('Something went wrong') : cb();
});
jsonfile.setup = setup;
jsonfile.writeFile = writeFile;

module.exports = jsonfile;
