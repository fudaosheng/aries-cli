# aries cli
一个提高前端开发者工作效率的cli

***安装:*** `npm install -g aries-cli`

## commands
| 命令  |  说明 |例子|
|---|---|---|
|  create <projectName> [framework] |  创建一个项目到当前工作目录，支持的框架：react、vue，默认为react。[vue模版](https://gitee.com/fudaosheng/vue_project_template)、[react模版](https://gitee.com/fudaosheng/react_project_template) |`aries create my_demo`|
|add <componentName> [type]|创建一个组件到指定的目录（默认为`src/components`）,type支持：fs(react函数式组件)、class(react class组件)、vue， destination 参考下面options说明|`aries add HelloWord` `aries add HelloWord class -d src/common`|
|addPage <pageName> [type]|创建一个页面到指定的目录(默认为src/pages),type如上， destination 参考下面options说明|`aries addPage Home`，`aries addPage About -d src/views`|

## options
| 选项  | 说明  |
|---|---|
|  -d, --destination <value> | 目的文件夹路径  |

***运行`aries --help`查看更多信息***
