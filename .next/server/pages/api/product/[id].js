"use strict";
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
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
exports.modules = {

/***/ "./models/ProductModel.ts":
/*!********************************!*\
  !*** ./models/ProductModel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductModel = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String\n  },\n  category: {\n    type: String,\n    ref: 'CategoryModel'\n  },\n  order_id: {\n    type: Number\n  },\n  name: {\n    type: String\n  },\n  description: {\n    type: String\n  },\n  cost: {\n    type: Number\n  },\n  image: {\n    type: String\n  },\n  availability: {\n    type: Boolean\n  }\n}, {\n  collection: 'products'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ProductModel) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ProductModel', ProductModel));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvUHJvZHVjdE1vZGVsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUUsWUFBWSxHQUFHLElBQUlELDRDQUFKLENBQVc7QUFDNUJFLEVBQUFBLEdBQUcsRUFBRTtBQUNEQyxJQUFBQSxJQUFJLEVBQUVDO0FBREwsR0FEdUI7QUFJNUJDLEVBQUFBLFFBQVEsRUFBRTtBQUNORixJQUFBQSxJQUFJLEVBQUVDLE1BREE7QUFFTkUsSUFBQUEsR0FBRyxFQUFFO0FBRkMsR0FKa0I7QUFRNUJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOSixJQUFBQSxJQUFJLEVBQUVLO0FBREEsR0FSa0I7QUFXNUJDLEVBQUFBLElBQUksRUFBRTtBQUNGTixJQUFBQSxJQUFJLEVBQUVDO0FBREosR0FYc0I7QUFjNUJNLEVBQUFBLFdBQVcsRUFBRTtBQUNUUCxJQUFBQSxJQUFJLEVBQUVDO0FBREcsR0FkZTtBQWlCNUJPLEVBQUFBLElBQUksRUFBRTtBQUNGUixJQUFBQSxJQUFJLEVBQUVLO0FBREosR0FqQnNCO0FBb0I1QkksRUFBQUEsS0FBSyxFQUFFO0FBQ0hULElBQUFBLElBQUksRUFBRUM7QUFESCxHQXBCcUI7QUF1QjVCUyxFQUFBQSxZQUFZLEVBQUU7QUFDVlYsSUFBQUEsSUFBSSxFQUFFVztBQURJO0FBdkJjLENBQVgsRUEyQmxCO0FBQ0NDLEVBQUFBLFVBQVUsRUFBRTtBQURiLENBM0JrQixDQUFyQjtBQStCQSxpRUFBZWhCLHFFQUFBLElBQWdDQSxxREFBQSxDQUFlLGNBQWYsRUFBK0JFLFlBQS9CLENBQS9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbW9kZWxzL1Byb2R1Y3RNb2RlbC50cz84MWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFByb2R1Y3RNb2RlbCA9IG5ldyBTY2hlbWEoe1xuICAgIF9pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBjYXRlZ29yeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlZjogJ0NhdGVnb3J5TW9kZWwnXG4gICAgfSxcbiAgICBvcmRlcl9pZDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNvc3Q6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgfSxcblxufSwge1xuICAgIGNvbGxlY3Rpb246ICdwcm9kdWN0cydcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0TW9kZWwgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3RNb2RlbCcsIFByb2R1Y3RNb2RlbCk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiUHJvZHVjdE1vZGVsIiwiX2lkIiwidHlwZSIsIlN0cmluZyIsImNhdGVnb3J5IiwicmVmIiwib3JkZXJfaWQiLCJOdW1iZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb3N0IiwiaW1hZ2UiLCJhdmFpbGFiaWxpdHkiLCJCb29sZWFuIiwiY29sbGVjdGlvbiIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/ProductModel.ts\n");

/***/ }),

/***/ "./pages/api/product/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/product/[id].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/dbConnect */ \"./utils/dbConnect.ts\");\n/* harmony import */ var _models_ProductModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/ProductModel */ \"./models/ProductModel.ts\");\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst api = async (req, res) => {\n  try {\n    const product = await _models_ProductModel__WEBPACK_IMPORTED_MODULE_1__.default.findById(req.query.id);\n    return res.status(200).json({\n      success: true,\n      product\n    });\n  } catch (err) {\n    console.error(err);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFFQUEseURBQVM7O0FBRVQsTUFBTUUsR0FBRyxHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQzdELE1BQUk7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBTUosa0VBQUEsQ0FBc0JFLEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxFQUFoQyxDQUF0QjtBQUNBLFdBQU9KLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCTixNQUFBQTtBQUFqQixLQUFyQixDQUFQO0FBQ0gsR0FIRCxDQUdFLE9BQU9PLEdBQVAsRUFBWTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNIO0FBRUosQ0FSRDs7QUFVQSxpRUFBZVYsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9wcm9kdWN0L1tpZF0udHM/OTIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvdXRpbHMvZGJDb25uZWN0JztcbmltcG9ydCBQcm9kdWN0TW9kZWwgZnJvbSAnQC9tb2RlbHMvUHJvZHVjdE1vZGVsJztcblxuZGJDb25uZWN0KCk7XG5cbmNvbnN0IGFwaSA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0TW9kZWwuZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0IH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGk7Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlByb2R1Y3RNb2RlbCIsImFwaSIsInJlcSIsInJlcyIsInByb2R1Y3QiLCJmaW5kQnlJZCIsInF1ZXJ5IiwiaWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/product/[id].ts\n");

/***/ }),

/***/ "./utils/dbConnect.ts":
/*!****************************!*\
  !*** ./utils/dbConnect.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function dbConnect() {\n  try {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:admin@cluster0.12if0.mongodb.net/vinoro-2-0-database\", {});\n    console.log('MongoDB connected!');\n  } catch (err) {\n    console.error(\"MongoDB connection - ERROR\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsZUFBZUMsU0FBZixHQUEyQjtBQUN2QixNQUFJO0FBQ0EsVUFBTUQsdURBQUEsQ0FBaUIsMEVBQWpCLEVBQTZGLEVBQTdGLENBQU47QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDSCxHQUhELENBR0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZGLElBQUFBLE9BQU8sQ0FBQ0csS0FBUixDQUFjLDRCQUFkO0FBQ0g7QUFDSjs7QUFFRCxpRUFBZUwsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3V0aWxzL2RiQ29ubmVjdC50cz85ZmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBjbHVzdGVyMC4xMmlmMC5tb25nb2RiLm5ldC92aW5vcm8tMi0wLWRhdGFiYXNlXCIsIHt9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkIScpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gLSBFUlJPUlwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/dbConnect.ts\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/[id].ts"));
module.exports = __webpack_exports__;

})();