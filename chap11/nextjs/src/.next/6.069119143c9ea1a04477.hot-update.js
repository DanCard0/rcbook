webpackHotUpdate(6,{

/***/ "../node_modules/css-loader/lib/css-base.js":
false,

/***/ "./components/Coins.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coins_scss__ = __webpack_require__("./components/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Coins_scss__);
var _jsxFileName = "/media/desarrollo/datos/DanCard/repos/rcbook/chap11/nextjs/src/components/Coins.jsx";




var Coins = function Coins(_ref) {
  var coins = _ref.coins;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Coins",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Top 100 Coins"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, coins.map(function (coin, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, coin.rank, " ", coin.name, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, " " + coin.symbol)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, "$", coin.price_usd));
  })));
};

Coins.propTypes = {
  coins: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"]
};
/* harmony default export */ __webpack_exports__["a"] = (Coins);

/***/ })

})
//# sourceMappingURL=6.069119143c9ea1a04477.hot-update.js.map