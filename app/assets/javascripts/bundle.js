/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/frontend/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/frontend/components/Tweet.jsx":
/*!**************************************************!*\
  !*** ./app/assets/frontend/components/Tweet.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tweet; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Tweet =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Tweet, _React$Component);\n\n  function Tweet() {\n    _classCallCheck(this, Tweet);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Tweet).apply(this, arguments));\n  }\n\n  _createClass(Tweet, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"li\", {\n        className: \"collection-item avatar\"\n      }, React.createElement(\"img\", {\n        className: \"circle\",\n        src: this.props.gravatar\n      }), React.createElement(\"span\", {\n        className: \"title\"\n      }, this.props.name), React.createElement(\"time\", null, this.props.formattedDate), React.createElement(\"p\", null, this.props.body));\n    }\n  }]);\n\n  return Tweet;\n}(React.Component);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9mcm9udGVuZC9jb21wb25lbnRzL1R3ZWV0LmpzeD9lZDNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCIgPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY2xlXCIgc3JjPXt0aGlzLnByb3BzLmdyYXZhdGFyfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHRpbWU+e3RoaXMucHJvcHMuZm9ybWF0dGVkRGF0ZX08L3RpbWU+XHJcbiAgICAgICAgPHA+e3RoaXMucHJvcHMuYm9keX08L3A+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTs7OztBQVZBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/assets/frontend/components/Tweet.jsx\n");

/***/ }),

/***/ "./app/assets/frontend/components/TweetBox.jsx":
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/TweetBox.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TweetBox; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar TweetBox =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TweetBox, _React$Component);\n\n  function TweetBox() {\n    _classCallCheck(this, TweetBox);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TweetBox).apply(this, arguments));\n  }\n\n  _createClass(TweetBox, [{\n    key: \"sendTweet\",\n    value: function sendTweet(event) {\n      event.preventDefault();\n      this.props.sendTweet(this.refs.tweetTextArea.value);\n      this.refs.tweetTextArea.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"form\", {\n        onSubmit: this.sendTweet.bind(this)\n      }, React.createElement(\"div\", {\n        className: \"input-field\"\n      }, React.createElement(\"textarea\", {\n        ref: \"tweetTextArea\",\n        className: \"materialize-textarea\"\n      }), React.createElement(\"label\", null, \"What's up?\"), React.createElement(\"button\", {\n        type: \"submit\",\n        className: \"btn\"\n      }, \"Tweet\")));\n    }\n  }]);\n\n  return TweetBox;\n}(React.Component);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRCb3guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9mcm9udGVuZC9jb21wb25lbnRzL1R3ZWV0Qm94LmpzeD9hYjNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWV0Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzZW5kVHdlZXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnNlbmRUd2VldCh0aGlzLnJlZnMudHdlZXRUZXh0QXJlYS52YWx1ZSk7XHJcbiAgICB0aGlzLnJlZnMudHdlZXRUZXh0QXJlYS52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kVHdlZXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJlZj1cInR3ZWV0VGV4dEFyZWFcIiBjbGFzc05hbWU9XCJtYXRlcmlhbGl6ZS10ZXh0YXJlYVwiIC8+XHJcbiAgICAgICAgICA8bGFiZWw+V2hhdCdzIHVwPzwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIj5Ud2VldDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFJQTs7OztBQWpCQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/assets/frontend/components/TweetBox.jsx\n");

/***/ }),

/***/ "./app/assets/frontend/components/TweetsList.jsx":
/*!*******************************************************!*\
  !*** ./app/assets/frontend/components/TweetsList.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TweetsList; });\n/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tweet */ \"./app/assets/frontend/components/Tweet.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar TweetsList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TweetsList, _React$Component);\n\n  function TweetsList() {\n    _classCallCheck(this, TweetsList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TweetsList).apply(this, arguments));\n  }\n\n  _createClass(TweetsList, [{\n    key: \"render\",\n    value: function render() {\n      var tweets = this.props.tweets.map(function (tweet) {\n        return React.createElement(_Tweet__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _extends({\n          key: tweet.id\n        }, tweet));\n      });\n      return React.createElement(\"ul\", {\n        className: \"collection\"\n      }, tweets);\n    }\n  }]);\n\n  return TweetsList;\n}(React.Component);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRzTGlzdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRzTGlzdC5qc3g/YjgzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXQgZnJvbSAnLi9Ud2VldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VldHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgdHdlZXRzID0gdGhpcy5wcm9wcy50d2VldHMubWFwKHR3ZWV0ID0+IDxUd2VldCBrZXk9e3R3ZWV0LmlkfSB7Li4udHdlZXR9IC8+KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvblwiPlxyXG4gICAgICAgIHt0d2VldHN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7Ozs7QUFSQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/assets/frontend/components/TweetsList.jsx\n");

