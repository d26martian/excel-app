import {capitalize} from '@core/utils';

export class DOMListner {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListner`)
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listner => {
      const method = getMethodName(listner);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        )
      }
      this[method] = this[method].bind(this);
      // Тоже самое что и addEventListener
      this.$root.on(listner, this[method])
    })
  }

  removeDOMListener() {
    this.listeners.forEach(listner => {
      const method = getMethodName(listner);
      this.$root.off(listner, this[method])
    })
  }
}

// input -> OnInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
