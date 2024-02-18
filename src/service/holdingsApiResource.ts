import BaseApiResource from './baseApiResource';

class HoldingsApiResource extends BaseApiResource {
  constructor() {
    super('https://run.mocky.io/v3');
  }

  async getNewsList() {
    return this.get(`bde7230e-bc91-43bc-901d-c79d008bddc8`);
  }
}

export default HoldingsApiResource;
