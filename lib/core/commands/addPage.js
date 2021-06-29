const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { supportTypes } = require("../../config");
const { validateStr, ejsRenderFile, getComponentTemplateByType, getFileSuffixByType } = require("../../utils");
const { createDirSync } = require('../../utils/fs');
const templatedir = '../../config/templates';

const addFilesIntoDir = async (pageName, type, dirpath) => {
    let componentTemplate = getComponentTemplateByType(type);
    const componentTemplatePath = path.resolve(__dirname, `${templatedir}/${componentTemplate}`);
    try {
        const component = await ejsRenderFile(componentTemplatePath, { componentName: pageName });
        const componentPath = path.resolve(dirpath, 'index' + getFileSuffixByType(type));
        fs.writeFileSync(componentPath, component);
        console.log(`aries at ${componentPath} created component success`.green);

        if (type === 'fs' || type === 'class') {
            const stylesheetTemplatePath = path.resolve(__dirname, `${templatedir}/css.ejs`);
            const stylesheet = await ejsRenderFile(stylesheetTemplatePath, { name: pageName });
            const stylesheetPath = path.resolve(dirpath, 'index.css');
            fs.writeFileSync(stylesheetPath, stylesheet);
            console.log(`aries at ${stylesheetPath} created stylesheet success`.green);
        }
    } catch (error) {
        console.log(`${error}`.brightRed);
    }
}

const createPage = (pageName, type = 'fs', destination) => {
    const absolutePath = path.resolve(destination || './src/pages', pageName);
    if (fs.existsSync(absolutePath)) {
        addFilesIntoDir(pageName, type, absolutePath);
    } else {
        createDirSync('./', path.relative('./', absolutePath));
        addFilesIntoDir(pageName, type, absolutePath);
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