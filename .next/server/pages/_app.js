/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA_TRACKING_ID: () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action, category, label, value })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxpQkFBaUJDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRTNELDRFQUE0RTtBQUNyRSxNQUFNQyxXQUFXLENBQUNDO0lBQ3ZCQyxPQUFPQyxJQUFJLENBQUMsVUFBVVAsZ0JBQWdCO1FBQ3BDUSxXQUFXSDtJQUNiO0FBQ0YsRUFBQztBQUVELDZFQUE2RTtBQUN0RSxNQUFNSSxRQUFRLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFO0lBQ3REUCxPQUFPQyxJQUFJLENBQUMsU0FBU0csUUFBUTtRQUMzQkksZ0JBQWdCSDtRQUNoQkksYUFBYUg7UUFDYkMsT0FBT0E7SUFDVDtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW5keXBvY2tldHMtbmV4dGpzLWJsb2ctc3RhcnRlci8uL2xpYi9ndGFnLmpzP2ZmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfSURcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9wYWdlc1xuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICB3aW5kb3cuZ3RhZygnY29uZmlnJywgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSlcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dBX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n/* harmony import */ var prism_themes_themes_prism_dracula_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-themes/themes/prism-dracula.css */ \"./node_modules/prism-themes/themes/prism-dracula.css\");\n/* harmony import */ var prism_themes_themes_prism_dracula_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prism_themes_themes_prism_dracula_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);\n// _app.js\n\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_3__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/workspaces/old-web/pages/_app.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQVU7O0FBQ3dCO0FBQ007QUFDSjtBQUNXO0FBQ2pCO0FBRTlCLE1BQU1HLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sb0JBQW9CLENBQUNDO1lBQ3pCTiwrQ0FBYSxDQUFDTTtRQUNoQjtRQUVBRixPQUFPSSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJKO1FBRXhDLE9BQU87WUFDTEQsT0FBT0ksTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCTDtRQUMzQztJQUNGLEdBQUc7UUFBQ0QsT0FBT0ksTUFBTTtLQUFDO0lBRWxCLHFCQUFPLDhEQUFDTjtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FuZHlwb2NrZXRzLW5leHRqcy1ibG9nLXN0YXJ0ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gX2FwcC5qc1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZyc7XG5pbXBvcnQgJ3ByaXNtLXRoZW1lcy90aGVtZXMvcHJpc20tZHJhY3VsYS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgZ3RhZy5wYWdldmlldyh1cmwpO1xuICAgIH07XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImd0YWciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/prism-themes"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();