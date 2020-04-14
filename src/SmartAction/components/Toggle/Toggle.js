import { createElement, getRelElementsPos } from '../../../helper'

import SmartActionSuperComponent from '../SuperComponent.js'

const style = 'src/SmartAction/components/Toggle/style.css';

class SmartActionToggle extends SmartActionSuperComponent {
  constructor(descriptor, rendererInstance) {
    super(style, descriptor);

    const { mode, arrayKey, index } = descriptor.properties;

    const main = createElement("div", {
      className: "toggle",
      childs: [
        createElement("div", {
          className: "thumb"
        })
      ]
    });

    this.root.append(main);

    let initialized = false;

    this.on("touch", event => {
      if (this.__alive) {

        const pos = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        };

        const center = getRelElementsPos(main, [0.5, 0.5]);

        const toggled = pos.x >= center.x;

        if (toggled != main.classList.contains("toggled") || !initialized) {
          initialized = true;
          if (toggled) {
            main.classList.add("toggled");
          }
          else {
            main.classList.remove("toggled");
          }

          if (mode === "array") {
            const baseArray = Array.from(rendererInstance.data[arrayKey].__value);
            baseArray[index] = toggled;
            this.emit("data", baseArray);
          }
          else {
            this.emit("data", toggled);
          }
        }
      }
    });

  }
}
export default SmartActionToggle;
