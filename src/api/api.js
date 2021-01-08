import Server from './server';

/*eslint no-useless-catch: "error"*/
export class API extends Server {
  /**
   *  @todo 获取城市的设备情况
   *  @method get
   *  @return {promise}
   */
  async login(params = {}) {
    const result = await this.axios('post', `/login`, params);
    return result.data
  }
}

export default new API();