/***/ }),

/***/ "./app/assets/frontend/main.jsx":
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TweetBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TweetBox */ \"./app/assets/frontend/components/TweetBox.jsx\");\n/* harmony import */ var _components_TweetsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TweetsList */ \"./app/assets/frontend/components/TweetsList.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Main =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main(props) {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));\n    _this.state = {\n      tweetsList: []\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"formattedTweets\",\n    value: function formattedTweets(tweetsList) {\n      var formattedList = tweetsList.map(function (tweet) {\n        tweet.formattedDate = moment(tweet.created_at).fromNow();\n        return tweet;\n      });\n      return {\n        tweetsList: tweetsList\n      };\n    }\n  }, {\n    key: \"addTweet\",\n    value: function addTweet(tweetToAdd) {\n      var _this2 = this;\n\n      $.post(\"/tweets\", {\n        body: tweetToAdd\n      }).success(function (savedTweet) {\n        var newTweetsList = _this2.state.tweetsList;\n        newTweetsList.unshift(savedTweet);\n\n        _this2.setState(_this2.formattedTweets(newTweetsList));\n      }).error(function (error) {\n        return console.log(error);\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      $.ajax(\"/tweets\").success(function (data) {\n        return _this3.setState(_this3.formattedTweets(data));\n      }).error(function (error) {\n        return console.log(error);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"container\"\n      }, React.createElement(_components_TweetBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        sendTweet: this.addTweet.bind(this)\n      }), React.createElement(_components_TweetsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        tweets: this.state.tweetsList\n      }));\n    }\n  }]);\n\n  return Main;\n}(React.Component);\n\nvar documentReady = function documentReady() {\n  var reactNode = document.getElementById('react');\n\n  if (reactNode) {\n    ReactDOM.render(React.createElement(Main, null), reactNode);\n  }\n};\n\n$(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL21haW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9mcm9udGVuZC9tYWluLmpzeD9hNDgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VldEJveCBmcm9tICcuL2NvbXBvbmVudHMvVHdlZXRCb3gnO1xyXG5pbXBvcnQgVHdlZXRzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvVHdlZXRzTGlzdCc7XHJcblxyXG5cclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7dHdlZXRzTGlzdDogW119XHJcbiAgfVxyXG5cclxuICBmb3JtYXR0ZWRUd2VldHModHdlZXRzTGlzdCkge1xyXG4gICAgbGV0IGZvcm1hdHRlZExpc3QgPSB0d2VldHNMaXN0Lm1hcCh0d2VldCA9PiB7XHJcbiAgICAgIHR3ZWV0LmZvcm1hdHRlZERhdGUgPSBtb21lbnQodHdlZXQuY3JlYXRlZF9hdCkuZnJvbU5vdygpO1xyXG4gICAgICByZXR1cm4gdHdlZXQ7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHdlZXRzTGlzdDogdHdlZXRzTGlzdFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFkZFR3ZWV0KHR3ZWV0VG9BZGQpIHtcclxuICAgICQucG9zdChcIi90d2VldHNcIiwgeyBib2R5OiB0d2VldFRvQWRkfSlcclxuICAgIC5zdWNjZXNzKCBzYXZlZFR3ZWV0ID0+IHtcclxuICAgICAgbGV0IG5ld1R3ZWV0c0xpc3QgPSB0aGlzLnN0YXRlLnR3ZWV0c0xpc3Q7XHJcbiAgICAgIG5ld1R3ZWV0c0xpc3QudW5zaGlmdChzYXZlZFR3ZWV0KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5mb3JtYXR0ZWRUd2VldHMobmV3VHdlZXRzTGlzdCkpO1xyXG4gICAgfSlcclxuICAgIC5lcnJvcihlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAkLmFqYXgoXCIvdHdlZXRzXCIpXHJcbiAgICAuc3VjY2VzcyhkYXRhID0+IHRoaXMuc2V0U3RhdGUodGhpcy5mb3JtYXR0ZWRUd2VldHMoZGF0YSkpKVxyXG4gICAgLmVycm9yKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFR3ZWV0Qm94IHNlbmRUd2VldD17dGhpcy5hZGRUd2VldC5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgPFR3ZWV0c0xpc3QgdHdlZXRzPXt0aGlzLnN0YXRlLnR3ZWV0c0xpc3R9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGRvY3VtZW50UmVhZHkgPSAoKSA9PiB7XHJcbiAgbGV0IHJlYWN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpO1xyXG4gIGlmIChyZWFjdE5vZGUpe1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8TWFpbiAvPiwgcmVhY3ROb2RlXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbiQoZG9jdW1lbnRSZWFkeSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBeENBO0FBQ0E7QUEwQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/assets/frontend/main.jsx\n");

/***/ })

/******/ });