import Vue from 'vue/dist/vue.esm.js';
import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed);

import progressCircle from "./progressCircle.js"

import loadTemplate from './application/loadTemplate.js'
import handleRender from './application/handleRender.js'
import download from './download.js'
import { getSVG, loadIcons } from "./helper.js"

import FeautureDemo from './FeautureDemo.js'
import RenderProcess from './render.js'
import Session from './Session.js'

import { Helpers as ToolpicHelpers } from 'toolpic';

import Toolpic from 'toolpic';

import SmartAction from './SmartAction/smartAction';

import templates from '../data/templates/templates.js';

const mySession = new Session();

(async function() {

  let globalRender = null;

  for (let template of templates) {
    template.icon = await getSVG(template.icon);
  }

  const app = new Vue({
    el: '.app',
    data: {
      __smartInstance: null,
      __mounted: false,
      fieldComponents: [],
      render: null,
      timestamp: 0,
      activeTemplate: null,
      isMobile: false,
      activeViewIndex: 0,
      activeEditView: 0,
      viewsAmount: 5,
      speed: 1000,
      splitView: false,
      templates: templates,
      activeTemplateGroupIndex: 0,
      results: [],
      progress: {},
      maxResults: 1,
      experimental: localStorage.getItem('experimentalMode') == "true",
      icons: loadIcons({
        "edit": "icons/edit.svg",
        "preview": "icons/photo.svg",
        "refresh": "icons/refresh.svg",
        "share": "icons/share.svg",
        "download": "icons/download.svg",
        "github": "icons/github.svg",
        "twitter": "icons/twitter.svg",
        "tabs": [
          "icons/megaphone.svg",
          "icons/pagination/fashion.svg",
          "icons/ink.svg",
          "icons/picture.svg",
          "icons/settings.svg"
        ]
      }),
      swiperOptions: {
        simulateTouch: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function(index, className) {

            return `<div class="pagination-bullet-custom ${ className }">
                      <div class="icon">
                        ${ templates[index].icon }
                      </div>
                    </div>`;
          }
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        loop: false
     },
      renderSwiperOptions: {
        simulateTouch: false,
        scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
       },
        pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true,
         renderBullet: function(index, className) {

           return `<div class="pagination-bullet-custom ${ className }"></div>`;
         }
       },
        keyboard: {
         enabled: true,
         onlyInViewport: false,
       },
        loop: true
      }
    },
    components: {
      'progress-circle': progressCircle,
      Swiper: VueAwesomeSwiper.swiper,
      SwiperSlide: VueAwesomeSwiper.swiperSlide
  	},
    created() {
      window.addEventListener("resize", () => {
        this.isMobile = this.checkMobile();
      });
      this.isMobile = this.checkMobile();

      Object.defineProperty(this, 'activeRender', {
        get() {
          return globalRender;
        }
      });


    },
    updated() {
      setTimeout(function() {
        demo.triggerUpdate();
      }, 1000);
    },
    asyncComputed: {
      iconsAsync() {
        function getProxy(baseObj) {
          return new Proxy(baseObj, {
            get(target, name) {
              if (typeof target[name] == "object" && target[name] != null) {
                return getProxy(target[name]);
              }
              else {
                return new Promise(async function(resolve, reject) {
                  const icon = await target[name];
                  resolve(icon);
                });
              }
            }
          });
        }
        return new Promise(function(resolve, reject) {

        });
      },
      pageTitle() {
        //activeViewIndex == 0 ? activeTemplateGroup.name : ""
        return [
          "Templates",
          "FFF Classic",
          "Edit",
          "Result",
          "Mehr"
        ][this.activeViewIndex];
      },
      activeTemplateGroup() {
        return this.templates[this.activeTemplateGroupIndex];
      },
      activeTemplateGroupName() {
        return "Hallo";
      },
      iconsEditGroup() {
        return Promise.all([
          this.icons.edit,
          this.icons.preview
        ]);
      },
      iconsRenderView() {
        return Promise.all([
          this.icons.refresh,
          this.icons.share,
          this.icons.download
        ]);
      },
      iconsAboutView() {
        return Promise.all([
          this.icons.twitter,
          this.icons.github
        ]);
      },
      tabs() {
        const tabs = ["Activist", "Classic", "Edit", "Render", "Mehr"];

        return Promise.all(tabs.map(async (label, index) => {
          const icon = await this.icons.tabs[index];
          return { icon, label }
        }));
      }
    },
    mounted() {
      // Init refresh


      const loadingView = document.querySelector(".loading-view");
      loadingView.classList.add("hide");

      const allItems = this.templates.reduce((accumulator, value) => accumulator.concat(value.items), new Array);

      //const all = new Array().concat(...this.templates.map(template => template.items));

      const sessionTemplate = allItems.find(template => template.name === mySession.template);


      if (sessionTemplate) {
        const dataCopy = Object.assign(mySession.data || {});

        this.selectTemplate(sessionTemplate, true, mySession.docIndex).then(() => {
          if (dataCopy) {
            globalRender.dataset = dataCopy;
          }
        });
      }


      this.__smartInstance = new SmartAction({
        e: this.$refs.previewContainer,
        touchDelays: {
          start: 1000,
          select: 1650
        },
        data: []
      });
      this.__smartInstance.on("update", (key, value) => {
        render.data[key] = value;
      });


      this.__mounted = true;
    },
    methods: {
      handleClickSlide() {

      },
      proxySelect() {
        const docSelector = document.querySelector(".select-doc");
        docSelector.click();

      },
      download() {
        if (typeof document.createElement('a').download != "undefined") {
          for (let result of this.results) {

            const extension = Object.entries({
              "jpg": /image\/jpe?g/,
              "png": /image\/png/,
              "mp4": /video\/mp4/
            }).find(arr => {
              const [ ext, regex ] = arr;
              return result.blob.type.match(regex);
            })[0];

            const fileName = Object.entries({
              "SharePic": /image\/.*/,
              "Video": /video\/.*/,
            }).find(arr => {
              const [ fileName, regex ] = arr;
              return result.blob.type.match(regex);
            })[0];

            console.log(result.url);

            download(result.blob, fileName + "." + extension, "image/jpg");
          }
        }
        else {
          console.log("No support", this.renderedImage);
          //openTab(this.renderedImage);
          window.open(this.renderedImage, '_blank');
        }
      },
      async shareResult() {
        try {
          //
        }
        catch (err) {
          console.error(err);
        }
      },
      async renderTemplate() {

        const { root, assets } = this.activeTemplate.documentsCompiled[this.activeDocIndex];

        const { width, height, format, type, video } = this.activeTemplate.documents[this.activeDocIndex];

        this.results = [];

        const configs = [
          {
            root: this.activeTemplate.documentsCompiled[this.activeDocIndex].root,
            assets: this.activeTemplate.documentsCompiled[this.activeDocIndex].assets,
            width: this.activeTemplate.documents[this.activeDocIndex].width,
            height: this.activeTemplate.documents[this.activeDocIndex].height,
            format: this.activeTemplate.documents[this.activeDocIndex].format,
            type: this.activeTemplate.documents[this.activeDocIndex].type,
            video: this.activeTemplate.documents[this.activeDocIndex].video,
            data: (() => {
              const data = globalRender.dataset;
              delete data._asyncComputed;
              return data;
            })()
          }
        ].map(config => {


          return new Promise((resolve, reject) => {
            const process = new RenderProcess(config);
            process.on("progress", progress => {
              this.progress = progress;
            });
            process.on("end", result => {
              this.progress = {};
              resolve(result);

            });
          });
        });


        Promise.all(configs).then(results => {
          console.log(results);
          this.results = results;

        });

      },
      createResultsSlider: (await import('./application/createResultsSlider.js')).default,
      seek(event) {
        const rangeSlider = event.target.closest("input[type='range']");
        const value = Number(rangeSlider.value);

        window.render.seekAnimations(value);


      },
      restartAnimations() {

        //window.render.restartAnimations();

        var start = null;

        const step = timestamp => {
          if (!start) start = timestamp;
          var progress = timestamp - start;
          this.timestamp = progress;
          window.render.seekAnimations(this.timestamp);

          if (progress < this.activeTemplate.documents[this.activeDocIndex].video.duration) {
            window.requestAnimationFrame(step);
          }
        }
        window.requestAnimationFrame(step);
      },
      checkMobile() {
        return window.innerWidth < 700;
      },
      changeDoc(event) {
        const value = event.target.closest("select").value;
        const docIndex = Number(value);

        const dataset = globalRender.dataset;


        this.applyInstance(this.activeTemplate, docIndex);

        // Apply old dataset
        globalRender.dataset = dataset;
      },
      selectTemplate(item, changeView = true, docIndex = 0) {

        return new Promise(async (resolve, reject) => {
          // Update documents to fully usable modules
          item.documents = await Promise.all(item.documents.map(async docPromise => await docPromise));
          if (changeView) {
            // Move to edit view
            this.activeViewIndex = 2;
          }

          this.activeDocIndex = docIndex;


          this.activeTemplate = item;

          this.applyInstance(this.activeTemplate, docIndex);

          resolve(true);

        });

      },
      applyInstance(template, docIndex) {
        if (globalRender) {
          globalRender.kill();
        }

        globalRender = loadTemplate(template, docIndex, this.$refs.previewContainer);
        window.render = globalRender;

        const fields = template.documents[docIndex].fields;

        this.fieldComponents = fields;


        ToolpicHelpers.nextTick(() => {
          let i = 0;
          for (let component of this.$refs.fields) {
            const index = i;
            // Updating component's 'value' to the related value within the data controller using $__key as reference
            component.value = globalRender.data[component.$__key].__value;
            component.$emit("set", globalRender.data[component.$__key].__value);
            component.$on("update", (key, value) => {
              globalRender.data[key] = value;
              if (this.fieldComponents[index].forceSVGRedraw) {
                globalRender.fixSVGIussues(key);

              }
            });

            i++;
          }
        });

        this.__smartInstance.update(template.documents[docIndex].smartActions);

        handleRender(globalRender, this);



        return globalRender;
      },
      selectTab(event) {
        const li = event.target.closest("li");
        const index = Array.from(li.closest("ul").children).indexOf(li);

        this.activeViewIndex = index;
      },
      swiperSlideChange() {
        //console.log(this.$refs.viewSwiper.swiper.activeIndex);

        this.activeTemplateGroupIndex = this.$refs.viewSwiper.swiper.activeIndex;

      }
    },
    watch: {
      isMobile(val) {
        //this.editSwiperOptions.slidesPerView = val ? 1 : 2;
      },
      timestamp(oldValue, newValue) {
        globalRender.seekAnimations(Number(newValue));
      },
      results(oldVal, newVal) {
        if (this.results) {
          this.createResultsSlider(this.results);
        }
      },
      experimental(newValue, oldValue) {
        localStorage.setItem('experimentalMode', newValue);
      },
      activeEditView() {
        console.log("Edit View changed!");
        if (globalRender) {
          console.log("Reupdate data!");
          globalRender.Vue.$forceUpdate();
          setTimeout(() => {
            for (let key in globalRender.dataset) {
              if (globalRender.dataset.hasOwnProperty(key)) {
                //console.log(key);

                //const val = render.data[key].value;

                /*const nullValues = new Map([
                  ["string", () => {
                    return new Array(10).fill(true).map(a => {
                      const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                      return chars[Math.round(chars.length * Math.random())];
                    }).join("");
                  }],
                  ["number", () => Math.random()]
                ]);

                const typeCreates = new Map([
                  [val instanceof Array, () => val.map(value => {
                    return nullValues.get(typeof value);
                  })],
                  [typeof val === "string", ()]
                ]);



                const dataType = render.data[key].value instanceof Array ? "array" : typeof render.data[key].value;

                render.data[key] = nullValues.get(dataType)();
                render.data[key] = val;*/

              }
            }
          }, 1000);
        }
      }
    }
  });

  const demo = new FeautureDemo({
    '.view-templates': {
      text: 'Wische nach links oder rechts um zwischen den verschiedenen Ordnern zu wechseln. Auf dem Desktop kannst du die Navigation oder die Pfeiltasten nutzen.',
      image: 'data/resources/demo/view-templates.svg',
      okLabel: 'Okay, verstanden!',
      position: [0.5, 0.05],
      relative: [0.5, 0],
      float: 'top',
      validate: () => app.activeViewIndex == 0
    },
    '.btns-export': {
      text: 'Hier kannst du das SharePic rendern!',
      okLabel: 'Alerta!',
      position: [0.5, 0.5],
      relative: [0.1, 0],
      float: 'top',
      validate: () => app.activeViewIndex == 2
    },
    '.btn-group-edit-preview': {
      text: 'Hier kannst du zwischen Edit und Vorschau wechseln!',
      okLabel: 'Okay, danke!',
      position: [0.35, 0.5],
      relative: [0.1, 0],
      float: 'top',
      validate: () => app.activeViewIndex == 2
    },
    '[data-component-type="StockFootage"]': {
      text: 'Hier findest du unsere eigene Stock Image Datenbank mit Streikbildern aus allen Städten. Außerdem hast zu direkten Zugang zur Datenbank von Pixabay und Pexels.',
      image: 'data/resources/demo/stock.svg',
      okLabel: 'Whoop Whoop!',
      position: [0.1, 0.5],
      relative: [0.1, 0],
      float: 'top',
      validate: () => app.activeViewIndex == 2
    }
  });
})();






window.addEventListener("load", function() {


  window.addEventListener("resize", function() {
    try {
      const preview = document.querySelector(".preview");
      const svg = document.querySelector(".preview svg");
      svg.style.maxHeight = preview.getBoundingClientRect().height + "px";
    }
    catch (e) {

    }

  })
});



HTMLElement.prototype.clear = function() {
  while (this.childNodes.length > 0) {
    this.removeChild(this.childNodes[0]);
  }
}
