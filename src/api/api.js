import Server from './server';

/*eslint no-useless-catch: "error"*/
export class API extends Server {
  /**
   *  @todo 登录
   *  @method get
   *  @return {promise}
   */
  async login(params = {}) {
    const result = await this.axios('post', `/login`, params);
    return result.data
  }

   /**
   *  @todo 退出登录
   *  @method get
   *  @return {promise}
   */
  async loginout(params = {}) {
    const result = await this.axios('delete', `/loginout`, params);
    return result.data
  }
}

export default new API();