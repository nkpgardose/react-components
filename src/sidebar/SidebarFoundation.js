class SidebarFoundation {
  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerClickHandler: (/* handler Function */) => {},
      unregisterClickHandler: (/* handler Function */) => {},
    };
  }

  constructor(adapter, isVisible = false) {
    this.adapter = Object.assign(SidebarFoundation.defaultAdapter, adapter);
    this.clickHandler = () => this.update();
    this.isVisible = isVisible;
  }

  init() {
    if(this.isVisible) { this.adapter.addClass('isVisible'); }

    this.adapter.registerClickHandler(this.clickHandler);
  }

  destroy() {
    this.adapter.unregisterClickHandler(this.clickHandler);
  }

  update() {
    if (this.isVisible) {
      this.isVisible = false;
      this.adapter.removeClass('isVisible')
    } else {
      this.isVisible = true;
      this.adapter.addClass('isVisible')
    }
  }
}

export default SidebarFoundation;
