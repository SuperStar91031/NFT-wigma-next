"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/mainLayout */ \"./components/mainLayout/index.tsx\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"./node_modules/wagmi/providers/jsonRpc/dist/wagmi-providers-jsonRpc.esm.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"./node_modules/wagmi/connectors/metaMask/dist/wagmi-connectors-metaMask.esm.js\");\n\nvar _this = undefined;\n\n\n\n\n\n\nvar provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.mainnet\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__.jsonRpcProvider)({\n        rpc: function() {\n            return {\n                http: \"https://eth-mainnet.blastapi.io/API-KEY\"\n            };\n        }\n    }), \n]).provider;\nvar client = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors: [\n        new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({\n            chains: [\n                wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.mainnet\n            ]\n        })\n    ],\n    provider: provider\n});\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_mainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\pages\\\\_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\pages\\\\_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUVnQjtBQUNXO0FBQ2dCO0FBQ1o7QUFFOUQsSUFBTSxRQUFVLEdBQUtJLHNEQUFlLENBQ2xDO0lBQUNDLGdEQUFhO0NBQUMsRUFDZjtJQUNFSix3RUFBZSxDQUFDO1FBQ2RRLEdBQUcsRUFBRSxXQUFNO1lBQ1QsT0FBTztnQkFDTEMsSUFBSSxFQUFFLHlDQUF5QzthQUNoRCxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7Q0FDSCxDQUNGLENBWE9ILFFBQVE7QUFhaEIsSUFBTUksTUFBTSxHQUFHUixtREFBWSxDQUFDO0lBQzFCUyxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsVUFBVSxFQUFFO1FBQ1YsSUFBSVAsd0VBQWlCLENBQUM7WUFDcEJRLE1BQU0sRUFBRTtnQkFBQ1QsZ0RBQWE7YUFBQztTQUN4QixDQUFDO0tBQ0g7SUFDREUsUUFBUSxFQUFSQSxRQUFRO0NBQ1QsQ0FBQztBQUVGLElBQU1RLEtBQUssR0FBRyxnQkFBd0M7UUFBckNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7SUFDbkMscUJBQ0UsOERBQUNqQiw2REFBVTtrQkFDVCw0RUFBQ0UsOENBQVc7WUFBQ1MsTUFBTSxFQUFFQSxNQUFNO3NCQUMzQiw0RUFBQ0ssU0FBUyxxRkFBS0MsU0FBUzs7OztxQkFBSTs7Ozs7aUJBQ2Q7Ozs7O2FBQ0gsQ0FDYjtBQUNKLENBQUM7QUFSS0YsS0FBQUEsS0FBSztBQVVYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL21haW5MYXlvdXRcIjtcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xuaW1wb3J0IHsgV2FnbWlDb25maWcsIGNyZWF0ZUNsaWVudCwgY29uZmlndXJlQ2hhaW5zLCBjaGFpbiB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy9tZXRhTWFza1wiOyBcblxuY29uc3QgeyBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4ubWFpbm5ldF0sXG4gIFtcbiAgICBqc29uUnBjUHJvdmlkZXIoe1xuICAgICAgcnBjOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHR0cDogXCJodHRwczovL2V0aC1tYWlubmV0LmJsYXN0YXBpLmlvL0FQSS1LRVlcIixcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF1cbik7XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiBbXG4gICAgbmV3IE1ldGFNYXNrQ29ubmVjdG9yKHtcbiAgICAgIGNoYWluczogW2NoYWluLm1haW5uZXRdLFxuICAgIH0pXG4gIF0sXG4gIHByb3ZpZGVyLFxufSk7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbkxheW91dD5cbiAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1dhZ21pQ29uZmlnPlxuICAgIDwvTWFpbkxheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJqc29uUnBjUHJvdmlkZXIiLCJXYWdtaUNvbmZpZyIsImNyZWF0ZUNsaWVudCIsImNvbmZpZ3VyZUNoYWlucyIsImNoYWluIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJwcm92aWRlciIsIm1haW5uZXQiLCJycGMiLCJodHRwIiwiY2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiY2hhaW5zIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});