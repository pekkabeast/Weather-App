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
/* harmony export */   "pageDisplay": () => (/* binding */ pageDisplay),
/* harmony export */   "weatherTileDisplay": () => (/* binding */ weatherTileDisplay)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const weatherTileDisplay = (async () => {
  const weatherTile = document.querySelector(".weather-tile");
  const data = await _weather__WEBPACK_IMPORTED_MODULE_0__.weatherApi.defaultCurrentWeather();
  const tileTitle = document.createElement("h1");
  tileTitle.classList.add("tile-title");
  tileTitle.textContent = "Current Weather";
  const tileTime = document.createElement("h2");
  tileTime.classList.add("tile-time");
  tileTime.textContent = data.location.localtime;
  const tileTemp = document.createElement("div");
  tileTemp.classList.add("temp-display");
  const tempIcon = new Image(100, 100);
  tempIcon.src = data.current.condition.icon;
  const tempTemp = document.createElement("div");
  tempTemp.textContent = data.current.temp_c + "C";
  tileTemp.append(tempIcon, tempTemp);

  weatherTile.append(tileTitle, tileTime, tileTemp);
})();

const pageDisplay = (() => {
  const initPage = () => {
    initNavBar();
  };

  const initHeader = () => {
    const header = document.querySelector(".header");
  };

  const initNavBar = () => {
    const todayNav = document.createElement("div");
    todayNav.textContent = "Today";
    const hourlyNav = document.createElement("div");
    hourlyNav.textContent = "Hourly";
    const dailyNav = document.createElement("div");
    dailyNav.textContent = "Daily";

    const header = document.querySelector(".navbar");
    header.append(todayNav, hourlyNav, dailyNav);
  };

  return {
    initPage,
  };
})();

const searchBar = () => {};




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
  const currentURLHandler = (search) => {
    let baseURL =
      "https://api.weatherapi.com/v1/current.json?key=729e44ee64834065836160427230104&q=" +
      search;

    return baseURL;
  };

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

  //Get current Weather based on user's IP
  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = currentURLHandler(defaultIPLookup);
    return apiLookup(finalURL);
  };

  const customCurrentWeather = (location) => {};

  const locationSearchHandler = () => {};

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


document.addEventListener("DOMContentLoaded", _UI__WEBPACK_IMPORTED_MODULE_0__.weatherTileDisplay);
document.addEventListener("DOMContentLoaded", _UI__WEBPACK_IMPORTED_MODULE_0__.pageDisplay.initPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDOztBQUV2QztBQUNBO0FBQ0EscUJBQXFCLHNFQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUUyQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEQzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7VUN0Q3RCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUQ7O0FBRXZELDhDQUE4QyxtREFBa0I7QUFDaEUsOENBQThDLHFEQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWF0aGVyQXBpIH0gZnJvbSBcIi4vd2VhdGhlclwiO1xuXG5jb25zdCB3ZWF0aGVyVGlsZURpc3BsYXkgPSAoYXN5bmMgKCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci10aWxlXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwaS5kZWZhdWx0Q3VycmVudFdlYXRoZXIoKTtcbiAgY29uc3QgdGlsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aWxlVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpbGUtdGl0bGVcIik7XG4gIHRpbGVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ3VycmVudCBXZWF0aGVyXCI7XG4gIGNvbnN0IHRpbGVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aWxlVGltZS5jbGFzc0xpc3QuYWRkKFwidGlsZS10aW1lXCIpO1xuICB0aWxlVGltZS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICBjb25zdCB0aWxlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpbGVUZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWRpc3BsYXlcIik7XG4gIGNvbnN0IHRlbXBJY29uID0gbmV3IEltYWdlKDEwMCwgMTAwKTtcbiAgdGVtcEljb24uc3JjID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCB0ZW1wVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBUZW1wLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYyArIFwiQ1wiO1xuICB0aWxlVGVtcC5hcHBlbmQodGVtcEljb24sIHRlbXBUZW1wKTtcblxuICB3ZWF0aGVyVGlsZS5hcHBlbmQodGlsZVRpdGxlLCB0aWxlVGltZSwgdGlsZVRlbXApO1xufSkoKTtcblxuY29uc3QgcGFnZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0UGFnZSA9ICgpID0+IHtcbiAgICBpbml0TmF2QmFyKCk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgfTtcblxuICBjb25zdCBpbml0TmF2QmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheU5hdi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBjb25zdCBob3VybHlOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJseU5hdi50ZXh0Q29udGVudCA9IFwiSG91cmx5XCI7XG4gICAgY29uc3QgZGFpbHlOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhaWx5TmF2LnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XG4gICAgaGVhZGVyLmFwcGVuZCh0b2RheU5hdiwgaG91cmx5TmF2LCBkYWlseU5hdik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0UGFnZSxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IHNlYXJjaEJhciA9ICgpID0+IHt9O1xuXG5leHBvcnQgeyB3ZWF0aGVyVGlsZURpc3BsYXksIHBhZ2VEaXNwbGF5IH07XG4iLCIvL0Z1bmN0aW9uIHRvIG1ha2UgQVBJIGNhbGxcblxuY29uc3Qgd2VhdGhlckFwaSA9ICgoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRVUkxIYW5kbGVyID0gKHNlYXJjaCkgPT4ge1xuICAgIGxldCBiYXNlVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT03MjllNDRlZTY0ODM0MDY1ODM2MTYwNDI3MjMwMTA0JnE9XCIgK1xuICAgICAgc2VhcmNoO1xuXG4gICAgcmV0dXJuIGJhc2VVUkw7XG4gIH07XG5cbiAgY29uc3QgYXBpTG9va3VwID0gKGZpbmFsVVJMKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZldGNoKGZpbmFsVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLy9HZXQgY3VycmVudCBXZWF0aGVyIGJhc2VkIG9uIHVzZXIncyBJUFxuICBjb25zdCBkZWZhdWx0Q3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHRJUExvb2t1cCA9IFwiYXV0bzppcFwiO1xuICAgIGNvbnN0IGZpbmFsVVJMID0gY3VycmVudFVSTEhhbmRsZXIoZGVmYXVsdElQTG9va3VwKTtcbiAgICByZXR1cm4gYXBpTG9va3VwKGZpbmFsVVJMKTtcbiAgfTtcblxuICBjb25zdCBjdXN0b21DdXJyZW50V2VhdGhlciA9IChsb2NhdGlvbikgPT4ge307XG5cbiAgY29uc3QgbG9jYXRpb25TZWFyY2hIYW5kbGVyID0gKCkgPT4ge307XG5cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0Q3VycmVudFdlYXRoZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB3ZWF0aGVyQXBpIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHdlYXRoZXJUaWxlRGlzcGxheSwgcGFnZURpc3BsYXkgfSBmcm9tIFwiLi9VSVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB3ZWF0aGVyVGlsZURpc3BsYXkpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcGFnZURpc3BsYXkuaW5pdFBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9