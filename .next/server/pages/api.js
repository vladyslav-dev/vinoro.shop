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
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./models/CategoryModel.ts":
/*!*********************************!*\
  !*** ./models/CategoryModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategoryModel = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String\n  },\n  category_id: {\n    type: Number,\n    unique: true,\n    required: true\n  },\n  category_name: {\n    type: String,\n    required: true\n  },\n  category_src: {\n    type: String,\n    required: true\n  },\n  image: {\n    type: String,\n    required: true\n  },\n  catalog: {\n    type: Number,\n    required: true\n  }\n}, {\n  collection: 'categories'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.CategoryModel) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('CategoryModel', CategoryModel));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvQ2F0ZWdvcnlNb2RlbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1FLGFBQWEsR0FBRyxJQUFJRCw0Q0FBSixDQUFXO0FBQzdCRSxFQUFBQSxHQUFHLEVBQUU7QUFDREMsSUFBQUEsSUFBSSxFQUFFQztBQURMLEdBRHdCO0FBSTdCQyxFQUFBQSxXQUFXLEVBQUU7QUFDVEYsSUFBQUEsSUFBSSxFQUFFRyxNQURHO0FBRVRDLElBQUFBLE1BQU0sRUFBRSxJQUZDO0FBR1RDLElBQUFBLFFBQVEsRUFBRTtBQUhELEdBSmdCO0FBUzdCQyxFQUFBQSxhQUFhLEVBQUU7QUFDWE4sSUFBQUEsSUFBSSxFQUFFQyxNQURLO0FBRVhJLElBQUFBLFFBQVEsRUFBRTtBQUZDLEdBVGM7QUFhN0JFLEVBQUFBLFlBQVksRUFBRTtBQUNWUCxJQUFBQSxJQUFJLEVBQUVDLE1BREk7QUFFVkksSUFBQUEsUUFBUSxFQUFFO0FBRkEsR0FiZTtBQWlCN0JHLEVBQUFBLEtBQUssRUFBRTtBQUNIUixJQUFBQSxJQUFJLEVBQUVDLE1BREg7QUFFSEksSUFBQUEsUUFBUSxFQUFFO0FBRlAsR0FqQnNCO0FBcUI3QkksRUFBQUEsT0FBTyxFQUFFO0FBQ0xULElBQUFBLElBQUksRUFBRUcsTUFERDtBQUVMRSxJQUFBQSxRQUFRLEVBQUU7QUFGTDtBQXJCb0IsQ0FBWCxFQXlCbkI7QUFBRUssRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0F6Qm1CLENBQXRCO0FBMkJBLGlFQUFlZCxzRUFBQSxJQUFpQ0EscURBQUEsQ0FBZSxlQUFmLEVBQWdDRSxhQUFoQyxDQUFoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL21vZGVscy9DYXRlZ29yeU1vZGVsLnRzP2M0NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgQ2F0ZWdvcnlNb2RlbCA9IG5ldyBTY2hlbWEoe1xuICAgIF9pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBjYXRlZ29yeV9pZDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjYXRlZ29yeV9uYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjYXRlZ29yeV9zcmM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjYXRhbG9nOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfVxufSwgeyBjb2xsZWN0aW9uOiAnY2F0ZWdvcmllcycgfSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNhdGVnb3J5TW9kZWwgfHwgbW9uZ29vc2UubW9kZWwoJ0NhdGVnb3J5TW9kZWwnLCBDYXRlZ29yeU1vZGVsKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJDYXRlZ29yeU1vZGVsIiwiX2lkIiwidHlwZSIsIlN0cmluZyIsImNhdGVnb3J5X2lkIiwiTnVtYmVyIiwidW5pcXVlIiwicmVxdWlyZWQiLCJjYXRlZ29yeV9uYW1lIiwiY2F0ZWdvcnlfc3JjIiwiaW1hZ2UiLCJjYXRhbG9nIiwiY29sbGVjdGlvbiIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/CategoryModel.ts\n");

/***/ }),

