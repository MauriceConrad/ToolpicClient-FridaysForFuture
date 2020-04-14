import { createElement } from "../helper.js"

export default function createResultsSlider(results) {
  const target = document.querySelector(".view-render .view-main .render-result");


  const swiperContainer = createElement("div", {
    className: "swiper-container",
    childs: [
      createElement("div", {
        className: "swiper-wrapper",
        childs: results.map((result, index) => {

          return createElement("div", {
            className: "swiper-slide",
            childs: [
              createElement("div", {
                className: "inner",
                childs: [
                  (() => {
                    if (result.blob.type.search(/video\/.*/) > -1) {
                      return createElement("video", {
                        className: "render-resource",
                        attributes: {
                          controls: true,
                          autoplay: true,
                          src: result.url
                        }
                      });
                    }
                    return createElement("img", {
                      className: "render-resource",
                      attributes: {
                        src: result.url
                      }
                    });
                  })()
                ]
              })
            ]
          })
        })
      }),
      createElement("div", { className: "swiper-pagination" }),
      createElement("div", { className: "swiper-scrollbar" })
    ]
  });

  target.clear();
  target.append(swiperContainer);

  var mySwiper = new Swiper(swiperContainer, {
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
    loop: results > 1
  });

}
