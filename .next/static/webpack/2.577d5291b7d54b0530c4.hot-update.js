webpackHotUpdate(2,{

/***/ "./components/Grape.tsx":
/*!******************************!*\
  !*** ./components/Grape.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grapesjs */ "./node_modules/grapesjs/dist/grapes.min.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Grape_Blocks_Basic_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grape/Blocks/Basic/index */ "./components/Grape/Blocks/Basic/index.ts");




var _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'grapesjs-react-editor' : _ref$id,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? [] : _ref$components,
      _ref$blocks = _ref.blocks,
      blocks = _ref$blocks === void 0 ? [] : _ref$blocks,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
      blockManager = _ref.blockManager,
      storageManager = _ref.storageManager;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      editor = _useState[0],
      setEditor = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!editor) {
      var e = grapesjs__WEBPACK_IMPORTED_MODULE_4___default.a.init({
        blockManager: blockManager,
        storageManager: storageManager,
        container: "#".concat(id),
        fromElement: false,
        plugins: [_Grape_Blocks_Basic_index__WEBPACK_IMPORTED_MODULE_6__["default"]].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(plugins))
      });
      console.log(e.Panels.getPanels());
      e.Panels.addPanel({
        id: 'myNewPanel',
        visible: true
      });
      e.Panels.addButton('myNewPanel', {
        id: 'myNewButton',
        className: 'someClass',
        command: 'someCommand',
        attributes: {
          title: 'Some title'
        },
        active: false
      });
      var defaultType = e.DomComponents.getType('default');
      var defaultModel = defaultType.model;
      var defaultView = defaultType.view;
      components.forEach(function (component) {
        e.DomComponents.addType(component.type, {
          model: defaultModel.extend({
            defaults: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, defaultModel.prototype.defaults)
          }, {
            isComponent: component.isComponent.bind(_this)
          }),
          view: defaultView.extend({
            events: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, component.events),
            render: component.render.bind(_this)
          })
        });
      });
      blocks.forEach(function (block) {
        e.BlockManager.add(block.id, block);
      });
      setEditor(e);
    } else {
      if (document) {
        document.getElementById(id).append(editor.render());
      }
    }

    return function cleanup() {
      if (editor) {
        editor.destroy();
        grapesjs__WEBPACK_IMPORTED_MODULE_4___default.a.editors = grapesjs__WEBPACK_IMPORTED_MODULE_4___default.a.editors.filter(function (e) {
          return e !== editor;
        });
      }
    };
  }, []);
  return __jsx("div", {
    id: id
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/static/grapesjs/css/grapes.min.css"
  })));
});

/***/ })

})
//# sourceMappingURL=2.577d5291b7d54b0530c4.hot-update.js.map