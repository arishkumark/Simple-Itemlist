
import EventBus from 'eventing-bus';

/**
 * An Abstract Base Service which is extended by all other services.
 *
 * @author Arish Kumar K
 */
export default class BaseService {
  constructor(eventName) {
    this.eventName = eventName;
  }

  start() {
    EventBus.on(this.eventName, (event) => {
      // We can wrap this with the auth success
      this.handleEvent(this.eventName, event);
    });
  }

  /**
   * Sub classes override this method.
   */
  handleEvent(eventName, event) {
  }
}
