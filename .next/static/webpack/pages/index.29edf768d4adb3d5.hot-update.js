"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/comps/Sphere.js":
/*!*******************************!*\
  !*** ./pages/comps/Sphere.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sphere; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n//import {Mesh} from \"three\";\nfunction Sphere() {\n    _s();\n    const mesh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(()=>{\n        mesh.current.rotation.x += 0.005;\n        mesh.current.rotation.y += 0.01;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        visible: true,\n        castShadow: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                args: [\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/StudioPlutoMetaverse/pages/comps/Sphere.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                attach: \"material\",\n                color: \"0xADD8E6\",\n                roughness: 0.1,\n                metalness: 0.1\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/StudioPlutoMetaverse/pages/comps/Sphere.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/StudioPlutoMetaverse/pages/comps/Sphere.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(Sphere, \"aboyJ/StuJfvpd16sdbtizo3yWA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Sphere;\nvar _c;\n$RefreshReg$(_c, \"Sphere\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wcy9TcGhlcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQThDO0FBQ2Y7QUFDL0IsNkJBQTZCO0FBR2QsU0FBU0UsU0FBUTs7SUFDNUIsTUFBTUMsT0FBT0YsNkNBQU1BO0lBRW5CRCw0REFBUUEsQ0FBQyxJQUFNO1FBQ1hHLEtBQUtDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLElBQUk7UUFDM0JILEtBQUtDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRSxDQUFDLElBQUk7SUFDL0I7SUFFQSxxQkFDSSw4REFBQ0o7UUFBS0ssT0FBTztRQUFDQyxVQUFVOzswQkFDcEIsOERBQUNDO2dCQUFlQyxNQUFNO29CQUFDO2lCQUFFOzs7Ozs7MEJBQ3pCLDhEQUFDQztnQkFDR0MsUUFBTztnQkFDUEMsT0FBTTtnQkFDTkMsV0FBVztnQkFDWEMsV0FBVzs7Ozs7Ozs7Ozs7O0FBSTNCLENBQUM7R0FuQnVCZDs7UUFHcEJGLHdEQUFRQTs7O0tBSFlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBzL1NwaGVyZS5qcz8wZThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQge01lc2h9IGZyb20gXCJ0aHJlZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaGVyZSgpe1xuICAgIGNvbnN0IG1lc2ggPSB1c2VSZWYoKTtcblxuICAgIHVzZUZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVzaC5jdXJyZW50LnJvdGF0aW9uLnggKz0gMC4wMDU7XG4gICAgICAgIG1lc2guY3VycmVudC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgICAgPG1lc2ggdmlzaWJsZSBjYXN0U2hhZG93PlxuICAgICAgICAgICAgPHNwaGVyZUdlb21ldHJ5IGFyZ3M9e1sxXX0gLz5cbiAgICAgICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxuICAgICAgICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIjB4QUREOEU2XCJcbiAgICAgICAgICAgICAgICByb3VnaG5lc3M9ezAuMX1cbiAgICAgICAgICAgICAgICBtZXRhbG5lc3M9ezAuMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbWVzaD5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUZyYW1lIiwidXNlUmVmIiwiU3BoZXJlIiwibWVzaCIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIngiLCJ5IiwidmlzaWJsZSIsImNhc3RTaGFkb3ciLCJzcGhlcmVHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImF0dGFjaCIsImNvbG9yIiwicm91Z2huZXNzIiwibWV0YWxuZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comps/Sphere.js\n"));

/***/ })

});