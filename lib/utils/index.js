const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

const validateStr = (str, strList) => {
    return strList.includes(str);
}

exports.validateStr = validateStr;
exports.download = download;