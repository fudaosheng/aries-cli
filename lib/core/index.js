const { initAriesCommands } = require('./commands');

const initAries = function (program) {
  program.version(require('../../package.json').version);
  initAriesCommands(program);
  program.parse(process.argv);
}

exports.initAries = initAries;
