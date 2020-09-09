import {DOMListner} from '@core/DOMListner';

export class ExcelComponent extends DOMListner {
  // Returns the template for the component - Возвращает шаблон компонента

  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListener()
  }
}
