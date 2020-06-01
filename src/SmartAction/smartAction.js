import { createElement } from '../helper'
import EventEmitter from 'events';


class SmartAction extends EventEmitter {
  constructor(options) {
    super();
    this.options = options;

    this.init();
  }
  init() {
    this.selectedIndex = 0;

    this.__modal = null;
    this.__component = null;
    let touching = false;

    this.options.e.addEventListener("touchstart", event => event.preventDefault());

    this.options.e.addEventListener("touchstart", event => {
      touching = true;


      setTimeout(() => {
        if (touching) {
          console.log(this.options.data);
          if (this.options.data.length > 1) {
            this.openModal();
            this.handleTouchInteraction(event);
            SmartAction.startAnimation(this.__modal, "showModal", 300);
          }
          else if (this.options.data.length > 0) {
            this.openAction(this.options.data[0], event);
          }
        }
      }, this.options.touchDelays.start);
    });
    window.addEventListener("touchend", event => {
      touching = false;
      this.kill();
    });

    window.addEventListener("touchmove", event => {
      this.handleTouchInteraction(event);
    });

    this.on("select", () => {
      while (this.__modal.getElementsByClassName("active").length > 0) {
        this.__modal.getElementsByClassName("active")[0].classList.remove("active");
      }

      this.__modal.getElementsByTagName("li")[this.selectedIndex].classList.add("active");
    });

    this.on("select", (selectedIndex, touchEvent) => {
      let changed = false;
      this.once("select", () => {
        changed = true;
      });
      this.on("die", () => {
        changed = true;
      });
      setTimeout(() => {
        // If the current selected index is the same as when the event was triggered (no changes)
        if (!changed) {

          this.openAction(this.options.data[selectedIndex], touchEvent);
        }
      }, this.options.touchDelays.select);
    });

    window.addEventListener("touchmove", event => {
      if (this.__component) {
        this.__component.emit("touch", event);
      }
    });

  }
  update(data) {
    this.options.data = data;
  }
  openModal() {
    this.__modal = createElement("div", {
      className: "smart-modal",
      childs: [
        createElement("ul", {
          childs: this.options.data.map(dataDescriptor => createElement("li", {
            childs: [
              createElement("div", {
                className: "item-inner"
              }, dataDescriptor.name)
            ]
          }))
        })
      ]
    });

    document.body.append(this.__modal);
  }
  kill() {
    if (this.__modal) {
      this.hideModal();
    }
    if (this.__component) {
      this.hideAction();
    }
  }
  hideModal() {
    try {
      document.body.removeChild(this.__modal);
      this.__modal = null;
      this.emit("die");
    } catch (e) {}
  }
  handleTouchInteraction(event) {
    if (this.__modal) {
      const pos = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };

      const itemsWithDiff = Array.from(this.__modal.getElementsByTagName("li")).map((item, i) => {
        const bounding = item.getBoundingClientRect();
        const closestDiff = Math.min(Math.abs(pos.y - bounding.top), Math.abs(pos.y - bounding.bottom));
        const withinBounding = pos.y >= bounding.top && pos.y < bounding.bottom;

        return {
          index: i,
          diff: withinBounding ? 0 : closestDiff
        };
      });

      this.selectedIndex = itemsWithDiff.sort((a, b) => {
        return a.diff > b.diff ? 1 : -1;
      })[0].index;



      // If the new selected item is new
      if (!this.__modal.getElementsByTagName("li")[this.selectedIndex].classList.contains("active")) {
        this.emit("select", this.selectedIndex, event);
      }

    }
  }
  async openAction(descriptor, touchEvent) {
    this.hideModal();

    if (descriptor.type in SmartAction.__components) {
      const ComponentConstructor = (await SmartAction.__components[descriptor.type]).default;
      this.__component = new ComponentConstructor(descriptor, this.rendererInstance);
      document.body.append(this.__component.container);

      setTimeout(() => {
        console.log("!!!!");
        /*SmartAction.startAnimation(this.__component.container, "showComponent", 300).then(() => {
          this.__component.emit("touch", touchEvent);
        });*/
        this.__component.emit("touch", touchEvent);
      }, 0);

      this.__component.on("data", value => {
        if (this.options.data[this.selectedIndex].key === descriptor.key) {
          this.emit("update", descriptor.key, value);
        }
      });


    }
  }
  hideAction() {
    document.body.removeChild(this.__component.container);
    this.__component.kill();
    this.__component = null;
  }
  static startAnimation(el, name, duration) {
    return new Promise(function(resolve, reject) {
      el.style.animation = name + ' ' + (duration / 1000) + 's';
      setTimeout(resolve, duration);
    });
  }
}
SmartAction.__components = {
  "Number": import('./components/Number/Number.js'),
  "Toggle": import('./components/Toggle/Toggle.js')
};
export default SmartAction;
