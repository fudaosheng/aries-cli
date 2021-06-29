const path = require('path');
const fs = require('fs');
const colors = require('colors');
const { ejsRenderFile, getComponentTemplateByType, getFileSuffixByType } = require('../../utils');

const templatedir = '../../config/templates';

const addComponentAction = async (componentName, type, destination) => {
    let componentTemplate = getComponentTemplateByType(type);
    try {
        const filepath = path.resolve(__dirname, `${templatedir}/${componentTemplate}`);
        const component = await ejsRenderFile(filepath, { componentName });
        const componentPath = path.resolve(destination || './', componentName + getFileSuffixByType(type));
        fs.promises.writeFile(componentPath, component).then(() => {
            console.log(`aries at ${componentPath} created component success`.green);
        })
    } catch (error) {
        console.log(`${error}`.brightRed);
    }
}

module.exports = {
    addComponentAction
}