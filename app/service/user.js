/* 
 * @Author       : Eug
 * @Date         : 2022-02-11 14:55:30
 * @LastEditTime : 2022-02-11 15:19:28
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /egg-example/app/service/user.js
 */
const Service = require('egg').Service;

class UserService extends Service {
  // 处理逻辑的地方
  async addName(name) {
    const user = `你好,${name}`;
    return user;
  }
}

module.exports = UserService;