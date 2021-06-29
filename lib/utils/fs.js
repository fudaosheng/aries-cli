const fs = require('fs');
const path = require('path');
const colors = require('colors');

/**
 * 
 * @param {*} basepath 要创建目录的父文件夹路径 
 * @param {*} dirpath 要创建的目录路径
 * @returns true：存在目录或创建目录成功，false创建失败
 */
const createDirSync = (basepath, dirpath) => {
    const paths = dirpath.split(path.sep);
    if (paths.length) {
        const rootDirParh = path.join(basepath, paths.shift());
        if (fs.existsSync(rootDirParh)) {
            createDirSync(rootDirParh, path.join(...paths))
        } else {
            try {
                fs.mkdirSync(rootDirParh);
                console.log(`dir created success: ${rootDirParh}`.green);
                if (paths.length) {
                    createDirSync(rootDirParh, path.join(...paths));
                } else {
                    return true;
                }
            } catch (error) {
                console.log(`${error}`.brightRed);
                return false;
            }
        }
    }
}

module.exports = {
    createDirSync
}