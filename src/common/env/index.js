/**
 * Picks the correct env based on window.location
 *
 * @author Arish Kumar K
 */

import base from './base';
import local from './local';
import dev from './dev';
import qa from './qa';
import stg from './stg';
import prod from './prod';

let env;

switch (window.location.hostname) {
  case 'localhost':
    env = local;
    break;
  case 'freighthub-dev.com':
    env = dev;
    break;
  case 'freighthub-qa.com':
    env = qa;
    break;
  case 'freighthub-stg.com':
    env = stg;
    break;
  case 'freighthub.com':
    env = prod;
    break;
  default:
    env = stg;
}

/**
 * Override the base values with the environment specific values.
 */
export default { ...base, ...env };
