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
exports.id = "pages/api/featured";
exports.ids = ["pages/api/featured"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/featured.ts":
/*!***********************************!*\
  !*** ./src/pages/api/featured.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_getProductsJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/getProductsJson */ \"(api)/./src/utils/getProductsJson.ts\");\n\nasync function handler(req, res) {\n    try {\n        // Get the products data\n        const productsData = await (0,_utils_getProductsJson__WEBPACK_IMPORTED_MODULE_0__.getProductsJson)();\n        // Shuffle the products data\n        const shuffledData = shuffleProductArray(productsData);\n        // Scale the random number to be between 1 and 20\n        const randomNumber = Math.random();\n        const min = 1;\n        const max = 20;\n        const scaledNumber = Math.floor(randomNumber * (max - min + 1)) + min;\n        // Return the data as the response\n        res.status(200).json(shuffledData.slice(scaledNumber, scaledNumber + 6));\n    } catch (error) {\n        // If there's an error, return an error response\n        res.status(500).json({\n            error: \"Failed to fetch freatured products data\"\n        });\n    }\n}\nfunction shuffleProductArray(array) {\n    for(let i = array.length - 1; i > 0; i--){\n        const j = Math.floor(Math.random() * (i + 1));\n        [array[i], array[j]] = [\n            array[j],\n            array[i]\n        ];\n    }\n    return array;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ZlYXR1cmVkLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBEO0FBRTNDLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0Q7SUFFcEQsSUFBSTtRQUNGLHdCQUF3QjtRQUN4QixNQUFNQyxlQUFlLE1BQU1KLHVFQUFlQTtRQUUxQyw0QkFBNEI7UUFDNUIsTUFBTUssZUFBZUMsb0JBQW9CRjtRQUV6QyxpREFBaUQ7UUFDakQsTUFBTUcsZUFBZUMsS0FBS0MsTUFBTTtRQUNoQyxNQUFNQyxNQUFNO1FBQ1osTUFBTUMsTUFBTTtRQUNaLE1BQU1DLGVBQWVKLEtBQUtLLEtBQUssQ0FBQ04sZUFBZ0JJLENBQUFBLE1BQU1ELE1BQU0sTUFBTUE7UUFFbEUsa0NBQWtDO1FBQ2xDUCxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVixhQUFhVyxLQUFLLENBQUNKLGNBQWNBLGVBQWU7SUFDdkUsRUFBRSxPQUFPSyxPQUFPO1FBQ2QsZ0RBQWdEO1FBQ2hEZCxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBMEM7SUFDMUU7QUFDRjtBQUVBLFNBQVNYLG9CQUFvQlksS0FBaUI7SUFDNUMsSUFBSyxJQUFJQyxJQUFJRCxNQUFNRSxNQUFNLEdBQUcsR0FBR0QsSUFBSSxHQUFHQSxJQUFLO1FBQ3pDLE1BQU1FLElBQUliLEtBQUtLLEtBQUssQ0FBQ0wsS0FBS0MsTUFBTSxLQUFNVSxDQUFBQSxJQUFJO1FBQzFDLENBQUNELEtBQUssQ0FBQ0MsRUFBRSxFQUFFRCxLQUFLLENBQUNHLEVBQUUsQ0FBQyxHQUFHO1lBQUNILEtBQUssQ0FBQ0csRUFBRTtZQUFFSCxLQUFLLENBQUNDLEVBQUU7U0FBQztJQUM3QztJQUNBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYy1idWlsZGVyLy4vc3JjL3BhZ2VzL2FwaS9mZWF0dXJlZC50cz9mOGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c0pzb24gfSBmcm9tIFwiQC91dGlscy9nZXRQcm9kdWN0c0pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8SVByb2R1Y3RbXSB8IHsgZXJyb3I6IHN0cmluZyB9PlxuKSB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSBwcm9kdWN0cyBkYXRhXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZ2V0UHJvZHVjdHNKc29uKCk7XG5cbiAgICAvLyBTaHVmZmxlIHRoZSBwcm9kdWN0cyBkYXRhXG4gICAgY29uc3Qgc2h1ZmZsZWREYXRhID0gc2h1ZmZsZVByb2R1Y3RBcnJheShwcm9kdWN0c0RhdGEpO1xuXG4gICAgLy8gU2NhbGUgdGhlIHJhbmRvbSBudW1iZXIgdG8gYmUgYmV0d2VlbiAxIGFuZCAyMFxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgbWluID0gMTtcbiAgICBjb25zdCBtYXggPSAyMDtcbiAgICBjb25zdCBzY2FsZWROdW1iZXIgPSBNYXRoLmZsb29yKHJhbmRvbU51bWJlciAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbiAgICAvLyBSZXR1cm4gdGhlIGRhdGEgYXMgdGhlIHJlc3BvbnNlXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2h1ZmZsZWREYXRhLnNsaWNlKHNjYWxlZE51bWJlciwgc2NhbGVkTnVtYmVyICsgNikpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIHJldHVybiBhbiBlcnJvciByZXNwb25zZVxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGZyZWF0dXJlZCBwcm9kdWN0cyBkYXRhXCIgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZVByb2R1Y3RBcnJheShhcnJheTogSVByb2R1Y3RbXSk6IElQcm9kdWN0W10ge1xuICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0c0pzb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvZHVjdHNEYXRhIiwic2h1ZmZsZWREYXRhIiwic2h1ZmZsZVByb2R1Y3RBcnJheSIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJzY2FsZWROdW1iZXIiLCJmbG9vciIsInN0YXR1cyIsImpzb24iLCJzbGljZSIsImVycm9yIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/featured.ts\n");

