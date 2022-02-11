/* 
 * @Author       : Eug
 * @Date         : 2022-02-11 17:20:44
 * @LastEditTime : 2022-02-11 17:25:39
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /egg-example/app/service/article.js
 */
const Service = require('egg').Service;

class ArticleService extends Service {
  // 处理逻辑的地方
  async searchArticle() {
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
    return result;
  }
}

module.exports = ArticleService;