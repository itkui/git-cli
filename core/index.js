#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const { program } = require('commander');
const { childBind } = require("./../utils/process")
const { configBind } = require("./../utils/config")


// 绑定所有基础参数配置
configBind(program)
// 绑定所有子命令
childBind(program)

const run = () => {
  figlet('g i t   c l i', (err, data) => {
    !err && console.log(chalk.red.bold(data), '\r\n', '');
    program.parse(process.argv);
  });
}

module.exports = {
  run
}