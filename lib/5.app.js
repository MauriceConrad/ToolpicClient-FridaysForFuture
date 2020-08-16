(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/SmartAction/components/Number/Number.js":
/*!*****************************************************!*\
  !*** ./src/SmartAction/components/Number/Number.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper */ "./src/helper.js");
/* harmony import */ var _SuperComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SuperComponent.js */ "./src/SmartAction/components/SuperComponent.js");





function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var style = 'src/SmartAction/components/Number/style.css';

var SmartActionNumber = /*#__PURE__*/function (_SmartActionSuperComp) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(SmartActionNumber, _SmartActionSuperComp);

  var _super = _createSuper(SmartActionNumber);

  function SmartActionNumber(descriptor) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SmartActionNumber);

    _this = _super.call(this, style, descriptor);
    var _descriptor$propertie = descriptor.properties,
        min = _descriptor$propertie.min,
        max = _descriptor$propertie.max,
        step = _descriptor$propertie.step;
    var slider = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "slider",
      childs: [Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        className: "line"
      }), Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        className: "thumb"
      })]
    });

    _this.root.append(slider);

    var thumb = _this.root.getElementsByClassName("thumb")[0];

    _this.on("touch", function (event) {
      if (_this.__alive) {
        var sliderBoundings = slider.getBoundingClientRect();
        var thumbWidth = thumb.getBoundingClientRect().width;
        var pos = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        };
        var diff = pos.x - sliderBoundings.x;
        var valueTheory = diff / sliderBoundings.width;
        var value = valueTheory >= 0 && valueTheory <= 1 ? valueTheory : Math.trunc(valueTheory);
        var valueRender = min + (max - min) * value;
        var valueStepped = Math.round(valueRender / step) * step;
        var valueCalc = (valueStepped - min) / (max - min);
        thumb.style.left = "calc(" + valueCalc * 100 + "% - " + valueCalc * thumbWidth + "px)";

        _this.emit("data", valueStepped);
      }
    });

    return _this;
  }

  return SmartActionNumber;
}(_SuperComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartActionNumber);

/***/ }),

/***/ "./src/SmartAction/components/SuperComponent.js":
/*!******************************************************!*\
  !*** ./src/SmartAction/components/SuperComponent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartActionSuperComponent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../EventEmitter */ "./src/EventEmitter.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var SmartActionSuperComponent = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SmartActionSuperComponent, _EventEmitter);

  var _super = _createSuper(SmartActionSuperComponent);

  function SmartActionSuperComponent(style, descriptor) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SmartActionSuperComponent);

    _this = _super.call(this);

    var self = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this); // Create super element


    _this.container = document.createElement("div");

    _this.container.classList.add("smart-action-component");

    var shadow = _this.container.attachShadow({
      mode: 'open'
    });

    _this.__alive = true;
    _this.__shadow = shadow; // Initalize style sheet

    _this.styleSheet = document.createElement("style");

    _this.styleSheet.setAttribute("scoped", true);

    console.log(_this.styleSheet);
    shadow.append(_this.styleSheet); // Initalize root element

    _this.root = document.createElement("div");
    shadow.append(_this.root);

    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var styleStr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(style);

            case 2:
              _context.next = 4;
              return _context.sent.text();

            case 4:
              styleStr = _context.sent;
              // Load styles to sheet
              _this.styleSheet.innerHTML = styleStr;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SmartActionSuperComponent, [{
    key: "kill",
    value: function kill() {
      this.__alive = false;
    }
  }]);

  return SmartActionSuperComponent;
}(_EventEmitter__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/SmartAction/components/Toggle/Toggle.js":
/*!*****************************************************!*\
  !*** ./src/SmartAction/components/Toggle/Toggle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper */ "./src/helper.js");
/* harmony import */ var _SuperComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SuperComponent.js */ "./src/SmartAction/components/SuperComponent.js");





function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var style = 'src/SmartAction/components/Toggle/style.css';

