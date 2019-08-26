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
/* harmony import */ var _Grape_Blocks_Basic_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grape/Blocks/Basic/basic */ "./components/Grape/Blocks/Basic/basic.ts");
/* harmony import */ var grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grapesjs-blocks-basic */ "./node_modules/grapesjs-blocks-basic/dist/grapesjs-blocks-basic.min.js");
/* harmony import */ var grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_7__);




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
        plugins: [grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_7___default.a, _Grape_Blocks_Basic_basic__WEBPACK_IMPORTED_MODULE_6__["default"]].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(plugins))
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

/***/ "./node_modules/grapesjs-blocks-basic/dist/grapesjs-blocks-basic.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grapesjs-blocks-basic/dist/grapesjs-blocks-basic.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! grapesjs-blocks-basic - 0.1.8 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! grapesjs */ "./node_modules/grapesjs/dist/grapes.min.js")):undefined}(this,function(e){return function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=i.default.plugins.add("gjs-blocks-basic",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a({blocks:["column1","column2","column3","column3-7","text","link","image","video","map"],flexGrid:0,stylePrefix:"gjs-",addBasicStyle:!0,category:"Basic",labelColumn1:"1 Column",labelColumn2:"2 Columns",labelColumn3:"3 Columns",labelColumn37:"2 Columns 3/7",labelText:"Text",labelLink:"Link",labelImage:"Image",labelVideo:"Video",labelMap:"Map"},t);n(2).default(e,l)})},function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t,l=e.BlockManager,i=n.blocks,s=n.stylePrefix,o=n.flexGrid,r=n.addBasicStyle,c=s+"row",d=s+"cell",u=o?"\n    ."+c+" {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      ."+c+" {\n        flex-wrap: wrap;\n      }\n    }":"\n    ."+c+" {\n      display: table;\n      padding: 10px;\n      width: 100%;\n    }\n    @media (max-width: 768px) {\n      ."+s+"cell, ."+s+"cell30, ."+s+"cell70 {\n        width: 100%;\n        display: block;\n      }\n    }",b=o?"\n    ."+d+" {\n      min-height: 75px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }":"\n    ."+d+" {\n      width: 8%;\n      display: table-cell;\n      height: 75px;\n    }",f="\n  ."+s+"cell30 {\n    width: 30%;\n  }",g="\n  ."+s+"cell70 {\n    width: 70%;\n  }",p={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:1},y=a({},p,{cr:1,bc:0,currentUnit:1,minDim:1,step:.2});o&&(y.keyWidth="flex-basis");var m={class:c,"data-gjs-droppable":"."+d,"data-gjs-resizable":p,"data-gjs-name":"Row"},v={class:d,"data-gjs-draggable":"."+c,"data-gjs-resizable":y,"data-gjs-name":"Cell"};o&&(v["data-gjs-unstylable"]=["width"],v["data-gjs-stylable-require"]=["flex-basis"]);var x=["."+c,"."+d];e.on("selector:add",function(e){return x.indexOf(e.getFullName())>=0&&e.set("private",1)});var j=function(e){var t=[];for(var n in e){var a=e[n],l=a instanceof Array||a instanceof Object;a=l?JSON.stringify(a):a,t.push(n+"="+(l?"'"+a+"'":'"'+a+'"'))}return t.length?" "+t.join(" "):""},h=function(e){return i.indexOf(e)>=0},w=j(m),k=j(v);h("column1")&&l.add("column1",{label:n.labelColumn1,category:n.category,attributes:{class:"gjs-fonts gjs-f-b1"},content:"<div "+w+">\n        <div "+k+"></div>\n      </div>\n      "+(r?"<style>\n          "+u+"\n          "+b+"\n        </style>":"")}),h("column2")&&l.add("column2",{label:n.labelColumn2,attributes:{class:"gjs-fonts gjs-f-b2"},category:n.category,content:"<div "+w+">\n        <div "+k+"></div>\n        <div "+k+"></div>\n      </div>\n      "+(r?"<style>\n          "+u+"\n          "+b+"\n        </style>":"")}),h("column3")&&l.add("column3",{label:n.labelColumn3,category:n.category,attributes:{class:"gjs-fonts gjs-f-b3"},content:"<div "+w+">\n        <div "+k+"></div>\n        <div "+k+"></div>\n        <div "+k+"></div>\n      </div>\n      "+(r?"<style>\n          "+u+"\n          "+b+"\n        </style>":"")}),h("column3-7")&&l.add("column3-7",{label:n.labelColumn37,category:n.category,attributes:{class:"gjs-fonts gjs-f-b37"},content:"<div "+w+">\n        <div "+k+' style="'+(o?"flex-basis":"width")+': 30%;"></div>\n        <div '+k+' style="'+(o?"flex-basis":"width")+': 70%;"></div>\n      </div>\n      '+(r?"<style>\n          "+u+"\n          "+b+"\n          "+f+"\n          "+g+"\n        </style>":"")}),h("text")&&l.add("text",{label:n.labelText,category:n.category,attributes:{class:"gjs-fonts gjs-f-text"},content:{type:"text",content:"Insert your text here",style:{padding:"10px"},activeOnRender:1}}),h("link")&&l.add("link",{label:n.labelLink,category:n.category,attributes:{class:"fa fa-link"},content:{type:"link",content:"Link",style:{color:"#d983a6"}}}),h("image")&&l.add("image",{label:n.labelImage,category:n.category,attributes:{class:"gjs-fonts gjs-f-image"},content:{style:{color:"black"},type:"image",activeOnRender:1}}),h("video")&&l.add("video",{label:n.labelVideo,category:n.category,attributes:{class:"fa fa-youtube-play"},content:{type:"video",src:"img/video2.webm",style:{height:"350px",width:"615px"}}}),h("map")&&l.add("map",{label:n.labelMap,category:n.category,attributes:{class:"fa fa-map-o"},content:{type:"map",style:{height:"350px"}}})}}])});

/***/ })

})
//# sourceMappingURL=2.dbaadf193c01e6eb99d8.hot-update.js.map