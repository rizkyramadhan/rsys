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
        fromElement: true,
        plugins: [_Grape_Blocks_Basic_index__WEBPACK_IMPORTED_MODULE_6__["default"]].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(plugins))
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

/***/ }),

/***/ "./components/Grape/Blocks/Basic/basic.ts":
false,

/***/ "./components/Grape/Blocks/Basic/blocks.ts":
/*!*************************************************!*\
  !*** ./components/Grape/Blocks/Basic/blocks.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var c = opt;
  var bm = editor.BlockManager;
  var blocks = c.blocks || [];
  var stylePrefix = c.stylePrefix;
  var flexGrid = c.flexGrid;
  var basicStyle = c.addBasicStyle;
  var clsRow = "".concat(stylePrefix, "row");
  var clsCell = "".concat(stylePrefix, "cell");
  var styleRow = flexGrid ? "\n      .".concat(clsRow, " {\n        display: flex;\n        justify-content: flex-start;\n        align-items: stretch;\n        flex-wrap: nowrap;\n        padding: 10px;\n      }\n      @media (max-width: 768px) {\n        .").concat(clsRow, " {\n          flex-wrap: wrap;\n        }\n      }") : "\n      .".concat(clsRow, " {\n        display: table;\n        padding: 10px;\n        width: 100%;\n      }\n      @media (max-width: 768px) {\n        .").concat(stylePrefix, "cell, .").concat(stylePrefix, "cell30, .").concat(stylePrefix, "cell70 {\n          width: 100%;\n          display: block;\n        }\n      }");
  var styleClm = flexGrid ? "\n      .".concat(clsCell, " {\n        min-height: 75px;\n        flex-grow: 1;\n        flex-basis: 100%;\n      }") : "\n      .".concat(clsCell, " {\n        width: 8%;\n        display: table-cell;\n        height: 75px;\n      }");
  var styleClm30 = "\n    .".concat(stylePrefix, "cell30 {\n      width: 30%;\n    }");
  var styleClm70 = "\n    .".concat(stylePrefix, "cell70 {\n      width: 70%;\n    }");
  var step = 0.2;
  var minDim = 1;
  var currentUnit = 1;
  var resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim: minDim
  };

  var resizerRight = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, resizerBtm, {
    cr: 1,
    bc: 0,
    currentUnit: currentUnit,
    minDim: minDim,
    step: step,
    keyWidth: 'flex-basis'
  }); // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns


  if (flexGrid) {
    resizerRight.keyWidth = 'flex-basis';
  }

  var rowAttr = {
    "class": clsRow,
    'data-gjs-droppable': ".".concat(clsCell),
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'Row'
  };
  var colAttr = {
    "class": clsCell,
    'data-gjs-draggable': ".".concat(clsRow),
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': 'Cell'
  };

  if (flexGrid) {
    colAttr['data-gjs-unstylable'] = ['width'];
    colAttr['data-gjs-stylable-require'] = ['flex-basis'];
  } // Make row and column classes private


  var privateCls = [".".concat(clsRow), ".".concat(clsCell)];
  editor.on('selector:add', function (selector) {
    return privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1);
  });

  var attrsToString = function attrsToString(attrs) {
    var result = [];

    for (var key in attrs) {
      var value = attrs[key];
      var toParse = value instanceof Array || value instanceof Object;
      value = toParse ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value) : value;
      result.push("".concat(key, "=").concat(toParse ? "'".concat(value, "'") : "\"".concat(value, "\"")));
    }

    return result.length ? " ".concat(result.join(' ')) : '';
  };

  var toAdd = function toAdd(name) {
    return blocks.indexOf(name) >= 0;
  };

  var attrsRow = attrsToString(rowAttr);
  var attrsCell = attrsToString(colAttr);
  toAdd('column1') && bm.add('column1', {
    label: c.labelColumn1,
    category: c.category,
    attributes: {
      "class": 'gjs-fonts gjs-f-b1'
    },
    content: "<div ".concat(attrsRow, ">\n          <div ").concat(attrsCell, "></div>\n        </div>\n        ").concat(basicStyle ? "<style>\n            ".concat(styleRow, "\n            ").concat(styleClm, "\n          </style>") : '')
  });
  toAdd('column2') && bm.add('column2', {
    label: c.labelColumn2,
    attributes: {
      "class": 'gjs-fonts gjs-f-b2'
    },
    category: c.category,
    content: "<div ".concat(attrsRow, ">\n          <div ").concat(attrsCell, "></div>\n          <div ").concat(attrsCell, "></div>\n        </div>\n        ").concat(basicStyle ? "<style>\n            ".concat(styleRow, "\n            ").concat(styleClm, "\n          </style>") : '')
  });
  toAdd('column3') && bm.add('column3', {
    label: c.labelColumn3,
    category: c.category,
    attributes: {
      "class": 'gjs-fonts gjs-f-b3'
    },
    content: "<div ".concat(attrsRow, ">\n          <div ").concat(attrsCell, "></div>\n          <div ").concat(attrsCell, "></div>\n          <div ").concat(attrsCell, "></div>\n        </div>\n        ").concat(basicStyle ? "<style>\n            ".concat(styleRow, "\n            ").concat(styleClm, "\n          </style>") : '')
  });
  toAdd('column3-7') && bm.add('column3-7', {
    label: c.labelColumn37,
    category: c.category,
    attributes: {
      "class": 'gjs-fonts gjs-f-b37'
    },
    content: "<div ".concat(attrsRow, ">\n          <div ").concat(attrsCell, " style=\"").concat(flexGrid ? 'flex-basis' : 'width', ": 30%;\"></div>\n          <div ").concat(attrsCell, " style=\"").concat(flexGrid ? 'flex-basis' : 'width', ": 70%;\"></div>\n        </div>\n        ").concat(basicStyle ? "<style>\n            ".concat(styleRow, "\n            ").concat(styleClm, "\n            ").concat(styleClm30, "\n            ").concat(styleClm70, "\n          </style>") : '')
  });
  toAdd('text') && bm.add('text', {
    label: c.labelText,
    category: c.category,
    attributes: {
      "class": 'gjs-fonts gjs-f-text'
    },
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: {
        padding: '10px'
      },
      activeOnRender: 1
    }
  });
  toAdd('link') && bm.add('link', {
    label: c.labelLink,
    category: c.category,
    attributes: {
      "class": 'fa fa-link'
    },
    content: {
      type: 'link',
      content: 'Link',
      style: {
        color: '#d983a6'
      }
    }
  });
  toAdd('image') && bm.add('image', {
    label: c.labelImage,
    category: c.category,
    attributes: {
      "class": 'gjs-fonts gjs-f-image'
    },
    content: {
      style: {
        color: 'black'
      },
      type: 'image',
      activeOnRender: 1
    }
  });
  toAdd('video') && bm.add('video', {
    label: c.labelVideo,
    category: c.category,
    attributes: {
      "class": 'fa fa-youtube-play'
    },
    content: {
      type: 'video',
      src: 'img/video2.webm',
      style: {
        height: '350px',
        width: '615px'
      }
    }
  });
  toAdd('map') && bm.add('map', {
    label: c.labelMap,
    category: c.category,
    attributes: {
      "class": 'fa fa-map-o'
    },
    content: {
      type: 'map',
      style: {
        height: '350px'
      }
    }
  });
});

/***/ }),

/***/ "./components/Grape/Blocks/Basic/index.ts":
/*!************************************************!*\
  !*** ./components/Grape/Blocks/Basic/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "./node_modules/grapesjs/dist/grapes.min.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (grapesjs__WEBPACK_IMPORTED_MODULE_1___default.a.plugins.add('gjs-blocks-basic', function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var config = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Basic',
    labelColumn1: '1 Column',
    labelColumn2: '2 Columns',
    labelColumn3: '3 Columns',
    labelColumn37: '2 Columns 3/7',
    labelText: 'Text',
    labelLink: 'Link',
    labelImage: 'Image',
    labelVideo: 'Video',
    labelMap: 'Map'
  }, opts); // Add blocks


  var loadBlocks = __webpack_require__(/*! ./blocks */ "./components/Grape/Blocks/Basic/blocks.ts");

  loadBlocks["default"](editor, config);
}));

/***/ }),

/***/ "./node_modules/grapesjs-blocks-basic/dist/grapesjs-blocks-basic.min.js":
false

})
//# sourceMappingURL=2.d75f853bdd5b67bf7850.hot-update.js.map