var SmartActionToggle = /*#__PURE__*/function (_SmartActionSuperComp) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(SmartActionToggle, _SmartActionSuperComp);

  var _super = _createSuper(SmartActionToggle);

  function SmartActionToggle(descriptor, rendererInstance) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SmartActionToggle);

    _this = _super.call(this, style, descriptor);
    var _descriptor$propertie = descriptor.properties,
        mode = _descriptor$propertie.mode,
        arrayKey = _descriptor$propertie.arrayKey,
        index = _descriptor$propertie.index;
    var main = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "toggle",
      childs: [Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
        className: "thumb"
      })]
    });

    _this.root.append(main);

    var initialized = false;

    _this.on("touch", function (event) {
      if (_this.__alive) {
        var pos = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        };
        var center = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["getRelElementsPos"])(main, [0.5, 0.5]);
        var toggled = pos.x >= center.x;

        if (toggled != main.classList.contains("toggled") || !initialized) {
          initialized = true;

          if (toggled) {
            main.classList.add("toggled");
          } else {
            main.classList.remove("toggled");
          }

          if (mode === "array") {
            var baseArray = Array.from(rendererInstance.data[arrayKey].__value);
            baseArray[index] = toggled;

            _this.emit("data", baseArray);
          } else {
            _this.emit("data", toggled);
          }
        }
      }
    });

    return _this;
  }

  return SmartActionToggle;
}(_SuperComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SmartActionToggle);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU21hcnRBY3Rpb24vY29tcG9uZW50cy9OdW1iZXIvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TbWFydEFjdGlvbi9jb21wb25lbnRzL1N1cGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TbWFydEFjdGlvbi9jb21wb25lbnRzL1RvZ2dsZS9Ub2dnbGUuanMiXSwibmFtZXMiOlsic3R5bGUiLCJTbWFydEFjdGlvbk51bWJlciIsImRlc2NyaXB0b3IiLCJwcm9wZXJ0aWVzIiwibWluIiwibWF4Iiwic3RlcCIsInNsaWRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjaGlsZHMiLCJyb290IiwiYXBwZW5kIiwidGh1bWIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib24iLCJldmVudCIsIl9fYWxpdmUiLCJzbGlkZXJCb3VuZGluZ3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0aHVtYldpZHRoIiwid2lkdGgiLCJwb3MiLCJ4IiwidG91Y2hlcyIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImRpZmYiLCJ2YWx1ZVRoZW9yeSIsInZhbHVlIiwiTWF0aCIsInRydW5jIiwidmFsdWVSZW5kZXIiLCJ2YWx1ZVN0ZXBwZWQiLCJyb3VuZCIsInZhbHVlQ2FsYyIsImxlZnQiLCJlbWl0IiwiU21hcnRBY3Rpb25TdXBlckNvbXBvbmVudCIsInNlbGYiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNoYWRvdyIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJfX3NoYWRvdyIsInN0eWxlU2hlZXQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0ZXh0Iiwic3R5bGVTdHIiLCJpbm5lckhUTUwiLCJFdmVudEVtaXR0ZXIiLCJTbWFydEFjdGlvblRvZ2dsZSIsInJlbmRlcmVySW5zdGFuY2UiLCJhcnJheUtleSIsImluZGV4IiwibWFpbiIsImluaXRpYWxpemVkIiwiY2VudGVyIiwiZ2V0UmVsRWxlbWVudHNQb3MiLCJ0b2dnbGVkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJiYXNlQXJyYXkiLCJBcnJheSIsImZyb20iLCJkYXRhIiwiX192YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBLElBQU1BLEtBQUssR0FBRyw2Q0FBZDs7SUFFTUMsaUI7Ozs7O0FBQ0osNkJBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEIsOEJBQU1GLEtBQU4sRUFBYUUsVUFBYjtBQURzQixnQ0FHS0EsVUFBVSxDQUFDQyxVQUhoQjtBQUFBLFFBR2RDLEdBSGMseUJBR2RBLEdBSGM7QUFBQSxRQUdUQyxHQUhTLHlCQUdUQSxHQUhTO0FBQUEsUUFHSkMsSUFISSx5QkFHSkEsSUFISTtBQUt0QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFhLENBQUMsS0FBRCxFQUFRO0FBQ2xDQyxlQUFTLEVBQUUsUUFEdUI7QUFFbENDLFlBQU0sRUFBRSxDQUNORiw2REFBYSxDQUFDLEtBQUQsRUFBUTtBQUNuQkMsaUJBQVMsRUFBRTtBQURRLE9BQVIsQ0FEUCxFQUlORCw2REFBYSxDQUFDLEtBQUQsRUFBUTtBQUNuQkMsaUJBQVMsRUFBRTtBQURRLE9BQVIsQ0FKUDtBQUYwQixLQUFSLENBQTVCOztBQVlBLFVBQUtFLElBQUwsQ0FBVUMsTUFBVixDQUFpQkwsTUFBakI7O0FBRUEsUUFBTU0sS0FBSyxHQUFHLE1BQUtGLElBQUwsQ0FBVUcsc0JBQVYsQ0FBaUMsT0FBakMsRUFBMEMsQ0FBMUMsQ0FBZDs7QUFFQSxVQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQixVQUFBQyxLQUFLLEVBQUk7QUFDeEIsVUFBSSxNQUFLQyxPQUFULEVBQWtCO0FBQ2hCLFlBQU1DLGVBQWUsR0FBR1gsTUFBTSxDQUFDWSxxQkFBUCxFQUF4QjtBQUNBLFlBQU1DLFVBQVUsR0FBR1AsS0FBSyxDQUFDTSxxQkFBTixHQUE4QkUsS0FBakQ7QUFF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OztBQUVBLFlBQUkyQyxPQUFPLElBQUlKLElBQUksQ0FBQ25CLFNBQUwsQ0FBZXdCLFFBQWYsQ0FBd0IsU0FBeEIsQ0FBWCxJQUFpRCxDQUFDSixXQUF0RCxFQUFtRTtBQUNqRUEscUJBQVcsR0FBRyxJQUFkOztBQUNBLGNBQUlHLE9BQUosRUFBYTtBQUNYSixnQkFBSSxDQUFDbkIsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO0FBQ0QsV0FGRCxNQUdLO0FBQ0hrQixnQkFBSSxDQUFDbkIsU0FBTCxDQUFleUIsTUFBZixDQUFzQixTQUF0QjtBQUNEOztBQUVELGNBQUlyQixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQixnQkFBTXNCLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdaLGdCQUFnQixDQUFDYSxJQUFqQixDQUFzQlosUUFBdEIsRUFBZ0NhLE9BQTNDLENBQWxCO0FBQ0FKLHFCQUFTLENBQUNSLEtBQUQsQ0FBVCxHQUFtQkssT0FBbkI7O0FBQ0Esa0JBQUs1QixJQUFMLENBQVUsTUFBVixFQUFrQitCLFNBQWxCO0FBQ0QsV0FKRCxNQUtLO0FBQ0gsa0JBQUsvQixJQUFMLENBQVUsTUFBVixFQUFrQjRCLE9BQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0EvQkQ7O0FBbEJ3QztBQW1EekM7OztFQXBENkIzQiwwRDs7QUFzRGpCbUIsZ0ZBQWYsRSIsImZpbGUiOiI1LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXInXG5cbmltcG9ydCBTbWFydEFjdGlvblN1cGVyQ29tcG9uZW50IGZyb20gJy4uL1N1cGVyQ29tcG9uZW50LmpzJ1xuXG5cbmNvbnN0IHN0eWxlID0gJ3NyYy9TbWFydEFjdGlvbi9jb21wb25lbnRzL051bWJlci9zdHlsZS5jc3MnO1xuXG5jbGFzcyBTbWFydEFjdGlvbk51bWJlciBleHRlbmRzIFNtYXJ0QWN0aW9uU3VwZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdG9yKSB7XG4gICAgc3VwZXIoc3R5bGUsIGRlc2NyaXB0b3IpO1xuXG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gZGVzY3JpcHRvci5wcm9wZXJ0aWVzO1xuXG4gICAgY29uc3Qgc2xpZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwic2xpZGVyXCIsXG4gICAgICBjaGlsZHM6IFtcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImxpbmVcIlxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInRodW1iXCJcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMucm9vdC5hcHBlbmQoc2xpZGVyKTtcblxuICAgIGNvbnN0IHRodW1iID0gdGhpcy5yb290LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aHVtYlwiKVswXTtcblxuICAgIHRoaXMub24oXCJ0b3VjaFwiLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fX2FsaXZlKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlckJvdW5kaW5ncyA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdGh1bWJXaWR0aCA9IHRodW1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXG4gICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICB4OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRpZmYgPSBwb3MueCAtIHNsaWRlckJvdW5kaW5ncy54O1xuXG4gICAgICAgIGNvbnN0IHZhbHVlVGhlb3J5ID0gZGlmZiAvIHNsaWRlckJvdW5kaW5ncy53aWR0aDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAodmFsdWVUaGVvcnkgPj0gMCAmJiB2YWx1ZVRoZW9yeSA8PSAxKSA/IHZhbHVlVGhlb3J5IDogTWF0aC50cnVuYyh2YWx1ZVRoZW9yeSk7XG5cbiAgICAgICAgY29uc3QgdmFsdWVSZW5kZXIgPSBtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlO1xuICAgICAgICBjb25zdCB2YWx1ZVN0ZXBwZWQgPSBNYXRoLnJvdW5kKHZhbHVlUmVuZGVyIC8gc3RlcCkgKiBzdGVwO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlQ2FsYyA9ICh2YWx1ZVN0ZXBwZWQgLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cbiAgICAgICAgdGh1bWIuc3R5bGUubGVmdCA9IFwiY2FsYyhcIiArICh2YWx1ZUNhbGMgKiAxMDApICsgXCIlIC0gXCIgKyAodmFsdWVDYWxjICogdGh1bWJXaWR0aCkgKyBcInB4KVwiO1xuXG4gICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgdmFsdWVTdGVwcGVkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbWFydEFjdGlvbk51bWJlcjtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vRXZlbnRFbWl0dGVyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0QWN0aW9uU3VwZXJDb21wb25lbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzdHlsZSwgZGVzY3JpcHRvcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIENyZWF0ZSBzdXBlciBlbGVtZW50XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbWFydC1hY3Rpb24tY29tcG9uZW50XCIpO1xuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuY29udGFpbmVyLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiAnb3BlbidcbiAgICB9KTtcblxuICAgIHRoaXMuX19hbGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLl9fc2hhZG93ID0gc2hhZG93O1xuXG4gICAgLy8gSW5pdGFsaXplIHN0eWxlIHNoZWV0XG4gICAgdGhpcy5zdHlsZVNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHRoaXMuc3R5bGVTaGVldC5zZXRBdHRyaWJ1dGUoXCJzY29wZWRcIiwgdHJ1ZSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdHlsZVNoZWV0KTtcbiAgICBzaGFkb3cuYXBwZW5kKHRoaXMuc3R5bGVTaGVldCk7XG5cbiAgICAvLyBJbml0YWxpemUgcm9vdCBlbGVtZW50XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGFkb3cuYXBwZW5kKHRoaXMucm9vdCk7XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVTdHIgPSBhd2FpdCAoYXdhaXQgZmV0Y2goc3R5bGUpKS50ZXh0KCk7XG4gICAgICAvLyBMb2FkIHN0eWxlcyB0byBzaGVldFxuICAgICAgdGhpcy5zdHlsZVNoZWV0LmlubmVySFRNTCA9IHN0eWxlU3RyXG4gICAgfSkoKTtcblxuICB9XG4gIGtpbGwoKSB7XG4gICAgdGhpcy5fX2FsaXZlID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGdldFJlbEVsZW1lbnRzUG9zIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVyJ1xuXG5pbXBvcnQgU21hcnRBY3Rpb25TdXBlckNvbXBvbmVudCBmcm9tICcuLi9TdXBlckNvbXBvbmVudC5qcydcblxuY29uc3Qgc3R5bGUgPSAnc3JjL1NtYXJ0QWN0aW9uL2NvbXBvbmVudHMvVG9nZ2xlL3N0eWxlLmNzcyc7XG5cbmNsYXNzIFNtYXJ0QWN0aW9uVG9nZ2xlIGV4dGVuZHMgU21hcnRBY3Rpb25TdXBlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0b3IsIHJlbmRlcmVySW5zdGFuY2UpIHtcbiAgICBzdXBlcihzdHlsZSwgZGVzY3JpcHRvcik7XG5cbiAgICBjb25zdCB7IG1vZGUsIGFycmF5S2V5LCBpbmRleCB9ID0gZGVzY3JpcHRvci5wcm9wZXJ0aWVzO1xuXG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInRvZ2dsZVwiLFxuICAgICAgY2hpbGRzOiBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJ0aHVtYlwiXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICB0aGlzLnJvb3QuYXBwZW5kKG1haW4pO1xuXG4gICAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKFwidG91Y2hcIiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX19hbGl2ZSkge1xuXG4gICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICB4OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2VudGVyID0gZ2V0UmVsRWxlbWVudHNQb3MobWFpbiwgWzAuNSwgMC41XSk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlZCA9IHBvcy54ID49IGNlbnRlci54O1xuXG4gICAgICAgIGlmICh0b2dnbGVkICE9IG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9nZ2xlZFwiKSB8fCAhaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlZFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlQXJyYXkgPSBBcnJheS5mcm9tKHJlbmRlcmVySW5zdGFuY2UuZGF0YVthcnJheUtleV0uX192YWx1ZSk7XG4gICAgICAgICAgICBiYXNlQXJyYXlbaW5kZXhdID0gdG9nZ2xlZDtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgYmFzZUFycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIHRvZ2dsZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNtYXJ0QWN0aW9uVG9nZ2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==