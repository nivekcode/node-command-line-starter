'use strict';
const jsonfile = jest.genMockFromModule('jsonfile');

let mockedReadFileResponse;
let throwError = false;

const setup = (responseMock, errorResponse) => {
    if (errorResponse) {
        throwError = true;
    }
    mockedReadFileResponse = responseMock;
};
const readFileSync = jest.fn(() => {
    if (throwError) {
        throw 'Something went wrong';
    }
    return mockedReadFileResponse;
});
const writeFileSync = jest.fn((path, file) => {});

jsonfile.setup = setup;
jsonfile.readFileSync = readFileSync;
jsonfile.writeFileSync = writeFileSync;

module.exports = jsonfile;
