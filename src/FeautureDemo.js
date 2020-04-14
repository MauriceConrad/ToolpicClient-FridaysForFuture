export default class FeautureDemo {
  constructor(selectorDescriptors) {

    this.descriptors = selectorDescriptors;
    this.descriptors[Symbol.iterator] = function* () {
      for (var selector in this) {
        yield Object.assign(this[selector], { selector });
      }
    }

    this.__showing = null;
  }
  triggerUpdate() {
    this.check();
  }
  check() {
    for (let descriptor of this.descriptors) {
      const element = document.querySelector(descriptor.selector);

      try {
        const wellKnown = JSON.parse(localStorage.getItem(descriptor.selector));
        if (wellKnown != true) {
          throw false;
        }
      }
      catch (e) {
        if (element) {
          const inViewport = FeautureDemo.inViewport(element);
          console.log(descriptor.validate());
          if (inViewport && descriptor.validate()) {
            this.showDemo(descriptor);
            break;
          }
        }
      }
    }
  }
  showDemo(descriptor) {
    if (!this.__showing) {

      this.__showing = descriptor.selector;

      const container = Object.assign(document.createElement("div"), {
        className: "feautue-demo-container"
      });
      const feautureContainer = Object.assign(document.createElement("div"), {
        className: "feauture"
      });
      const box = Object.assign(document.createElement("div"), {
        className: "box"
      });
      feautureContainer.append(box);
      container.append(feautureContainer);

      const imgContainer = Object.assign(document.createElement("div"), {
        className: "image"
      });
      if (descriptor.image) {
        const img = Object.assign(document.createElement("img"), {
          src: descriptor.image
        })
        imgContainer.append(img);
      }
      const textContainer = Object.assign(document.createElement("div"), {
        className: "label"
      });
      textContainer.append(descriptor.text);

      const footerContainer = Object.assign(document.createElement("div"), {
        className: "footer"
      });
      const okBtn = Object.assign(document.createElement("button"), {
        className: "btn-ok"
      });
      okBtn.addEventListener("click", () => {
        localStorage.setItem(descriptor.selector, true);
        document.body.removeChild(container);
        this.__showing = null;
        this.check();
      });
      okBtn.append(descriptor.okLabel);
      footerContainer.append(okBtn);

      box.append(imgContainer, textContainer, footerContainer);

      const e = document.querySelector(descriptor.selector);

      const center = FeautureDemo.getElementsRelPoint(e, descriptor.position);

      const bounding = e.getBoundingClientRect();

      feautureContainer.style.left = center.x + "px";
      feautureContainer.style.top = center.y + "px";
      feautureContainer.style.transform = 'translate(' + -(descriptor.relative[0] * 100) + '%, ' + -(descriptor.relative[1] * 100) + '%)';

      // Buggy and not clean
      box.style.minWidth = (320 - bounding.x) + "px";

      box.dataset.float = descriptor.float;

      {
        const arrow = {
          x: 20,
          y: 20
        };

        const clipPaths = {
          top: r => '0% ' + arrow.y + 'px, calc(' + (r[0] * 100) + '% - ' + arrow.x + 'px) ' + arrow.y + 'px, ' + (r[0] * 100) + '% 0%, calc(' + (r[0] * 100) + '% + ' + arrow.x + 'px) ' + arrow.y + 'px, 100% ' + arrow.y + 'px, 100% 100%, 0% 100%',
          right: r => '0% 0%, calc(100% - ' + arrow.y + 'px) 0%, calc(100% - ' + arrow.y + 'px) calc(' + (r[1] * 100) + '% - ' + arrow.x + 'px), 100% ' + (r[1] * 100) + '%, calc(100% - ' + arrow.y + 'px) calc(' + (r[1] * 100) + '% + ' + arrow.x + 'px), calc(100% - ' + arrow.y + 'px) 100%, 0% 100%',
          bottom: r => '0% 0%, 100% 0%, 100% calc(100% - ' + arrow.y + 'px), calc(' + (r[0] * 100) + '% + ' + arrow.x + 'px) calc(100% - ' + arrow.y + 'px), ' + (r[0] * 100) + '% 100%, calc(' + (r[0] * 100) + '% - ' + arrow.x + 'px) calc(100% - ' + arrow.y + 'px), 0% calc(100% - ' + arrow.y + 'px)',
          left: r => '0% 0%, 100% 0%, 100% 100%, ' + arrow.y + 'px 100%, ' + arrow.y + 'px calc(' + (r[0] * 100) + '% + ' + arrow.x + 'px), 0% ' + (r[0] * 100) + '%, ' + arrow.y + 'px calc(' + (r[0] * 100) + '% - ' + arrow.x + 'px)'
        };

        const clipPathValue = 'polygon(' + clipPaths[descriptor.float](descriptor.relative) + ')';

        box.style.webkitClipPath = clipPathValue;

        console.log(box);
      }



      document.body.append(container);


    }
  }
  static getElementsRelPoint(el, pos) {
    const bounding = el.getBoundingClientRect();
    return {
      x: bounding.x + bounding.width * pos[0],
      y: bounding.y + bounding.height * pos[1]
    };
  }
  static inViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }
}
