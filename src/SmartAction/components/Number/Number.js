import { createElement } from '../../../helper'

import SmartActionSuperComponent from '../SuperComponent.js'


const style = 'src/SmartAction/components/Number/style.css';

class SmartActionNumber extends SmartActionSuperComponent {
  constructor(descriptor) {
    super(style, descriptor);

    const { min, max, step } = descriptor.properties;

    const slider = createElement("div", {
      className: "slider",
      childs: [
        createElement("div", {
          className: "line"
        }),
        createElement("div", {
          className: "thumb"
        })
      ]
    });

    this.root.append(slider);

    const thumb = this.root.getElementsByClassName("thumb")[0];

    this.on("touch", event => {
      if (this.__alive) {
        const sliderBoundings = slider.getBoundingClientRect();
        const thumbWidth = thumb.getBoundingClientRect().width;

        const pos = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        };
        const diff = pos.x - sliderBoundings.x;

        const valueTheory = diff / sliderBoundings.width;
        const value = (valueTheory >= 0 && valueTheory <= 1) ? valueTheory : Math.trunc(valueTheory);

        const valueRender = min + (max - min) * value;
        const valueStepped = Math.round(valueRender / step) * step;

        const valueCalc = (valueStepped - min) / (max - min);

        thumb.style.left = "calc(" + (valueCalc * 100) + "% - " + (valueCalc * thumbWidth) + "px)";

        this.emit("data", valueStepped);
      }
    });

  }
}
export default SmartActionNumber;
