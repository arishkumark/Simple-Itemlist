import { types } from 'mobx-state-tree';

/**
 * @author Arish Kumar K
 */

const Cargo = types.model(
  'Cargo',
  {
    type: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    volume: types.maybeNull(types.string),
  }
);

const Services = types.model(
  'Services',
  {
    type: types.maybeNull(types.string)
  }
);

const ShipmentsData = types.model(
  'ShipmentsData',
  {
    id: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    cargo: types.array(Cargo),
    mode: types.maybeNull(types.string),
    type: types.maybeNull(types.string),
    destination: types.maybeNull(types.string),
    origin: types.maybeNull(types.string),
    services: types.array( Services),
    total: types.maybeNull(types.string),
    status: types.maybeNull(types.string),
    userId: types.maybeNull(types.string)
  }
);

export default ShipmentsData;