const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { renderFile } = require('ejs');

const validateStr = (str, strList) => {
    return str ? strList.includes(str) : false;
}

const getComponentTemplateByType = type => {
    let componentTemplate = 'react-fs-component.ejs';
    if (type === 'class') {
        componentTemplate = 'react-class-component.ejs';
    } else if (type === 'vue') {
        componentTemplate = 'vue-component.ejs';
    }
    return componentTemplate;
}

const getFileSuffixByType = type => {
    return type === 'vue' ? '.vue' : '.tsx';
}

const ejsRenderFile = (filepath, data, options) => {
    return new Promise((resolve, reject) => {
        renderFile(filepath, data, options, (err, str) => {
            if (err) {
                reject(err);
            }
            resolve(str);
        })
    })
}

module.exports = {
    validateStr,
    download,
    ejsRenderFile,
    getComponentTemplateByType,
    getFileSuffixByType
}