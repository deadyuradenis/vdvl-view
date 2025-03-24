/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 709:
/***/ (() => {

(function (window) {
  var lib = window.app.lib;
  var throttle = lib.throttle;
  var savedWindowWidth;
  var savedScrollbarWidth;
  var handleResize = function handleResize() {
    var windowWidth = window.innerWidth;
    var documentWidth = document.documentElement.clientWidth;
    var scrollbarWidth = windowWidth - documentWidth;
    if (savedWindowWidth === windowWidth) return;
    savedWindowWidth = windowWidth;
    if (savedScrollbarWidth === scrollbarWidth) return;
    savedScrollbarWidth = scrollbarWidth;
    document.body.style.setProperty('--scroll-width', "".concat(savedScrollbarWidth, "px"));
  };
  handleResize();
  window.addEventListener('resize', throttle(handleResize, 300));
})(window);

/***/ }),

/***/ 549:
/***/ (() => {

(function (window) {
  var _window$app$lib = window.app.lib,
    throttle = _window$app$lib.throttle,
    setResizeObserver = _window$app$lib.setResizeObserver;
  var mount = function mount() {
    var _document = document,
      body = _document.body;
    var header = document.querySelector('[data-component="header"]');
    var elements = [{
      selector: '[data-component="header"]',
      property: 'header-height'
    }, {
      selector: '.footer',
      property: 'footer-height'
    }];
    elements.forEach(function (item) {
      var selector = item.selector,
        property = item.property;
      var element = document.querySelector(selector);
      if (!document.querySelector(selector)) {
        body.style.setProperty("--".concat(property), '0px');
        return;
      }
      setResizeObserver(element, throttle(function () {
        body.style.setProperty("--".concat(property), "".concat(element.offsetHeight, "px"));
      }, 300));
    });
    if (document.querySelector('[data-component="header-nav"]')) {
      var component = document.querySelector('[data-component="header-nav"]');
      var sourceList = component.querySelector('ul');
      var trigger = header.querySelector('[data-header-nav="trigger"]');
      var dropdown = header.querySelector('[data-header-nav="dropdown"]');
      var dropdownList = header.querySelector('[data-header-nav="dropdown-list"]');
      var links = component.querySelectorAll('li');
      var check = function check() {
        var dropdownLast = dropdownList.querySelectorAll('li').length ? dropdownList.querySelectorAll('li')[dropdownList.querySelectorAll('li').length - 1] : '';
        if (component.offsetWidth - 60 < sourceList.offsetWidth) {
          hide();
        } else if (dropdownLast && component.offsetWidth - 60 >= Number(sourceList.offsetWidth + dropdownLast.offsetWidth + 40)) {
          show();
        }
        if (dropdownList.querySelector('li')) {
          trigger.classList.add('is-visible');
        } else {
          trigger.classList.remove('is-visible');
        }
      };
      var hide = function hide() {
        links = component.querySelectorAll('li');
        dropdownList.append(links[links.length - 1]);
        check();
      };
      var show = function show() {
        var tempLinks = dropdownList.querySelectorAll('li');
        sourceList.prepend(tempLinks[tempLinks.length - 1]);
        check();
      };
      var mobile = function mobile() {
        if (component.querySelector('li')) {
          links = component.querySelectorAll('li');
          links.forEach(function (item) {
            dropdownList.append(item);
          });
        }
      };
      if (window.innerWidth >= 1024) {
        check();
      } else {
        mobile();
      }
      trigger.addEventListener('click', function () {
        trigger.classList.toggle('is-active');
        dropdown.classList.toggle('is-open');
      });
      var windowWidth = window.innerWidth;
      var savedWindowWidth = windowWidth;
      window.addEventListener('resize', throttle(function () {
        windowWidth = window.innerWidth;
        if (savedWindowWidth === windowWidth) {
          return;
        }
        if (savedWindowWidth !== windowWidth) {
          savedWindowWidth = windowWidth;
          if (window.innerWidth >= 1024) {
            check();
          } else {
            mobile();
          }
        }
      }, 300));
    }
  };
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 258:
/***/ (() => {

(function (window) {
  var _window$app$lib = window.app.lib,
    throttle = _window$app$lib.throttle,
    setResizeObserver = _window$app$lib.setResizeObserver;
  var build = function build(element) {
    var header = element.querySelector('[data-product-table-item="header"]');
    var body = element.querySelector('[data-product-table-item="body"]');
    var inner = element.querySelector('[data-product-table-item="inner"]');
    var check = function check(current) {
      if (window.innerWidth >= 1024) return;
      var accordions = document.querySelectorAll('[data-component="product-table-item"]');
      accordions.forEach(function (item) {
        var itemBody = item.querySelector('[data-product-table-item="body"]');
        var itemInner = item.querySelector('[data-product-table-item="inner"]');
        if (current !== item) {
          item.classList.remove('is-open');
          itemBody.style.height = '';
        } else if (item.classList.contains('is-open')) {
          itemBody.style.height = "".concat(itemInner.offsetHeight, "px");
        } else {
          itemBody.style.height = '';
        }
      });
    };
    if (element.classList.contains('is-open')) {
      check(element);
    }
    var update = function update() {
      body.style.height = "".concat(inner.offsetHeight, "px");
    };
    setResizeObserver(inner, throttle(function () {
      if (element.classList.contains('is-open')) update();
    }, 300));
    header.onclick = function () {
      element.classList.toggle('is-open');
      check(element);
    };
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="product-table-item"]'));
    elements.forEach(build);
  };
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 842:
/***/ (() => {

(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var breakpoints = {
    gxxl: 2559,
    gxl: 1919,
    // Основной
    glg: 1679,
    gsb: 1439,
    xxxl: 1259,
    // Основной
    xxl: 1139,
    xl: 1080,
    lg: 1023,
    // Основной
    sb: 991,
    md: 833,
    rg: 767,
    // Основной
    sm: 575,
    xs: 423,
    // Основной
    xxs: 359
  };
  var transition = 300;
  var events = {}; // кастомные события

  window.app.config = {
    events: events,
    breakpoints: breakpoints,
    transition: transition
    // ...
  };
})(window);

/***/ }),

/***/ 63:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var setObserver = function setObserver(element, handleObserve) {
    var manualConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread({
      childList: true
    }, manualConfig);
    var observer = new MutationObserver(function () {
      return handleObserve(element);
    });
    observer.observe(element, config);
  };
  var debounce = function debounce(callee, timeoutMs) {
    return function perform() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(function () {
        return callee.apply(void 0, args);
      }, timeoutMs);
    };
  };
  var throttle = function throttle(callee, timeout) {
    var timer = null;
    return function perform() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (timer) return;
      timer = setTimeout(function () {
        callee.apply(void 0, args);
        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  var setResizeObserver = function setResizeObserver(element, handleObserve) {
    var observer = new ResizeObserver(function () {
      return handleObserve(element);
    });
    observer.observe(element);
  };
  window.app.lib = {
    setObserver: setObserver,
    debounce: debounce,
    throttle: throttle,
    setResizeObserver: setResizeObserver
  };
})(window);

/***/ }),

/***/ 292:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import {Modal} from 'bootstrap';

(function (window) {
  var init = function init(element) {
    var elementModal = new bootstrap.Modal(element);
    element.addEventListener('shown.bs.modal', function () {
      if (element.querySelector('[autofocus]')) element.querySelector('[autofocus]').focus();
    });
    return elementModal;
  };
  var compileId = function compileId(element) {
    var elementId = element.getAttribute('id').toLowerCase();
    var parts = elementId.split('-');
    parts.shift();
    var id = parts.map(function (part, index) {
      return index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1);
    }).join('');
    return id;
  };
  var build = function build(element) {
    var id = compileId(element);
    var elementModal = init(element);
    window.app.modals = _objectSpread(_objectSpread({}, window.app.modals), {}, _defineProperty({}, id, elementModal));
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('.modal'));
    elements.forEach(build);
  };
  window.app.modals = _objectSpread(_objectSpread({}, window.app.modals), {}, {
    init: build
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);

// document.addEventListener('DOMContentLoaded', () => {
//   window.app.modals.importData.show()
// })

/***/ }),

/***/ 770:
/***/ (() => {

(function (window) {
  var transition = window.app.config.transition;
  var getScrollWidth = function getScrollWidth() {
    var windowWidth = window.innerWidth;
    var documentWidth = document.documentElement.clientWidth;
    var scrollbarWidth = windowWidth - documentWidth;
    return scrollbarWidth;
  };
  var scrollWidth = getScrollWidth();
  var hideBackdrop = function hideBackdrop() {
    var backdrop = document.querySelector('.backdrop');
    if (backdrop) {
      backdrop.classList.remove('is-active');
      document.body.classList.remove('_lock');
      document.body.style.setProperty('--current-scroll-width', '0px');
      setTimeout(function () {
        if (document.querySelector('.backdrop')) backdrop.parentNode.removeChild(backdrop);
      }, transition + 150);
    }
  };
  var handleBackdropClick = function handleBackdropClick() {
    if (window.app.search) window.app.search.hide();
    if (window.app.catalog) window.app.catalog.hide();
    if (window.app.filter) window.app.filter.hide();
    if (window.app.sortBy) window.app.sortBy.hide();
    if (window.app.accountAside) window.app.accountAside.hide();
    if (window.app.chat) window.app.chat.hide();
    hideBackdrop();
  };
  var showBackdrop = function showBackdrop() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
    var zIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var backdrop = document.querySelector('.backdrop');
    var build = function build() {
      var newBackdrop = document.createElement('div');
      newBackdrop.classList.add('backdrop');
      newBackdrop.addEventListener('click', handleBackdropClick);
      container.appendChild(newBackdrop);
      document.body.classList.add('_lock');
      document.body.style.setProperty('--current-scroll-width', "".concat(scrollWidth, "px"));
      if (zIndex) newBackdrop.style.zIndex = zIndex;
      setTimeout(function () {
        newBackdrop.classList.add('is-active');
      }, 10);
    };
    if (!backdrop) {
      build();
    } else if (!container.querySelector('.backdrop')) {
      setTimeout(build, transition + 10);
    }
  };
  window.app.backdrop = {
    show: showBackdrop,
    hide: hideBackdrop
  };
})(window);

/***/ }),

/***/ 900:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  var build = function build(element) {
    var actionPlus = element.querySelector('[data-counter-action="plus"]');
    var actionMinus = element.querySelector('[data-counter-action="minus"]');
    var input = element.querySelector('[data-counter="input"]');
    var button = element.querySelector('[data-counter="button"]');
    var result = element.querySelector('[data-counter="result"]');
    var getData = function getData() {
      var _input$dataset = input.dataset,
        step = _input$dataset.step,
        min = _input$dataset.min,
        max = _input$dataset.max;
      var stepNumber = Number(step);
      var minNumber = Number(min);
      var maxNumber = Number(max);
      var valueNumber = Number(input.value);
      return {
        step: stepNumber,
        min: minNumber,
        max: maxNumber,
        value: valueNumber
      };
    };
    var update = function update() {
      var _getData = getData(),
        max = _getData.max,
        min = _getData.min,
        value = _getData.value;
      if (value >= max) {
        actionPlus.setAttribute('disabled', 'disabled');
      } else {
        actionPlus.removeAttribute('disabled');
      }
      if (value <= min) {
        actionMinus.setAttribute('disabled', 'disabled');
        if (button) button.classList.remove('is-hide');
      } else {
        actionMinus.removeAttribute('disabled');
      }
      result.innerText = value;
    };
    update();
    actionPlus.addEventListener('click', function () {
      var _getData2 = getData(),
        step = _getData2.step,
        max = _getData2.max,
        value = _getData2.value;
      var newValue = value + step;
      input.value = newValue <= max ? newValue : max;
      update();
    });
    actionMinus.addEventListener('click', function () {
      var _getData3 = getData(),
        step = _getData3.step,
        min = _getData3.min,
        value = _getData3.value;
      var newValue = value - step;
      input.value = newValue >= min ? newValue : min;
      update();
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="counter"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'counter': {
      init: build
    }
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 672:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import ScrollBooster from 'scrollbooster';

(function (window) {
  var _window$app$lib = window.app.lib,
    throttle = _window$app$lib.throttle,
    setResizeObserver = _window$app$lib.setResizeObserver;
  var build = function build(element) {
    var content = element.querySelector('[data-drag-scroll="content"]');
    var dragScrollElement = new ScrollBooster({
      scrollMode: 'transform',
      direction: 'horizontal',
      emulateScroll: true,
      viewport: element,
      content: content
    });
    content.classList.add('is-movable');
    setResizeObserver(content, throttle(function () {
      dragScrollElement.updateMetrics();
    }, 300));
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="drag-scroll"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'drag-scroll': {
      init: build
    }
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 75:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import IMask from 'imask';

var setMask = function setMask(element) {
  var input = element.querySelector('[data-input="native"]');
  var currentMask = input.getAttribute('data-mask');
  var mask = {
    number: function number() {
      input.addEventListener('input', function () {
        input.value = input.value.replace(/\D/g, '');
      });
    },
    letters: function letters() {
      input.addEventListener('input', function () {
        input.value = input.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
      });
    },
    phone: function phone() {
      var phoneMaskSettings = {
        mask: [{
          mask: '8 (000) 000-00-00',
          startsWith: '8',
          lazy: true
        }, {
          mask: '+{7} (000) 000-00-00',
          startsWith: '7',
          lazy: true
        }, {
          mask: '+{7} (000) 000-00-00',
          startsWith: '',
          lazy: true
        }, {
          mask: '+{7} (000) 000-00-00',
          startsWith: '9',
          lazy: true
        }],
        dispatch: function dispatch(appended, dynamicMasked) {
          var number = (dynamicMasked.value + appended).replace(/\D/g, '');
          return dynamicMasked.compiledMasks.find(function (m) {
            return number.indexOf(m.startsWith) === 0;
          }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
        }
      };
      IMask(input, phoneMaskSettings);
    },
    cardNumber: function cardNumber() {
      var cardNumberMaskSettings = {
        mask: '0000 0000 0000 0000',
        lazy: true
      };
      IMask(input, cardNumberMaskSettings);
    },
    cardCVV: function cardCVV() {
      var cardCVVMaskSettings = {
        mask: '000',
        lazy: true
      };
      IMask(input, cardCVVMaskSettings);
    },
    cardDate: function cardDate() {
      var cardDateMaskSettings = {
        mask: '00 / 00',
        lazy: true
      };
      IMask(input, cardDateMaskSettings);
    },
    mail: function mail() {},
    phoneEmail: function phoneEmail() {
      input.addEventListener('input', function () {
        if (/^\d/.test(input.value)) {
          mask.phone();
        } else {
          input.value = input.value.replace(/[^a-zA-Z0-9@.\-_\s]/g, '');
        }
      });
    },
    timeRange: function timeRange() {
      var timeMaskSettings = {
        mask: 'HH:MM - HH:MM',
        blocks: {
          HH: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 23,
            maxLength: 2
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 59,
            maxLength: 2
          }
        },
        format: function format(date) {
          var hours = date.getHours().toString().padStart(2, '0');
          var minutes = date.getMinutes().toString().padStart(2, '0');
          return "".concat(hours, ":").concat(minutes);
        },
        parse: function parse(str) {
          var _str$split$map = str.split(':').map(Number),
            _str$split$map2 = _slicedToArray(_str$split$map, 2),
            hours = _str$split$map2[0],
            minutes = _str$split$map2[1];
          return new Date(0, 0, 0, hours, minutes);
        }
      };
      IMask(input, timeMaskSettings);
    },
    time: function time() {
      var timeMaskSettings = {
        mask: 'HH:MM',
        blocks: {
          HH: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 23,
            maxLength: 2
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 59,
            maxLength: 2
          }
        },
        format: function format(date) {
          var hours = date.getHours().toString().padStart(2, '0');
          var minutes = date.getMinutes().toString().padStart(2, '0');
          return "".concat(hours, ":").concat(minutes);
        },
        parse: function parse(str) {
          var _str$split$map3 = str.split(':').map(Number),
            _str$split$map4 = _slicedToArray(_str$split$map3, 2),
            hours = _str$split$map4[0],
            minutes = _str$split$map4[1];
          return new Date(0, 0, 0, hours, minutes);
        }
      };
      IMask(input, timeMaskSettings);
    },
    price: function price() {
      var priceMaskSettings = {
        mask: [{
          mask: Number,
          // Тип маски
          scale: 0,
          // Нет дробной части
          thousandsSeparator: ' ',
          // Разделитель тысяч
          padFractionalZeros: false,
          normalizeZeros: true,
          radix: ',',
          // Разделитель десятичной части (если нужно)
          mapToRadix: ['.'] // Позволяет вводить точку как разделитель
        }]
      };

      IMask(input, priceMaskSettings);
    }
  };
  switch (currentMask) {
    case 'number':
      mask.number();
      break;
    case 'letters':
      mask.letters();
      break;
    case 'phone':
      mask.phone();
      break;
    case 'mail':
      mask.mail();
      break;
    case 'phone-email':
      mask.phoneEmail();
      break;
    case 'time-range':
      mask.timeRange();
      break;
    case 'time':
      mask.time();
      break;
    case 'price':
      mask.price();
      break;
    default:
      break;
  }
};
var validate = function validate(element) {
  var input = element.querySelector('[data-input="native"]');
  var mask = input.getAttribute('data-mask');
  switch (mask) {
    case 'mail':
      var regexpMail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$|@\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]$/i;
      return regexpMail.test(input.value);
    case 'phone':
      var regexpPhone = /(7|8)\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
      return regexpPhone.test(input.value);
    case 'phone-email':
      var regexpPhoneEmail;
      if (/^\d/.test(input.value)) {
        regexpPhoneEmail = /(7|8)\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
      } else {
        regexpPhoneEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$|@\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]$/i;
      }
      return regexpPhoneEmail.test(input.value);
    case 'time-range':
      var regexpTimeRange = /^(?:[01]\d|2[0-3]):[0-5]\d\s-\s(?:[01]\d|2[0-3]):[0-5]\d$/;
      return regexpTimeRange.test(input.value);
    case 'time':
      var regexpTime = /^([01]\d|2[0-3]):?([0-5]\d)$/;
      return regexpTime.test(input.value);
    case 'price':
      var regexpPrice = /^\d{1,3}(?: \d{3})*$/;
      return regexpPrice.test(input.value);
    default:
      return input.value !== '';
  }
};
var status = {
  add: function add(element, statusName) {
    element.classList.add("is-".concat(statusName));
  },
  remove: function remove(element, statusName) {
    element.classList.remove("is-".concat(statusName));
  }
};
var check = function check(element) {
  var input = element.querySelector('[data-input="native"]');
  var required = input.getAttribute('data-required');
  if (required) {
    var result = validate(element);
    if (result) {
      status.add(element, 'success');
      status.remove(element, 'error');
    } else {
      status.add(element, 'error');
      status.remove(element, 'success');
    }
  }
  if (input.value !== '') {
    status.add(element, 'filled');
  } else {
    status.remove(element, 'filled');
  }
};
var setAutoheight = function setAutoheight(element) {
  var input = element.querySelector('[data-input="native"]');
  element.classList.add('input--autoheight');
  var adjustHeight = function adjustHeight() {
    input.style.height = '';
    input.style.height = "".concat(input.scrollHeight, "px");
  };
  input.addEventListener('input', adjustHeight);
  if (input.value !== '') {
    adjustHeight();
  }
};
var setTypeSwitcher = function setTypeSwitcher(element) {
  var input = element.querySelector('[data-input="native"]');
  var trigger = element.querySelector('[data-input="switch"]');
  trigger.addEventListener('click', function () {
    if (input.type === 'password') {
      trigger.classList.add('is-active');
      input.setAttribute('type', 'text');
    } else {
      trigger.classList.remove('is-active');
      input.setAttribute('type', 'password');
    }
  });
};
var init = function init(element) {
  var input = element.querySelector('[data-input="native"]');
  if (input.getAttribute('data-autoheight')) {
    setAutoheight(element);
  }
  if (element.querySelector('[data-input="switch"]')) {
    setTypeSwitcher(element);
  }
  setMask(element);

  // Events

  input.addEventListener('change', function () {
    check(element);
  });
  input.addEventListener('blur', function () {
    status.remove(element, 'focused');
    check(element);
  });
  input.addEventListener('focus', function () {
    status.remove(element, 'error');
    status.remove(element, 'filled');
    status.remove(element, 'success');
    status.add(element, 'focused');
  });
};
(function (window) {
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="input"]'));
    elements.forEach(init);
  };
  document.addEventListener('DOMContentLoaded', mount);
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'input': {
      init: init,
      check: check,
      status: status,
      validate: validate,
      setMask: setMask
    }
  });
})(window);

/***/ }),

