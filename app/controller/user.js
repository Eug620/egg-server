/* 
 * @Author       : Eug
 * @Date         : 2022-02-11 14:52:37
 * @LastEditTime : 2022-02-11 18:08:40
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /egg-example/app/controller/user.js
 */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.addName('wjw');
    ctx.body = userInfo
  }
  async get() {
    const { ctx } = this;
    // GET /posts?category=egg&id=1&id=2&id=3

    // query只会取第一次出现的值
    console.log(ctx.query);
    // queries会将数据存为数组格式
    console.log(ctx.queries);

    ctx.body = {
      query: ctx.query,
      queries: ctx.queries
    }
  }
  async post() {
    const { ctx } = this
    ctx.body = ctx.request.body;
  }
  async userList() {
    const { ctx } = this
    ctx.body = ctx.request.body;
  }
}

module.exports = UserController;
