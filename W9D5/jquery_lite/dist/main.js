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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.collection = array;\n  }\n\n  html(str) {\n    if (!str) {\n      return this.collection[0].innerHTML;\n    } else {\n      this.collection.forEach((el) => {\n        el.innerHTML = str;\n      });\n    }\n  }\n\n  \n  empty() {\n    this.collection.forEach((el) => {\n      el.innerHTML = \"\";\n    });\n  }\n\n  //real jQuery doesn't allow you to append the same object twice\n  append(content) {\n    this.collection.forEach((el) => {\n      if (content instanceof HTMLElement) {\n        el.innerHTML += content.outerHTML;\n      } else {\n        el.innerHTML += content;\n      }\n    });\n  }\n\n  attr(name, value) {\n    this.collection.forEach((el) => {\n      el.setAttribute(name, value);\n    });\n  }\n\n  addClass(cname) {\n    this.collection.forEach((el) => {\n      el.classList.add(cname);\n    });\n  }\n\n  removeClass(cname)  {\n    this.collection.forEach((el) => {\n       el.classList.remove(cname);\n    });\n  }\n\n  // TRAVERSAL\n  children() {\n    let arr = []\n    this.collection.forEach((el) => {\n      arr.push(el.children);\n    });\n    return new DOMNodeCollection(arr);\n  }\n\n  parent() {\n    let arr = []\n    this.collection.forEach((el) => {\n      arr.push(el.parentNode);\n    });\n    return new DOMNodeCollection(arr);\n  }\n\n  find(selector) {\n    let arr = [];\n    this.collection.forEach((el) => {\n      let selected = Array.from(el.querySelectorAll(selector))\n      selected.forEach((el2) => {\n        arr.push(el2);\n      });\n    });\n    return new DOMNodeCollection(arr);\n  }\n\n  remove() {\n    this.collection.forEach((el) => {\n      el.remove();\n    });\n  }\n\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(selector) {\n  // this.console.log(this.document);\n  let arr;\n  if (selector instanceof HTMLElement) {\n    arr = [selector];\n  } else {\n    const res = document.querySelectorAll(selector);\n    arr = Array.from(res);\n  }\n  return new DOMNodeCollection(arr);\n  // console.log(res);\n};\n\n\n\n// this test doesn't work, do this in chrome console\n// ...returns correctly in chrome console\nwindow.$l = $l;\n// window.$l('li');\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });