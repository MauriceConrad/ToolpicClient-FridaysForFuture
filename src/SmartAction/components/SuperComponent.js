import EventEmitter from '../../EventEmitter'


export default class SmartActionSuperComponent extends EventEmitter {
  constructor(style, descriptor) {
    super();

    const self = this;

    // Create super element
    this.container = document.createElement("div");
    this.container.classList.add("smart-action-component");
    const shadow = this.container.attachShadow({
      mode: 'open'
    });

    this.__alive = true;

    this.__shadow = shadow;

    // Initalize style sheet
    this.styleSheet = document.createElement("style");
    this.styleSheet.setAttribute("scoped", true);
    console.log(this.styleSheet);
    shadow.append(this.styleSheet);

    // Initalize root element
    this.root = document.createElement("div");
    shadow.append(this.root);

    (async () => {
      const styleStr = await (await fetch(style)).text();
      // Load styles to sheet
      this.styleSheet.innerHTML = styleStr
    })();

  }
  kill() {
    this.__alive = false;
  }
}
