const { createAction } = require('./create');
const { addComponentAction } = require('./addComponent');

const initAriesCommands = program => {
    program.command('create <projectName> [framework]')
        .description('create a project into current directory，framework default value: react')
        .action(createAction);

    //todo: command优化，根据选项配置command
    program.command('addComponent <componentName> [type] [destination]')
        .description('add a component into destnation, type: vue、fs、class')
        .action(addComponentAction);
}

exports.initAriesCommands = initAriesCommands;