/***/ }),

/***/ "(api)/./src/utils/getProductsJson.ts":
/*!**************************************!*\
  !*** ./src/utils/getProductsJson.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProductsJson: () => (/* binding */ getProductsJson)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getProductsJson = async ()=>{\n    const filePath = await path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"products.json\");\n    // Read the contents of the products.json file\n    const fileContent = await fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf-8\");\n    // Parse the JSON data\n    const productsData = fileContent ? await JSON.parse(fileContent) : [];\n    return productsData;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvZ2V0UHJvZHVjdHNKc29uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFakIsTUFBTUUsa0JBQWtCO0lBQzdCLE1BQU1DLFdBQVcsTUFBTUYsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFVBQVU7SUFFMUQsOENBQThDO0lBQzlDLE1BQU1DLGNBQWMsTUFBTVAsc0RBQWUsQ0FBQ0csVUFBVTtJQUVwRCxzQkFBc0I7SUFDdEIsTUFBTU0sZUFBZUYsY0FBYyxNQUFNRyxLQUFLQyxLQUFLLENBQUNKLGVBQWUsRUFBRTtJQUVyRSxPQUFPRTtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYy1idWlsZGVyLy4vc3JjL3V0aWxzL2dldFByb2R1Y3RzSnNvbi50cz80OTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0pzb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYXdhaXQgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIFwicHJvZHVjdHMuanNvblwiKTtcblxuICAvLyBSZWFkIHRoZSBjb250ZW50cyBvZiB0aGUgcHJvZHVjdHMuanNvbiBmaWxlXG4gIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpO1xuXG4gIC8vIFBhcnNlIHRoZSBKU09OIGRhdGFcbiAgY29uc3QgcHJvZHVjdHNEYXRhID0gZmlsZUNvbnRlbnQgPyBhd2FpdCBKU09OLnBhcnNlKGZpbGVDb250ZW50KSA6IFtdO1xuXG4gIHJldHVybiBwcm9kdWN0c0RhdGE7XG59O1xuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImdldFByb2R1Y3RzSnNvbiIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudCIsInJlYWRGaWxlU3luYyIsInByb2R1Y3RzRGF0YSIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/utils/getProductsJson.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/featured.ts"));
module.exports = __webpack_exports__;

})();