/**
 * Store Registry Provider
 *
 * @author Arish Kumar K
 */

class StoreRegistry {
  constructor() {
    this.stores = {};
  }

  register(storeName, store) {
    this.stores[storeName] = store;
  }

  getStores() {
    return this.stores;
  }
}

const storeRegistry = new StoreRegistry();
export default storeRegistry;
