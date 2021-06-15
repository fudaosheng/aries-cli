const { createAction } = require('./create');
const initAriesCommands = program => {
    program.command('create <projectName> [framework]')
        .description('create a project into current directory，framework default value: react')
        .action(createAction)
}

exports.initAriesCommands = initAriesCommands;