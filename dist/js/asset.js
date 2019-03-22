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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Nova Asset JS

function parseRouteForDisplay(route) {
    return route.replace("\/", "").split("/").map(_.startCase).join(" > ");
}

function getResourceMeta(resourceName) {
    var resourceMeta = Nova.config.resources.filter(function (resource) {
        return resource.uriKey == resourceName;
    });

    if (resourceMeta[0] != undefined) resourceMeta = resourceMeta[0];else resourceMeta = null;

    return resourceMeta;
}

Nova.booting(function (Vue, router, store) {
    var originalTitle = document.title;
    router.beforeEach(function (to, from, next) {

        var resourceMeta = getResourceMeta(to.params.resourceName);
        var relatedResourceMeta = null;

        if (to.params.relatedResourceName != undefined) relatedResourceMeta = getResourceMeta(to.params.relatedResourceName);

        var label = to.params.resourceName;

        if (resourceMeta != null) {
            if (to.name == "index") label = resourceMeta.label;else if (to.name == "detail") label = resourceMeta.singularLabel + " Details";else if (to.name == "edit-attached") label = "Edit " + resourceMeta.singularLabel + " -> " + relatedResourceMeta.singularLabel;else label = _.startCase(to.name) + " " + resourceMeta.singularLabel;
        } else {
            label = parseRouteForDisplay(to.path);

            if (label == "") label = _.startCase(to.name);
        }

        document.title = label + " | " + originalTitle;

        next();
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);