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
/* harmony export */   "updatePage": () => (/* binding */ updatePage),
/* harmony export */   "weatherTileDisplay": () => (/* binding */ weatherTileDisplay)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const weatherTileDisplay = (async () => {
  const weatherTile = document.querySelector(".weather-tile");
  const data = await _weather__WEBPACK_IMPORTED_MODULE_0__.weatherApi.defaultCurrentWeather();
  const tileTitle = document.createElement("div");
  tileTitle.classList.add("tile-title");
  tileTitle.textContent = "Current Weather";
  const tileTime = document.createElement("div");
  tileTime.classList.add("tile-time");
  const time = new Date(data.location.localtime);
  tileTime.textContent =
    time.getHours() +
    ":" +
    (time.getMinutes() < 10 ? "0" : "") +
    time.getMinutes() +
    (time.getHours() >= 12 ? "pm" : "am");
  const tileTemp = document.createElement("div");
  tileTemp.classList.add("temp-display");
  const tempIcon = new Image(100, 100);
  tempIcon.src = data.current.condition.icon;
  const tempTemp = document.createElement("div");
  tempTemp.textContent = data.current.temp_c + "\u00B0C";
  tileTemp.append(tempIcon, tempTemp);
  const tempDesc = document.createElement("div");
  tempDesc.classList.add("temp-desc");
  tempDesc.textContent = data.current.condition.text;

  weatherTile.append(tileTitle, tileTime, tileTemp, tempDesc);
})();

const updatePage = (() => {
  const displayLocationHeader = async () => {
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__.weatherApi.defaultCurrentWeather();
    const location = document.querySelector(".location");

    location.textContent = data.location.name + ", " + data.location.country;
  };

  const updateLocationHeader = async (search) => {
    const location = document.querySelector(".location");
    while (location.firstChild) {
      location.removeChild(location.firstChild);
    }
    location.textContent = search.name + ", " + search.country;
  };

  const updateWeatherTileDisplay = async (location) => {
    const data = await _weather__WEBPACK_IMPORTED_MODULE_0__.weatherApi.customCurrentWeather(location);

    const tileTime = document.querySelector(".tile-time");
    const time = new Date(data.location.localtime);
    tileTime.textContent =
      (time.getHours() % 12) +
      ":" +
      (time.getMinutes() < 10 ? "0" : "") +
      time.getMinutes() +
      (time.getHours() >= 12 ? "pm" : "am");

    const tileTemp = document.querySelector(".temp-display");
    while (tileTemp.firstChild) {
      tileTemp.removeChild(tileTemp.firstChild);
    }
    const tempIcon = new Image(100, 100);
    tempIcon.src = data.current.condition.icon;
    const tempTemp = document.createElement("div");
    tempTemp.textContent = data.current.temp_c + "\u00B0C";
    tileTemp.append(tempIcon, tempTemp);

    const tempDesc = document.querySelector(".temp-desc");
    tempDesc.textContent = data.current.condition.text;
  };

  return {
    displayLocationHeader,
    updateWeatherTileDisplay,
    updateLocationHeader,
  };
})();

