const { spawn } = require('child_process');

const spawnCommand = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout); //父子进程建立管道输出信息
        childProcess.stderr.pipe(process.stderr);
        childProcess.on('close', code => {
            resolve(code);
        })
    })
}

module.exports = {
    spawnCommand
}