(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./src/application/createResultsSlider.js":
/*!************************************************!*\
  !*** ./src/application/createResultsSlider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createResultsSlider; });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");

function createResultsSlider(results) {
  var target = document.querySelector(".view-render .view-main .render-result");
  var swiperContainer = Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "swiper-container",
    childs: [Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "swiper-wrapper",
      childs: results.map(function (result, index) {
        return Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "swiper-slide",
          childs: [Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
            className: "inner",
            childs: [function () {
              if (result.blob.type.search(/video\/.*/) > -1) {
                return Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("video", {
                  className: "render-resource",
                  attributes: {
                    controls: true,
                    autoplay: true,
                    src: result.url
                  }
                });
              }

              return Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
                className: "render-resource",
                attributes: {
                  src: result.url
                }
              });
            }()]
          })]
        });
      })
    }), Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "swiper-pagination"
    }), Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "swiper-scrollbar"
    })]
  });
  target.clear();
  target.append(swiperContainer);
  var mySwiper = new Swiper(swiperContainer, {
    simulateTouch: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"pagination-bullet-custom ".concat(className, "\"></div>");
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    loop: results > 1
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vY3JlYXRlUmVzdWx0c1NsaWRlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVSZXN1bHRzU2xpZGVyIiwicmVzdWx0cyIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN3aXBlckNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjaGlsZHMiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImJsb2IiLCJ0eXBlIiwic2VhcmNoIiwiYXR0cmlidXRlcyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJzcmMiLCJ1cmwiLCJjbGVhciIsImFwcGVuZCIsIm15U3dpcGVyIiwiU3dpcGVyIiwic2ltdWxhdGVUb3VjaCIsInNjcm9sbGJhciIsImVsIiwiZHJhZ2dhYmxlIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsInJlbmRlckJ1bGxldCIsImtleWJvYXJkIiwiZW5hYmxlZCIsIm9ubHlJblZpZXdwb3J0IiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQ25ELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdDQUF2QixDQUFmO0FBR0EsTUFBTUMsZUFBZSxHQUFHQyxnRUFBYSxDQUFDLEtBQUQsRUFBUTtBQUMzQ0MsYUFBUyxFQUFFLGtCQURnQztBQUUzQ0MsVUFBTSxFQUFFLENBQ05GLGdFQUFhLENBQUMsS0FBRCxFQUFRO0FBQ25CQyxlQUFTLEVBQUUsZ0JBRFE7QUFFbkJDLFlBQU0sRUFBRVAsT0FBTyxDQUFDUSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBRXJDLGVBQU9MLGdFQUFhLENBQUMsS0FBRCxFQUFRO0FBQzFCQyxtQkFBUyxFQUFFLGNBRGU7QUFFMUJDLGdCQUFNLEVBQUUsQ0FDTkYsZ0VBQWEsQ0FBQyxLQUFELEVBQVE7QUFDbkJDLHFCQUFTLEVBQUUsT0FEUTtBQUVuQkMsa0JBQU0sRUFBRSxDQUNMLFlBQU07QUFDTCxrQkFBSUUsTUFBTSxDQUFDRSxJQUFQLENBQVlDLElBQVosQ0FBaUJDLE1BQWpCLENBQXdCLFdBQXhCLElBQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDN0MsdUJBQU9SLGdFQUFhLENBQUMsT0FBRCxFQUFVO0FBQzVCQywyQkFBUyxFQUFFLGlCQURpQjtBQUU1QlEsNEJBQVUsRUFBRTtBQUNWQyw0QkFBUSxFQUFFLElBREE7QUFFVkMsNEJBQVEsRUFBRSxJQUZBO0FBR1ZDLHVCQUFHLEVBQUVSLE1BQU0sQ0FBQ1M7QUFIRjtBQUZnQixpQkFBVixDQUFwQjtBQVFEOztBQUNELHFCQUFPYixnRUFBYSxDQUFDLEtBQUQsRUFBUTtBQUMxQkMseUJBQVMsRUFBRSxpQkFEZTtBQUUxQlEsMEJBQVUsRUFBRTtBQUNWRyxxQkFBRyxFQUFFUixNQUFNLENBQUNTO0FBREY7QUFGYyxlQUFSLENBQXBCO0FBTUQsYUFqQkQsRUFETTtBQUZXLFdBQVIsQ0FEUDtBQUZrQixTQUFSLENBQXBCO0FBNEJELE9BOUJPO0FBRlcsS0FBUixDQURQLEVBbUNOYixnRUFBYSxDQUFDLEtBQUQsRUFBUTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFSLENBbkNQLEVBb0NORCxnRUFBYSxDQUFDLEtBQUQsRUFBUTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFSLENBcENQO0FBRm1DLEdBQVIsQ0FBckM7QUEwQ0FMLFFBQU0sQ0FBQ2tCLEtBQVA7QUFDQWxCLFFBQU0sQ0FBQ21CLE1BQVAsQ0FBY2hCLGVBQWQ7QUFFQSxNQUFJaUIsUUFBUSxHQUFHLElBQUlDLE1BQUosQ0FBV2xCLGVBQVgsRUFBNEI7QUFDekNtQixpQkFBYSxFQUFFLEtBRDBCO0FBRXpDQyxhQUFTLEVBQUU7QUFDVEMsUUFBRSxFQUFFLG1CQURLO0FBRVRDLGVBQVMsRUFBRTtBQUZGLEtBRjhCO0FBTXpDQyxjQUFVLEVBQUU7QUFDVkYsUUFBRSxFQUFFLG9CQURNO0FBRVZiLFVBQUksRUFBRSxTQUZJO0FBR1ZnQixlQUFTLEVBQUUsSUFIRDtBQUlWQyxrQkFBWSxFQUFFLHNCQUFTbkIsS0FBVCxFQUFnQkosU0FBaEIsRUFBMkI7QUFDdkMsK0RBQWdEQSxTQUFoRDtBQUNEO0FBTlMsS0FONkI7QUFjekN3QixZQUFRLEVBQUU7QUFDUkMsYUFBTyxFQUFFLElBREQ7QUFFUkMsb0JBQWMsRUFBRTtBQUZSLEtBZCtCO0FBa0J6Q0MsUUFBSSxFQUFFakMsT0FBTyxHQUFHO0FBbEJ5QixHQUE1QixDQUFmO0FBcUJELEMiLCJmaWxlIjoiNDguYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZXN1bHRzU2xpZGVyKHJlc3VsdHMpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3LXJlbmRlciAudmlldy1tYWluIC5yZW5kZXItcmVzdWx0XCIpO1xuXG5cbiAgY29uc3Qgc3dpcGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInN3aXBlci1jb250YWluZXJcIixcbiAgICBjaGlsZHM6IFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwic3dpcGVyLXdyYXBwZXJcIixcbiAgICAgICAgY2hpbGRzOiByZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN3aXBlci1zbGlkZVwiLFxuICAgICAgICAgICAgY2hpbGRzOiBbXG4gICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpbm5lclwiLFxuICAgICAgICAgICAgICAgIGNoaWxkczogW1xuICAgICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5ibG9iLnR5cGUuc2VhcmNoKC92aWRlb1xcLy4qLykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwidmlkZW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlbmRlci1yZXNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVzdWx0LnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwicmVuZGVyLXJlc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXN1bHQudXJsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzd2lwZXItcGFnaW5hdGlvblwiIH0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzd2lwZXItc2Nyb2xsYmFyXCIgfSlcbiAgICBdXG4gIH0pO1xuXG4gIHRhcmdldC5jbGVhcigpO1xuICB0YXJnZXQuYXBwZW5kKHN3aXBlckNvbnRhaW5lcik7XG5cbiAgdmFyIG15U3dpcGVyID0gbmV3IFN3aXBlcihzd2lwZXJDb250YWluZXIsIHtcbiAgICBzaW11bGF0ZVRvdWNoOiBmYWxzZSxcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbihpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tYnVsbGV0LWN1c3RvbSAkeyBjbGFzc05hbWUgfVwiPjwvZGl2PmA7XG4gICAgICB9XG4gICAgfSxcbiAgICBrZXlib2FyZDoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG9ubHlJblZpZXdwb3J0OiBmYWxzZSxcbiAgICB9LFxuICAgIGxvb3A6IHJlc3VsdHMgPiAxXG4gIH0pO1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9