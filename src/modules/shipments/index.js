import ShipmentService from './services/shipmentService';
import Shipments from './stores/Shipments';
import storeRegistry from '../../stores/storeRegistry';

/**
 * @author Arish Kumar K
 */

// Start Services
new ShipmentService().start();

storeRegistry.register('shipments', Shipments.create({
  shipments: []
}));
