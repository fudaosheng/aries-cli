const { validateStr, download } = require('../../utils');

const supportFrameworks = ['react', 'vue'];
/**
 * 
 * @param {*} projectName 
 * @param {*} framework 框架，支持：supportFrameworks内的框架，默认为react
 */
const createAction = (projectName, framework) => {
  if (framework) {
    if(validateStr(framework, supportFrameworks)) {
      console.log(download);
    } else {
      console.log('sorry，now only support react、vue');
    }
  } else {
    console.log(projectName);
  }
}

exports.createAction = createAction;