/***/ "./models/PopularCategoryModel.ts":
/*!****************************************!*\
  !*** ./models/PopularCategoryModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PopularCategoryModel = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId\n  },\n  title: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  imageURL: {\n    type: String,\n    required: true\n  },\n  brands: {\n    type: Array,\n    required: true\n  },\n  categoryId: {\n    type: String,\n    required: true\n  }\n}, {\n  collection: 'popularCategory'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.PopularCategoryModel) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('PopularCategoryModel', PopularCategoryModel));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvUG9wdWxhckNhdGVnb3J5TW9kZWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxvQkFBb0IsR0FBRyxJQUFJRCw0Q0FBSixDQUFXO0FBQ3BDRSxFQUFBQSxHQUFHLEVBQUU7QUFDREMsSUFBQUEsSUFBSSxFQUFFSCwyREFBcUJLO0FBRDFCLEdBRCtCO0FBSXBDQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEgsSUFBQUEsSUFBSSxFQUFFSSxNQURIO0FBRUhDLElBQUFBLFFBQVEsRUFBRTtBQUZQLEdBSjZCO0FBUXBDQyxFQUFBQSxXQUFXLEVBQUU7QUFDVE4sSUFBQUEsSUFBSSxFQUFFSSxNQURHO0FBRVRDLElBQUFBLFFBQVEsRUFBRTtBQUZELEdBUnVCO0FBWXBDRSxFQUFBQSxRQUFRLEVBQUU7QUFDTlAsSUFBQUEsSUFBSSxFQUFFSSxNQURBO0FBRU5DLElBQUFBLFFBQVEsRUFBRTtBQUZKLEdBWjBCO0FBZ0JwQ0csRUFBQUEsTUFBTSxFQUFFO0FBQ0pSLElBQUFBLElBQUksRUFBRVMsS0FERjtBQUVKSixJQUFBQSxRQUFRLEVBQUU7QUFGTixHQWhCNEI7QUFvQnBDSyxFQUFBQSxVQUFVLEVBQUU7QUFDUlYsSUFBQUEsSUFBSSxFQUFFSSxNQURFO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGO0FBcEJ3QixDQUFYLEVBd0IxQjtBQUFFTSxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQXhCMEIsQ0FBN0I7QUEwQkEsaUVBQWVmLDZFQUFBLElBQXdDQSxxREFBQSxDQUFlLHNCQUFmLEVBQXVDRSxvQkFBdkMsQ0FBdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9tb2RlbHMvUG9wdWxhckNhdGVnb3J5TW9kZWwudHM/ZTdlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBQb3B1bGFyQ2F0ZWdvcnlNb2RlbCA9IG5ldyBTY2hlbWEoe1xuICAgIF9pZDoge1xuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGltYWdlVVJMOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBicmFuZHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY2F0ZWdvcnlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH1cbn0sIHsgY29sbGVjdGlvbjogJ3BvcHVsYXJDYXRlZ29yeScgfSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlBvcHVsYXJDYXRlZ29yeU1vZGVsIHx8IG1vbmdvb3NlLm1vZGVsKCdQb3B1bGFyQ2F0ZWdvcnlNb2RlbCcsIFBvcHVsYXJDYXRlZ29yeU1vZGVsKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJQb3B1bGFyQ2F0ZWdvcnlNb2RlbCIsIl9pZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwidGl0bGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVUkwiLCJicmFuZHMiLCJBcnJheSIsImNhdGVnb3J5SWQiLCJjb2xsZWN0aW9uIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/PopularCategoryModel.ts\n");

/***/ }),

/***/ "./pages/api/index.ts":
/*!****************************!*\
  !*** ./pages/api/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/dbConnect */ \"./utils/dbConnect.ts\");\n/* harmony import */ var _models_CategoryModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/CategoryModel */ \"./models/CategoryModel.ts\");\n/* harmony import */ var _models_PopularCategoryModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/PopularCategoryModel */ \"./models/PopularCategoryModel.ts\");\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst api = async (req, res) => {\n  const popularCategory = await _models_PopularCategoryModel__WEBPACK_IMPORTED_MODULE_2__.default.find({});\n  const category = await _models_CategoryModel__WEBPACK_IMPORTED_MODULE_1__.default.find({}).sort({\n    \"category_id\": 1\n  });\n  return res.status(200).json({\n    success: true,\n    popularCategory,\n    category\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUdBQSx5REFBUzs7QUFFVCxNQUFNRyxHQUFHLEdBQUcsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFFN0QsUUFBTUMsZUFBZSxHQUFHLE1BQU1KLHNFQUFBLENBQTBCLEVBQTFCLENBQTlCO0FBQ0EsUUFBTU0sUUFBUSxHQUFHLE1BQU1QLCtEQUFBLENBQW1CLEVBQW5CLEVBQXVCUSxJQUF2QixDQUE0QjtBQUFFLG1CQUFlO0FBQWpCLEdBQTVCLENBQXZCO0FBR0EsU0FBT0osR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLElBQVg7QUFBaUJOLElBQUFBLGVBQWpCO0FBQWtDRSxJQUFBQTtBQUFsQyxHQUFyQixDQUFQO0FBRUgsQ0FSRDs7QUFVQSxpRUFBZUwsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9pbmRleC50cz8yM2NmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnQC91dGlscy9kYkNvbm5lY3QnO1xuaW1wb3J0IENhdGVnb3J5TW9kZWwgZnJvbSAnQC9tb2RlbHMvQ2F0ZWdvcnlNb2RlbCc7XG5pbXBvcnQgUG9wdWxhckNhdGVnb3J5TW9kZWwgZnJvbSAnQC9tb2RlbHMvUG9wdWxhckNhdGVnb3J5TW9kZWwnO1xuXG5cbmRiQ29ubmVjdCgpO1xuXG5jb25zdCBhcGkgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcblxuICAgIGNvbnN0IHBvcHVsYXJDYXRlZ29yeSA9IGF3YWl0IFBvcHVsYXJDYXRlZ29yeU1vZGVsLmZpbmQoe30pO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgQ2F0ZWdvcnlNb2RlbC5maW5kKHt9KS5zb3J0KHsgXCJjYXRlZ29yeV9pZFwiOiAxIH0pO1xuXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBwb3B1bGFyQ2F0ZWdvcnksIGNhdGVnb3J5IH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIkNhdGVnb3J5TW9kZWwiLCJQb3B1bGFyQ2F0ZWdvcnlNb2RlbCIsImFwaSIsInJlcSIsInJlcyIsInBvcHVsYXJDYXRlZ29yeSIsImZpbmQiLCJjYXRlZ29yeSIsInNvcnQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/index.ts\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.ts"));
module.exports = __webpack_exports__;

})();