/***/ 237:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  var _window$app$lib = window.app.lib,
    throttle = _window$app$lib.throttle,
    setResizeObserver = _window$app$lib.setResizeObserver;
  var build = function build(element) {
    var block = element.querySelector('[data-more="block"]');
    var content = element.querySelector('[data-more="content"]');
    var trigger = element.querySelector('[data-more="trigger"]');
    var checkVisibility = function checkVisibility() {
      if (block.offsetHeight < content.offsetHeight) {
        trigger.classList.add('is-visible');
      } else {
        trigger.classList.remove('is-visible');
      }
    };
    var update = function update() {
      block.style.maxHeight = "".concat(content.offsetHeight, "px");
    };
    setResizeObserver(content, throttle(function () {
      if (block.classList.contains('is-expanded')) update();
    }, 300));
    checkVisibility();
    trigger.addEventListener('click', function () {
      block.classList.toggle('is-expanded');
      trigger.classList.toggle('is-swapped');
      if (block.classList.contains('is-expanded')) {
        block.style.maxHeight = "".concat(content.offsetHeight, "px");
      } else {
        block.style.maxHeight = '';
      }
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="more"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'more': {
      init: build
    }
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 706:
/***/ (() => {

(function (window) {
  var config = {
    childList: true,
    subtree: true
  };
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof HTMLElement)) return;
        if (node.getAttribute('data-component')) {
          var componentName = node.getAttribute('data-component');
          if (window.app.components[componentName]) window.app.components[componentName].init(node);
        }
        if (node.querySelector('[data-component]')) {
          var nodeComponents = Array.from(node.querySelectorAll('[data-component]'));
          nodeComponents.forEach(function (nodeComponent) {
            var componentName = nodeComponent.getAttribute('data-component');
            if (window.app.components[componentName]) window.app.components[componentName].init(nodeComponent);
          });
        }
      });
    });
  });
  var mount = function mount() {
    observer.observe(document, config);
  };
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 618:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  var build = function build(element) {
    var links = element.querySelectorAll('[data-tabs="link"]');
    var items = element.querySelectorAll('[data-tabs="item"]');
    var checkActiveLink = function checkActiveLink() {
      if (!element.querySelector('[data-tabs="link"].is-active')) {
        element.querySelectorAll('[data-tabs="link"]')[0].classList.add('is-active');
      }
      var activeLink = element.querySelector('[data-tabs="link"].is-active');
      var activeIndex = activeLink.getAttribute('data-tabs-index');
      if (element.querySelector("[data-tabs=\"item\"][data-tabs-index=\"".concat(activeIndex, "\"]"))) {
        var activeItem = element.querySelector("[data-tabs=\"item\"][data-tabs-index=\"".concat(activeIndex, "\"]"));
        activeItem.classList.add('is-active');
      }
    };
    var initGroup = function initGroup(group) {
      group.forEach(function (groupItem, index) {
        groupItem.setAttribute('data-tabs-index', index);
      });
    };
    var initTabs = function initTabs() {
      initGroup(links);
      initGroup(items);
      checkActiveLink();
    };
    var clear = function clear() {
      links.forEach(function (link) {
        link.classList.remove('is-active');
      });
      items.forEach(function (item) {
        item.classList.remove('is-active');
      });
    };
    initTabs();
    links.forEach(function (link) {
      var linkIndex = link.getAttribute('data-tabs-index');
      link.addEventListener('click', function () {
        clear();
        link.classList.add('is-active');
        if (element.querySelector("[data-tabs=\"item\"][data-tabs-index=\"".concat(linkIndex, "\"]"))) {
          var currentItem = element.querySelector("[data-tabs=\"item\"][data-tabs-index=\"".concat(linkIndex, "\"]"));
          currentItem.classList.add('is-active');
        }
      });
      if (links.length < 2) {
        link[0].classList.add('is-active');
        var currentIndex = link[0].getAttribute('data-tabs-index');
        if (element.querySelector("[data-tabs=\"item\"][data-tabs-index=\"".concat(currentIndex, "\"]"))) {
          var currentItem = element.querySelector("[data-tabs=\"item\"][data-tabs-index=\"".concat(currentIndex, "\"]"));
          currentItem.classList.add('is-active');
        }
      }
      ;
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="tabs"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'tabs': {
      init: build
    }
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/core/lib/js/index.js
var js = __webpack_require__(63);
// EXTERNAL MODULE: ./src/core/config/js/index.js
var config_js = __webpack_require__(842);
// EXTERNAL MODULE: ./src/core/base/js/scroll.js
var js_scroll = __webpack_require__(709);
;// CONCATENATED MODULE: ./src/core/base/js/index.js

// EXTERNAL MODULE: ./src/core/ui/observer/index.js
var observer = __webpack_require__(706);
// EXTERNAL MODULE: ./src/core/ui/input/input/index.js
var input = __webpack_require__(75);
;// CONCATENATED MODULE: ./src/core/ui/input/index.js

// import './input-file/index.js';
// EXTERNAL MODULE: ./src/core/ui/counter/index.js
var counter = __webpack_require__(900);
// EXTERNAL MODULE: ./src/core/ui/more/index.js
var more = __webpack_require__(237);
// EXTERNAL MODULE: ./src/core/ui/drag-scroll/index.js
var drag_scroll = __webpack_require__(672);
;// CONCATENATED MODULE: ./src/core/ui/slider/configs.js
// import { Navigation, Pagination, Autoplay, EffectFade, Thumbs, Mousewheel } from 'swiper/modules';

var getConfig = function getConfig(slider, id, sliders) {
  var transition = window.app.config.transition;
  var configs = {
    "default": {
      id: 'default',
      config: {
        // modules: [Navigation, Pagination],
        spaceBetween: 10,
        speed: transition * 3,
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: slider.querySelector('[data-slider-button="next"]'),
          prevEl: slider.querySelector('[data-slider-button="prev"]')
        }
      }
    },
    intro: {
      id: 'intro',
      config: {
        // modules: [Navigation, Pagination, Autoplay], 
        spaceBetween: 0,
        speed: transition * 4,
        watchSlidesProgress: true,
        slidesPerView: 1,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
          waitForTransition: false
        },
        navigation: {
          nextEl: slider.querySelector('[data-slider-button="next"]'),
          prevEl: slider.querySelector('[data-slider-button="prev"]')
        },
        pagination: {
          el: slider.querySelector('[data-slider="pagination"]'),
          clickable: true,
          bulletClass: 'slider__pagination-item'
        }
      }
    },
    partners: {
      id: 'partners',
      config: {
        // modules: [Navigation, ], 
        spaceBetween: 70,
        speed: transition * 3,
        autoHeight: true,
        watchSlidesProgress: true,
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: slider.querySelector('[data-slider-button="next"]'),
          prevEl: slider.querySelector('[data-slider-button="prev"]')
        },
        breakpoints: {
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 2
          },
          1260: {
            slidesPerView: 3
          }
        }
      }
    },
    comments: {
      id: 'comments',
      config: {
        // modules: [Navigation, ], 
        spaceBetween: 24,
        speed: transition * 3,
        autoHeight: true,
        watchSlidesProgress: true,
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: document.querySelector('[data-slider-navigation-id="comments"] [data-slider-button="next"]'),
          prevEl: document.querySelector('[data-slider-navigation-id="comments"] [data-slider-button="prev"]')
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }
      }
    },
    products: {
      id: 'products',
      config: {
        // modules: [Navigation ], 
        speed: transition * 3,
        spaceBetween: 20,
        slidesPerView: 2,
        autoHeight: false,
        navigation: {
          nextEl: document.querySelector('[data-slider-button="next"]'),
          prevEl: document.querySelector('[data-slider-button="prev"]')
        },
        breakpoints: {
          1023: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1259: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        }
      }
    },
    'product-thumbs': {
      id: 'product-thumbs',
      config: {
        // modules: [Thumbs], 
        slidesPerView: 'auto',
        autoHeight: true,
        speed: transition,
        direction: 'vertical',
        watchSlidesProgress: true
      }
    },
    product: {
      id: 'product',
      config: {
        // modules: [Autoplay, Thumbs], 
        speed: transition * 3,
        slidesPerView: 1,
        autoHeight: false,
        watchSlidesProgress: true,
        thumbs: {
          swiper: sliders['product-thumbs']
        }
      }
    }

    // old

    // article: {
    //   id: 'article',
    //   config: {
    //     modules: [Navigation, Pagination], 
    //     spaceBetween: 16,
    //     speed: transition * 3,
    //     slidesPerView: 1,
    //     autoHeight: true, 
    //     navigation: {
    //       nextEl: slider.querySelector('[data-slider-button="next"]'),
    //       prevEl: slider.querySelector('[data-slider-button="prev"]'),
    //     },
    //     pagination: {
    //       el: slider.querySelector('[data-slider="pagination"]'),
    //       clickable: true,
    //       bulletClass: 'slider__pagination-item',
    //     },
    //   },
    // },
    // 'analytics-aside': {
    //   id: 'analytics-aside',
    //   config: {
    //     modules: [Navigation, ], 
    //     spaceBetween: 12,
    //     speed: transition * 3,
    //     slidesPerView: 'auto',
    //     breakpoints: {
    //       833: {
    //         init: false,
    //       },
    //     }
    //   },
    // },
  };

  var currentConfig = configs[id] ? configs[id] : configs["default"];
  return currentConfig;
};
/* harmony default export */ const configs = (getConfig);
;// CONCATENATED MODULE: ./src/core/ui/slider/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import Swiper from 'swiper';

