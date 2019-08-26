webpackHotUpdate(2,{

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
    content: "<div ".concat(attrsRow, ">\n          <div ").concat(attrsCell, ">JONI JONI YES PAPA</div>\n        </div>\n        ").concat(basicStyle ? "<style>\n            ".concat(styleRow, "\n            ").concat(styleClm, "\n          </style>") : '')
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

/***/ })

})
//# sourceMappingURL=2.375f2f97a2a482650740.hot-update.js.map