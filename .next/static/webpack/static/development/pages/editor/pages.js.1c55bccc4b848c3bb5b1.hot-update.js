webpackHotUpdate("static/development/pages/editor/pages.js",{

/***/ "./pages/editor/pages.tsx":
/*!********************************!*\
  !*** ./pages/editor/pages.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Container */ "./components/Container.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Grape = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @components/Grape */ "./components/Grape.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @components/Grape */ "./components/Grape.tsx")];
    },
    modules: ['@components/Grape']
  }
});

var Page = function Page(_props) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, []);
  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1
    }
  }, __jsx("div", {
    style: {
      flexBasis: 250,
      borderRight: '1px solid rgba(255,255,255,.2)'
    }
  }), __jsx("div", {
    style: {
      flex: 1
    }
  }, __jsx(Grape, null))));
};

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;

            if (!req) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://api.github.com/repos/zeit/next.js');

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            json = _context.sent;
            return _context.abrupt("return", {
              stars: json.stargazers_count,
              path: process.cwd()
            });

          case 9:
            return _context.abrupt("return", {});

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Page);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=pages.js.1c55bccc4b848c3bb5b1.hot-update.js.map