(function (window) {
  var checkAutoplay = function checkAutoplay(slider, wrapper) {
    if (slider.autoplay) {
      if (slider.autoplay.running) {
        wrapper.classList.add('slider--autoplay');
      }
    }
  };
  var build = function build(element) {
    var sliderId = element.dataset.sliderId;
    var config = configs(element, sliderId, window.app.sliders);
    var slider = new Swiper(element.querySelector('[data-slider="inner"]'), config.config);
    checkAutoplay(slider, element);
    window.app.sliders = _objectSpread(_objectSpread({}, window.app.sliders), {}, _defineProperty({}, sliderId, slider));
  };
  var mount = function mount() {
    window.app.sliders = {};
    var sliders = Array.from(document.querySelectorAll('[data-component="slider"]'));
    sliders.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'slider': {
      init: build
    }
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);
// EXTERNAL MODULE: ./src/core/ui/tabs/index.js
var tabs = __webpack_require__(618);
// EXTERNAL MODULE: ./src/core/ui/backdrop/index.js
var backdrop = __webpack_require__(770);
;// CONCATENATED MODULE: ./src/core/ui/index.js










// import './tooltip/index.js';
// import './dropdown/index.js';
// import './gallery/index.js';
// import './badges/index.js';
// import './select/index.js';
// import './accordion/index.js';
// import './range/index.js';
// import './datepicker/index.js';
// import './teleport/index.js';
// EXTERNAL MODULE: ./src/core/components/header/header/index.js
var header = __webpack_require__(549);
;// CONCATENATED MODULE: ./src/core/components/header/index.js

// import './header-search/index.js';
// import './header-catalog/index.js';
// EXTERNAL MODULE: ./src/core/components/product/product-table/product-table-item/index.js
var product_table_item = __webpack_require__(258);
;// CONCATENATED MODULE: ./src/core/components/product/product-table/index.js

;// CONCATENATED MODULE: ./src/core/components/product/index.js

;// CONCATENATED MODULE: ./src/core/components/index.js


// import './card/index.js';
// import './scroll-up/index.js';
// import './cookies/index.js';
// EXTERNAL MODULE: ./src/core/modules/modals/index.js
var modals = __webpack_require__(292);
;// CONCATENATED MODULE: ./src/core/modules/index.js


;// CONCATENATED MODULE: ./src/app/index.js





// UI


// COMPONENTS


// MODULES

;// CONCATENATED MODULE: ./src/index.js


})();

/******/ })()
;