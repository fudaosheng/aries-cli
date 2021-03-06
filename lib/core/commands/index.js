const { createAction } = require('./create');
const { addComponentAction } = require('./addComponent');
const { addPageCommand } = require('./addPage');

const initAriesCommands = program => {
    program.command('create <projectName> [framework]')
        .description('create a project into current directory，framework default value: react')
        .action(createAction);

    //todo: command优化，根据选项配置command
    program.command('add <componentName> [type]')
        .description('add a component into destnation, type: vue、fs、class')
        .action((componentName, type) => {
            addComponentAction(componentName, type, program.opts().destination);
        });

    program.command('addPage <pageName> [type]')
        .description('add a page into destnation, type: vue、fs、class')
        .action((pageName, type) => {
            addPageCommand(pageName, type, program.opts().destination);
        })
}

exports.initAriesCommands = initAriesCommands;