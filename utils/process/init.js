const action = (arg, cmd) => {
  console.log(arg)
}

module.exports = (process) => {
  process
    .command("init", {
      isDefault: true,
    })
    .option('-s, --store', "远程仓库地址")
    .description("初始化当前仓库")
    .action(action)
};
