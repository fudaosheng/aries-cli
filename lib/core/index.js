const { initAriesCommands } = require('./commands');
const { initAriesOptions } = require('./options');

/**
 * 
 * @param {*} program 
 * log 规范:
 *    green: 成功输出信息
 *    brightRed: 错误输出信息
 *    magenta: 警告类信息
 */
const initAries = function (program) {
  program.version(require('../../package.json').version);
  initAriesOptions(program);
  initAriesCommands(program);
  program.parse(process.argv);
}

exports.initAries = initAries;
