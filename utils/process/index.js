const init = require('./init')

const childBind = (program) => {
  // 初始化gitcli,主要目的为配置git账号并拉取线上仓库代码
  init(program)
}
module.exports = {
  childBind
}