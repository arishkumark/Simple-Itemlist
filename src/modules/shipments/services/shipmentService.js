import BaseService from '../../../common/services/BaseService';
import * as constants from '../../../common/constants';
import stores from '../../../stores/index';
import clients from '../../../common/clients';

/**
 * @author Arish Kumar K
 */

export default class ShipmentService extends BaseService {
  constructor() {
    super(constants.SHIPMENT_DATA_REQUESTED);
  }

  handleEvent(eventName, event) {
    if (event.type === 'GET') {
      clients.shipmentsApi.get('/shipments').then(
        (response) => {
          const data = {
            items: response.data
          };
          stores.shipments.set(data);
        },
        (error) => {
          throw error
        }
      );
    } else {
      clients.shipmentsApi.put(`/shipments/${event.id}`, event.data).then(
        (response) => {
          console.log('Success')
        },
        (error) => {
          console.log('Error')
        }
      );
    }
    
  }
}
