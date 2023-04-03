/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherDisplay": () => (/* binding */ weatherDisplay)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const weatherDisplay = (async () => {
  const weatherTile = document.getElementById("weather-tile");
  const data = await _weather__WEBPACK_IMPORTED_MODULE_0__.weatherApi.defaultCurrentWeather();
  console.log(data);
})();




/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherApi": () => (/* binding */ weatherApi)
/* harmony export */ });
//Function to make API call

const weatherApi = (() => {
  const apiURLHandler = (search, time) => {
    let baseURL = "https://api.weatherapi.com/v1/";
    let apiKey = "key=729e44ee64834065836160427230104";
    if ((time = "current")) {
      baseURL += "current.json?" + apiKey + "&q=" + search;
    }

    return baseURL;
  };

  const currentWeather = (location) => {};

  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = apiURLHandler(defaultIPLookup);
    console.log(finalURL);
    let data = apiLookup(finalURL);

    return data;
  };

  const locationSearchHandler = () => {};

  const apiLookup = (finalURL) => {
    const data = fetch(finalURL, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        return response;
      });

    return data;
  };

  return {
    defaultCurrentWeather,
  };
})();




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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


document.addEventListener("DOMContentLoaded", _UI__WEBPACK_IMPORTED_MODULE_0__.weatherDisplay);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQSxxQkFBcUIsc0VBQWdDO0FBQ3JEO0FBQ0EsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7OztBQ1IxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVxQjs7Ozs7OztVQzNDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsOENBQThDLCtDQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYXRoZXJBcGkgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XG5cbmNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gKGFzeW5jICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlclRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItdGlsZVwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcGkuZGVmYXVsdEN1cnJlbnRXZWF0aGVyKCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSkoKTtcblxuZXhwb3J0IHsgd2VhdGhlckRpc3BsYXkgfTtcbiIsIi8vRnVuY3Rpb24gdG8gbWFrZSBBUEkgY2FsbFxuXG5jb25zdCB3ZWF0aGVyQXBpID0gKCgpID0+IHtcbiAgY29uc3QgYXBpVVJMSGFuZGxlciA9IChzZWFyY2gsIHRpbWUpID0+IHtcbiAgICBsZXQgYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvXCI7XG4gICAgbGV0IGFwaUtleSA9IFwia2V5PTcyOWU0NGVlNjQ4MzQwNjU4MzYxNjA0MjcyMzAxMDRcIjtcbiAgICBpZiAoKHRpbWUgPSBcImN1cnJlbnRcIikpIHtcbiAgICAgIGJhc2VVUkwgKz0gXCJjdXJyZW50Lmpzb24/XCIgKyBhcGlLZXkgKyBcIiZxPVwiICsgc2VhcmNoO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlVVJMO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gKGxvY2F0aW9uKSA9PiB7fTtcblxuICBjb25zdCBkZWZhdWx0Q3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHRJUExvb2t1cCA9IFwiYXV0bzppcFwiO1xuICAgIGNvbnN0IGZpbmFsVVJMID0gYXBpVVJMSGFuZGxlcihkZWZhdWx0SVBMb29rdXApO1xuICAgIGNvbnNvbGUubG9nKGZpbmFsVVJMKTtcbiAgICBsZXQgZGF0YSA9IGFwaUxvb2t1cChmaW5hbFVSTCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCBsb2NhdGlvblNlYXJjaEhhbmRsZXIgPSAoKSA9PiB7fTtcblxuICBjb25zdCBhcGlMb29rdXAgPSAoZmluYWxVUkwpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZmV0Y2goZmluYWxVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGVmYXVsdEN1cnJlbnRXZWF0aGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgd2VhdGhlckFwaSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyRGlzcGxheSB9IGZyb20gXCIuL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHdlYXRoZXJEaXNwbGF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==