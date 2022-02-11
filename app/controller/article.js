/* 
 * @Author       : Eug
 * @Date         : 2022-02-11 16:00:18
 * @LastEditTime : 2022-02-11 16:27:33
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /egg-example/app/controller/article.js
 */
'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async info() {
    // const { app } = this;
    const result = await this.app.mysql.select('Table_User',{
      columns: ['user_name', 'user_email', 'create_time', 'update_time', 'user_id'], //查询字段，全部查询则不写，相当于查询*
      // where: {
      //   name: 'wjw'
      // }, //查询条件
      // orders: [
      //     ['id', 'desc'] //降序desc，升序asc
      // ],
      // limit: 10, //查询条数
      // offset: 0 //数据偏移量（分页查询使用）
    })
    this.ctx.body = result
  }
}
// TODO 插入，向users表内插入一条数据
// const result = await this.app.mysql.insert('users', {
//   name: 'wjw',
//   age: 18
// })

// TODO 查询，查询users表name=Jack的数据
// const result = await this.app.mysql.select('users', {
//   columns: ['id', 'name'], //查询字段，全部查询则不写，相当于查询*
//   where: {
//       name: 'wjw'
//   }, //查询条件
//   orders: [
//       ['id', 'desc'] //降序desc，升序asc
//   ],
//   limit: 10, //查询条数
//   offset: 0 //数据偏移量（分页查询使用）
// })
// //判断：result.length > 0

// TODO 修改，修改users表id=1的数据age为20
// const result = await this.app.mysql.update('users', {
//   age: 20 //需要修改的数据
// }, {
//   where: {
//     id: 1
//   } //修改查询条件
// });
// //判断：result.affectedRows === 1

// TODO 删除，删除users表name=wjw的数据
// const result = await this.app.mysql.delete('users', {
//   name: 'wjw'
// })
module.exports = ArticleController;