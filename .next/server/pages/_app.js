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

/***/ "./components/errorBoundary/index.tsx":
/*!********************************************!*\
  !*** ./components/errorBoundary/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props){\n        super(props);\n        this.state = {\n            hasError: false\n        };\n    }\n    static getDerivedStateFromError(error) {\n        return {\n            hasError: true,\n            error: error\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        this.setState({\n            ...this.state,\n            error,\n            errorInfo\n        });\n        if (error) {\n            console.log(`errorBoundary: ${JSON.stringify(error)}`);\n        }\n        if (errorInfo) {\n            console.log(`errorBoundaryInfo: ${JSON.stringify(errorInfo)}`);\n        }\n    }\n    render() {\n        if (this.state.hasError) {\n            // You can render any custom fallback UI\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Failed\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"aria-label\": \"delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                            style: {\n                                whiteSpace: \"pre-wrap\"\n                            },\n                            children: [\n                                this.state.error && this.state.error.toString(),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                this.state.errorInfo && this.state.errorInfo.componentStack\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\errorBoundary\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this);\n        }\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Vycm9yQm91bmRhcnkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFFekMsTUFBTUMsYUFBYSxTQUFTRCx3REFBZTtJQUl6Q0csWUFBWUMsS0FBUyxDQUFFO1FBQ3JCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBRztZQUFFQyxRQUFRLEVBQUUsS0FBSztTQUFFLENBQUM7SUFDbkM7V0FFT0Msd0JBQXdCLENBQUNDLEtBQVksRUFBRTtRQUM1QyxPQUFPO1lBQUVGLFFBQVEsRUFBRSxJQUFJO1lBQUVFLEtBQUssRUFBRUEsS0FBSztTQUFFLENBQUM7SUFDMUM7SUFFQUMsaUJBQWlCLENBQUNELEtBQVksRUFBRUUsU0FBb0IsRUFBRTtRQUNwRCxJQUFJLENBQUNDLFFBQVEsQ0FBQztZQUFFLEdBQUcsSUFBSSxDQUFDTixLQUFLO1lBQUVHLEtBQUs7WUFBRUUsU0FBUztTQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJRixLQUFLLEVBQUU7WUFDVEksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSUUsU0FBUyxFQUFFO1lBQ2JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsbUJBQW1CLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0g7SUFFQU0sTUFBTSxHQUFHO1FBQ1AsSUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQ3ZCLHdDQUF3QztZQUN4QyxxQkFDRSw4REFBQ1csU0FBTzs7a0NBQ04sOERBQUNDLEtBQUc7OzBDQUNGLDhEQUFDQyxHQUFDOzBDQUFDLFFBQU07Ozs7O29DQUFJOzBDQUNiLDhEQUFDQyxRQUFNO2dDQUFDQyxZQUFVLEVBQUMsUUFBUTs7Ozs7b0NBQVU7Ozs7Ozs0QkFDakM7a0NBQ04sOERBQUNILEtBQUc7a0NBQ0YsNEVBQUNJLFNBQU87NEJBQUNDLEtBQUssRUFBRTtnQ0FBRUMsVUFBVSxFQUFFLFVBQVU7NkJBQUU7O2dDQUN2QyxJQUFJLENBQUNuQixLQUFLLENBQUNHLEtBQUssSUFBSSxJQUFJLENBQUNILEtBQUssQ0FBQ0csS0FBSyxDQUFDaUIsUUFBUSxFQUFFOzhDQUNoRCw4REFBQ0MsSUFBRTs7Ozt3Q0FBRztnQ0FDTCxJQUFJLENBQUNyQixLQUFLLENBQUNLLFNBQVMsSUFBSSxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssU0FBUyxDQUFDaUIsY0FBYzs7Ozs7O2dDQUNwRDs7Ozs7NEJBQ047Ozs7OztvQkFDRSxDQUNWO1FBQ0osQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDdkIsS0FBSyxDQUFDd0IsUUFBUSxDQUFDO0lBQzdCO0NBQ0Q7QUFFRCxpRUFBZTNCLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RfbmZ0Ly4vY29tcG9uZW50cy9lcnJvckJvdW5kYXJ5L2luZGV4LnRzeD81ZmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgeyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9LFxuICB7IGhhc0Vycm9yOiBib29sZWFuOyBlcnJvcj86IEVycm9yOyBlcnJvckluZm8/OiBFcnJvckluZm8gfVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiB7fSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUsIGVycm9yOiBlcnJvciB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBlcnJvciwgZXJyb3JJbmZvIH0pO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coYGVycm9yQm91bmRhcnk6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JJbmZvKSB7XG4gICAgICBjb25zb2xlLmxvZyhgZXJyb3JCb3VuZGFyeUluZm86ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3JJbmZvKX1gKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5GYWlsZWQ8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJkZWxldGVcIj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRldGFpbHMgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiIH19PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiB0aGlzLnN0YXRlLmVycm9yLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckluZm8gJiYgdGhpcy5zdGF0ZS5lcnJvckluZm8uY29tcG9uZW50U3RhY2t9XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkVycm9yQm91bmRhcnkiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImVycm9yIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvckluZm8iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVyIiwiYXJ0aWNsZSIsImRpdiIsInAiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwiZGV0YWlscyIsInN0eWxlIiwid2hpdGVTcGFjZSIsInRvU3RyaW5nIiwiYnIiLCJjb21wb25lbnRTdGFjayIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/errorBoundary/index.tsx\n");

/***/ }),

