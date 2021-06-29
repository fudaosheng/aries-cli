const colors = require('colors');
const { validateStr, download } = require('../../utils');
const { spawnCommand } = require('../../utils/terminal');

const { vueRepo, reactRepo } = require('../../config');

const supportFrameworks = ['react', 'vue'];

const downloadTemplate = async (projectName, framework) => {
  let repoUrl = reactRepo;
  if (framework === 'vue') {
    repoUrl = vueRepo;
  }
  if (repoUrl) {
    try {
      await download(`direct:${repoUrl}`, projectName, { clone: true });
    } catch (err) {
      console.log(`downloaded error: ${err}`.brightRed);
    }
  }
}

const downloadProjectAndRun = async (projectName, framework) => {
  await downloadTemplate(projectName, framework);
  console.log('aries helping you create project ~'.green);

  const __npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await spawnCommand(__npm, ['install'], { cwd: `./${projectName}` });

  //tip:项目启东时子进程一直在开启状态中，所以下面的代码会一直阻塞。
  const startProjectCommand = framework === 'vue' ? 'serve' : 'start';
  await spawnCommand(__npm, ['run', startProjectCommand], { cwd: `./${projectName}` });
}
/**
 * 
 * @param {*} projectName 
 * @param {*} framework 框架，支持：supportFrameworks内的框架，默认为react
 */
const createAction = (projectName, framework) => {
  if (framework) {
    if (validateStr(framework, supportFrameworks)) {
      downloadProjectAndRun(projectName, framework);
    } else {
      console.log('sorry，now only support react、vue framework'.magenta);
    }
  } else {
    downloadProjectAndRun(projectName);
  }
}

exports.createAction = createAction;