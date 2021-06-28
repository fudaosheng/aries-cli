const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { supportTypes } = require("../../config");
const { validateStr } = require("../../utils");
const { createDirSync } = require('../../utils/fs');

const createPage = (pageName, type = 'fs', destination) => {
    const absolutePath = path.resolve(destination || './', pageName);
    if(fs.existsSync(absolutePath)) {
        console.log('22');
    } else {
        createDirSync('./', path.relative('./', absolutePath));
    }
}

const addPageCommand = (pageName, type = 'fs', destination) => {
    if (validateStr(type, supportTypes)) {
        createPage(pageName, type, destination);
    } else {
        console.log('sorry，type only support: class、fs、vue'.brightRed);
    }
}

module.exports = {
    addPageCommand
}