const pageDisplay = (() => {
  const initPage = () => {
    initHeader();
    _weather__WEBPACK_IMPORTED_MODULE_0__.weatherApi.locationSearchHandler();
  };

  const initHeader = () => {
    updatePage.displayLocationHeader();
  };

  return {
    initPage,
  };
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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
//Function to make API call


const weatherApi = (() => {
  const currentURLHandler = (search) => {
    let baseURL =
      "https://api.weatherapi.com/v1/current.json?key=729e44ee64834065836160427230104&q=" +
      search;

    return baseURL;
  };

  const searchURLHandler = (search) => {
    let baseURL =
      "https://api.weatherapi.com/v1/search.json?key=729e44ee64834065836160427230104&q=" +
      search;
    return baseURL;
  };

  const apiLookup = (finalURL) => {
    const data = fetch(finalURL, { mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //Indicate that error happened
        return err;
      });

    return Promise.resolve(data);
  };

  //Get current Weather based on user's IP
  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = currentURLHandler(defaultIPLookup);
    return apiLookup(finalURL);
  };

  const customCurrentWeather = (location) => {
    let finalURL = currentURLHandler(location);
    return apiLookup(finalURL);
  };

  const locationSearchHandler = () => {
    const form = document.getElementById("customLocation");

    let inputSearch = document.getElementById("searchbar");
    inputSearch.addEventListener("input", () => {
      if (!inputSearch.validity.valid) {
        inputSearch.setCustomValidity("");
        if (document.querySelector(".error-message")) {
          form.parentElement.removeChild(
            document.querySelector(".error-message")
          );
        }
      }
    });

    form.addEventListener("submit", (event) => {
      let searchTerm = inputSearch.value;
      let finalURL = searchURLHandler(searchTerm);
      let apiReturnData = searchApiVerifier(finalURL);
      apiReturnData
        .then((data) => {
          if (data.length > 0) {
            inputSearch.setCustomValidity("");
            _UI__WEBPACK_IMPORTED_MODULE_0__.updatePage.updateWeatherTileDisplay(data[0].name);
            _UI__WEBPACK_IMPORTED_MODULE_0__.updatePage.updateLocationHeader(data[0]);
          } else {
            return Promise.reject(data);
          }
          form.reset();
          event.preventDefault();
        })
        .catch((err) => {
          inputSearch.setCustomValidity("Location Not Found");
          let errMsg = document.createElement("span");
          errMsg.classList.add("error-message");
          errMsg.textContent = "Location Not Found";
          form.parentElement.appendChild(errMsg);

          event.preventDefault();
        });
      event.preventDefault();
    });
  };

  const searchApiVerifier = (finalURL) => {
    let data = apiLookup(finalURL);
    data
      .then((data) => {
        if (data instanceof Error) {
          return data;
        } else if (data.length == 0) {
          //Form verification handling
          throw new Error("Invalid Location");
        } else if (data.length == 1) {
          return data;
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        return err;
      });

    return Promise.resolve(data);
  };

  return {
    defaultCurrentWeather,
    locationSearchHandler,
    customCurrentWeather,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLHFCQUFxQixzRUFBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx1QkFBdUIsc0VBQWdDO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIscUVBQStCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBZ0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Z2RDtBQUNrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFtQztBQUMvQyxZQUFZLGdFQUErQjtBQUMzQyxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7VUMzSHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUQ7O0FBRXZELDhDQUE4QyxtREFBa0I7QUFDaEUsOENBQThDLHFEQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWF0aGVyQXBpIH0gZnJvbSBcIi4vd2VhdGhlclwiO1xuXG5jb25zdCB3ZWF0aGVyVGlsZURpc3BsYXkgPSAoYXN5bmMgKCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci10aWxlXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwaS5kZWZhdWx0Q3VycmVudFdlYXRoZXIoKTtcbiAgY29uc3QgdGlsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGlsZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aWxlLXRpdGxlXCIpO1xuICB0aWxlVGl0bGUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgV2VhdGhlclwiO1xuICBjb25zdCB0aWxlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpbGVUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aWxlLXRpbWVcIik7XG4gIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIHRpbGVUaW1lLnRleHRDb250ZW50ID1cbiAgICB0aW1lLmdldEhvdXJzKCkgK1xuICAgIFwiOlwiICtcbiAgICAodGltZS5nZXRNaW51dGVzKCkgPCAxMCA/IFwiMFwiIDogXCJcIikgK1xuICAgIHRpbWUuZ2V0TWludXRlcygpICtcbiAgICAodGltZS5nZXRIb3VycygpID49IDEyID8gXCJwbVwiIDogXCJhbVwiKTtcbiAgY29uc3QgdGlsZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aWxlVGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcC1kaXNwbGF5XCIpO1xuICBjb25zdCB0ZW1wSWNvbiA9IG5ldyBJbWFnZSgxMDAsIDEwMCk7XG4gIHRlbXBJY29uLnNyYyA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgdGVtcFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wVGVtcC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyBcIlxcdTAwQjBDXCI7XG4gIHRpbGVUZW1wLmFwcGVuZCh0ZW1wSWNvbiwgdGVtcFRlbXApO1xuICBjb25zdCB0ZW1wRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWRlc2NcIik7XG4gIHRlbXBEZXNjLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gIHdlYXRoZXJUaWxlLmFwcGVuZCh0aWxlVGl0bGUsIHRpbGVUaW1lLCB0aWxlVGVtcCwgdGVtcERlc2MpO1xufSkoKTtcblxuY29uc3QgdXBkYXRlUGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlMb2NhdGlvbkhlYWRlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwaS5kZWZhdWx0Q3VycmVudFdlYXRoZXIoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG5cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIGRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVMb2NhdGlvbkhlYWRlciA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gICAgd2hpbGUgKGxvY2F0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxvY2F0aW9uLnJlbW92ZUNoaWxkKGxvY2F0aW9uLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IHNlYXJjaC5uYW1lICsgXCIsIFwiICsgc2VhcmNoLmNvdW50cnk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlV2VhdGhlclRpbGVEaXNwbGF5ID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcGkuY3VzdG9tQ3VycmVudFdlYXRoZXIobG9jYXRpb24pO1xuXG4gICAgY29uc3QgdGlsZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbGUtdGltZVwiKTtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICAgIHRpbGVUaW1lLnRleHRDb250ZW50ID1cbiAgICAgICh0aW1lLmdldEhvdXJzKCkgJSAxMikgK1xuICAgICAgXCI6XCIgK1xuICAgICAgKHRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyBcIjBcIiA6IFwiXCIpICtcbiAgICAgIHRpbWUuZ2V0TWludXRlcygpICtcbiAgICAgICh0aW1lLmdldEhvdXJzKCkgPj0gMTIgPyBcInBtXCIgOiBcImFtXCIpO1xuXG4gICAgY29uc3QgdGlsZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZGlzcGxheVwiKTtcbiAgICB3aGlsZSAodGlsZVRlbXAuZmlyc3RDaGlsZCkge1xuICAgICAgdGlsZVRlbXAucmVtb3ZlQ2hpbGQodGlsZVRlbXAuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IHRlbXBJY29uID0gbmV3IEltYWdlKDEwMCwgMTAwKTtcbiAgICB0ZW1wSWNvbi5zcmMgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgdGVtcFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBUZW1wLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYyArIFwiXFx1MDBCMENcIjtcbiAgICB0aWxlVGVtcC5hcHBlbmQodGVtcEljb24sIHRlbXBUZW1wKTtcblxuICAgIGNvbnN0IHRlbXBEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWRlc2NcIik7XG4gICAgdGVtcERlc2MudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5TG9jYXRpb25IZWFkZXIsXG4gICAgdXBkYXRlV2VhdGhlclRpbGVEaXNwbGF5LFxuICAgIHVwZGF0ZUxvY2F0aW9uSGVhZGVyLFxuICB9O1xufSkoKTtcblxuY29uc3QgcGFnZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0UGFnZSA9ICgpID0+IHtcbiAgICBpbml0SGVhZGVyKCk7XG4gICAgd2VhdGhlckFwaS5sb2NhdGlvblNlYXJjaEhhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCBpbml0SGVhZGVyID0gKCkgPT4ge1xuICAgIHVwZGF0ZVBhZ2UuZGlzcGxheUxvY2F0aW9uSGVhZGVyKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0UGFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHdlYXRoZXJUaWxlRGlzcGxheSwgcGFnZURpc3BsYXksIHVwZGF0ZVBhZ2UgfTtcbiIsIi8vRnVuY3Rpb24gdG8gbWFrZSBBUEkgY2FsbFxuaW1wb3J0IHsgdXBkYXRlUGFnZSB9IGZyb20gXCIuL1VJXCI7XG5cbmNvbnN0IHdlYXRoZXJBcGkgPSAoKCkgPT4ge1xuICBjb25zdCBjdXJyZW50VVJMSGFuZGxlciA9IChzZWFyY2gpID0+IHtcbiAgICBsZXQgYmFzZVVSTCA9XG4gICAgICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NzI5ZTQ0ZWU2NDgzNDA2NTgzNjE2MDQyNzIzMDEwNCZxPVwiICtcbiAgICAgIHNlYXJjaDtcblxuICAgIHJldHVybiBiYXNlVVJMO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaFVSTEhhbmRsZXIgPSAoc2VhcmNoKSA9PiB7XG4gICAgbGV0IGJhc2VVUkwgPVxuICAgICAgXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9NzI5ZTQ0ZWU2NDgzNDA2NTgzNjE2MDQyNzIzMDEwNCZxPVwiICtcbiAgICAgIHNlYXJjaDtcbiAgICByZXR1cm4gYmFzZVVSTDtcbiAgfTtcblxuICBjb25zdCBhcGlMb29rdXAgPSAoZmluYWxVUkwpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZmV0Y2goZmluYWxVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy9JbmRpY2F0ZSB0aGF0IGVycm9yIGhhcHBlbmVkXG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gIH07XG5cbiAgLy9HZXQgY3VycmVudCBXZWF0aGVyIGJhc2VkIG9uIHVzZXIncyBJUFxuICBjb25zdCBkZWZhdWx0Q3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHRJUExvb2t1cCA9IFwiYXV0bzppcFwiO1xuICAgIGNvbnN0IGZpbmFsVVJMID0gY3VycmVudFVSTEhhbmRsZXIoZGVmYXVsdElQTG9va3VwKTtcbiAgICByZXR1cm4gYXBpTG9va3VwKGZpbmFsVVJMKTtcbiAgfTtcblxuICBjb25zdCBjdXN0b21DdXJyZW50V2VhdGhlciA9IChsb2NhdGlvbikgPT4ge1xuICAgIGxldCBmaW5hbFVSTCA9IGN1cnJlbnRVUkxIYW5kbGVyKGxvY2F0aW9uKTtcbiAgICByZXR1cm4gYXBpTG9va3VwKGZpbmFsVVJMKTtcbiAgfTtcblxuICBjb25zdCBsb2NhdGlvblNlYXJjaEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tTG9jYXRpb25cIik7XG5cbiAgICBsZXQgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcbiAgICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFpbnB1dFNlYXJjaC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBpbnB1dFNlYXJjaC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbWVzc2FnZVwiKSkge1xuICAgICAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbWVzc2FnZVwiKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBzZWFyY2hUZXJtID0gaW5wdXRTZWFyY2gudmFsdWU7XG4gICAgICBsZXQgZmluYWxVUkwgPSBzZWFyY2hVUkxIYW5kbGVyKHNlYXJjaFRlcm0pO1xuICAgICAgbGV0IGFwaVJldHVybkRhdGEgPSBzZWFyY2hBcGlWZXJpZmllcihmaW5hbFVSTCk7XG4gICAgICBhcGlSZXR1cm5EYXRhXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW5wdXRTZWFyY2guc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICB1cGRhdGVQYWdlLnVwZGF0ZVdlYXRoZXJUaWxlRGlzcGxheShkYXRhWzBdLm5hbWUpO1xuICAgICAgICAgICAgdXBkYXRlUGFnZS51cGRhdGVMb2NhdGlvbkhlYWRlcihkYXRhWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBpbnB1dFNlYXJjaC5zZXRDdXN0b21WYWxpZGl0eShcIkxvY2F0aW9uIE5vdCBGb3VuZFwiKTtcbiAgICAgICAgICBsZXQgZXJyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgZXJyTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1tZXNzYWdlXCIpO1xuICAgICAgICAgIGVyck1zZy50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gTm90IEZvdW5kXCI7XG4gICAgICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVyck1zZyk7XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQXBpVmVyaWZpZXIgPSAoZmluYWxVUkwpID0+IHtcbiAgICBsZXQgZGF0YSA9IGFwaUxvb2t1cChmaW5hbFVSTCk7XG4gICAgZGF0YVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAvL0Zvcm0gdmVyaWZpY2F0aW9uIGhhbmRsaW5nXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBMb2NhdGlvblwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGVmYXVsdEN1cnJlbnRXZWF0aGVyLFxuICAgIGxvY2F0aW9uU2VhcmNoSGFuZGxlcixcbiAgICBjdXN0b21DdXJyZW50V2VhdGhlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHdlYXRoZXJBcGkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgd2VhdGhlclRpbGVEaXNwbGF5LCBwYWdlRGlzcGxheSB9IGZyb20gXCIuL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHdlYXRoZXJUaWxlRGlzcGxheSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBwYWdlRGlzcGxheS5pbml0UGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=