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

/***/ 471:
/***/ (() => {

(function (window) {
  var mount = function mount() {
    var header = document.querySelector('[data-component="header"]');
    var component = document.querySelector('[data-component="header-search"]');
    var trigger = header.querySelector('[data-header-search="trigger"]');
    trigger.addEventListener('click', function () {
      trigger.classList.toggle('is-active');
      component.classList.toggle('is-open');
    });
    window.addEventListener('scroll', function () {
      trigger.classList.remove('is-active');
      component.classList.remove('is-open');
    });
  };
  document.addEventListener('DOMContentLoaded', mount);
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

/***/ 378:
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
    console.log('catalog-aside-nav-item');
    console.log(element);
    var block = element.querySelector('[data-catalog-aside-nav-item="block"]');
    var content = element.querySelector('[data-catalog-aside-nav-item="content"]');
    var trigger = element.querySelector('[data-catalog-aside-nav-item="trigger"]');
    if (!block) return;
    var update = function update() {
      block.style.maxHeight = "".concat(content.offsetHeight, "px");
    };
    setResizeObserver(content, throttle(function () {
      if (element.classList.contains('is-expanded')) update();
    }, 300));
    trigger.addEventListener('click', function () {
      element.classList.toggle('is-expanded');
      if (element.classList.contains('is-expanded')) {
        block.style.maxHeight = "".concat(content.offsetHeight, "px");
      } else {
        block.style.maxHeight = '';
      }
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="catalog-aside-nav-item"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread({}, window.app.components);
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 462:
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
    console.log('catalog-aside-nav');
    var block = element.querySelector('[data-catalog-aside-nav="block"]');
    var content = element.querySelector('[data-catalog-aside-nav="content"]');
    var trigger = element.querySelector('[data-catalog-aside-nav="trigger"]');
    if (!block) return;
    var update = function update() {
      block.style.maxHeight = "".concat(content.offsetHeight, "px");
    };
    setResizeObserver(content, throttle(function () {
      if (element.classList.contains('is-expanded')) update();
    }, 300));
    trigger.addEventListener('click', function () {
      element.classList.toggle('is-expanded');
      if (element.classList.contains('is-expanded')) {
        block.style.maxHeight = "".concat(content.offsetHeight, "px");
      } else {
        block.style.maxHeight = '';
      }
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="catalog-aside-nav"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread({}, window.app.components);
  document.addEventListener('DOMContentLoaded', mount);
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

/***/ 468:
/***/ (() => {

// import { Fancybox } from '@fancyapps/ui';

(function (window) {
  var mount = function mount() {
    window.Fancybox = Fancybox;
    Fancybox.bind('[data-fancybox]', {
      Image: {
        zoom: false
      },
      Toolbar: {
        display: ['close']
      }
    });
  };
  document.addEventListener('DOMContentLoaded', mount);
})(window);

/***/ }),

/***/ 11:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  var build = function build(element) {
    var input = element.querySelector('[data-input-file="input"]');
    var content = element.querySelector('[data-input-file="content"]');
    var clear = function clear() {
      content.innerHTML = '';
      element.classList.remove('is-uploaded');
    };
    var addFile = function addFile(name) {
      var file = document.createElement('div');
      file.classList.add('input-file__item');
      file.setAttribute('data-input-file', 'item');
      file.innerHTML = "\n        <span>".concat(name, "</span>\n        <button class=\"input-file__item-delete\" type=\"button\" data-input-file=\"delete\">\n          <svg class=\"icon\" aria-hidden=\"aria-hidden\" role=\"presentation\">\n            <use xlink:href=\"assets/icons/clean/sprite.svg#close--large\"></use>\n          </svg>\n        </button>\n      ");
      file.querySelector('[data-input-file="delete"]').addEventListener('click', function (e) {
        e.preventDefault();
        input.value = null;
        clear();
      });
      content.append(file);
    };
    input.onchange = function () {
      if (input.files.length !== 0) {
        clear();
        element.classList.add('is-uploaded');
        Array.from(input.files).forEach(function (item) {
          addFile(item.name);
        });
      } else {
        clear();
      }
    };
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="input-file"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'input-file': {
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
    },
    inn: function inn() {
      var innMaskSettings = {
        mask: '000000000000',
        lazy: true
      };
      IMask(input, innMaskSettings);
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
    case 'inn':
      mask.inn();
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
    case 'inn':
      var regexpInn = /^[0-9]{12}$/;
      return regexpInn.test(input.value);
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

/***/ }),

/***/ 568:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  var build = function build(element) {
    var _element$getAttribute;
    var max = (_element$getAttribute = element.getAttribute('data-view-more-max')) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : 10;
    var list = element.querySelector('[data-view-more="list"]');
    var items = Array.from(list.querySelectorAll('[data-view-more="item"'));
    var trigger = element.querySelector('[data-view-more="trigger"]');
    var triggerContent = trigger.querySelector('span') ? trigger.querySelector('span') : trigger;
    var isHidden = false;
    var changeItems = function changeItems() {
      if (items.length <= max) {
        trigger.classList.add('is-hidden');
        return;
      }
      ;
      isHidden = !isHidden;
      trigger.classList.remove('is-hidden');
      triggerContent.textContent = isHidden ? 'Показать еще' : 'Скрыть';
      var hiddenItems = items.slice(max);
      if (isHidden) {
        trigger.classList.remove('is-swapped');
      } else {
        trigger.classList.add('is-swapped');
      }
      hiddenItems.forEach(function (item) {
        if (isHidden) {
          item.classList.add('is-hidden');
        } else {
          item.classList.remove('is-hidden');
        }
      });
    };
    changeItems();
    trigger.addEventListener('click', function () {
      changeItems();
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="view-more"]'));
    elements.forEach(build);
  };
  window.app.components = _objectSpread(_objectSpread({}, window.app.components), {}, {
    'view-more': {
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
// EXTERNAL MODULE: ./src/core/ui/input/input-file/index.js
var input_file = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/core/ui/input/index.js


// EXTERNAL MODULE: ./src/core/ui/counter/index.js
var counter = __webpack_require__(900);
// EXTERNAL MODULE: ./src/core/ui/more/index.js
var more = __webpack_require__(237);
// EXTERNAL MODULE: ./src/core/ui/drag-scroll/index.js
var drag_scroll = __webpack_require__(672);
;// CONCATENATED MODULE: ./src/core/ui/slider/configs.js
var getConfig = function getConfig(slider, id, sliders) {
  var _slider$querySelector, _slider$querySelector2, _slider$querySelector3, _slider$querySelector4, _slider$querySelector5, _slider$querySelector6, _slider$querySelector7, _slider$querySelector8, _slider$querySelector9, _slider$querySelector10, _slider$querySelector11, _slider$querySelector12;
  var transition = window.app.config.transition;
  var configs = {
    "default": {
      id: 'default',
      config: {
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
        spaceBetween: 70,
        speed: transition * 3,
        autoHeight: true,
        watchSlidesProgress: true,
        loop: true,
        slidesPerView: 2,
        navigation: {
          nextEl: (_slider$querySelector = slider.querySelector('[data-slider-button="next"]')) !== null && _slider$querySelector !== void 0 ? _slider$querySelector : document.querySelector('[data-slider-navigation-id="partners"] [data-slider-button="next"]'),
          prevEl: (_slider$querySelector2 = slider.querySelector('[data-slider-button="prev"]')) !== null && _slider$querySelector2 !== void 0 ? _slider$querySelector2 : document.querySelector('[data-slider-navigation-id="partners"] [data-slider-button="prev"]')
        },
        breakpoints: {
          768: {
            slidesPerView: 3
          }
        }
      }
    },
    comments: {
      id: 'comments',
      config: {
        spaceBetween: 24,
        speed: transition * 3,
        autoHeight: false,
        watchSlidesProgress: true,
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: (_slider$querySelector3 = slider.querySelector('[data-slider-button="next"]')) !== null && _slider$querySelector3 !== void 0 ? _slider$querySelector3 : document.querySelector('[data-slider-navigation-id="comments"] [data-slider-button="next"]'),
          prevEl: (_slider$querySelector4 = slider.querySelector('[data-slider-button="prev"]')) !== null && _slider$querySelector4 !== void 0 ? _slider$querySelector4 : document.querySelector('[data-slider-navigation-id="comments"] [data-slider-button="prev"]')
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
        speed: transition * 3,
        spaceBetween: 20,
        slidesPerView: 2,
        autoHeight: false,
        navigation: {
          nextEl: (_slider$querySelector5 = slider.querySelector('[data-slider-button="next"]')) !== null && _slider$querySelector5 !== void 0 ? _slider$querySelector5 : document.querySelector('[data-slider-navigation-id="products"] [data-slider-button="next"]'),
          prevEl: (_slider$querySelector6 = slider.querySelector('[data-slider-button="prev"]')) !== null && _slider$querySelector6 !== void 0 ? _slider$querySelector6 : document.querySelector('[data-slider-navigation-id="products"] [data-slider-button="prev"]')
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
        speed: transition * 3,
        slidesPerView: 1,
        autoHeight: false,
        watchSlidesProgress: true,
        thumbs: {
          swiper: sliders['product-thumbs']
        }
      }
    },
    about: {
      id: 'about',
      config: {
        spaceBetween: 24,
        speed: transition * 2,
        autoHeight: false,
        watchSlidesProgress: false,
        loop: false,
        slidesPerView: 1,
        navigation: {
          nextEl: slider.querySelector('[data-slider-button="next"]'),
          prevEl: slider.querySelector('[data-slider-button="prev"]')
        }
      }
    },
    licenses: {
      id: 'licenses',
      config: {
        spaceBetween: 20,
        speed: transition * 3,
        autoHeight: true,
        watchSlidesProgress: true,
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: (_slider$querySelector7 = slider.querySelector('[data-slider-button="next"]')) !== null && _slider$querySelector7 !== void 0 ? _slider$querySelector7 : document.querySelector('[data-slider-navigation-id="licenses"] [data-slider-button="next"]'),
          prevEl: (_slider$querySelector8 = slider.querySelector('[data-slider-button="prev"]')) !== null && _slider$querySelector8 !== void 0 ? _slider$querySelector8 : document.querySelector('[data-slider-navigation-id="licenses"] [data-slider-button="prev"]')
        },
        breakpoints: {
          768: {
            spaceBetween: 24
          },
          1259: {
            slidesPerView: 4
          }
        }
      }
    },
    staff: {
      id: 'staff',
      config: {
        spaceBetween: 20,
        speed: transition * 3,
        autoHeight: false,
        watchSlidesProgress: true,
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: (_slider$querySelector9 = slider.querySelector('[data-slider-button="next"]')) !== null && _slider$querySelector9 !== void 0 ? _slider$querySelector9 : document.querySelector('[data-slider-navigation-id="staff"] [data-slider-button="next"]'),
          prevEl: (_slider$querySelector10 = slider.querySelector('[data-slider-button="prev"]')) !== null && _slider$querySelector10 !== void 0 ? _slider$querySelector10 : document.querySelector('[data-slider-navigation-id="staff"] [data-slider-button="prev"]')
        },
        breakpoints: {
          768: {
            spaceBetween: 24
          }
        }
      }
    },
    articles: {
      id: 'articles',
      config: {
        spaceBetween: 20,
        speed: transition * 3,
        autoHeight: false,
        watchSlidesProgress: true,
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: (_slider$querySelector11 = slider.querySelector('[data-slider-button="next"]')) !== null && _slider$querySelector11 !== void 0 ? _slider$querySelector11 : document.querySelector('[data-slider-navigation-id="articles"] [data-slider-button="next"]'),
          prevEl: (_slider$querySelector12 = slider.querySelector('[data-slider-button="prev"]')) !== null && _slider$querySelector12 !== void 0 ? _slider$querySelector12 : document.querySelector('[data-slider-navigation-id="articles"] [data-slider-button="prev"]')
        },
        breakpoints: {
          1023: {
            slidesPerView: 2
          },
          1259: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }
      }
    }
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
// EXTERNAL MODULE: ./src/core/ui/view-more/index.js
var view_more = __webpack_require__(568);
// EXTERNAL MODULE: ./src/core/ui/gallery/index.js
var gallery = __webpack_require__(468);
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }
  return navigator.userAgent;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window,
    visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument :
  // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js








function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' ||
    // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot ||
    // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (
    // DOM Element detected
    isShadowRoot(element) ? element.host : null) ||
    // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback
  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList :
  // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) ||
  // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block

function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.

function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions,
    _generatorOptions$def = _generatorOptions.defaultModifiers,
    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
    _generatorOptions$def2 = _generatorOptions.defaultOptions,
    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}
          return;
        } // Store the reference and popper rects to be read by modifiers

        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index],
            fn = _state$orderedModifie.fn,
            _state$orderedModifie2 = _state$orderedModifie.options,
            _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
            name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if (false) {}
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
          _ref3$options = _ref3.options,
          options = _ref3$options === void 0 ? {} : _ref3$options,
          effect = _ref3.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state,
    instance = _ref.instance,
    options = _ref.options;
  var _options$scroll = options.scroll,
    scroll = _options$scroll === void 0 ? true : _options$scroll,
    _options$resize = options.resize,
    resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
    element = _ref.element,
    placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js

function popperOffsets(_ref) {
  var state = _ref.state,
    name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
    y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper,
    popperRect = _ref2.popperRect,
    placement = _ref2.placement,
    variation = _ref2.variation,
    offsets = _ref2.offsets,
    position = _ref2.position,
    gpuAcceleration = _ref2.gpuAcceleration,
    adaptive = _ref2.adaptive,
    roundOffsets = _ref2.roundOffsets,
    isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
    x = _offsets$x === void 0 ? 0 : _offsets$x,
    _offsets$y = offsets.y,
    y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    offsetParent = offsetParent;
    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
      // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
      // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state,
    options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
    _options$adaptive = options.adaptive,
    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
    _options$roundOffsets = options.roundOffsets,
    roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (false) { var transitionProperty; }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]

    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
    skidding = _ref[0],
    distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state,
    options = _ref2.options,
    name = _ref2.name;
  var _options$offset = options.offset,
    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
    x = _data$state$placement.x,
    y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...

      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false

  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js














function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`

function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents

function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$placement = _options.placement,
    placement = _options$placement === void 0 ? state.placement : _options$placement,
    _options$strategy = _options.strategy,
    strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
    _options$boundary = _options.boundary,
    boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
    _options$rootBoundary = _options.rootBoundary,
    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
    _options$elementConte = _options.elementContext,
    elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
    _options$altBoundary = _options.altBoundary,
    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
    _options$padding = _options.padding,
    padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    placement = _options.placement,
    boundary = _options.boundary,
    rootBoundary = _options.rootBoundary,
    padding = _options.padding,
    flipVariations = _options.flipVariations,
    _options$allowedAutoP = _options.allowedAutoPlacements,
    allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
    specifiedFallbackPlacements = options.fallbackPlacements,
    padding = options.padding,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    _options$flipVariatio = options.flipVariations,
    flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
    allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];
  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js











function preventOverflow(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    padding = options.padding,
    _options$tether = options.tether,
    tether = _options$tether === void 0 ? true : _options$tether,
    _options$tetherOffset = options.tetherOffset,
    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === 'x' ? enums_top : left;
    var _altSide = mainAxis === 'x' ? bottom : right;
    var _offset = popperOffsets[altAxis];
    var _len = altAxis === 'y' ? 'height' : 'width';
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state,
    name = _ref.name,
    options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function arrow_effect(_ref2) {
  var state = _ref2.state,
    options = _ref2.options;
  var _options$element = options.element,
    arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  } // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (false) {}
  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}
    return;
  }
  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js


function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state,
    name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./src/core/ui/select/select/index.js
function select_typeof(obj) { "@babel/helpers - typeof"; return select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, select_typeof(obj); }
function select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? select_ownKeys(Object(source), !0).forEach(function (key) { select_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function select_defineProperty(obj, key, value) { key = select_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function select_toPropertyKey(arg) { var key = select_toPrimitive(arg, "string"); return select_typeof(key) === "symbol" ? key : String(key); }
function select_toPrimitive(input, hint) { if (select_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (select_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(function (window) {
  var transition = window.app.config.transition;
  var throttle = window.app.lib.throttle;
  var build = function build(element) {
    var main = element.querySelector('[data-select="main"]');
    var value = element.querySelector('[data-select="value"]');
    var dropdown = element.querySelector('[data-select="dropdown"]');
    var list = element.querySelector('[data-select="list"]');
    var elements = Array.from(list.querySelectorAll('[data-select="option"]'));
    var dynamicTheme = element.getAttribute('data-select-dynamic-theme');
    var popperInstance = null;
    var defaultTheme = '';
    var currentTheme = '';
    var getTheme = function getTheme() {
      var classes = element.className.split(' ');
      var themeClasses = classes.filter(function (className) {
        return className.startsWith('select--theme');
      });
      return themeClasses[0];
    };
    defaultTheme = getTheme();
    var createPopperInstance = function createPopperInstance() {
      popperInstance = popper_createPopper(main, dropdown, {
        placement: 'bottom-start',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, 6]
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: 'viewport'
          }
        }, {
          name: 'sameWidth',
          enabled: true,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: function fn(_ref) {
            var state = _ref.state;
            state.styles.popper.width = "".concat(state.rects.reference.width, "px");
          }
        }]
      });
    };
    var moveDropdownToBody = function moveDropdownToBody() {
      if (element.closest('.modal')) {
        element.closest('.modal').appendChild(dropdown);
      } else {
        document.body.appendChild(dropdown);
      }
      dropdown.style.position = 'absolute';
      dropdown.style.width = "".concat(main.offsetWidth, "px");
    };
    var returnDropdownToParent = function returnDropdownToParent() {
      element.appendChild(dropdown);
      dropdown.style.position = 'static';
    };
    var destroyPopperInstance = function destroyPopperInstance() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    };
    var check = function check() {
      if (list.querySelector('input:checked')) {
        element.classList.add('is-selected');
      } else {
        element.classList.remove('is-selected');
      }
    };
    var hideSelect = function hideSelect() {
      if (element.classList.contains('is-open')) {
        dropdown.classList.add('is-hide');
        element.classList.remove('is-open');
        setTimeout(function () {
          dropdown.classList.remove('is-open');
          dropdown.classList.remove('is-hide');
          dropdown.setAttribute('aria-hidden', 'true');
          destroyPopperInstance();
          returnDropdownToParent();
        }, transition * 1.5);
      }
      ;
      check();
    };
    var openSelect = function openSelect() {
      element.classList.add('is-open');
      dropdown.classList.add('is-open');
      dropdown.setAttribute('aria-hidden', 'false');
      moveDropdownToBody();
      createPopperInstance();
      check();
    };
    var toggleSelect = function toggleSelect() {
      if (element.classList.contains('is-open')) {
        hideSelect();
      } else {
        openSelect();
      }
      check();
    };
    var changeValue = function changeValue(selectedItem) {
      value.innerHTML = selectedItem.querySelector('[data-select="option-content"]').innerHTML;
      var selected = Array.from(list.querySelectorAll('[data-select="option"].is-selected'));
      selected.forEach(function (item) {
        item.classList.remove('is-selected');
      });
      selectedItem.classList.add('is-selected');
      if (dynamicTheme) {
        element.classList.remove(defaultTheme);
        if (currentTheme !== '') element.classList.remove("select--theme-".concat(currentTheme));
        currentTheme = selectedItem.getAttribute('data-select-theme');
        if (currentTheme) {
          element.classList.add("select--theme-".concat(currentTheme));
        } else {
          element.classList.add(defaultTheme);
        }
      }
      hideSelect();
    };
    var init = function init() {
      if (list.querySelector('input:checked')) {
        changeValue(list.querySelector('input:checked').closest('[data-select="option"]'));
        check();
      }
    };
    init();
    elements.forEach(function (item) {
      item.addEventListener('click', function () {
        changeValue(item);
      });
    });
    window.addEventListener('scroll', throttle(hideSelect, 300));
    document.addEventListener('click', function (e) {
      var target = e.target;
      if (!(element.contains(target) || dropdown.contains(target)) && element.classList.contains('is-open')) {
        hideSelect();
      }
    });
    main.addEventListener('click', function () {
      toggleSelect();
    });
  };
  var mount = function mount() {
    var elements = Array.from(document.querySelectorAll('[data-component="select"]'));
    elements.forEach(build);
  };
  window.app.components = select_objectSpread(select_objectSpread({}, window.app.components), {}, {
    'select': {
      init: build
    }
  });
  document.addEventListener('DOMContentLoaded', mount);
})(window);
;// CONCATENATED MODULE: ./src/core/ui/select/index.js

;// CONCATENATED MODULE: ./src/core/ui/index.js











// import './tooltip/index.js';
// import './dropdown/index.js';

// import './badges/index.js';

// import './accordion/index.js';
// import './range/index.js';
// import './datepicker/index.js';
// import './teleport/index.js';
// EXTERNAL MODULE: ./src/core/components/header/header/index.js
var header = __webpack_require__(549);
// EXTERNAL MODULE: ./src/core/components/header/header-search/index.js
var header_search = __webpack_require__(471);
;// CONCATENATED MODULE: ./src/core/components/header/index.js


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
// EXTERNAL MODULE: ./src/core/modules/catalog/catalog-aside/catalog-aside-nav/catalog-aside-nav/index.js
var catalog_aside_nav = __webpack_require__(462);
// EXTERNAL MODULE: ./src/core/modules/catalog/catalog-aside/catalog-aside-nav/catalog-aside-nav-item/index.js
var catalog_aside_nav_item = __webpack_require__(378);
;// CONCATENATED MODULE: ./src/core/modules/catalog/catalog-aside/catalog-aside-nav/index.js


;// CONCATENATED MODULE: ./src/core/modules/catalog/catalog-aside/index.js

;// CONCATENATED MODULE: ./src/core/modules/catalog/index.js

;// CONCATENATED MODULE: ./src/core/modules/index.js



;// CONCATENATED MODULE: ./src/app/index.js





// UI


// COMPONENTS


// MODULES

;// CONCATENATED MODULE: ./src/index.js


})();

/******/ })()
;