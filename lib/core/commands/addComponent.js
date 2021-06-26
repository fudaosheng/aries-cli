const path = require('path');
const fs = require('fs');
const { ejsRenderFile } = require('../../utils');

const templatedir = '../../config/templates';

const addComponentAction = async (componentName, type, destination) => {
    let componentTemplate = 'react-fs-component.ejs';
    if (type === 'class') {
        componentTemplate = 'react-class-component.ejs';
    } else if (type === 'vue') {
        componentTemplate = 'vue-component.ejs';
    }
    try {
        const filepath = path.resolve(__dirname, `${templatedir}/${componentTemplate}`);
        const component = await ejsRenderFile(filepath, { componentName });
        const componentPath = path.resolve(destination || './', `${componentName}.${type === 'vue' ? 'vue' : 'tsx'}`);
        fs.promises.writeFile(componentPath, component).then(() => {
            console.log(`aries at ${componentPath} created component successed`);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addComponentAction
}