const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { renderFile } = require('ejs');

const validateStr = (str, strList) => {
    return strList.includes(str);
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
    ejsRenderFile
}