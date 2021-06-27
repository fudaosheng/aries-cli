const { initAriesCommands } = require('./commands');
const { initAriesOptions } = require('./options');

const initAries = function (program) {
  program.version(require('../../package.json').version);
  initAriesOptions(program);
  initAriesCommands(program);
  program.parse(process.argv);
}

exports.initAries = initAries;
