/**
 * Creating the instance of Axios client
 *
 * @author Arish Kumar K
 */

import axios from 'axios';
import env from './env';

const shipmentsApi = axios.create({
  baseURL: env.SHIPMENT_API_BASE_URL,
  timeout: env.TIMEOUT,
  headers: {
  }
});



const clients = {
  shipmentsApi
};

export default clients;