/***/ "./components/mainLayout/index.tsx":
/*!*****************************************!*\
  !*** ./components/mainLayout/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_errorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/errorBoundary */ \"./components/errorBoundary/index.tsx\");\n\n\n\n\nconst MainLayout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"NFTLaunchKit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\mainLayout\\\\index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"NFTLaunchKit description!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\mainLayout\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\mainLayout\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\mainLayout\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_errorBoundary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\mainLayout\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\components\\\\mainLayout\\\\index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5MYXlvdXQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDTDtBQUN3QjtBQUlyRCxNQUFNRyxVQUFVLEdBQXdCLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDeEQscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDSixrREFBSTs7a0NBQ0gsOERBQUNLLE9BQUs7a0NBQUMsY0FBWTs7Ozs7aUNBQVE7a0NBQzNCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDJCQUEyQjs7Ozs7aUNBQUc7a0NBQy9ELDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O2lDQUFHOzs7Ozs7eUJBQ2xDOzBCQUNQLDhEQUFDVixnRUFBYTswQkFBRUUsUUFBUTs7Ozs7eUJBQWlCOzs7Ozs7aUJBQ3JDLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVELFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RfbmZ0Ly4vY29tcG9uZW50cy9tYWluTGF5b3V0L2luZGV4LnRzeD85NDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSBcImNvbXBvbmVudHMvZXJyb3JCb3VuZGFyeVwiO1xuXG50eXBlIE1haW5MYXlvdXRQcm9wcyA9IHt9ICYgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCBIVE1MRWxlbWVudD47XG5cbmNvbnN0IE1haW5MYXlvdXQ6IEZDPE1haW5MYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TkZUTGF1bmNoS2l0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk5GVExhdW5jaEtpdCBkZXNjcmlwdGlvbiFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8RXJyb3JCb3VuZGFyeT57Y2hpbGRyZW59PC9FcnJvckJvdW5kYXJ5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJFcnJvckJvdW5kYXJ5IiwiTWFpbkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainLayout/index.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/mainLayout */ \"./components/mainLayout/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n// Configure chains & providers with the Alchemy provider.\n// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)(wagmi__WEBPACK_IMPORTED_MODULE_3__.defaultChains, [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        apiKey: \"yourAlchemyApiKey\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)(), \n]);\n// Set up client\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors: [\n        new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_7__.MetaMaskConnector({\n            chains\n        }),\n        new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__.CoinbaseWalletConnector({\n            chains,\n            options: {\n                appName: \"wagmi\"\n            }\n        }),\n        new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__.WalletConnectConnector({\n            chains,\n            options: {\n                qrcode: true\n            }\n        }), \n    ],\n    provider\n});\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_mainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\pages\\\\_app.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\pages\\\\_app.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\My Projects\\\\1111\\\\NFTLaunchKit-Test-main\\\\pages\\\\_app.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVnQjtBQU9oQztBQUUyQztBQUNGO0FBRWtCO0FBQ1o7QUFDVTtBQUV4RSwwREFBMEQ7QUFDMUQseUVBQXlFO0FBQ3pFLE1BQU0sRUFBRVUsTUFBTSxHQUFFQyxRQUFRLEdBQUVDLGlCQUFpQixHQUFFLEdBQUdSLHNEQUFlLENBQUNELGdEQUFhLEVBQUU7SUFDN0VFLHdFQUFlLENBQUM7UUFBRVEsTUFBTSxFQUFFLG1CQUFtQjtLQUFFLENBQUM7SUFDaERQLHNFQUFjLEVBQUU7Q0FDakIsQ0FBQztBQUVGLGdCQUFnQjtBQUNoQixNQUFNUSxNQUFNLEdBQUdaLG1EQUFZLENBQUM7SUFDMUJhLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxVQUFVLEVBQUU7UUFDVixJQUFJUix3RUFBaUIsQ0FBQztZQUFFRSxNQUFNO1NBQUUsQ0FBQztRQUNqQyxJQUFJSCxvRkFBdUIsQ0FBQztZQUMxQkcsTUFBTTtZQUNOTyxPQUFPLEVBQUU7Z0JBQ1BDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGLElBQUlULGtGQUFzQixDQUFDO1lBQ3pCQyxNQUFNO1lBQ05PLE9BQU8sRUFBRTtnQkFDUEUsTUFBTSxFQUFFLElBQUk7YUFDYjtTQUNGLENBQUM7S0FDSDtJQUNEUixRQUFRO0NBQ1QsQ0FBQztBQUVGLE1BQU1TLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEdBQUs7SUFDcEQscUJBQ0UsOERBQUN0Qiw2REFBVTtrQkFDVCw0RUFBQ0MsOENBQVc7WUFBQ2EsTUFBTSxFQUFFQSxNQUFNO3NCQUN6Qiw0RUFBQ08sU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ2hCOzs7OztpQkFDSCxDQUNiO0FBQ0osQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0X25mdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiY29tcG9uZW50cy9tYWluTGF5b3V0XCI7XG5cbmltcG9ydCB7XG4gIFdhZ21pQ29uZmlnLFxuICBjcmVhdGVDbGllbnQsXG4gIGRlZmF1bHRDaGFpbnMsXG4gIGNvbmZpZ3VyZUNoYWlucyxcbn0gZnJvbSBcIndhZ21pXCI7XG5cbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuXG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrXCI7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdFwiO1xuXG4vLyBDb25maWd1cmUgY2hhaW5zICYgcHJvdmlkZXJzIHdpdGggdGhlIEFsY2hlbXkgcHJvdmlkZXIuXG4vLyBUd28gcG9wdWxhciBwcm92aWRlcnMgYXJlIEFsY2hlbXkgKGFsY2hlbXkuY29tKSBhbmQgSW5mdXJhIChpbmZ1cmEuaW8pXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIsIHdlYlNvY2tldFByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoZGVmYXVsdENoYWlucywgW1xuICBhbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IFwieW91ckFsY2hlbXlBcGlLZXlcIiB9KSxcbiAgcHVibGljUHJvdmlkZXIoKSxcbl0pO1xuXG4vLyBTZXQgdXAgY2xpZW50XG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9yczogW1xuICAgIG5ldyBNZXRhTWFza0Nvbm5lY3Rvcih7IGNoYWlucyB9KSxcbiAgICBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe1xuICAgICAgY2hhaW5zLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhcHBOYW1lOiBcIndhZ21pXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcXJjb2RlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXIsXG59KTtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNYWluTGF5b3V0PlxuICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICA8L01haW5MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwiV2FnbWlDb25maWciLCJjcmVhdGVDbGllbnQiLCJkZWZhdWx0Q2hhaW5zIiwiY29uZmlndXJlQ2hhaW5zIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIk1ldGFNYXNrQ29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJhcGlLZXkiLCJjbGllbnQiLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJvcHRpb25zIiwiYXBwTmFtZSIsInFyY29kZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/coinbaseWallet":
/*!**************************************************!*\
  !*** external "wagmi/connectors/coinbaseWallet" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();