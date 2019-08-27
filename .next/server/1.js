exports.ids = [1];
exports.modules = {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Grape_Blocks_Basic_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grape/Blocks/Basic/index */ "./components/Grape/Blocks/Basic/index.ts");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  id = 'grapesjs-react-editor',
  content = '',
  components = [],
  blocks = [],
  plugins = [],
  blockManager,
  storageManager
}) => {
  const {
    0: editor,
    1: setEditor
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (editor) editor.setComponents(content);
  }, [content]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 2000);

    if (!editor) {
      const e = grapesjs__WEBPACK_IMPORTED_MODULE_3___default.a.init({
        blockManager,
        storageManager,
        container: `#${id}`,
        fromElement: true,
        components: content,
        plugins: [_Grape_Blocks_Basic_index__WEBPACK_IMPORTED_MODULE_5__["default"], ...plugins]
      });
      const defaultType = e.DomComponents.getType('default');
      const defaultModel = defaultType.model;
      const defaultView = defaultType.view;
      components.forEach(component => {
        e.DomComponents.addType(component.type, {
          model: defaultModel.extend({
            defaults: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, defaultModel.prototype.defaults)
          }, {
            isComponent: component.isComponent.bind(undefined)
          }),
          view: defaultView.extend({
            events: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, component.events),
            render: component.render.bind(undefined)
          })
        });
      });
      blocks.forEach(block => {
        e.BlockManager.add(block.id, block);
      });
      setEditor(e);
      e.Panels.removeButton('options', 'export-template');
      e.Panels.removeButton('views', 'open-sm');
      e.Panels.removePanel('views-container');
    } else {
      if (document) {
        document.getElementById(id).append(editor.render());
      }
    }

    return function cleanup() {
      if (editor) {
        editor.destroy();
        grapesjs__WEBPACK_IMPORTED_MODULE_3___default.a.editors = grapesjs__WEBPACK_IMPORTED_MODULE_3___default.a.editors.filter(e => e !== editor);
      }
    };
  }, []);
  return __jsx("div", {
    id: id
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/static/grapesjs/css/grapes.min.css"
  })));
});

/***/ }),

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


/* harmony default export */ __webpack_exports__["default"] = (function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks || [];
  let stylePrefix = c.stylePrefix;
  const flexGrid = c.flexGrid;
  const basicStyle = c.addBasicStyle;
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow = flexGrid ? `
      .${clsRow} {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: nowrap;
        padding: 10px;
      }
      @media (max-width: 768px) {
        .${clsRow} {
          flex-wrap: wrap;
        }
      }` : `
      .${clsRow} {
        display: table;
        padding: 10px;
        width: 100%;
      }
      @media (max-width: 768px) {
        .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
          width: 100%;
          display: block;
        }
      }`;
  const styleClm = flexGrid ? `
      .${clsCell} {
        min-height: 75px;
        flex-grow: 1;
        flex-basis: 100%;
      }` : `
      .${clsCell} {
        width: 8%;
        display: table-cell;
        height: 75px;
      }`;
  const styleClm30 = `
    .${stylePrefix}cell30 {
      width: 30%;
    }`;
  const styleClm70 = `
    .${stylePrefix}cell70 {
      width: 70%;
    }`;
  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim
  };

  const resizerRight = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, resizerBtm, {
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step,
    keyWidth: 'flex-basis'
  }); // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns


  if (flexGrid) {
    resizerRight.keyWidth = 'flex-basis';
  }

  const rowAttr = {
    class: clsRow,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'Row'
  };
  const colAttr = {
    class: clsCell,
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': 'Cell'
  };

  if (flexGrid) {
    colAttr['data-gjs-unstylable'] = ['width'];
    colAttr['data-gjs-stylable-require'] = ['flex-basis'];
  } // Make row and column classes private


  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on('selector:add', selector => privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1));

  const attrsToString = attrs => {
    const result = [];

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
    }

    return result.length ? ` ${result.join(' ')}` : '';
  };

  const toAdd = name => blocks.indexOf(name) >= 0;

  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);
  toAdd('column1') && bm.add('column1', {
    label: c.labelColumn1,
    category: c.category,
    attributes: {
      class: 'gjs-fonts gjs-f-b1'
    },
    content: `<div ${attrsRow}>
          <div ${attrsCell}>JONI JONI YES PAPA</div>
        </div>
        ${basicStyle ? `<style>
            ${styleRow}
            ${styleClm}
          </style>` : ''}`
  });
  toAdd('column2') && bm.add('column2', {
    label: c.labelColumn2,
    attributes: {
      class: 'gjs-fonts gjs-f-b2'
    },
    category: c.category,
    content: `<div ${attrsRow}>
          <div ${attrsCell}></div>
          <div ${attrsCell}></div>
        </div>
        ${basicStyle ? `<style>
            ${styleRow}
            ${styleClm}
          </style>` : ''}`
  });
  toAdd('column3') && bm.add('column3', {
    label: c.labelColumn3,
    category: c.category,
    attributes: {
      class: 'gjs-fonts gjs-f-b3'
    },
    content: `<div ${attrsRow}>
          <div ${attrsCell}></div>
          <div ${attrsCell}></div>
          <div ${attrsCell}></div>
        </div>
        ${basicStyle ? `<style>
            ${styleRow}
            ${styleClm}
          </style>` : ''}`
  });
  toAdd('column3-7') && bm.add('column3-7', {
    label: c.labelColumn37,
    category: c.category,
    attributes: {
      class: 'gjs-fonts gjs-f-b37'
    },
    content: `<div ${attrsRow}>
          <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 30%;"></div>
          <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 70%;"></div>
        </div>
        ${basicStyle ? `<style>
            ${styleRow}
            ${styleClm}
            ${styleClm30}
            ${styleClm70}
          </style>` : ''}`
  });
  toAdd('text') && bm.add('text', {
    label: c.labelText,
    category: c.category,
    attributes: {
      class: 'gjs-fonts gjs-f-text'
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
      class: 'fa fa-link'
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
      class: 'gjs-fonts gjs-f-image'
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
      class: 'fa fa-youtube-play'
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
      class: 'fa fa-map-o'
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
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (grapesjs__WEBPACK_IMPORTED_MODULE_1___default.a.plugins.add('gjs-blocks-basic', (editor, opts = {}) => {
  const config = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
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


  const loadBlocks = __webpack_require__(/*! ./blocks */ "./components/Grape/Blocks/Basic/blocks.ts");

  loadBlocks.default(editor, config);
}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

};;
//# sourceMappingURL=1.js.map