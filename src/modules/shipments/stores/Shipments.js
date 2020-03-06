import { types, applySnapshot } from 'mobx-state-tree';
import EventBus from 'eventing-bus';
import ShipmentsData from './ShipmentsData';
import * as constants from '../../../common/constants';

/**
 * Mobx State Tree Store
 * The store recieves 3 parameters
 *  1st one is the Store Name
 *  2nd is an object with the Props and Computed values
 *  3rd is and object with the Actions
 * */

 /**
 * @author Arish Kumar K
 */

const Shipments = types.model(
  'Shipments',
  {
    items: types.array(ShipmentsData)
  }
).actions(self => ({
  fetch() {
    EventBus.publish(constants.SHIPMENT_DATA_REQUESTED, { type: 'GET' });
  },
  set(shipments) {
    applySnapshot(self, shipments);
  },
  update(shipments, index, id) {
    applySnapshot(self, shipments);
    const data = shipments.items[index];
    EventBus.publish(constants.SHIPMENT_DATA_REQUESTED, { type: 'PUT', id, data });
  }
}));

export default Shipments;
