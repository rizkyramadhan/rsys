exports.ids = [0];
exports.modules = {

/***/ "./lib/components/Header.tsx":
/*!***********************************!*\
  !*** ./lib/components/Header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Pivot */ "./node_modules/office-ui-fabric-react/lib/Pivot.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./lib/theme.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Header = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,.2)'
    },
    className: "jsx-818664329"
  }, __jsx(office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__["Pivot"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    id: "header-pivot",
    headersOnly: true,
    selectedKey: router.asPath,
    defaultSelectedKey: router.asPath,
    onLinkClick: pivot => {
      if (pivot.props.itemKey) {
        router.replace(pivot.props.itemKey);
      }
    },
    getTabId: (itemKey, index) => itemKey
  }, __jsx(office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__["PivotItem"], {
    headerText: "",
    itemKey: "",
    onRenderItemLink: () => null
  }), __jsx(office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__["PivotItem"], {
    headerText: "Pages",
    itemKey: "/editor/pages"
  }), __jsx(office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__["PivotItem"], {
    headerText: "API",
    itemKey: "/editor/api"
  }), __jsx(office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__["PivotItem"], {
    headerText: "Config",
    itemKey: "/editor/config"
  }), __jsx(office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_3__["PivotItem"], {
    headerText: "Deploy",
    itemKey: "/editor/deploy"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "818664329"
  }, "body{background:#373d49;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXovRG9jdW1lbnRzL3JzeXMvbGliL2NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3lCLEFBRzhCLG1CQUNSLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3Jpei9Eb2N1bWVudHMvcnN5cy9saWIvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUGl2b3QsIFBpdm90SXRlbSB9IGZyb20gJ29mZmljZS11aS1mYWJyaWMtcmVhY3QvbGliL1Bpdm90JztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmludGVyZmFjZSBJSGVhZGVyIHt9XG5jb25zdCBIZWFkZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElIZWFkZXI+ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8UGl2b3RcbiAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICBpZD0naGVhZGVyLXBpdm90J1xuICAgICAgICBoZWFkZXJzT25seT17dHJ1ZX1cbiAgICAgICAgc2VsZWN0ZWRLZXk9e3JvdXRlci5hc1BhdGh9XG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleT17cm91dGVyLmFzUGF0aH1cbiAgICAgICAgb25MaW5rQ2xpY2s9eyhwaXZvdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHBpdm90LnByb3BzLml0ZW1LZXkpIHtcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKHBpdm90LnByb3BzLml0ZW1LZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgZ2V0VGFiSWQ9eyhpdGVtS2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IGl0ZW1LZXl9XG4gICAgICA+XG4gICAgICAgIDxQaXZvdEl0ZW1cbiAgICAgICAgICBoZWFkZXJUZXh0PScnXG4gICAgICAgICAgaXRlbUtleT0nJ1xuICAgICAgICAgIG9uUmVuZGVySXRlbUxpbms9eygpID0+IG51bGx9XG4gICAgICAgID48L1Bpdm90SXRlbT5cbiAgICAgICAgPFBpdm90SXRlbSBoZWFkZXJUZXh0PSdQYWdlcycgaXRlbUtleT0nL2VkaXRvci9wYWdlcyc+PC9QaXZvdEl0ZW0+XG4gICAgICAgIDxQaXZvdEl0ZW0gaGVhZGVyVGV4dD0nQVBJJyBpdGVtS2V5PScvZWRpdG9yL2FwaSc+PC9QaXZvdEl0ZW0+XG4gICAgICAgIDxQaXZvdEl0ZW0gaGVhZGVyVGV4dD0nQ29uZmlnJyBpdGVtS2V5PScvZWRpdG9yL2NvbmZpZyc+PC9QaXZvdEl0ZW0+XG4gICAgICAgIDxQaXZvdEl0ZW0gaGVhZGVyVGV4dD0nRGVwbG95JyBpdGVtS2V5PScvZWRpdG9yL2RlcGxveSc+PC9QaXZvdEl0ZW0+XG4gICAgICA8L1Bpdm90PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczZDQ5O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/riz/Documents/rsys/lib/components/Header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Button.js":
/*!***********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Button.js ***!
  \***********************************************************/
/*! exports provided: BaseButton, ElementType, ButtonType, Button, ActionButton, CommandBarButton, CommandButton, CompoundButton, DefaultButton, MessageBarButton, PrimaryButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Button/index */ "./node_modules/office-ui-fabric-react/lib/components/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["BaseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ActionButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CommandBarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CommandButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CompoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["DefaultButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["MessageBarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["PrimaryButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["IconButton"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Callout.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \************************************************************/
/*! exports provided: Callout, FocusTrapCallout, DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Callout/index */ "./node_modules/office-ui-fabric-react/lib/components/Callout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["Callout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapCallout", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["FocusTrapCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/ContextualMenu.js":
/*!*******************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/ContextualMenu.js ***!
  \*******************************************************************/
/*! exports provided: ContextualMenu, getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase, DirectionalHint, ContextualMenuItemType, ContextualMenuItem, ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ContextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["getSubmenuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["canAnyMenuItemsCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItemBase"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Divider.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Divider.js ***!
  \************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Divider_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Divider/index */ "./node_modules/office-ui-fabric-react/lib/components/Divider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return _components_Divider_index__WEBPACK_IMPORTED_MODULE_0__["VerticalDivider"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Fabric.js":
/*!***********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Fabric.js ***!
  \***********************************************************/
/*! exports provided: Fabric, FabricBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Fabric/index */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__["Fabric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricBase", function() { return _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__["FabricBase"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/FocusTrapZone.js":
/*!******************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/FocusTrapZone.js ***!
  \******************************************************************/
/*! exports provided: FocusTrapZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FocusTrapZone/index */ "./node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapZone", function() { return _components_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusTrapZone"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/FocusZone.js":
/*!**************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \**************************************************************/
/*! exports provided: FocusZone, FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FocusZone/index */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZoneTabbableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZoneDirection"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Icon.js":
/*!*********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \*********************************************************/
/*! exports provided: Icon, IconBase, IconType, getIconContent, FontIcon, getFontIcon, ImageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Icon/index */ "./node_modules/office-ui-fabric-react/lib/components/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["IconBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["IconType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconContent", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["getIconContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontIcon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["FontIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontIcon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["getFontIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["ImageIcon"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/KeytipData.js":
/*!***************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/KeytipData.js ***!
  \***************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/KeytipData/index */ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Layer.js":
/*!**********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Layer.js ***!
  \**********************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/office-ui-fabric-react/lib/version.js");
/* harmony import */ var _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layer/index */ "./node_modules/office-ui-fabric-react/lib/components/Layer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerHost"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Pivot.js":
/*!**********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Pivot.js ***!
  \**********************************************************/
/*! exports provided: Pivot, PivotBase, PivotItem, PivotLinkFormat, PivotLinkSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pivot_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Pivot/index */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pivot", function() { return _components_Pivot_index__WEBPACK_IMPORTED_MODULE_0__["Pivot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotBase", function() { return _components_Pivot_index__WEBPACK_IMPORTED_MODULE_0__["PivotBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotItem", function() { return _components_Pivot_index__WEBPACK_IMPORTED_MODULE_0__["PivotItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotLinkFormat", function() { return _components_Pivot_index__WEBPACK_IMPORTED_MODULE_0__["PivotLinkFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotLinkSize", function() { return _components_Pivot_index__WEBPACK_IMPORTED_MODULE_0__["PivotLinkSize"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Popup.js":
/*!**********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Popup.js ***!
  \**********************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Popup_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Popup/index */ "./node_modules/office-ui-fabric-react/lib/components/Popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _components_Popup_index__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Styling.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/office-ui-fabric-react/lib/version.js");
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/styling */ "@uifabric/styling");
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_styling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/office-ui-fabric-react/lib/version.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "@uifabric/utilities");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js ***!
  \***************************************************************************/
/*! exports provided: DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return DirectionalHint; });
var DirectionalHint = {
  /**
   * Appear above the target element, with the left edges of the callout and target aligning.
   */
  topLeftEdge: 0,

  /**
   * Appear above the target element, with the centers of the callout and target aligning.
   */
  topCenter: 1,

  /**
   * Appear above the target element, with the right edges of the callout and target aligning.
   */
  topRightEdge: 2,

  /**
   * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
   */
  topAutoEdge: 3,

  /**
   * Appear below the target element, with the left edges of the callout and target aligning.
   */
  bottomLeftEdge: 4,

  /**
   * Appear below the target element, with the centers of the callout and target aligning.
   */
  bottomCenter: 5,

  /**
   * Appear below the target element, with the right edges of the callout and target aligning.
   */
  bottomRightEdge: 6,

  /**
   * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
   */
  bottomAutoEdge: 7,

  /**
   * Appear to the left of the target element, with the top edges of the callout and target aligning.
   */
  leftTopEdge: 8,

  /**
   * Appear to the left of the target element, with the centers of the callout and target aligning.
   */
  leftCenter: 9,

  /**
   * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
   */
  leftBottomEdge: 10,

  /**
   * Appear to the right of the target element, with the top edges of the callout and target aligning.
   */
  rightTopEdge: 11,

  /**
   * Appear to the right of the target element, with the centers of the callout and target aligning.
   */
  rightCenter: 12,

  /**
   * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
   */
  rightBottomEdge: 13
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js ***!
  \************************************************************************************************/
/*! exports provided: ActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ActionButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js");





/**
 * {@docCategory Button}
 */

var ActionButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionButton, _super);

  function ActionButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    return _this;
  }

  ActionButton.prototype.render = function () {
    var _a = this.props,
        styles = _a.styles,
        theme = _a.theme;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      variantClassName: "ms-Button--action ms-Button--command",
      styles: Object(_ActionButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles),
      onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"]
    }));
  };

  ActionButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('ActionButton', ['theme', 'styles'], true)], ActionButton);
  return ActionButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js ***!
  \*******************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");



var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
  var _a;

  var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
  var actionButtonStyles = {
    root: {
      padding: DEFAULT_PADDING,
      height: DEFAULT_BUTTON_HEIGHT,
      color: theme.palette.neutralPrimary,
      backgroundColor: 'transparent',
      border: '1px solid transparent'
    },
    rootHovered: {
      color: theme.palette.themePrimary,
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        borderColor: 'Highlight',
        color: 'Highlight'
      }, _a)
    },
    iconHovered: {
      color: theme.palette.themePrimary
    },
    rootPressed: {
      color: theme.palette.black
    },
    rootExpanded: {
      color: theme.palette.themePrimary
    },
    iconPressed: {
      color: theme.palette.themeDarker
    },
    rootDisabled: {
      color: theme.palette.neutralTertiary,
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    },
    rootChecked: {
      color: theme.palette.black
    },
    iconChecked: {
      color: theme.palette.themeDarker
    },
    flexContainer: {
      justifyContent: 'flex-start'
    },
    icon: {
      color: theme.palette.themeDarkAlt
    },
    iconDisabled: {
      color: 'inherit'
    },
    menuIcon: {
      color: theme.palette.neutralSecondary
    },
    textContainer: {
      flexGrow: 0
    }
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, actionButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js ***!
  \********************************************************************************************/
/*! exports provided: ButtonGlobalClassNames, getBaseButtonClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGlobalClassNames", function() { return ButtonGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseButtonClassNames", function() { return getBaseButtonClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");



var ButtonGlobalClassNames = {
  msButton: 'ms-Button',
  msButtonIcon: 'ms-Button-icon',
  msButtonMenuIcon: 'ms-Button-menuIcon',
  msButtonLabel: 'ms-Button-label',
  msButtonDescription: 'ms-Button-description',
  msButtonScreenReaderText: 'ms-Button-screenReaderText',
  msButtonFlexContainer: 'ms-Button-flexContainer',
  msButtonTextContainer: 'ms-Button-textContainer'
};
var getBaseButtonClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
  var _a, _b;

  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(ButtonGlobalClassNames, theme || {});
  var isExpanded = expanded && !isSplit;
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
    root: [classNames.msButton, styles.root, variantClassName, checked && ['is-checked', styles.rootChecked], isExpanded && ['is-expanded', styles.rootExpanded, {
      selectors: (_a = {}, _a[":hover ." + classNames.msButtonIcon] = styles.iconExpandedHovered, // menuIcon falls back to rootExpandedHovered to support original behavior
      _a[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconExpandedHovered || styles.rootExpandedHovered, _a[':hover'] = styles.rootExpandedHovered, _a)
    }], disabled && ['is-disabled', styles.rootDisabled], !disabled && !isExpanded && !checked && {
      selectors: (_b = {
        ':hover': styles.rootHovered
      }, _b[":hover ." + classNames.msButtonLabel] = styles.labelHovered, _b[":hover ." + classNames.msButtonIcon] = styles.iconHovered, _b[":hover ." + classNames.msButtonDescription] = styles.descriptionHovered, _b[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconHovered, _b[':focus'] = styles.rootFocused, _b[':active'] = styles.rootPressed, _b[":active ." + classNames.msButtonIcon] = styles.iconPressed, _b[":active ." + classNames.msButtonDescription] = styles.descriptionPressed, _b[":active ." + classNames.msButtonMenuIcon] = styles.menuIconPressed, _b)
    }, disabled && checked && [styles.rootCheckedDisabled], !disabled && checked && {
      selectors: {
        ':hover': styles.rootCheckedHovered,
        ':active': styles.rootCheckedPressed
      }
    }, className],
    flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
    textContainer: [classNames.msButtonTextContainer, styles.textContainer],
    icon: [classNames.msButtonIcon, iconClassName, styles.icon, isExpanded && styles.iconExpanded, checked && styles.iconChecked, disabled && styles.iconDisabled],
    label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
    menuIcon: [classNames.msButtonMenuIcon, menuIconClassName, styles.menuIcon, checked && styles.menuIconChecked, disabled && !isSplit && styles.menuIconDisabled, !disabled && !isExpanded && !checked && {
      selectors: {
        ':hover': styles.menuIconHovered,
        ':active': styles.menuIconPressed
      }
    }, isExpanded && ['is-expanded', styles.menuIconExpanded]],
    description: [classNames.msButtonDescription, styles.description, checked && styles.descriptionChecked, disabled && styles.descriptionDisabled],
    screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText]
  });
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js ***!
  \*********************************************************************************/
/*! exports provided: BaseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "./node_modules/office-ui-fabric-react/lib/Icon.js");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ContextualMenu */ "./node_modules/office-ui-fabric-react/lib/ContextualMenu.js");
/* harmony import */ var _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseButton.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js");
/* harmony import */ var _SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SplitButton/SplitButton.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uifabric/utilities */ "@uifabric/utilities");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_10__);











var TouchIdleDelay = 500;
/* ms */

/**
 * {@docCategory Button}
 */

var BaseButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"](BaseButton, _super);

  function BaseButton(props, rootClassName) {
    var _this = _super.call(this, props) || this;

    _this._buttonElement = react__WEBPACK_IMPORTED_MODULE_2__["createRef"]();
    _this._splitButtonContainer = react__WEBPACK_IMPORTED_MODULE_2__["createRef"]();
    _this._renderedPersistentMenu = false;
    _this._getMemoizedMenuButtonKeytipProps = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_10__["memoizeFunction"])(function (keytipProps) {
      return tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, keytipProps, {
        hasMenu: true
      });
    });

    _this._onRenderIcon = function (buttonProps, defaultRender) {
      var iconProps = _this.props.iconProps;

      if (iconProps && (iconProps.iconName !== undefined || iconProps.imageProps)) {
        var className = iconProps.className,
            imageProps = iconProps.imageProps,
            rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](iconProps, ["className", "imageProps"]); // If the styles prop is specified as part of iconProps, fall back to regular Icon as FontIcon and ImageIcon do not have such prop.


        if (iconProps.styles) {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({
            className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_this._classNames.icon, className),
            imageProps: imageProps
          }, rest));
        }

        if (iconProps.iconName) {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["FontIcon"], tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({
            className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_this._classNames.icon, className)
          }, rest));
        }

        if (imageProps) {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["ImageIcon"], tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({
            className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_this._classNames.icon, className),
            imageProps: imageProps
          }, rest));
        }
      }

      return null;
    };

    _this._onRenderTextContents = function () {
      var _a = _this.props,
          text = _a.text,
          children = _a.children,
          _b = _a.secondaryText,
          secondaryText = _b === void 0 ? _this.props.description : _b,
          _c = _a.onRenderText,
          onRenderText = _c === void 0 ? _this._onRenderText : _c,
          _d = _a.onRenderDescription,
          onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;

      if (text || typeof children === 'string' || secondaryText) {
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
          className: _this._classNames.textContainer
        }, onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription));
      }

      return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
    };

    _this._onRenderText = function () {
      var text = _this.props.text;
      var children = _this.props.children; // For backwards compat, we should continue to take in the text content from children.

      if (text === undefined && typeof children === 'string') {
        text = children;
      }

      if (_this._hasText()) {
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
          key: _this._labelId,
          className: _this._classNames.label,
          id: _this._labelId
        }, text);
      }

      return null;
    };

    _this._onRenderChildren = function () {
      var children = _this.props.children; // If children is just a string, either it or the text will be rendered via onRenderLabel
      // If children is another component, it will be rendered after text

      if (typeof children === 'string') {
        return null;
      }

      return children;
    };

    _this._onRenderDescription = function (props) {
      var _a = props.secondaryText,
          secondaryText = _a === void 0 ? _this.props.description : _a; // ms-Button-description is only shown when the button type is compound.
      // In other cases it will not be displayed.

      return secondaryText ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        key: _this._descriptionId,
        className: _this._classNames.description,
        id: _this._descriptionId
      }, secondaryText) : null;
    };

    _this._onRenderAriaDescription = function () {
      var ariaDescription = _this.props.ariaDescription; // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
      // otherwise it will be assigned to descriptionSpan.

      return ariaDescription ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
        className: _this._classNames.screenReaderText,
        id: _this._ariaDescriptionId
      }, ariaDescription) : null;
    };

    _this._onRenderMenuIcon = function (props) {
      var menuIconProps = _this.props.menuIconProps;
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["FontIcon"], tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({
        iconName: "ChevronDown"
      }, menuIconProps, {
        className: _this._classNames.menuIcon
      }));
    };

    _this._onRenderMenu = function (menuProps) {
      var _a = menuProps.onDismiss,
          onDismiss = _a === void 0 ? _this._dismissMenu : _a;
      var MenuType = _this.props.menuAs || _ContextualMenu__WEBPACK_IMPORTED_MODULE_6__["ContextualMenu"]; // the accessible menu label (accessible name) has a relationship to the button.
      // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
      // AND the button has text, we'll set the menu aria-labelledBy to the text element id.

      if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
        menuProps = tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, menuProps, {
          labelElementId: _this._labelId
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](MenuType, tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({
        id: _this._labelId + '-menu',
        directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__["DirectionalHint"].bottomLeftEdge
      }, menuProps, {
        shouldFocusOnContainer: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnContainer : undefined,
        shouldFocusOnMount: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnMount : undefined,
        hidden: _this.state.menuProps ? _this.state.menuProps.hidden : undefined,
        className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])('ms-BaseButton-menuhost', menuProps.className),
        target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current,
        onDismiss: onDismiss
      }));
    };

    _this._dismissMenu = function () {
      var menuProps = null;

      if (_this.props.persistMenu && _this.state.menuProps) {
        // Create a new object to trigger componentDidUpdate
        menuProps = tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, _this.state.menuProps, {
          hidden: true
        });
      }

      _this.setState({
        menuProps: menuProps
      });
    };

    _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
      if (shouldFocusOnMount === void 0) {
        shouldFocusOnMount = true;
      }

      if (_this.props.menuProps) {
        var menuProps = tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, _this.props.menuProps, {
          shouldFocusOnContainer: shouldFocusOnContainer,
          shouldFocusOnMount: shouldFocusOnMount
        });

        if (_this.props.persistMenu) {
          _this._renderedPersistentMenu = true;
          menuProps.hidden = false;
        }

        _this.setState({
          menuProps: menuProps
        });
      }
    };

    _this._onToggleMenu = function (shouldFocusOnContainer) {
      var currentMenuProps = _this.state.menuProps;
      var shouldFocusOnMount = true;

      if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
        shouldFocusOnMount = false;
      }

      if (_this.props.persistMenu) {
        // _renderedPersistentMenu ensures that the first rendering of
        // the menu happens on-screen, as edge's scrollbar calcuations are off if done while hidden.
        !_this._renderedPersistentMenu || currentMenuProps && currentMenuProps.hidden ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount) : _this._dismissMenu();
      } else {
        currentMenuProps ? _this._dismissMenu() : _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
      }
    };

    _this._onSplitContainerFocusCapture = function (ev) {
      var container = _this._splitButtonContainer.current; // If the target is coming from the portal we do not need to set focus on the container.

      if (!container || ev.target && Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["portalContainsElement"])(ev.target, container)) {
        return;
      } // We should never be able to focus the individual buttons in a split button. Focus
      // should always remain on the container.


      container.focus();
    };

    _this._onSplitButtonPrimaryClick = function (ev) {
      if (_this._isExpanded) {
        _this._dismissMenu();
      }

      if (!_this._processingTouch && _this.props.onClick) {
        _this.props.onClick(ev);
      } else if (_this._processingTouch) {
        _this._onMenuClick(ev);
      }
    };

    _this._onKeyDown = function (ev) {
      // explicity cancelling event so click won't fire after this
      if (_this.props.disabled && (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space)) {
        ev.preventDefault();
        ev.stopPropagation();
      } else if (!_this.props.disabled) {
        if (_this.props.menuProps) {
          _this._onMenuKeyDown(ev);
        } else if (_this.props.onKeyDown !== undefined) {
          _this.props.onKeyDown(ev); // not cancelling event because it's not disabled

        }
      }
    };

    _this._onKeyUp = function (ev) {
      if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
        _this.props.onKeyUp(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onKeyPress = function (ev) {
      if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
        _this.props.onKeyPress(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onMouseUp = function (ev) {
      if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
        _this.props.onMouseUp(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onMouseDown = function (ev) {
      if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
        _this.props.onMouseDown(ev); // not cancelling event because it's not disabled

      }
    };

    _this._onClick = function (ev) {
      if (!_this.props.disabled) {
        if (_this.props.menuProps) {
          _this._onMenuClick(ev);
        } else if (_this.props.onClick !== undefined) {
          _this.props.onClick(ev); // not cancelling event because it's not disabled

        }
      }
    };

    _this._onSplitButtonContainerKeyDown = function (ev) {
      if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space) {
        if (_this._buttonElement.current) {
          _this._buttonElement.current.click();

          ev.preventDefault();
          ev.stopPropagation();
        }
      } else {
        _this._onMenuKeyDown(ev);
      }
    };

    _this._onMenuKeyDown = function (ev) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(ev);
      }

      var isUp = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].up;
      var isDown = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].down;

      if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
        var onMenuClick = _this.props.onMenuClick;

        if (onMenuClick) {
          onMenuClick(ev, _this);
        }

        _this._onToggleMenu(false);

        ev.preventDefault();
        ev.stopPropagation();
      }

      if (!(ev.altKey || ev.metaKey) && (isUp || isDown)) {
        _this.setState(function (state) {
          if (state.menuProps && !state.menuProps.shouldFocusOnMount) {
            return {
              menuProps: tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, state.menuProps, {
                shouldFocusOnMount: true
              })
            };
          }

          return state;
        }); // This should be done in the setStateCallback but because preventDefault
        // needs to be called, we have to evaluate the current state, even though
        // it might not be 100% accurate;


        if (_this.state.menuProps && !_this.state.menuProps.shouldFocusOnMount) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };

    _this._onTouchStart = function () {
      if (_this._isSplitButton && _this._splitButtonContainer.current && !('onpointerdown' in _this._splitButtonContainer.current)) {
        _this._handleTouchAndPointerEvent();
      }
    };

    _this._onMenuClick = function (ev) {
      var onMenuClick = _this.props.onMenuClick;

      if (onMenuClick) {
        onMenuClick(ev, _this);
      }

      if (!ev.defaultPrevented) {
        // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
        // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
        // between a real click event and a keypress event (detail should be the number of mouse clicks).
        // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
        // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
        // and "" for pressing "Enter" with Narrator on.
        var shouldFocusOnContainer = ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse';

        _this._onToggleMenu(shouldFocusOnContainer);

        ev.preventDefault();
        ev.stopPropagation();
      }
    };

    _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);

    _this._warnDeprecations({
      rootProps: undefined,
      description: 'secondaryText',
      toggled: 'checked'
    });

    _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])();
    _this._descriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])();
    _this._ariaDescriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])();
    _this.state = {
      menuProps: null
    };
    return _this;
  }

  _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(BaseButton.prototype, "_isSplitButton", {
    get: function () {
      return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
    },
    enumerable: true,
    configurable: true
  });

  _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(BaseButton.prototype, "_isExpanded", {
    get: function () {
      var menuProps = this.state.menuProps;

      if (this.props.persistMenu) {
        return !!menuProps && !menuProps.hidden;
      }

      return !!menuProps;
    },
    enumerable: true,
    configurable: true
  });

  BaseButton.prototype.render = function () {
    var _a = this.props,
        ariaDescription = _a.ariaDescription,
        ariaLabel = _a.ariaLabel,
        ariaHidden = _a.ariaHidden,
        className = _a.className,
        disabled = _a.disabled,
        allowDisabledFocus = _a.allowDisabledFocus,
        primaryDisabled = _a.primaryDisabled,
        _b = _a.secondaryText,
        secondaryText = _b === void 0 ? this.props.description : _b,
        href = _a.href,
        iconProps = _a.iconProps,
        menuIconProps = _a.menuIconProps,
        styles = _a.styles,
        checked = _a.checked,
        variantClassName = _a.variantClassName,
        theme = _a.theme,
        toggle = _a.toggle,
        getClassNames = _a.getClassNames; // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled

    var isPrimaryButtonDisabled = disabled || primaryDisabled;
    this._classNames = getClassNames ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, this._isExpanded, this.props.split, !!allowDisabledFocus) : Object(_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_7__["getBaseButtonClassNames"])(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, this._isExpanded, this.props.split);

    var _c = this,
        _ariaDescriptionId = _c._ariaDescriptionId,
        _labelId = _c._labelId,
        _descriptionId = _c._descriptionId; // Anchor tag cannot be disabled hence in disabled state rendering
    // anchor button as normal button


    var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
    var tag = renderAsAnchor ? 'a' : 'button';
    var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(renderAsAnchor ? {} : {
      type: 'button'
    }, this.props.rootProps, this.props), renderAsAnchor ? _Utilities__WEBPACK_IMPORTED_MODULE_3__["anchorProperties"] : _Utilities__WEBPACK_IMPORTED_MODULE_3__["buttonProperties"], ['disabled' // let disabled buttons be focused and styled as disabled.
    ]); // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props

    var resolvedAriaLabel = ariaLabel || nativeProps['aria-label']; // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of aria-describedby
    // otherwise default to undefined so property does not appear in output.

    var ariaDescribedBy = undefined;

    if (ariaDescription) {
      ariaDescribedBy = _ariaDescriptionId;
    } else if (secondaryText && this.props.onRenderDescription !== _uifabric_utilities__WEBPACK_IMPORTED_MODULE_10__["nullRender"]) {
      // for buttons like CompoundButton with a valid onRenderDescription, we need to set an ariaDescribedBy
      // for buttons that do not render anything (via nullRender), we should not set an ariaDescribedBy
      ariaDescribedBy = _descriptionId;
    } else if (nativeProps['aria-describedby']) {
      ariaDescribedBy = nativeProps['aria-describedby'];
    } // If an explicit ariaLabel is given, use that as the label and we're done.
    // If an explicit aria-labelledby is given, use that and we're done.
    // If any kind of description is given (which will end up as an aria-describedby attribute),
    // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
    // text on the button (if it exists). Never set both aria-label and aria-labelledby.


    var ariaLabelledBy = undefined;

    if (!resolvedAriaLabel) {
      if (nativeProps['aria-labelledby']) {
        ariaLabelledBy = nativeProps['aria-labelledby'];
      } else if (ariaDescribedBy) {
        ariaLabelledBy = this._hasText() ? _labelId : undefined;
      }
    }

    var dataIsFocusable = this.props['data-is-focusable'] === false || disabled && !allowDisabledFocus || this._isSplitButton ? false : true;
    var buttonProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(nativeProps, {
      className: this._classNames.root,
      ref: this._buttonElement,
      disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
      onKeyDown: this._onKeyDown,
      onKeyPress: this._onKeyPress,
      onKeyUp: this._onKeyUp,
      onMouseDown: this._onMouseDown,
      onMouseUp: this._onMouseUp,
      onClick: this._onClick,
      'aria-label': resolvedAriaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-disabled': isPrimaryButtonDisabled,
      'data-is-focusable': dataIsFocusable,
      'aria-pressed': toggle ? !!checked : undefined // aria-pressed attribute should only be present for toggle buttons

    });

    if (ariaHidden) {
      buttonProps['aria-hidden'] = true;
    }

    if (this._isSplitButton) {
      return this._onRenderSplitButtonContent(tag, buttonProps);
    } else if (this.props.menuProps) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(buttonProps, {
        'aria-expanded': this._isExpanded,
        'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
        'aria-haspopup': true
      });
    }

    return this._onRenderContent(tag, buttonProps);
  };

  BaseButton.prototype.componentDidMount = function () {
    // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the primary action.
    // This gives more hit target space for touch environments. We're setting the onpointerdown here, because React
    // does not support Pointer events yet.
    if (this._isSplitButton && this._splitButtonContainer.current && 'onpointerdown' in this._splitButtonContainer.current) {
      this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
    }
  };

  BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
    // If Button's menu was closed, run onAfterMenuDismiss. If the menu is being persisted
    // this condition is tested by checking on a change on the menuProps hidden value.
    if (this.props.onAfterMenuDismiss && prevState.menuProps) {
      if (!this.state.menuProps || this.props.persistMenu && !prevState.menuProps.hidden && this.state.menuProps.hidden) {
        this.props.onAfterMenuDismiss();
      }
    }
  };

  BaseButton.prototype.focus = function () {
    if (this._isSplitButton && this._splitButtonContainer.current) {
      this._splitButtonContainer.current.focus();
    } else if (this._buttonElement.current) {
      this._buttonElement.current.focus();
    }
  };

  BaseButton.prototype.dismissMenu = function () {
    this._dismissMenu();
  };

  BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
    this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
  };

  BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
    var _this = this;

    var props = this.props;
    var Tag = tag;
    var menuIconProps = props.menuIconProps,
        menuProps = props.menuProps,
        _a = props.onRenderIcon,
        onRenderIcon = _a === void 0 ? this._onRenderIcon : _a,
        _b = props.onRenderAriaDescription,
        onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b,
        _c = props.onRenderChildren,
        onRenderChildren = _c === void 0 ? this._onRenderChildren : _c,
        _d = props.onRenderMenu,
        onRenderMenu = _d === void 0 ? this._onRenderMenu : _d,
        _e = props.onRenderMenuIcon,
        onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e,
        disabled = props.disabled;
    var keytipProps = props.keytipProps;

    if (keytipProps && menuProps) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    var Button = function (keytipAttributes) {
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Tag, tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, buttonProps, keytipAttributes), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: _this._classNames.flexContainer
      }, onRenderIcon(props, _this._onRenderIcon), _this._onRenderTextContents(), onRenderAriaDescription(props, _this._onRenderAriaDescription), onRenderChildren(props, _this._onRenderChildren), !_this._isSplitButton && (menuProps || menuIconProps || _this.props.onRenderMenuIcon) && onRenderMenuIcon(_this.props, _this._onRenderMenuIcon), _this.state.menuProps && !_this.state.menuProps.doNotLayer && onRenderMenu(menuProps, _this._onRenderMenu)));
    };

    var Content = keytipProps ? // If we're making a split button, we won't put the keytip here
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_9__["KeytipData"], {
      keytipProps: !this._isSplitButton ? keytipProps : undefined,
      ariaDescribedBy: buttonProps['aria-describedby'],
      disabled: disabled
    }, function (keytipAttributes) {
      return Button(keytipAttributes);
    }) : Button();

    if (menuProps && menuProps.doNotLayer) {
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        style: {
          display: 'inline-block'
        }
      }, Content, this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu));
    }

    return Content;
  };

  BaseButton.prototype._hasText = function () {
    // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText used to have
    // before the refactor that introduced this function. _onRenderTextContents does not require props.text to be undefined in order
    // for props.children to be used as a fallback. Purely a code maintainability/reuse issue, but logged as Issue #4979
    return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
  };

  BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
    var _this = this;

    var _a = this.props,
        _b = _a.styles,
        styles = _b === void 0 ? {} : _b,
        disabled = _a.disabled,
        allowDisabledFocus = _a.allowDisabledFocus,
        checked = _a.checked,
        getSplitButtonClassNames = _a.getSplitButtonClassNames,
        primaryDisabled = _a.primaryDisabled,
        menuProps = _a.menuProps,
        toggle = _a.toggle,
        primaryActionButtonProps = _a.primaryActionButtonProps;
    var keytipProps = this.props.keytipProps;
    var classNames = getSplitButtonClassNames ? getSplitButtonClassNames(!!disabled, this._isExpanded, !!checked, !!allowDisabledFocus) : styles && Object(_SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_8__["getClassNames"])(styles, !!disabled, this._isExpanded, !!checked, !!primaryDisabled);
    Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(buttonProps, {
      onClick: undefined,
      tabIndex: -1,
      'data-is-focusable': false
    });
    var ariaDescribedBy = buttonProps.ariaDescription;

    if (keytipProps && menuProps) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    var containerProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(buttonProps, [], ['disabled']); // Add additional props to apply on primary action button

    if (primaryActionButtonProps) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(buttonProps, tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, primaryActionButtonProps));
    }

    var SplitButton = function (keytipAttributes) {
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, containerProps, {
        "data-ktp-target": keytipAttributes ? keytipAttributes['data-ktp-target'] : undefined,
        role: 'button',
        "aria-disabled": disabled,
        "aria-haspopup": true,
        "aria-expanded": _this._isExpanded,
        "aria-pressed": toggle ? !!checked : undefined,
        "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes ? keytipAttributes['aria-describedby'] : undefined),
        className: classNames && classNames.splitButtonContainer,
        onKeyDown: _this._onSplitButtonContainerKeyDown,
        onTouchStart: _this._onTouchStart,
        ref: _this._splitButtonContainer,
        "data-is-focusable": true,
        onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined,
        tabIndex: !disabled || allowDisabledFocus ? 0 : undefined,
        "aria-roledescription": buttonProps['aria-roledescription'],
        onFocusCapture: _this._onSplitContainerFocusCapture
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
        style: {
          display: 'flex'
        }
      }, _this._onRenderContent(tag, buttonProps), _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes), _this._onRenderSplitButtonDivider(classNames)));
    };

    return keytipProps ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_9__["KeytipData"], {
      keytipProps: keytipProps,
      disabled: disabled
    }, function (keytipAttributes) {
      return SplitButton(keytipAttributes);
    }) : SplitButton();
  };

  BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
    if (classNames && classNames.divider) {
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
        className: classNames.divider,
        "aria-hidden": true
      });
    }

    return null;
  };

  BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
    var _a = this.props,
        allowDisabledFocus = _a.allowDisabledFocus,
        checked = _a.checked,
        disabled = _a.disabled,
        splitButtonMenuProps = _a.splitButtonMenuProps;
    var menuIconProps = this.props.menuIconProps;
    var splitButtonAriaLabel = this.props.splitButtonAriaLabel;

    if (menuIconProps === undefined) {
      menuIconProps = {
        iconName: 'ChevronDown'
      };
    }

    var splitButtonProps = tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, splitButtonMenuProps, {
      styles: classNames,
      checked: checked,
      disabled: disabled,
      allowDisabledFocus: allowDisabledFocus,
      onClick: this._onMenuClick,
      menuProps: undefined,
      iconProps: tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, menuIconProps, {
        className: this._classNames.menuIcon
      }),
      ariaLabel: splitButtonAriaLabel,
      'aria-haspopup': true,
      'aria-expanded': this._isExpanded,
      'data-is-focusable': false
    }); // Add data-ktp-execute-target to the split button if the keytip is defined


    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](BaseButton, tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"]({}, splitButtonProps, {
      "data-ktp-execute-target": keytipAttributes ? keytipAttributes['data-ktp-execute-target'] : keytipAttributes,
      onMouseDown: this._onMouseDown,
      tabIndex: -1
    }));
  };

  BaseButton.prototype._onPointerDown = function (ev) {
    if (ev.pointerType === 'touch') {
      this._handleTouchAndPointerEvent();

      ev.preventDefault();
      ev.stopImmediatePropagation();
    }
  };

  BaseButton.prototype._handleTouchAndPointerEvent = function () {
    var _this = this; // If we already have an existing timeeout from a previous touch and pointer event
    // cancel that timeout so we can set a nwe one.


    if (this._lastTouchTimeoutId !== undefined) {
      this._async.clearTimeout(this._lastTouchTimeoutId);

      this._lastTouchTimeoutId = undefined;
    }

    this._processingTouch = true;
    this._lastTouchTimeoutId = this._async.setTimeout(function () {
      _this._processingTouch = false;
      _this._lastTouchTimeoutId = undefined;
    }, TouchIdleDelay);
  };
  /**
   * Returns if the user hits a valid keyboard key to open the menu
   * @param ev - the keyboard event
   * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
   */


  BaseButton.prototype._isValidMenuOpenKey = function (ev) {
    if (this.props.menuTriggerKeyCode) {
      return ev.which === this.props.menuTriggerKeyCode;
    } else if (this.props.menuProps) {
      return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].down && (ev.altKey || ev.metaKey);
    } // Note: When enter is pressed, we will let the event continue to propagate
    // to trigger the onClick event on the button


    return false;
  };

  BaseButton.defaultProps = {
    baseClassName: 'ms-Button',
    styles: {},
    split: false
  };
  return BaseButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js ***!
  \****************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


var noOutline = {
  outline: 0
};

var iconStyle = function (fontSize) {
  return {
    fontSize: fontSize,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexShrink: 0
  };
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */


var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme) {
  var _a;

  var semanticColors = theme.semanticColors,
      effects = theme.effects,
      fonts = theme.fonts;
  var border = semanticColors.buttonBorder;
  var disabledBackground = semanticColors.disabledBackground;
  var disabledText = semanticColors.disabledText;
  var buttonHighContrastFocus = {
    left: -2,
    top: -2,
    bottom: -2,
    right: -2,
    border: 'none',
    outlineColor: 'ButtonText'
  };
  return {
    root: [Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, {
      inset: 1,
      highContrastStyle: buttonHighContrastFocus,
      borderColor: 'transparent'
    }), theme.fonts.medium, {
      boxSizing: 'border-box',
      border: '1px solid ' + border,
      userSelect: 'none',
      display: 'inline-block',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      verticalAlign: 'top',
      padding: '0 16px',
      borderRadius: effects.roundedCorner2,
      selectors: {
        // IE11 workaround for preventing shift of child elements of a button when active.
        ':active > *': {
          position: 'relative',
          left: 0,
          top: 0
        }
      }
    }],
    rootDisabled: [Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, {
      inset: 1,
      highContrastStyle: buttonHighContrastFocus,
      borderColor: 'transparent'
    }), {
      backgroundColor: disabledBackground,
      borderColor: disabledBackground,
      color: disabledText,
      cursor: 'default',
      pointerEvents: 'none',
      selectors: (_a = {
        ':hover': noOutline,
        ':focus': noOutline
      }, _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
        color: 'grayText',
        borderColor: 'grayText'
      }, _a)
    }],
    iconDisabled: {
      color: disabledText
    },
    menuIconDisabled: {
      color: disabledText
    },
    flexContainer: {
      display: 'flex',
      height: '100%',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
      flexGrow: 1
    },
    icon: iconStyle(fonts.mediumPlus.fontSize),
    menuIcon: iconStyle(fonts.small.fontSize),
    label: {
      margin: '0 4px',
      lineHeight: '100%'
    },
    screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]
  };
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/Button.js ***!
  \*****************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.types */ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionButton/ActionButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js");
/* harmony import */ var _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompoundButton/CompoundButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js");
/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconButton/IconButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrimaryButton/PrimaryButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js");









/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated Use the individual *Button components instead.
 * {@docCategory Button}
 */

var Button =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Button, _super);

  function Button(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warn"])("The Button component has been deprecated. Use specific variants instead. " + "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
    return _this;
  }

  Button.prototype.render = function () {
    var props = this.props;

    switch (props.buttonType) {
      case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].command:
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__["ActionButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));

      case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].compound:
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__["CompoundButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));

      case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].icon:
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__["IconButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));

      case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].primary:
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["PrimaryButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));

      default:
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
    }
  };

  return Button;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js ***!
  \***********************************************************************************/
/*! exports provided: ElementType, ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return ElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/**
 * {@docCategory Button}
 */
var ElementType;

(function (ElementType) {
  /** <button> element. */
  ElementType[ElementType["button"] = 0] = "button";
  /** <a> element. */

  ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType || (ElementType = {}));
/**
 * {@docCategory Button}
 */


var ButtonType;

(function (ButtonType) {
  ButtonType[ButtonType["normal"] = 0] = "normal";
  ButtonType[ButtonType["primary"] = 1] = "primary";
  ButtonType[ButtonType["hero"] = 2] = "hero";
  ButtonType[ButtonType["compound"] = 3] = "compound";
  ButtonType[ButtonType["command"] = 4] = "command";
  ButtonType[ButtonType["icon"] = 5] = "icon";
  ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType || (ButtonType = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js ***!
  \***********************************************************************************/
/*! exports provided: standardStyles, primaryStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardStyles", function() { return standardStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryStyles", function() { return primaryStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


function standardStyles(theme) {
  var _a, _b, _c, _d;

  var s = theme.semanticColors,
      p = theme.palette;
  var buttonBackground = s.buttonBackground;
  var buttonBackgroundPressed = s.buttonBackgroundPressed;
  var buttonBackgroundHovered = s.buttonBackgroundHovered;
  var buttonText = s.buttonText;
  var buttonTextHovered = s.buttonTextHovered;
  var buttonTextChecked = s.buttonTextChecked;
  var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
  return {
    root: {
      backgroundColor: buttonBackground,
      color: buttonText
    },
    rootHovered: {
      backgroundColor: buttonBackgroundHovered,
      color: buttonTextHovered,
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        borderColor: 'Highlight',
        color: 'Highlight'
      }, _a)
    },
    rootPressed: {
      backgroundColor: buttonBackgroundPressed,
      color: buttonTextChecked
    },
    rootExpanded: {
      backgroundColor: buttonBackgroundPressed,
      color: buttonTextChecked
    },
    rootChecked: {
      backgroundColor: buttonBackgroundPressed,
      color: buttonTextChecked
    },
    rootCheckedHovered: {
      backgroundColor: buttonBackgroundPressed,
      color: buttonTextCheckedHovered
    },
    rootDisabled: {
      selectors: (_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'GrayText',
        borderColor: 'GrayText',
        backgroundColor: 'Window'
      }, _b)
    },
    // Split button styles
    splitButtonContainer: {
      selectors: (_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        border: 'none'
      }, _c)
    },
    splitButtonMenuButton: {
      color: p.white,
      backgroundColor: 'transparent',
      selectors: {
        ':hover': {
          backgroundColor: p.neutralLight,
          selectors: (_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Highlight'
          }, _d)
        }
      }
    },
    splitButtonMenuButtonDisabled: {
      backgroundColor: s.buttonBackgroundDisabled,
      selectors: {
        ':hover': {
          backgroundColor: s.buttonBackgroundDisabled
        }
      }
    },
    splitButtonDivider: {
      backgroundColor: p.neutralTertiaryAlt
    },
    splitButtonDividerDisabled: {
      backgroundColor: theme.palette.neutralTertiaryAlt
    },
    splitButtonMenuButtonChecked: {
      backgroundColor: p.neutralQuaternaryAlt,
      selectors: {
        ':hover': {
          backgroundColor: p.neutralQuaternaryAlt
        }
      }
    },
    splitButtonMenuButtonExpanded: {
      backgroundColor: p.neutralQuaternaryAlt,
      selectors: {
        ':hover': {
          backgroundColor: p.neutralQuaternaryAlt
        }
      }
    },
    splitButtonMenuIcon: {
      color: s.buttonText
    },
    splitButtonMenuIconDisabled: {
      color: s.buttonTextDisabled
    }
  };
}
function primaryStyles(theme) {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  var p = theme.palette,
      s = theme.semanticColors;
  return {
    root: {
      backgroundColor: s.primaryButtonBackground,
      color: s.primaryButtonText,
      border: 'none',
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Window',
        backgroundColor: 'WindowText',
        MsHighContrastAdjust: 'none'
      }, _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
        selectors: {
          ':after': {
            outline: "none",
            borderColor: p.white
          }
        }
      }, _a)
    },
    rootHovered: {
      backgroundColor: s.primaryButtonBackgroundHovered,
      color: s.primaryButtonTextHovered,
      selectors: (_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Window',
        backgroundColor: 'Highlight'
      }, _b)
    },
    rootPressed: {
      backgroundColor: s.primaryButtonBackgroundPressed,
      color: s.primaryButtonTextPressed,
      selectors: (_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Window',
        backgroundColor: 'WindowText',
        MsHighContrastAdjust: 'none'
      }, _c)
    },
    rootExpanded: {
      backgroundColor: s.primaryButtonBackgroundPressed,
      color: s.primaryButtonTextPressed
    },
    rootChecked: {
      backgroundColor: s.primaryButtonBackgroundPressed,
      color: s.primaryButtonTextPressed
    },
    rootCheckedHovered: {
      backgroundColor: s.primaryButtonBackgroundPressed,
      color: s.primaryButtonTextPressed
    },
    rootDisabled: {
      selectors: (_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'GrayText',
        borderColor: 'GrayText',
        backgroundColor: 'Window'
      }, _d)
    },
    // Split button styles
    splitButtonContainer: {
      selectors: (_e = {}, _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        border: 'none'
      }, _e)
    },
    splitButtonDivider: {
      backgroundColor: p.neutralTertiaryAlt
    },
    splitButtonMenuButton: {
      backgroundColor: s.primaryButtonBackground,
      color: s.primaryButtonText,
      selectors: {
        ':hover': {
          backgroundColor: s.primaryButtonBackgroundHovered,
          selectors: (_f = {}, _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Highlight'
          }, _f)
        }
      }
    },
    splitButtonMenuButtonDisabled: {
      backgroundColor: s.primaryButtonBackgroundDisabled,
      selectors: {
        ':hover': {
          backgroundColor: s.primaryButtonBackgroundDisabled
        }
      }
    },
    splitButtonMenuButtonChecked: {
      backgroundColor: s.primaryButtonBackgroundPressed,
      selectors: {
        ':hover': {
          backgroundColor: s.primaryButtonBackgroundPressed
        }
      }
    },
    splitButtonMenuButtonExpanded: {
      backgroundColor: s.primaryButtonBackgroundPressed,
      selectors: {
        ':hover': {
          backgroundColor: s.primaryButtonBackgroundPressed
        }
      }
    },
    splitButtonMenuIcon: {
      color: s.primaryButtonText,
      selectors: (_g = {}, _g[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Window'
      }, _g)
    },
    splitButtonMenuIconDisabled: {
      color: p.neutralTertiary,
      selectors: (_h = {}, _h[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'GrayText'
      }, _h)
    }
  };
}

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js ***!
  \********************************************************************************************************/
/*! exports provided: CommandBarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return CommandBarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CommandBarButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandBarButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js");





/**
 * {@docCategory Button}
 */

var CommandBarButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommandBarButton, _super);

  function CommandBarButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    return _this;
  }

  CommandBarButton.prototype.render = function () {
    var _a = this.props,
        styles = _a.styles,
        theme = _a.theme;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      variantClassName: "ms-Button--commandBar",
      styles: Object(_CommandBarButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles),
      onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"]
    }));
  };

  CommandBarButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('CommandBarButton', ['theme', 'styles'], true)], CommandBarButton);
  return CommandBarButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js ***!
  \***************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");
/* harmony import */ var _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BaseButton.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js");





var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, focusInset, focusColor) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

  var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
  var baseSplitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
  var p = theme.palette,
      semanticColors = theme.semanticColors;
  var commandButtonHighContrastFocus = {
    left: 4,
    top: 4,
    bottom: 4,
    right: 4,
    border: 'none'
  };
  var commandButtonStyles = {
    root: [Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, {
      inset: 2,
      highContrastStyle: commandButtonHighContrastFocus,
      borderColor: 'transparent'
    }), theme.fonts.medium, {
      minWidth: '40px',
      backgroundColor: p.white,
      color: p.neutralPrimary,
      padding: '0 4px',
      border: 'none',
      borderRadius: 0,
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        border: 'none'
      }, _a)
    }],
    rootHovered: {
      backgroundColor: p.neutralLighter,
      color: p.neutralDark,
      selectors: (_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Highlight'
      }, _b["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
        color: p.themeDarkAlt
      }, _b["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonMenuIcon] = {
        color: p.neutralPrimary
      }, _b)
    },
    rootPressed: {
      backgroundColor: p.neutralLight,
      color: p.neutralDark,
      selectors: (_c = {}, _c["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
        color: p.themeDark
      }, _c["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonMenuIcon] = {
        color: p.neutralPrimary
      }, _c)
    },
    rootChecked: {
      backgroundColor: p.neutralLight,
      color: p.neutralDark,
      selectors: (_d = {}, _d["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
        color: p.themeDark
      }, _d["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonMenuIcon] = {
        color: p.neutralPrimary
      }, _d)
    },
    rootCheckedHovered: {
      backgroundColor: p.neutralQuaternaryAlt,
      selectors: (_e = {}, _e["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
        color: p.themeDark
      }, _e["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonMenuIcon] = {
        color: p.neutralPrimary
      }, _e)
    },
    rootExpanded: {
      backgroundColor: p.neutralLight,
      color: p.neutralDark,
      selectors: (_f = {}, _f["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
        color: p.themeDark
      }, _f["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonMenuIcon] = {
        color: p.neutralPrimary
      }, _f)
    },
    rootExpandedHovered: {
      backgroundColor: p.neutralQuaternaryAlt
    },
    rootDisabled: {
      backgroundColor: p.white,
      selectors: (_g = {}, _g["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
        color: semanticColors.disabledBodySubtext
      }, _g)
    },
    // Split button styles
    splitButtonContainer: {
      selectors: (_h = {}, _h[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        border: 'none'
      }, _h)
    },
    splitButtonDivider: {
      backgroundColor: p.neutralTertiaryAlt,
      marginTop: 4,
      marginBottom: 4
    },
    splitButtonMenuButton: {
      backgroundColor: p.white,
      border: 'none',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      color: p.neutralSecondary,
      selectors: {
        ':hover': {
          backgroundColor: p.neutralLighter,
          color: p.neutralDark,
          selectors: (_j = {}, _j[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Highlight'
          }, _j["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
            color: p.neutralPrimary
          }, _j)
        },
        ':active': {
          backgroundColor: p.neutralLight,
          selectors: (_k = {}, _k["." + _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_4__["ButtonGlobalClassNames"].msButtonIcon] = {
            color: p.neutralPrimary
          }, _k)
        }
      }
    },
    splitButtonMenuButtonDisabled: {
      backgroundColor: p.white
    },
    splitButtonMenuButtonChecked: {
      backgroundColor: p.neutralLight,
      color: p.neutralDark,
      selectors: {
        ':hover': {
          backgroundColor: p.neutralQuaternaryAlt
        }
      }
    },
    splitButtonMenuButtonExpanded: {
      backgroundColor: p.neutralLight,
      color: p.black,
      selectors: {
        ':hover': {
          backgroundColor: p.neutralQuaternaryAlt
        }
      }
    },
    splitButtonMenuIcon: {
      color: p.neutralPrimary
    },
    splitButtonMenuIconDisabled: {
      color: p.neutralTertiary
    },
    label: {
      fontWeight: 'normal' // theme.fontWeights.semibold,

    },
    icon: {
      color: p.themePrimary
    },
    menuIcon: {
      color: p.neutralSecondary
    }
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, baseSplitButtonStyles, commandButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js ***!
  \**************************************************************************************************/
/*! exports provided: CommandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return CommandButton; });
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionButton/ActionButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js");

/**
 * {@docCategory Button}
 */

var CommandButton = _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__["ActionButton"];

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js ***!
  \****************************************************************************************************/
/*! exports provided: CompoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return CompoundButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CompoundButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompoundButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js");





/**
 * {@docCategory Button}
 */

var CompoundButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompoundButton, _super);

  function CompoundButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    return _this;
  }

  CompoundButton.prototype.render = function () {
    var _a = this.props,
        _b = _a.primary,
        primary = _b === void 0 ? false : _b,
        styles = _a.styles,
        theme = _a.theme;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound',
      styles: Object(_CompoundButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles, primary)
    }));
  };

  CompoundButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('CompoundButton', ['theme', 'styles'], true)], CompoundButton);
  return CompoundButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js ***!
  \***********************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");
/* harmony import */ var _ButtonThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonThemes */ "./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js");





var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, primary) {
  var _a, _b, _c, _d, _e;

  var fonts = theme.fonts,
      palette = theme.palette;
  var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
  var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
  var compoundButtonStyles = {
    root: {
      maxWidth: '280px',
      minHeight: '72px',
      height: 'auto',
      padding: '16px 12px'
    },
    flexContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      minWidth: '100%',
      margin: ''
    },
    textContainer: {
      textAlign: 'left'
    },
    icon: {
      fontSize: '2em',
      lineHeight: '1em',
      height: '1em',
      margin: '0px 8px 0px 0px',
      flexBasis: '1em',
      flexShrink: '0'
    },
    label: {
      margin: '0 0 5px',
      lineHeight: '100%',
      fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold
    },
    description: [fonts.small, {
      lineHeight: '100%'
    }]
  };
  var standardCompoundTheme = {
    description: {
      color: palette.neutralSecondary
    },
    descriptionHovered: {
      color: palette.neutralDark
    },
    descriptionPressed: {
      color: 'inherit'
    },
    descriptionChecked: {
      color: 'inherit'
    },
    descriptionDisabled: {
      color: 'inherit'
    }
  };
  var primaryCompoundTheme = {
    description: {
      color: palette.white,
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        backgroundColor: 'WindowText',
        color: 'Window',
        MsHighContrastAdjust: 'none'
      }, _a)
    },
    descriptionHovered: {
      color: palette.white,
      selectors: (_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        backgroundColor: 'Highlight',
        color: 'Window'
      }, _b)
    },
    descriptionPressed: {
      color: 'inherit',
      selectors: (_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Window',
        backgroundColor: 'WindowText',
        MsHighContrastAdjust: 'none'
      }, _c)
    },
    descriptionChecked: {
      color: 'inherit',
      selectors: (_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Window',
        backgroundColor: 'WindowText',
        MsHighContrastAdjust: 'none'
      }, _d)
    },
    descriptionDisabled: {
      color: 'inherit',
      selectors: (_e = {}, _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'inherit'
      }, _e)
    }
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, compoundButtonStyles, primary ? Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["primaryStyles"])(theme) : Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["standardStyles"])(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js ***!
  \**************************************************************************************************/
/*! exports provided: DefaultButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return DefaultButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _DefaultButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js");





/**
 * {@docCategory Button}
 */

var DefaultButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DefaultButton, _super);

  function DefaultButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    return _this;
  }

  DefaultButton.prototype.render = function () {
    var _a = this.props,
        _b = _a.primary,
        primary = _b === void 0 ? false : _b,
        styles = _a.styles,
        theme = _a.theme;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default',
      styles: Object(_DefaultButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles, primary),
      onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"]
    }));
  };

  DefaultButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('DefaultButton', ['theme', 'styles'], true)], DefaultButton);
  return DefaultButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js ***!
  \*********************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");
/* harmony import */ var _ButtonThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonThemes */ "./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js");





var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MIN_WIDTH = '80px';
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, primary) {
  var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
  var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
  var defaultButtonStyles = {
    root: {
      minWidth: DEFAULT_BUTTON_MIN_WIDTH,
      height: DEFAULT_BUTTON_HEIGHT
    },
    label: {
      fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold
    }
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, defaultButtonStyles, primary ? Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["primaryStyles"])(theme) : Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["standardStyles"])(theme), splitButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js ***!
  \********************************************************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _IconButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js");





/**
 * {@docCategory Button}
 */

var IconButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconButton, _super);

  function IconButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    return _this;
  }

  IconButton.prototype.render = function () {
    var _a = this.props,
        styles = _a.styles,
        theme = _a.theme;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      variantClassName: "ms-Button--icon",
      styles: Object(_IconButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles),
      onRenderText: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"],
      onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"]
    }));
  };

  IconButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('IconButton', ['theme', 'styles'], true)], IconButton);
  return IconButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js ***!
  \***************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");




var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
  var _a;

  var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
  var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
  var palette = theme.palette,
      semanticColors = theme.semanticColors;
  var iconButtonStyles = {
    root: {
      padding: '0 4px',
      minWidth: '32px',
      height: '32px',
      backgroundColor: 'transparent',
      border: 'none',
      color: semanticColors.link
    },
    rootHovered: {
      color: palette.themeDarkAlt,
      backgroundColor: palette.neutralLighter,
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        borderColor: 'Highlight',
        color: 'Highlight'
      }, _a)
    },
    rootPressed: {
      color: palette.themeDark,
      backgroundColor: palette.neutralLight
    },
    rootExpanded: {
      color: palette.themeDark,
      backgroundColor: palette.neutralLight
    },
    rootChecked: {
      color: palette.themeDark,
      backgroundColor: palette.neutralLight
    },
    rootCheckedHovered: {
      color: palette.themeDark,
      backgroundColor: palette.neutralQuaternaryAlt
    },
    rootDisabled: {
      color: palette.neutralTertiaryAlt
    }
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js ***!
  \********************************************************************************************************/
/*! exports provided: MessageBarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return MessageBarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _MessageBarButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageBarButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js");





/**
 * {@docCategory MessageBar}
 */

var MessageBarButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageBarButton, _super);

  function MessageBarButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MessageBarButton.prototype.render = function () {
    var _a = this.props,
        styles = _a.styles,
        theme = _a.theme;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      styles: Object(_MessageBarButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles),
      onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"]
    }));
  };

  MessageBarButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('MessageBarButton', ['theme', 'styles'], true)], MessageBarButton);
  return MessageBarButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js ***!
  \***************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");



var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, focusInset, focusColor) {
  var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
  var messageBarButtonStyles = {
    root: [Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, {
      inset: 1,
      highContrastStyle: {
        outlineOffset: '-4px',
        outlineColor: 'ActiveBorder'
      },
      borderColor: 'transparent'
    }), {
      height: 24,
      borderColor: theme.palette.neutralTertiaryAlt
    }]
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, messageBarButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js ***!
  \**************************************************************************************************/
/*! exports provided: PrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");




/**
 * {@docCategory Button}
 */

var PrimaryButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrimaryButton, _super);

  function PrimaryButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
     */


    _this._skipComponentRefResolution = true;
    return _this;
  }

  PrimaryButton.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      primary: true,
      onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_2__["nullRender"]
    }));
  };

  PrimaryButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["customizable"])('PrimaryButton', ['theme', 'styles'], true)], PrimaryButton);
  return PrimaryButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js ***!
  \*********************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles, disabled, expanded, checked, primaryDisabled) {
  return {
    root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked]),
    splitButtonContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonContainer, !disabled && checked && [styles.splitButtonContainerChecked, {
      selectors: {
        ':hover': styles.splitButtonContainerCheckedHovered
      }
    }], !disabled && !checked && [{
      selectors: {
        ':hover': styles.splitButtonContainerHovered,
        ':focus': styles.splitButtonContainerFocused
      }
    }], disabled && styles.splitButtonContainerDisabled),
    icon: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled, !disabled && primaryDisabled && styles.splitButtonMenuIcon),
    flexContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonFlexContainer),
    divider: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonDivider, (primaryDisabled || disabled) && styles.splitButtonDividerDisabled)
  };
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js ***!
  \*****************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
  var _a, _b, _c, _d, _e, _f, _g;

  var effects = theme.effects,
      palette = theme.palette;
  var buttonHighContrastFocus = {
    left: -2,
    top: -2,
    bottom: -2,
    right: -2,
    border: 'none'
  };
  var splitButtonDivider = {
    position: 'absolute',
    width: 1,
    right: 31,
    top: 8,
    bottom: 8
  };
  var splitButtonStyles = {
    splitButtonContainer: [Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, {
      highContrastStyle: buttonHighContrastFocus
    }), {
      display: 'inline-flex',
      selectors: {
        '.ms-Button--default': {
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          borderRight: 'none'
        },
        '.ms-Button--primary': {
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          border: 'none',
          selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Window',
            backgroundColor: 'WindowText',
            MsHighContrastAdjust: 'none'
          }, _a)
        },
        '.ms-Button--primary + .ms-Button': {
          border: 'none'
        }
      }
    }],
    splitButtonContainerHovered: {
      selectors: {
        '.ms-Button--primary': {
          selectors: (_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Window',
            backgroundColor: 'Highlight'
          }, _b)
        },
        '.ms-Button.is-disabled': {
          selectors: (_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'GrayText',
            borderColor: 'GrayText',
            backgroundColor: 'Window'
          }, _c)
        }
      }
    },
    splitButtonContainerChecked: {
      selectors: {
        '.ms-Button--primary': {
          selectors: (_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Window',
            backgroundColor: 'WindowText',
            MsHighContrastAdjust: 'none'
          }, _d)
        }
      }
    },
    splitButtonContainerCheckedHovered: {
      selectors: {
        '.ms-Button--primary': {
          selectors: (_e = {}, _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'Window',
            backgroundColor: 'WindowText',
            MsHighContrastAdjust: 'none'
          }, _e)
        }
      }
    },
    splitButtonContainerFocused: {
      outline: 'none!important'
    },
    splitButtonMenuButton: {
      padding: 6,
      height: 'auto',
      boxSizing: 'border-box',
      borderRadius: 0,
      borderTopRightRadius: effects.roundedCorner2,
      borderBottomRightRadius: effects.roundedCorner2,
      border: "1px solid " + palette.neutralSecondaryAlt,
      borderLeft: 'none',
      outline: 'transparent',
      userSelect: 'none',
      display: 'inline-block',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      verticalAlign: 'top',
      width: 32,
      marginLeft: -1,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0
    },
    splitButtonDivider: splitButtonDivider,
    splitButtonDividerDisabled: splitButtonDivider,
    splitButtonMenuButtonDisabled: {
      pointerEvents: 'none',
      border: 'none',
      selectors: {
        ':hover': {
          cursor: 'default'
        },
        '.ms-Button--primary': {
          selectors: (_f = {}, _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            color: 'GrayText',
            borderColor: 'GrayText',
            backgroundColor: 'Window'
          }, _f)
        }
      }
    },
    splitButtonFlexContainer: {
      display: 'flex',
      height: '100%',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    splitButtonContainerDisabled: {
      outline: 'none',
      border: 'none',
      selectors: (_g = {}, _g[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'GrayText',
        borderColor: 'GrayText',
        backgroundColor: 'Window'
      }, _g)
    }
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(splitButtonStyles, customStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/index.js ***!
  \****************************************************************************/
/*! exports provided: BaseButton, ElementType, ButtonType, Button, ActionButton, CommandBarButton, CommandButton, CompoundButton, DefaultButton, MessageBarButton, PrimaryButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return _BaseButton__WEBPACK_IMPORTED_MODULE_0__["BaseButton"]; });

/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.types */ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return _Button_types__WEBPACK_IMPORTED_MODULE_1__["ElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _Button_types__WEBPACK_IMPORTED_MODULE_1__["ButtonType"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButton/ActionButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_3__["ActionButton"]; });

/* harmony import */ var _CommandBarButton_CommandBarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandBarButton/CommandBarButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return _CommandBarButton_CommandBarButton__WEBPACK_IMPORTED_MODULE_4__["CommandBarButton"]; });

/* harmony import */ var _CommandButton_CommandButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommandButton/CommandButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return _CommandButton_CommandButton__WEBPACK_IMPORTED_MODULE_5__["CommandButton"]; });

/* harmony import */ var _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompoundButton/CompoundButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__["CompoundButton"]; });

/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_7__["DefaultButton"]; });

/* harmony import */ var _MessageBarButton_MessageBarButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessageBarButton/MessageBarButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return _MessageBarButton_MessageBarButton__WEBPACK_IMPORTED_MODULE_8__["MessageBarButton"]; });

/* harmony import */ var _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrimaryButton/PrimaryButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_9__["PrimaryButton"]; });

/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconButton/IconButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_10__["IconButton"]; });













/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js ***!
  \*******************************************************************************/
/*! exports provided: Callout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CalloutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent */ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layer */ "./node_modules/office-ui-fabric-react/lib/Layer.js");





var Callout =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Callout, _super);

  function Callout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Callout.prototype.render = function () {
    var _a = this.props,
        layerProps = _a.layerProps,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["layerProps"]);

    var content = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CalloutContent__WEBPACK_IMPORTED_MODULE_2__["CalloutContent"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
    return this.props.doNotLayer ? content : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, layerProps), content);
  };

  return Callout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js ***!
  \*******************************************************************************************/
/*! exports provided: CalloutContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutContentBase", function() { return CalloutContentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/positioning */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Popup */ "./node_modules/office-ui-fabric-react/lib/Popup.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
var _a;









var ANIMATIONS = (_a = {}, _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].top] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideUpIn10, _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].bottom] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideDownIn10, _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].left] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideLeftIn10, _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].right] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideRightIn10, _a);
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])({
  disableCaching: true
});
var BEAK_ORIGIN_POSITION = {
  top: 0,
  left: 0
}; // Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.

var OFF_SCREEN_STYLE = {
  opacity: 0,
  filter: 'opacity(0)'
}; // role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
// This constant array can be used to filter these out of native props spread on callout root and apply them together on
// calloutMain (the Popup component within the callout)

var ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];

var CalloutContentBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalloutContentBase, _super);

  function CalloutContentBase(props) {
    var _this = _super.call(this, props) || this;

    _this._hostElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._calloutElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._hasListeners = false;
    _this._disposables = [];

    _this.dismiss = function (ev) {
      var onDismiss = _this.props.onDismiss;

      if (onDismiss) {
        onDismiss(ev);
      }
    };

    _this._dismissOnScroll = function (ev) {
      var preventDismissOnScroll = _this.props.preventDismissOnScroll;

      if (_this.state.positions && !preventDismissOnScroll) {
        _this._dismissOnClickOrScroll(ev);
      }
    };

    _this._dismissOnResize = function (ev) {
      var preventDismissOnResize = _this.props.preventDismissOnResize;

      if (!preventDismissOnResize) {
        _this.dismiss(ev);
      }
    };

    _this._dismissOnLostFocus = function (ev) {
      var preventDismissOnLostFocus = _this.props.preventDismissOnLostFocus;

      if (!preventDismissOnLostFocus) {
        _this._dismissOnClickOrScroll(ev);
      }
    };

    _this._setInitialFocus = function () {
      if (_this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions && _this._calloutElement.current) {
        _this._didSetInitialFocus = true;

        _this._async.requestAnimationFrame(function () {
          return Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["focusFirstChild"])(_this._calloutElement.current);
        });
      }
    };

    _this._onComponentDidMount = function () {
      _this._addListeners();

      if (_this.props.onLayerMounted) {
        _this.props.onLayerMounted();
      }

      _this._updateAsyncPosition();

      _this._setHeightOffsetEveryFrame();
    };

    _this._mouseDownOnPopup = function () {
      _this._isMouseDownOnPopup = true;
    };

    _this._mouseUpOnPopup = function () {
      _this._isMouseDownOnPopup = false;
    };

    _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
    _this._didSetInitialFocus = false;
    _this.state = {
      positions: undefined,
      slideDirectionalClassName: undefined,
      // @TODO it looks like this is not even being used anymore.
      calloutElementRect: undefined,
      heightOffset: 0
    };
    _this._positionAttempts = 0;
    return _this;
  }

  CalloutContentBase.prototype.componentDidUpdate = function () {
    if (!this.props.hidden) {
      this._setInitialFocus();

      if (!this._hasListeners) {
        this._addListeners();
      }

      this._updateAsyncPosition();
    } else {
      if (this._hasListeners) {
        this._removeListeners();
      }
    }
  };

  CalloutContentBase.prototype.shouldComponentUpdate = function (newProps, newState) {
    if (this.props.hidden && newProps.hidden) {
      // Do not update when hidden.
      return false;
    }

    return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(this.props, newProps) || !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(this.state, newState);
  }; // tslint:disable-next-line function-name


  CalloutContentBase.prototype.UNSAFE_componentWillMount = function () {
    this._setTargetWindowAndElement(this._getTarget());
  };

  CalloutContentBase.prototype.componentWillUnmount = function () {
    this._async.dispose();

    this._disposables.forEach(function (dispose) {
      return dispose();
    });
  }; // tslint:disable-next-line function-name


  CalloutContentBase.prototype.UNSAFE_componentWillUpdate = function (newProps) {
    // If the target element changed, find the new one. If we are tracking target with class name, always find element because we
    // do not know if fabric has rendered a new element and disposed the old element.
    var newTarget = this._getTarget(newProps);

    var oldTarget = this._getTarget();

    if ((newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) && !this._blockResetHeight) {
      this._maxHeight = undefined;

      this._setTargetWindowAndElement(newTarget);
    }

    if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
      this._maxHeight = undefined;
    }

    if (newProps.finalHeight !== this.props.finalHeight) {
      this._setHeightOffsetEveryFrame();
    } // Ensure positioning is recalculated when we are about to show a persisted menu.


    if (this._didPositionPropsChange(newProps, this.props)) {
      this._maxHeight = undefined; // Target might have been updated while hidden.

      this._setTargetWindowAndElement(newTarget);

      this.setState({
        positions: undefined
      });
      this._didSetInitialFocus = false;
      this._bounds = undefined;
    }

    this._blockResetHeight = false;
  };

  CalloutContentBase.prototype.componentDidMount = function () {
    if (!this.props.hidden) {
      this._onComponentDidMount();
    }
  };

  CalloutContentBase.prototype.render = function () {
    // If there is no target window then we are likely in server side rendering and we should not render anything.
    if (!this._targetWindow) {
      return null;
    }

    var target = this.props.target;
    var _a = this.props,
        styles = _a.styles,
        style = _a.style,
        ariaLabel = _a.ariaLabel,
        ariaDescribedBy = _a.ariaDescribedBy,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className,
        isBeakVisible = _a.isBeakVisible,
        children = _a.children,
        beakWidth = _a.beakWidth,
        calloutWidth = _a.calloutWidth,
        calloutMaxWidth = _a.calloutMaxWidth,
        finalHeight = _a.finalHeight,
        _b = _a.hideOverflow,
        hideOverflow = _b === void 0 ? !!finalHeight : _b,
        backgroundColor = _a.backgroundColor,
        calloutMaxHeight = _a.calloutMaxHeight,
        onScroll = _a.onScroll,
        _c = _a.shouldRestoreFocus,
        shouldRestoreFocus = _c === void 0 ? true : _c;
    target = this._getTarget();
    var positions = this.state.positions;
    var getContentMaxHeight = this._getMaxHeight() ? this._getMaxHeight() + this.state.heightOffset : undefined;
    var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight ? calloutMaxHeight : getContentMaxHeight;
    var overflowYHidden = hideOverflow;
    var beakVisible = isBeakVisible && !!target;
    this._classNames = getClassNames(styles, {
      theme: this.props.theme,
      className: className,
      overflowYHidden: overflowYHidden,
      calloutWidth: calloutWidth,
      positions: positions,
      beakWidth: beakWidth,
      backgroundColor: backgroundColor,
      calloutMaxWidth: calloutMaxWidth
    });

    var overflowStyle = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, style, {
      maxHeight: contentMaxHeight
    }, overflowYHidden && {
      overflowY: 'hidden'
    });

    var visibilityStyle = this.props.hidden ? {
      visibility: 'hidden'
    } : undefined; // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.

    var content = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      ref: this._hostElement,
      className: this._classNames.container,
      style: visibilityStyle
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["divProperties"], ARIA_ROLE_ATTRIBUTES), {
      className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]),
      style: positions ? positions.elementPosition : OFF_SCREEN_STYLE,
      tabIndex: -1,
      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
      ref: this._calloutElement
    }), beakVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: this._classNames.beak,
      style: this._getBeakPosition()
    }), beakVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: this._classNames.beakCurtain
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_5__["Popup"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, ARIA_ROLE_ATTRIBUTES), {
      ariaLabel: ariaLabel,
      ariaDescribedBy: ariaDescribedBy,
      ariaLabelledBy: ariaLabelledBy,
      className: this._classNames.calloutMain,
      onDismiss: this.dismiss,
      onScroll: onScroll,
      shouldRestoreFocus: shouldRestoreFocus,
      style: overflowStyle,
      onMouseDown: this._mouseDownOnPopup,
      onMouseUp: this._mouseUpOnPopup
    }), children)));
    return content;
  };

  CalloutContentBase.prototype._dismissOnClickOrScroll = function (ev) {
    var target = ev.target;
    var isEventTargetOutsideCallout = this._hostElement.current && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(this._hostElement.current, target); // If mouse is pressed down on callout but moved outside then released, don't dismiss the callout.

    if (isEventTargetOutsideCallout && this._isMouseDownOnPopup) {
      this._isMouseDownOnPopup = false;
      return;
    }

    if (!this._target && isEventTargetOutsideCallout || ev.target !== this._targetWindow && isEventTargetOutsideCallout && (this._target.stopPropagation || !this._target || target !== this._target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(this._target, target))) {
      this.dismiss(ev);
    }
  };

  CalloutContentBase.prototype._addListeners = function () {
    var _this = this; // This is added so the callout will dismiss when the window is scrolled
    // but not when something inside the callout is scrolled. The delay seems
    // to be required to avoid React firing an async focus event in IE from
    // the target changing focus quickly prior to rendering the callout.


    this._async.setTimeout(function () {
      _this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow, 'scroll', _this._dismissOnScroll, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow, 'resize', _this._dismissOnResize, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true));

      _this._hasListeners = true;
    }, 0);
  };

  CalloutContentBase.prototype._removeListeners = function () {
    this._disposables.forEach(function (dispose) {
      return dispose();
    });

    this._disposables = [];
    this._hasListeners = false;
  };

  CalloutContentBase.prototype._updateAsyncPosition = function () {
    var _this = this;

    this._async.requestAnimationFrame(function () {
      return _this._updatePosition();
    });
  };

  CalloutContentBase.prototype._getBeakPosition = function () {
    var positions = this.state.positions;

    var beakPostionStyle = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, positions && positions.beakPosition ? positions.beakPosition.elementPosition : null);

    if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
      beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
      beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
    }

    return beakPostionStyle;
  };

  CalloutContentBase.prototype._updatePosition = function () {
    // Try to update the target, page might have changed
    this._setTargetWindowAndElement(this._getTarget());

    var positions = this.state.positions;
    var hostElement = this._hostElement.current;
    var calloutElement = this._calloutElement.current; // If we expect a target element to position against, we need to wait until `this._target` is resolved. Otherwise
    // we can try to position.

    var expectsTarget = !!this.props.target;

    if (hostElement && calloutElement && (!expectsTarget || this._target)) {
      var currentProps = void 0;
      currentProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(currentProps, this.props);
      currentProps.bounds = this._getBounds();
      currentProps.target = this._target;
      var newPositions = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["positionCallout"])(currentProps, hostElement, calloutElement, positions); // Set the new position only when the positions are not exists or one of the new callout positions are different.
      // The position should not change if the position is within 2 decimal places.

      if (!positions && newPositions || positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5) {
        // We should not reposition the callout more than a few times, if it is then the content is likely resizing
        // and we should stop trying to reposition to prevent a stack overflow.
        this._positionAttempts++;
        this.setState({
          positions: newPositions
        });
      } else if (this._positionAttempts > 0) {
        // Only call the onPositioned callback if the callout has been re-positioned at least once.
        this._positionAttempts = 0;

        if (this.props.onPositioned) {
          this.props.onPositioned(this.state.positions);
        }
      }
    }
  };

  CalloutContentBase.prototype._getBounds = function () {
    if (!this._bounds) {
      var currentBounds = this.props.bounds;

      if (!currentBounds) {
        currentBounds = {
          top: 0 + this.props.minPagePadding,
          left: 0 + this.props.minPagePadding,
          right: this._targetWindow.innerWidth - this.props.minPagePadding,
          bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
          width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
          height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
        };
      }

      this._bounds = currentBounds;
    }

    return this._bounds;
  }; // Max height should remain as synchronous as possible, which is why it is not done using set state.
  // It needs to be synchronous since it will impact the ultimate position of the callout.


  CalloutContentBase.prototype._getMaxHeight = function () {
    var _this = this;

    if (!this._maxHeight) {
      if (this.props.directionalHintFixed && this._target) {
        var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
        var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0; // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
        // overlap with the target.

        var totalGap_1 = gapSpace + beakWidth;

        this._async.requestAnimationFrame(function () {
          if (_this._target) {
            _this._maxHeight = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["getMaxHeight"])(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
            _this._blockResetHeight = true;

            _this.forceUpdate();
          }
        });
      } else {
        this._maxHeight = this._getBounds().height;
      }
    }

    return this._maxHeight;
  };

  CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
    return this._comparePositions(positions.elementPosition, newPosition.elementPosition) && this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition);
  };

  CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
    for (var key in newPositions) {
      // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
      if (newPositions.hasOwnProperty(key)) {
        var oldPositionEdge = oldPositions[key];
        var newPositionEdge = newPositions[key];

        if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
          if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
            return false;
          }
        } else {
          return false;
        }
      }
    }

    return true;
  };

  CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
    if (target) {
      if (typeof target === 'string') {
        var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getDocument"])();
        this._target = currentDoc ? currentDoc.querySelector(target) : null;
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])();
      } else if (target.stopPropagation) {
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(target.toElement);
        this._target = target;
      } else if (target.getBoundingClientRect) {
        var targetElement = target;
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(targetElement);
        this._target = target;
      } else if (target.current !== undefined) {
        this._target = target.current;
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(this._target); // HTMLImgElements can have x and y values. The check for it being a point must go last.
      } else {
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])();
        this._target = target;
      }
    } else {
      this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])();
    }
  };

  CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
    var _this = this;

    if (this._calloutElement.current && this.props.finalHeight) {
      this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
        var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;

        if (!calloutMainElem) {
          return;
        }

        var cardScrollHeight = calloutMainElem.scrollHeight;
        var cardCurrHeight = calloutMainElem.offsetHeight;
        var scrollDiff = cardScrollHeight - cardCurrHeight;

        _this.setState({
          heightOffset: _this.state.heightOffset + scrollDiff
        });

        if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
          _this._setHeightOffsetEveryFrame();
        } else {
          _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
        }
      });
    }
  }; // Whether or not the current positions should be reset


  CalloutContentBase.prototype._didPositionPropsChange = function (newProps, oldProps) {
    return !newProps.hidden && newProps.hidden !== oldProps.hidden || newProps.directionalHint !== oldProps.directionalHint;
  };

  CalloutContentBase.prototype._getTarget = function (props) {
    if (props === void 0) {
      props = this.props;
    }

    var target = props.target;
    return target;
  };

  CalloutContentBase.defaultProps = {
    preventDismissOnLostFocus: false,
    preventDismissOnScroll: false,
    preventDismissOnResize: false,
    isBeakVisible: true,
    beakWidth: 16,
    gapSpace: 0,
    minPagePadding: 8,
    directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].bottomAutoEdge
  };
  return CalloutContentBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js ***!
  \**************************************************************************************/
/*! exports provided: CalloutContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutContent", function() { return CalloutContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalloutContent.base */ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js");
/* harmony import */ var _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent.styles */ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js");



var CalloutContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__["CalloutContentBase"], _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
  scope: 'CalloutContent'
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js ***!
  \*********************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


function getBeakStyle(beakWidth) {
  return {
    height: beakWidth,
    width: beakWidth
  };
}

var GlobalClassNames = {
  container: 'ms-Callout-container',
  root: 'ms-Callout',
  beak: 'ms-Callout-beak',
  beakCurtain: 'ms-Callout-beakCurtain',
  calloutMain: 'ms-Callout-main'
};
var getStyles = function (props) {
  var _a;

  var theme = props.theme,
      className = props.className,
      overflowYHidden = props.overflowYHidden,
      calloutWidth = props.calloutWidth,
      beakWidth = props.beakWidth,
      backgroundColor = props.backgroundColor,
      calloutMaxWidth = props.calloutMaxWidth;
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
  var palette = theme.palette,
      effects = theme.effects;
  return {
    container: [classNames.container, {
      position: 'relative'
    }],
    root: [classNames.root, theme.fonts.medium, {
      position: 'absolute',
      boxSizing: 'border-box',
      borderRadius: effects.roundedCorner2,
      boxShadow: effects.elevation16,
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'WindowText'
      }, _a)
    }, Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"])(), className, !!calloutWidth && {
      width: calloutWidth
    }, !!calloutMaxWidth && {
      maxWidth: calloutMaxWidth
    }],
    beak: [classNames.beak, {
      position: 'absolute',
      backgroundColor: palette.white,
      boxShadow: 'inherit',
      border: 'inherit',
      boxSizing: 'border-box',
      transform: 'rotate(45deg)'
    }, getBeakStyle(beakWidth), backgroundColor && {
      backgroundColor: backgroundColor
    }],
    beakCurtain: [classNames.beakCurtain, {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: palette.white,
      borderRadius: effects.roundedCorner2
    }],
    calloutMain: [classNames.calloutMain, {
      backgroundColor: palette.white,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'relative',
      borderRadius: effects.roundedCorner2
    }, overflowYHidden && {
      overflowY: 'hidden'
    }, backgroundColor && {
      backgroundColor: backgroundColor
    }]
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/FocusTrapCallout.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/FocusTrapCallout.js ***!
  \****************************************************************************************/
/*! exports provided: FocusTrapCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapCallout", function() { return FocusTrapCallout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Callout */ "./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js");
/* harmony import */ var _FocusTrapZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FocusTrapZone */ "./node_modules/office-ui-fabric-react/lib/FocusTrapZone.js");




/**
 * A special Callout that uses FocusTrapZone to trap focus
 * @param props - Props for the component
 */

var FocusTrapCallout = function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_2__["Callout"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone__WEBPACK_IMPORTED_MODULE_3__["FocusTrapZone"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
    disabled: props.hidden
  }, props.focusTrapProps), props.children));
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/index.js ***!
  \*****************************************************************************/
/*! exports provided: Callout, FocusTrapCallout, DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callout */ "./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _Callout__WEBPACK_IMPORTED_MODULE_0__["Callout"]; });

/* harmony import */ var _FocusTrapCallout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FocusTrapCallout */ "./node_modules/office-ui-fabric-react/lib/components/Callout/FocusTrapCallout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapCallout", function() { return _FocusTrapCallout__WEBPACK_IMPORTED_MODULE_1__["FocusTrapCallout"]; });

/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"]; });





/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js ***!
  \**************************************************************************************************/
/*! exports provided: getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return getSubmenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return canAnyMenuItemsCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return ContextualMenuBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.types */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FocusZone */ "./node_modules/office-ui-fabric-react/lib/FocusZone.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Callout */ "./node_modules/office-ui-fabric-react/lib/Callout.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");
/* harmony import */ var _ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContextualMenuItemWrapper/index */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ContextualMenu.classNames */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js");














var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])({
  disableCaching: true
});
var getContextualMenuItemClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])({
  disableCaching: true
});
function getSubmenuItems(item) {
  return item.subMenuProps ? item.subMenuProps.items : item.items;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */

function canAnyMenuItemsCheck(items) {
  return items.some(function (item) {
    if (item.canCheck) {
      return true;
    } // If the item is a section, check if any of the items in the section can check.


    if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) {
      return submenuItem.canCheck === true;
    })) {
      return true;
    }

    return false;
  });
}
var NavigationIdleDelay = 250
/* ms */
;

var ContextualMenuBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuBase, _super);

  function ContextualMenuBase(props) {
    var _this = _super.call(this, props) || this;

    _this._mounted = false;

    _this.dismiss = function (ev, dismissAll) {
      var onDismiss = _this.props.onDismiss;

      if (onDismiss) {
        onDismiss(ev, dismissAll);
      }
    };

    _this._onRenderMenuList = function (menuListProps, defaultRender) {
      var indexCorrection = 0;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
        className: _this._classNames.list,
        onKeyDown: _this._onKeyDown,
        onKeyUp: _this._onKeyUp,
        role: "menu"
      }, menuListProps.items.map(function (item, index) {
        var menuItem = _this._renderMenuItem(item, index, indexCorrection, menuListProps.totalItemCount, menuListProps.hasCheckmarks, menuListProps.hasIcons);

        if (item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider && item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header) {
          var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
          indexCorrection += indexIncrease;
        }

        return menuItem;
      }));
    };

    _this._onKeyDown = function (ev) {
      // Take note if we are processing an alt (option) or meta (command) keydown.
      // See comment in _shouldHandleKeyUp for reasoning.
      _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev); // On Mac, pressing escape dismisses all levels of native context menus

      var dismissAllMenus = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].escape && (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isMac"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isIOS"])());
      return _this._keyHandler(ev, _this._shouldHandleKeyDown, dismissAllMenus);
    };

    _this._shouldHandleKeyDown = function (ev) {
      return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].escape || _this._shouldCloseSubMenu(ev) || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up && (ev.altKey || ev.metaKey);
    };

    _this._onMenuFocusCapture = function (ev) {
      if (_this.props.delayUpdateFocusOnHover) {
        _this._shouldUpdateFocusOnMouseEvent = true;
      }
    };

    _this._onKeyUp = function (ev) {
      return _this._keyHandler(ev, _this._shouldHandleKeyUp, true
      /* dismissAllMenus */
      );
    };
    /**
     * We close the menu on key up only if ALL of the following are true:
     * - Most recent key down was alt or meta (command)
     * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
     *   expand/collapse the menu)
     * - We're not on a Mac (or iOS)
     *
     * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
     * closing any open context menus. There is not a similar behavior on Macs.
     */


    _this._shouldHandleKeyUp = function (ev) {
      var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && _this._isAltOrMeta(ev);

      _this._lastKeyDownWasAltOrMeta = false;
      return !!keyPressIsAltOrMetaAlone && !(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isIOS"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isMac"])());
    };
    /**
     * Calls `shouldHandleKey` to determine whether the keyboard event should be handled;
     * if so, stops event propagation and dismisses menu(s).
     * @param ev - The keyboard event.
     * @param shouldHandleKey - Returns whether we should handle this keyboard event.
     * @param dismissAllMenus - If true, dismiss all menus. Otherwise, dismiss only the current menu.
     * Only does anything if `shouldHandleKey` returns true.
     * @returns Whether the event was handled.
     */


    _this._keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
      var handled = false;

      if (shouldHandleKey(ev)) {
        _this._isFocusingPreviousElement = true;
        ev.preventDefault();
        ev.stopPropagation();

        _this.dismiss(ev, dismissAllMenus);

        handled = true;
      }

      return handled;
    };
    /**
     * Checks if the submenu should be closed
     */


    _this._shouldCloseSubMenu = function (ev) {
      var submenuCloseKey = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].right : _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].left;

      if (ev.which !== submenuCloseKey || !_this.props.isSubMenu) {
        return false;
      }

      return _this._adjustedFocusZoneProps.direction === _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical || !!_this._adjustedFocusZoneProps.checkForNoWrap && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shouldWrapFocus"])(ev.target, 'data-no-horizontal-wrap');
    };

    _this._onMenuKeyDown = function (ev) {
      // Mark as handled if onKeyDown returns true (for handling collapse cases)
      // or if we are attempting to expand a submenu
      var handled = _this._onKeyDown(ev);

      if (handled || !_this._host) {
        return;
      } // If we have a modifier key being pressed, we do not want to move focus.
      // Otherwise, handle up and down keys.


      var hasModifier = !!(ev.altKey || ev.metaKey);
      var isUp = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up;
      var isDown = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down;

      if (!hasModifier && (isUp || isDown)) {
        var elementToFocus = isUp ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getLastFocusable"])(_this._host, _this._host.lastChild, true) : Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getFirstFocusable"])(_this._host, _this._host.firstChild, true);

        if (elementToFocus) {
          elementToFocus.focus();
          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };
    /**
     * Scroll handler for the callout to make sure the mouse events
     * for updating focus are not interacting during scroll
     */


    _this._onScroll = function () {
      if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
        _this._async.clearTimeout(_this._scrollIdleTimeoutId);

        _this._scrollIdleTimeoutId = undefined;
      } else {
        _this._isScrollIdle = false;
      }

      _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
        _this._isScrollIdle = true;
      }, NavigationIdleDelay);
    };

    _this._onItemMouseEnterBase = function (item, ev, target) {
      if (_this._shouldIgnoreMouseEvent()) {
        return;
      }

      _this._updateFocusOnMouseEvent(item, ev, target);
    };

    _this._onItemMouseMoveBase = function (item, ev, target) {
      var targetElement = ev.currentTarget; // Always do this check to make sure we record a mouseMove if needed (even if we are timed out)

      if (_this._shouldUpdateFocusOnMouseEvent) {
        _this._gotMouseMove = true;
      } else {
        return;
      }

      if (!_this._isScrollIdle || _this._enterTimerId !== undefined || targetElement === _this._targetWindow.document.activeElement) {
        return;
      }

      _this._updateFocusOnMouseEvent(item, ev, target);
    };

    _this._onMouseItemLeave = function (item, ev) {
      if (_this._shouldIgnoreMouseEvent()) {
        return;
      }

      if (_this._enterTimerId !== undefined) {
        _this._async.clearTimeout(_this._enterTimerId);

        _this._enterTimerId = undefined;
      }

      if (_this.state.expandedMenuItemKey !== undefined) {
        return;
      }
      /**
       * IE11 focus() method forces parents to scroll to top of element.
       * Edge and IE expose a setActive() function for focusable divs that
       * sets the page focus but does not scroll the parent element.
       */


      if (_this._host.setActive) {
        try {
          _this._host.setActive();
        } catch (e) {
          /* no-op */
        }
      } else {
        _this._host.focus();
      }
    };

    _this._onItemMouseDown = function (item, ev) {
      if (item.onMouseDown) {
        item.onMouseDown(item, ev);
      }
    };

    _this._onItemClick = function (item, ev) {
      _this._onItemClickBase(item, ev, ev.currentTarget);
    };

    _this._onItemClickBase = function (item, ev, target) {
      var items = getSubmenuItems(item); // Cancel a async menu item hover timeout action from being taken and instead
      // just trigger the click event instead.

      _this._cancelSubMenuTimer();

      if (!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item) && (!items || !items.length)) {
        // This is an item without a menu. Click it.
        _this._executeItemClick(item, ev);
      } else {
        if (item.key !== _this.state.expandedMenuItemKey) {
          // This has a collapsed sub menu. Expand it.
          _this.setState({
            // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
            // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
            // between a real click event and a keypress event (detail should be the number of mouse clicks).
            // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
            // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
            // and "" for pressing "Enter" with Narrator on.
            expandedByMouseClick: ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse'
          });

          _this._onItemSubMenuExpand(item, target);
        }
      }

      ev.stopPropagation();
      ev.preventDefault();
    };

    _this._onAnchorClick = function (item, ev) {
      _this._executeItemClick(item, ev);

      ev.stopPropagation();
    };

    _this._executeItemClick = function (item, ev) {
      if (item.disabled || item.isDisabled) {
        return;
      }

      var dismiss = false;

      if (item.onClick) {
        dismiss = !!item.onClick(ev, item);
      } else if (_this.props.onItemClick) {
        dismiss = !!_this.props.onItemClick(ev, item);
      }

      (dismiss || !ev.defaultPrevented) && _this.dismiss(ev, true);
    };

    _this._onItemKeyDown = function (item, ev) {
      var openKey = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].left : _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].right;

      if (!item.disabled && (ev.which === openKey || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down && (ev.altKey || ev.metaKey))) {
        _this.setState({
          expandedByMouseClick: false
        });

        _this._onItemSubMenuExpand(item, ev.currentTarget);

        ev.preventDefault();
      }
    }; // Cancel a async menu item hover timeout action from being taken and instead
    // do new upcoming behavior


    _this._cancelSubMenuTimer = function () {
      if (_this._enterTimerId !== undefined) {
        _this._async.clearTimeout(_this._enterTimerId);

        _this._enterTimerId = undefined;
      }
    };

    _this._onItemSubMenuExpand = function (item, target) {
      if (_this.state.expandedMenuItemKey !== item.key) {
        if (_this.state.expandedMenuItemKey) {
          _this._onSubMenuDismiss();
        } // Focus the target to ensure when we close it, we're focusing on the correct element.


        target.focus();

        _this.setState({
          expandedMenuItemKey: item.key,
          submenuTarget: target
        });
      }
    };
    /**
     * This function is called ASYNCHRONOUSLY, and so there is a chance it is called
     * after the component is unmounted. The _mounted property is added to prevent
     * from calling setState() after unmount. Do NOT copy this pattern in synchronous
     * code.
     */


    _this._onSubMenuDismiss = function (ev, dismissAll) {
      if (dismissAll) {
        _this.dismiss(ev, dismissAll);
      } else if (_this._mounted) {
        _this.setState({
          dismissedMenuItemKey: _this.state.expandedMenuItemKey,
          expandedMenuItemKey: undefined,
          submenuTarget: undefined
        });
      }
    };

    _this._getSubMenuId = function (item) {
      var subMenuId = _this.state.subMenuId;

      if (item.subMenuProps && item.subMenuProps.id) {
        subMenuId = item.subMenuProps.id;
      }

      return subMenuId;
    };

    _this._onPointerAndTouchEvent = function (ev) {
      _this._cancelSubMenuTimer();
    };

    _this.state = {
      contextualMenuItems: undefined,
      subMenuId: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('ContextualMenu')
    };

    _this._warnDeprecations({
      getMenuClassNames: 'styles'
    });

    _this._isFocusingPreviousElement = false;
    _this._isScrollIdle = true;
    _this._shouldUpdateFocusOnMouseEvent = !_this.props.delayUpdateFocusOnHover;
    _this._gotMouseMove = false;
    return _this;
  }

  ContextualMenuBase.prototype.shouldComponentUpdate = function (newProps, newState) {
    if (this.props.hidden && newProps.hidden) {
      // Do not update when hidden.
      return false;
    }

    return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shallowCompare"])(this.props, newProps) || !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shallowCompare"])(this.state, newState);
  }; // tslint:disable-next-line function-name


  ContextualMenuBase.prototype.UNSAFE_componentWillUpdate = function (newProps) {
    if (newProps.target !== this.props.target) {
      var newTarget = newProps.target;

      this._setTargetWindowAndElement(newTarget);
    }

    if (newProps.hidden !== this.props.hidden) {
      if (newProps.hidden) {
        this._onMenuClosed();
      } else {
        this._onMenuOpened();

        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
      }
    }

    if (newProps.delayUpdateFocusOnHover !== this.props.delayUpdateFocusOnHover) {
      // update shouldUpdateFocusOnMouseEvent to follow what was passed in
      this._shouldUpdateFocusOnMouseEvent = !newProps.delayUpdateFocusOnHover; // If shouldUpdateFocusOnMouseEvent is false, we need to reset gotMouseMove to false

      this._gotMouseMove = this._shouldUpdateFocusOnMouseEvent && this._gotMouseMove;
    }
  }; // Invoked once, both on the client and server, immediately before the initial rendering occurs.
  // tslint:disable-next-line function-name


  ContextualMenuBase.prototype.UNSAFE_componentWillMount = function () {
    var target = this.props.target;

    this._setTargetWindowAndElement(target);

    if (!this.props.hidden) {
      this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
    }
  }; // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.


  ContextualMenuBase.prototype.componentDidMount = function () {
    if (!this.props.hidden) {
      this._onMenuOpened();
    }

    this._mounted = true;
  }; // Invoked immediately before a component is unmounted from the DOM.


  ContextualMenuBase.prototype.componentWillUnmount = function () {
    this._tryFocusPreviousActiveElement();

    if (this.props.onMenuDismissed) {
      this.props.onMenuDismissed(this.props);
    }

    this._events.dispose();

    this._async.dispose();

    this._mounted = false;
  };

  ContextualMenuBase.prototype.render = function () {
    var _this = this;

    var isBeakVisible = this.props.isBeakVisible;
    var _a = this.props,
        items = _a.items,
        labelElementId = _a.labelElementId,
        id = _a.id,
        className = _a.className,
        beakWidth = _a.beakWidth,
        directionalHint = _a.directionalHint,
        directionalHintForRTL = _a.directionalHintForRTL,
        alignTargetEdge = _a.alignTargetEdge,
        gapSpace = _a.gapSpace,
        coverTarget = _a.coverTarget,
        ariaLabel = _a.ariaLabel,
        doNotLayer = _a.doNotLayer,
        target = _a.target,
        bounds = _a.bounds,
        useTargetWidth = _a.useTargetWidth,
        useTargetAsMinWidth = _a.useTargetAsMinWidth,
        directionalHintFixed = _a.directionalHintFixed,
        shouldFocusOnMount = _a.shouldFocusOnMount,
        shouldFocusOnContainer = _a.shouldFocusOnContainer,
        title = _a.title,
        styles = _a.styles,
        theme = _a.theme,
        calloutProps = _a.calloutProps,
        _b = _a.onRenderSubMenu,
        onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b,
        _c = _a.onRenderMenuList,
        onRenderMenuList = _c === void 0 ? this._onRenderMenuList : _c,
        focusZoneProps = _a.focusZoneProps,
        getMenuClassNames = _a.getMenuClassNames;
    this._classNames = getMenuClassNames ? getMenuClassNames(theme, className) : getClassNames(styles, {
      theme: theme,
      className: className
    });
    var hasIcons = itemsHaveIcons(items);

    function itemsHaveIcons(contextualMenuItems) {
      for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
        var item = contextualMenuItems_1[_i];

        if (!!item.iconProps) {
          return true;
        }

        if (item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section && item.sectionProps && itemsHaveIcons(item.sectionProps.items)) {
          return true;
        }
      }

      return false;
    }

    this._adjustedFocusZoneProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, focusZoneProps, {
      direction: this._getFocusZoneDirection()
    });
    var hasCheckmarks = canAnyMenuItemsCheck(items);
    var submenuProps = this.state.expandedMenuItemKey && this.props.hidden !== true ? this._getSubmenuProps() : null;
    isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__["ResponsiveMode"].medium : isBeakVisible;
    /**
     * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
     */

    var contextMenuStyle;
    var targetAsHtmlElement = this._target;

    if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
      var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
      var targetWidth = targetBoundingRect.width - 2
      /* Accounts for 1px border */
      ;

      if (useTargetWidth) {
        contextMenuStyle = {
          width: targetWidth
        };
      } else if (useTargetAsMinWidth) {
        contextMenuStyle = {
          minWidth: targetWidth
        };
      }
    } // The menu should only return if items were provided, if no items were provided then it should not appear.


    if (items && items.length > 0) {
      var totalItemCount = 0;

      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];

        if (item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider && item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header) {
          var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
          totalItemCount += itemCount;
        }
      }

      var calloutStyles = !getMenuClassNames && this._classNames.subComponentStyles ? this._classNames.subComponentStyles.callout : undefined;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_8__["Callout"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        styles: calloutStyles
      }, calloutProps, {
        target: target,
        isBeakVisible: isBeakVisible,
        beakWidth: beakWidth,
        directionalHint: directionalHint,
        directionalHintForRTL: directionalHintForRTL,
        gapSpace: gapSpace,
        coverTarget: coverTarget,
        doNotLayer: doNotLayer,
        className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-ContextualMenu-Callout', calloutProps && calloutProps.className),
        setInitialFocus: shouldFocusOnMount,
        onDismiss: this.props.onDismiss,
        onScroll: this._onScroll,
        bounds: bounds,
        directionalHintFixed: directionalHintFixed,
        alignTargetEdge: alignTargetEdge,
        hidden: this.props.hidden
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        "aria-label": ariaLabel,
        "aria-labelledby": labelElementId,
        style: contextMenuStyle,
        ref: function (host) {
          return _this._host = host;
        },
        id: id,
        className: this._classNames.container,
        tabIndex: shouldFocusOnContainer ? 0 : -1,
        onKeyDown: this._onMenuKeyDown,
        onKeyUp: this._onKeyUp,
        onFocusCapture: this._onMenuFocusCapture
      }, title && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: this._classNames.title
      }, " ", title, " "), items && items.length ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._adjustedFocusZoneProps, {
        className: this._classNames.root,
        isCircularNavigation: true,
        handleTabKey: _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneTabbableElements"].all
      }), onRenderMenuList({
        items: items,
        totalItemCount: totalItemCount,
        hasCheckmarks: hasCheckmarks,
        hasIcons: hasIcons
      }, this._onRenderMenuList)) : null, submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu)));
    } else {
      return null;
    }
  };

  ContextualMenuBase.prototype._onMenuOpened = function () {
    this._events.on(this._targetWindow, 'resize', this.dismiss);

    this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover;
    this._gotMouseMove = false;
    this.props.onMenuOpened && this.props.onMenuOpened(this.props);
  };

  ContextualMenuBase.prototype._onMenuClosed = function () {
    this._events.off(this._targetWindow, 'resize', this.dismiss);

    this._tryFocusPreviousActiveElement();

    if (this.props.onMenuDismissed) {
      this.props.onMenuDismissed(this.props);
    }

    this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover; // We need to dismiss any submenu related state properties,
    // so that when the menu is shown again, the submenu is collapsed

    this.setState({
      expandedByMouseClick: undefined,
      dismissedMenuItemKey: undefined,
      expandedMenuItemKey: undefined,
      submenuTarget: undefined
    });
  };

  ContextualMenuBase.prototype._tryFocusPreviousActiveElement = function () {
    var _this = this;

    if (this._isFocusingPreviousElement && this._previousActiveElement) {
      // This slight delay is required so that we can unwind the stack, const react try to mess with focus, and then
      // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
      // to reset the focus back to the thing it thinks should have been focused.
      // Note: Cannot be replaced by this._async.setTimout because those will be removed by the time this is called.
      setTimeout(function () {
        _this._previousActiveElement && _this._previousActiveElement.focus();
      }, 0);
    }
  };
  /**
   * Gets the focusZoneDirection by using the arrowDirection if specified,
   * the direction specificed in the focusZoneProps, or defaults to FocusZoneDirection.vertical
   */


  ContextualMenuBase.prototype._getFocusZoneDirection = function () {
    var focusZoneProps = this.props.focusZoneProps;
    return focusZoneProps && focusZoneProps.direction !== undefined ? focusZoneProps.direction : _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical;
  };

  ContextualMenuBase.prototype._onRenderSubMenu = function (subMenuProps, defaultRender) {
    throw Error('ContextualMenuBase: onRenderSubMenu callback is null or undefined. ' + 'Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.');
  };

  ContextualMenuBase.prototype._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var renderedItems = [];
    var iconProps = item.iconProps || {
      iconName: 'None'
    };
    var getItemClassNames = item.getItemClassNames,
        itemProps = item.itemProps;
    var styles = itemProps ? itemProps.styles : undefined; // We only send a dividerClassName when the item to be rendered is a divider. For all other cases, the default divider style is used.

    var dividerClassName = item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider ? item.className : undefined;
    var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
    var itemClassNames; // IContextualMenuItem#getItemClassNames for backwards compatibility
    // otherwise uses mergeStyles for class names.

    if (getItemClassNames) {
      itemClassNames = getItemClassNames(this.props.theme, Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item), this.state.expandedMenuItemKey === item.key, !!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["getIsChecked"])(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
    } else {
      var itemStyleProps = {
        theme: this.props.theme,
        disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item),
        expanded: this.state.expandedMenuItemKey === item.key,
        checked: !!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["getIsChecked"])(item),
        isAnchorLink: !!item.href,
        knownIcon: iconProps.iconName !== 'None',
        itemClassName: item.className,
        dividerClassName: dividerClassName,
        iconClassName: iconProps.className,
        subMenuClassName: subMenuIconClassName,
        primaryDisabled: item.primaryDisabled
      };
      var menuItemStyles = this._classNames.subComponentStyles ? this._classNames.subComponentStyles.menuItem : undefined; // We need to generate default styles then override if styles are provided
      // since the ContextualMenu currently handles item classNames.

      itemClassNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_11__["mergeStyleSets"])(getContextualMenuItemClassNames(_ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_12__["getItemStyles"], itemStyleProps), getContextualMenuItemClassNames(menuItemStyles, itemStyleProps), getContextualMenuItemClassNames(styles, itemStyleProps));
    }

    if (item.text === '-' || item.name === '-') {
      item.itemType = _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider;
    }

    switch (item.itemType) {
      case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider:
        renderedItems.push(this._renderSeparator(index, itemClassNames));
        break;

      case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header:
        renderedItems.push(this._renderSeparator(index, itemClassNames));

        var headerItem = this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);

        renderedItems.push(this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
        break;

      case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section:
        renderedItems.push(this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
        break;

      default:
        var menuItem = this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);

        renderedItems.push(this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
        break;
    }

    return renderedItems;
  };

  ContextualMenuBase.prototype._renderSectionItem = function (sectionItem, menuClassNames, index, hasCheckmarks, hasIcons) {
    var _this = this;

    var sectionProps = sectionItem.sectionProps;

    if (!sectionProps) {
      return;
    }

    var headerItem;

    if (sectionProps.title) {
      var headerContextualMenuItem = {
        key: "section-" + sectionProps.title + "-title",
        itemType: _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header,
        text: sectionProps.title
      };
      headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
    }

    if (sectionProps.items && sectionProps.items.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
        role: "presentation",
        key: sectionProps.key || sectionItem.key || "section-" + index
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        role: "group"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
        className: this._classNames.list
      }, sectionProps.topDivider && this._renderSeparator(index, menuClassNames, true, true), headerItem && this._renderListItem(headerItem, sectionItem.key || index, menuClassNames, sectionItem.title), sectionProps.items.map(function (contextualMenuItem, itemsIndex) {
        return _this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, sectionProps.items.length, hasCheckmarks, hasIcons);
      }), sectionProps.bottomDivider && this._renderSeparator(index, menuClassNames, false, true))));
    }
  };

  ContextualMenuBase.prototype._renderListItem = function (content, key, classNames, title) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      role: "presentation",
      title: title,
      key: key,
      className: classNames.item
    }, content);
  };

  ContextualMenuBase.prototype._renderSeparator = function (index, classNames, top, fromSection) {
    if (fromSection || index > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
        role: "separator",
        key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'),
        className: classNames.divider,
        "aria-hidden": "true"
      });
    }

    return null;
  };

  ContextualMenuBase.prototype._renderNormalItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    if (item.onRender) {
      return item.onRender(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        'aria-posinset': focusableElementIndex + 1,
        'aria-setsize': totalItemCount
      }, item), this.dismiss);
    }

    if (item.href) {
      return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    }

    if (item.split && Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item)) {
      return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    }

    return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
  };

  ContextualMenuBase.prototype._renderHeaderMenuItem = function (item, classNames, index, hasCheckmarks, hasIcons) {
    var _a = this.props.contextualMenuItemAs,
        ChildrenRenderer = _a === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_9__["ContextualMenuItem"] : _a;
    var itemProps = item.itemProps;
    var divHtmlProperties = itemProps && Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_5__["divProperties"]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      className: this._classNames.header
    }, divHtmlProperties, {
      style: item.style
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      item: item,
      classNames: classNames,
      index: index,
      onCheckmarkClick: hasCheckmarks ? this._onItemClick : undefined,
      hasIcons: hasIcons
    }, itemProps)));
  };

  ContextualMenuBase.prototype._renderAnchorMenuItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var contextualMenuItemAs = this.props.contextualMenuItemAs;
    var expandedMenuItemKey = this.state.expandedMenuItemKey;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuAnchor"], {
      item: item,
      classNames: classNames,
      index: index,
      focusableElementIndex: focusableElementIndex,
      totalItemCount: totalItemCount,
      hasCheckmarks: hasCheckmarks,
      hasIcons: hasIcons,
      contextualMenuItemAs: contextualMenuItemAs,
      onItemMouseEnter: this._onItemMouseEnterBase,
      onItemMouseLeave: this._onMouseItemLeave,
      onItemMouseMove: this._onItemMouseMoveBase,
      onItemMouseDown: this._onItemMouseDown,
      executeItemClick: this._executeItemClick,
      onItemClick: this._onAnchorClick,
      onItemKeyDown: this._onItemKeyDown,
      getSubMenuId: this._getSubMenuId,
      expandedMenuItemKey: expandedMenuItemKey,
      openSubMenu: this._onItemSubMenuExpand,
      dismissSubMenu: this._onSubMenuDismiss,
      dismissMenu: this.dismiss
    });
  };

  ContextualMenuBase.prototype._renderButtonItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var contextualMenuItemAs = this.props.contextualMenuItemAs;
    var expandedMenuItemKey = this.state.expandedMenuItemKey;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuButton"], {
      item: item,
      classNames: classNames,
      index: index,
      focusableElementIndex: focusableElementIndex,
      totalItemCount: totalItemCount,
      hasCheckmarks: hasCheckmarks,
      hasIcons: hasIcons,
      contextualMenuItemAs: contextualMenuItemAs,
      onItemMouseEnter: this._onItemMouseEnterBase,
      onItemMouseLeave: this._onMouseItemLeave,
      onItemMouseMove: this._onItemMouseMoveBase,
      onItemMouseDown: this._onItemMouseDown,
      executeItemClick: this._executeItemClick,
      onItemClick: this._onItemClick,
      onItemClickBase: this._onItemClickBase,
      onItemKeyDown: this._onItemKeyDown,
      getSubMenuId: this._getSubMenuId,
      expandedMenuItemKey: expandedMenuItemKey,
      openSubMenu: this._onItemSubMenuExpand,
      dismissSubMenu: this._onSubMenuDismiss,
      dismissMenu: this.dismiss
    });
  };

  ContextualMenuBase.prototype._renderSplitButton = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
    var contextualMenuItemAs = this.props.contextualMenuItemAs;
    var expandedMenuItemKey = this.state.expandedMenuItemKey;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuSplitButton"], {
      item: item,
      classNames: classNames,
      index: index,
      focusableElementIndex: focusableElementIndex,
      totalItemCount: totalItemCount,
      hasCheckmarks: hasCheckmarks,
      hasIcons: hasIcons,
      contextualMenuItemAs: contextualMenuItemAs,
      onItemMouseEnter: this._onItemMouseEnterBase,
      onItemMouseLeave: this._onMouseItemLeave,
      onItemMouseMove: this._onItemMouseMoveBase,
      onItemMouseDown: this._onItemMouseDown,
      executeItemClick: this._executeItemClick,
      onItemClick: this._onItemClick,
      onItemClickBase: this._onItemClickBase,
      onItemKeyDown: this._onItemKeyDown,
      openSubMenu: this._onItemSubMenuExpand,
      dismissSubMenu: this._onSubMenuDismiss,
      dismissMenu: this.dismiss,
      expandedMenuItemKey: expandedMenuItemKey,
      onTap: this._onPointerAndTouchEvent
    });
  };
  /**
   * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
   */


  ContextualMenuBase.prototype._isAltOrMeta = function (ev) {
    return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].alt || ev.key === 'Meta';
  };

  ContextualMenuBase.prototype._shouldIgnoreMouseEvent = function () {
    return !this._isScrollIdle || !this._gotMouseMove;
  };
  /**
   * Handles updating focus when mouseEnter or mouseMove fire.
   * As part of updating focus, This function will also update
   * the expand/collapse state accordingly.
   */


  ContextualMenuBase.prototype._updateFocusOnMouseEvent = function (item, ev, target) {
    var _this = this;

    var targetElement = target ? target : ev.currentTarget;
    var _a = this.props.subMenuHoverDelay,
        timeoutDuration = _a === void 0 ? NavigationIdleDelay : _a;

    if (item.key === this.state.expandedMenuItemKey) {
      return;
    }

    if (this._enterTimerId !== undefined) {
      this._async.clearTimeout(this._enterTimerId);

      this._enterTimerId = undefined;
    } // If the menu is not expanded we can update focus without any delay


    if (this.state.expandedMenuItemKey === undefined) {
      targetElement.focus();
    } // Delay updating expanding/dismissing the submenu
    // and only set focus if we have not already done so


    if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item)) {
      ev.stopPropagation();
      this._enterTimerId = this._async.setTimeout(function () {
        targetElement.focus();

        _this.setState({
          expandedByMouseClick: true
        });

        _this._onItemSubMenuExpand(item, targetElement);

        _this._enterTimerId = undefined;
      }, timeoutDuration);
    } else {
      this._enterTimerId = this._async.setTimeout(function () {
        _this._onSubMenuDismiss(ev);

        targetElement.focus();
        _this._enterTimerId = undefined;
      }, timeoutDuration);
    }
  };

  ContextualMenuBase.prototype._getSubmenuProps = function () {
    var _a = this.state,
        submenuTarget = _a.submenuTarget,
        expandedMenuItemKey = _a.expandedMenuItemKey;

    var item = this._findItemByKey(expandedMenuItemKey);

    var submenuProps = null;

    if (item) {
      submenuProps = {
        items: getSubmenuItems(item),
        target: submenuTarget,
        onDismiss: this._onSubMenuDismiss,
        isSubMenu: true,
        id: this.state.subMenuId,
        shouldFocusOnMount: true,
        shouldFocusOnContainer: this.state.expandedByMouseClick,
        directionalHint: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].leftTopEdge : _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].rightTopEdge,
        className: this.props.className,
        gapSpace: 0,
        isBeakVisible: false
      };

      if (item.subMenuProps) {
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["assign"])(submenuProps, item.subMenuProps);
      }
    }

    return submenuProps;
  };

  ContextualMenuBase.prototype._findItemByKey = function (key) {
    var items = this.props.items;
    return this._findItemByKeyFromItems(key, items);
  };
  /**
   * Returns the item that mathes a given key if any.
   * @param key - The key of the item to match
   * @param items - The items to look for the key
   */


  ContextualMenuBase.prototype._findItemByKeyFromItems = function (key, items) {
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
      var item = items_2[_i];

      if (item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section && item.sectionProps) {
        var match = this._findItemByKeyFromItems(key, item.sectionProps.items);

        if (match) {
          return match;
        }
      } else if (item.key && item.key === key) {
        return item;
      }
    }
  };

  ContextualMenuBase.prototype._setTargetWindowAndElement = function (target) {
    if (target) {
      if (typeof target === 'string') {
        var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
        this._target = currentDoc ? currentDoc.querySelector(target) : null;
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
      } else if (target.stopPropagation) {
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(target.toElement);
        this._target = target;
      } else if (target.x !== undefined && target.y !== undefined) {
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
        this._target = target;
      } else if (target.current !== undefined) {
        this._target = target.current;
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(this._target);
      } else {
        var targetElement = target;
        this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(targetElement);
        this._target = target;
      }
    } else {
      this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
    }
  }; // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.


  ContextualMenuBase.defaultProps = {
    items: [],
    shouldFocusOnMount: true,
    gapSpace: 0,
    directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].bottomAutoEdge,
    beakWidth: 16
  };
  ContextualMenuBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__["withResponsiveMode"]], ContextualMenuBase);
  return ContextualMenuBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js ***!
  \********************************************************************************************************/
/*! exports provided: getSplitButtonVerticalDividerClassNames, getItemClassNames, getItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSplitButtonVerticalDividerClassNames", function() { return getSplitButtonVerticalDividerClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemClassNames", function() { return getItemClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemStyles", function() { return getItemStyles; });
/* harmony import */ var _Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Divider/VerticalDivider.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var CONTEXTUAL_SPLIT_MENU_MINWIDTH = '28px';
var MediumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMaxMedium"]);
var getSplitButtonVerticalDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme) {
  var _a;

  return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])(Object(_Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__["getDividerClassNames"])(theme), {
    wrapper: {
      position: 'absolute',
      right: 28,
      selectors: (_a = {}, _a[MediumScreenSelector] = {
        right: 32 // fontSize of the icon increased from 12px to 16px

      }, _a)
    },
    divider: {
      height: 16,
      width: 1
    }
  });
});
var GlobalClassNames = {
  item: 'ms-ContextualMenu-item',
  divider: 'ms-ContextualMenu-divider',
  root: 'ms-ContextualMenu-link',
  isChecked: 'is-checked',
  isExpanded: 'is-expanded',
  isDisabled: 'is-disabled',
  linkContent: 'ms-ContextualMenu-linkContent',
  linkContentMenu: 'ms-ContextualMenu-linkContent',
  icon: 'ms-ContextualMenu-icon',
  iconColor: 'ms-ContextualMenu-iconColor',
  checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
  subMenuIcon: 'ms-ContextualMenu-submenuIcon',
  label: 'ms-ContextualMenu-itemText',
  secondaryText: 'ms-ContextualMenu-secondaryText',
  splitMenu: 'ms-ContextualMenu-splitMenu'
};
/**
 * @deprecated To be removed in 7.0.
 * @internal
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * It should be cleaned up in 7.0.
 *
 * TODO: Audit perf. impact of and potentially remove memoizeFunction.
 * https://github.com/OfficeDev/office-ui-fabric-react/issues/5534
 */

var getItemClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
  var _a, _b, _c, _d;

  var styles = Object(_ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["getMenuItemStyles"])(theme);
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getGlobalClassNames"])(GlobalClassNames, theme);
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])({
    item: [classNames.item, styles.item, itemClassName],
    divider: [classNames.divider, styles.divider, dividerClassName],
    root: [classNames.root, styles.root, checked && [classNames.isChecked, styles.rootChecked], isAnchorLink && styles.anchorLink, expanded && [classNames.isExpanded, styles.rootExpanded], disabled && [classNames.isDisabled, styles.rootDisabled], !disabled && !expanded && [{
      selectors: (_a = {
        ':hover': styles.rootHovered,
        ':active': styles.rootPressed
      }, _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused, _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = {
        background: 'inherit;'
      }, _a)
    }], className],
    splitPrimary: [styles.root, {
      width: "calc(100% - " + CONTEXTUAL_SPLIT_MENU_MINWIDTH + ")"
    }, checked && ['is-checked', styles.rootChecked], (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled], !(disabled || primaryDisabled) && !checked && [{
      selectors: (_b = {
        ':hover': styles.rootHovered
      }, _b[":hover ~ ." + classNames.splitMenu] = styles.rootHovered, _b[':active'] = styles.rootPressed, _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused, _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = {
        background: 'inherit;'
      }, _b)
    }]],
    splitMenu: [classNames.splitMenu, styles.root, {
      flexBasis: '0',
      padding: '0 8px',
      minWidth: CONTEXTUAL_SPLIT_MENU_MINWIDTH
    }, expanded && ['is-expanded', styles.rootExpanded], disabled && ['is-disabled', styles.rootDisabled], !disabled && !expanded && [{
      selectors: (_c = {
        ':hover': styles.rootHovered,
        ':active': styles.rootPressed
      }, _c["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused, _c["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = {
        background: 'inherit;'
      }, _c)
    }]],
    anchorLink: styles.anchorLink,
    linkContent: [classNames.linkContent, styles.linkContent],
    linkContentMenu: [classNames.linkContentMenu, styles.linkContent, {
      justifyContent: 'center'
    }],
    icon: [classNames.icon, knownIcon && styles.iconColor, styles.icon, iconClassName, disabled && [classNames.isDisabled, styles.iconDisabled]],
    iconColor: styles.iconColor,
    checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
    subMenuIcon: [classNames.subMenuIcon, styles.subMenuIcon, subMenuClassName, expanded && {
      color: theme.palette.neutralPrimary
    }, disabled && [styles.iconDisabled]],
    label: [classNames.label, styles.label],
    secondaryText: [classNames.secondaryText, styles.secondaryText],
    splitContainer: [styles.splitButtonFlexContainer, !disabled && !checked && [{
      selectors: (_d = {}, _d["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused, _d)
    }]]
  });
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props the ContextualMenuItem style props used to generate its styles.
 */

var getItemStyles = function (props) {
  var theme = props.theme,
      disabled = props.disabled,
      expanded = props.expanded,
      checked = props.checked,
      isAnchorLink = props.isAnchorLink,
      knownIcon = props.knownIcon,
      itemClassName = props.itemClassName,
      dividerClassName = props.dividerClassName,
      iconClassName = props.iconClassName,
      subMenuClassName = props.subMenuClassName,
      primaryDisabled = props.primaryDisabled,
      className = props.className;
  return getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js ***!
  \******************************************************************************************************/
/*! exports provided: CONTEXTUAL_MENU_ITEM_HEIGHT, getMenuItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXTUAL_MENU_ITEM_HEIGHT", function() { return CONTEXTUAL_MENU_ITEM_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemStyles", function() { return getMenuItemStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



var CONTEXTUAL_MENU_ITEM_HEIGHT = 36;
var MediumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]);
var getItemHighContrastStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
  var _a;

  return {
    selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
      backgroundColor: 'Highlight',
      borderColor: 'Highlight',
      color: 'HighlightText',
      MsHighContrastAdjust: 'none'
    }, _a)
  };
});
var getMenuItemStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme) {
  var _a, _b, _c, _d, _e, _f, _g;

  var semanticColors = theme.semanticColors,
      fonts = theme.fonts,
      palette = theme.palette;
  var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
  var ContextualMenuItemTextHoverColor = semanticColors.menuItemTextHovered;
  var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundPressed;
  var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
  var menuItemStyles = {
    item: [fonts.medium, {
      color: semanticColors.bodyText,
      position: 'relative',
      boxSizing: 'border-box'
    }],
    divider: {
      display: 'block',
      height: '1px',
      backgroundColor: ContextualMenuItemDividerColor,
      position: 'relative'
    },
    root: [Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme), fonts.medium, {
      color: semanticColors.bodyText,
      backgroundColor: 'transparent',
      border: 'none',
      width: '100%',
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      display: 'block',
      cursor: 'pointer',
      padding: '0px 8px 0 4px',
      textAlign: 'left'
    }],
    rootDisabled: {
      color: semanticColors.disabledBodyText,
      cursor: 'default',
      pointerEvents: 'none',
      selectors: (_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
        color: 'GrayText',
        opacity: 1
      }, _a)
    },
    rootHovered: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      backgroundColor: ContextualMenuItemBackgroundHoverColor,
      color: ContextualMenuItemTextHoverColor,
      selectors: {
        '.ms-ContextualMenu-icon': {
          color: palette.themeDarkAlt
        },
        '.ms-ContextualMenu-submenuIcon': {
          color: palette.neutralPrimary
        }
      }
    }, getItemHighContrastStyles()),
    rootFocused: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      backgroundColor: palette.white
    }, getItemHighContrastStyles()),
    rootChecked: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      selectors: {
        '.ms-ContextualMenu-checkmarkIcon': {
          color: palette.neutralPrimary
        }
      }
    }, getItemHighContrastStyles()),
    rootPressed: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      backgroundColor: ContextualMenuItemBackgroundSelectedColor,
      selectors: {
        '.ms-ContextualMenu-icon': {
          color: palette.themeDark
        },
        '.ms-ContextualMenu-submenuIcon': {
          color: palette.neutralPrimary
        }
      }
    }, getItemHighContrastStyles()),
    rootExpanded: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      backgroundColor: ContextualMenuItemBackgroundSelectedColor,
      color: semanticColors.bodyTextChecked
    }, getItemHighContrastStyles()),
    linkContent: {
      whiteSpace: 'nowrap',
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '100%'
    },
    anchorLink: {
      padding: '0px 8px 0 4px',
      textRendering: 'auto',
      color: 'inherit',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
      textTransform: 'none',
      textIndent: '0px',
      textShadow: 'none',
      textDecoration: 'none',
      boxSizing: 'border-box'
    },
    label: {
      margin: '0 4px',
      verticalAlign: 'middle',
      display: 'inline-block',
      flexGrow: '1',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    secondaryText: {
      color: theme.palette.neutralSecondary,
      paddingLeft: '20px',
      textAlign: 'right'
    },
    icon: {
      display: 'inline-block',
      minHeight: '1px',
      maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].medium,
      width: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].medium,
      margin: '0 4px',
      verticalAlign: 'middle',
      flexShrink: '0',
      selectors: (_b = {}, _b[MediumScreenSelector] = {
        fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].large,
        width: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].large
      }, _b)
    },
    iconColor: {
      color: semanticColors.menuIcon,
      selectors: (_c = {}, _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
        color: 'inherit'
      }, _c['$root:hover &'] = {
        selectors: (_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
          color: 'HighlightText'
        }, _d)
      }, _c['$root:focus &'] = {
        selectors: (_e = {}, _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
          color: 'HighlightText'
        }, _e)
      }, _c)
    },
    iconDisabled: {
      color: semanticColors.disabledBodyText
    },
    checkmarkIcon: {
      color: semanticColors.bodySubtext,
      selectors: (_f = {}, _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
        color: 'HighlightText'
      }, _f)
    },
    subMenuIcon: {
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
      color: palette.neutralSecondary,
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle',
      flexShrink: '0',
      fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].small,
      selectors: (_g = {
        ':hover': {
          color: palette.neutralPrimary
        },
        ':active': {
          color: palette.neutralPrimary
        }
      }, _g[MediumScreenSelector] = {
        fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].medium // 16px

      }, _g)
    },
    splitButtonFlexContainer: [Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme), {
      display: 'flex',
      height: CONTEXTUAL_MENU_ITEM_HEIGHT,
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }]
  };
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(menuItemStyles);
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js ***!
  \*********************************************************************************************/
/*! exports provided: ContextualMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return ContextualMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenu.base */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js");
/* harmony import */ var _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextualMenu.styles */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js");




 // This is to prevent cyclic import with ContextualMenu.base.tsx.

var LocalContextualMenu;

function onRenderSubMenu(subMenuProps) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LocalContextualMenu, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, subMenuProps));
}

LocalContextualMenu = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(_ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuBase"], _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], function () {
  return {
    onRenderSubMenu: onRenderSubMenu
  };
}, {
  scope: 'ContextualMenu'
});
/**
 * ContextualMenu description
 */

var ContextualMenu = LocalContextualMenu;

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js ***!
  \****************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js");


var GlobalClassNames = {
  root: 'ms-ContextualMenu',
  container: 'ms-ContextualMenu-container',
  list: 'ms-ContextualMenu-list',
  header: 'ms-ContextualMenu-header',
  title: 'ms-ContextualMenu-title',
  isopen: 'is-open'
};
var getStyles = function (props) {
  var className = props.className,
      theme = props.theme;
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
  var palette = theme.palette,
      fonts = theme.fonts,
      semanticColors = theme.semanticColors,
      effects = theme.effects;
  return {
    root: [theme.fonts.medium, classNames.root, classNames.isopen, {
      backgroundColor: semanticColors.bodyBackground,
      minWidth: '180px'
    }, className],
    container: [classNames.container, {
      selectors: {
        ':focus': {
          outline: 0
        }
      }
    }],
    list: [classNames.list, classNames.isopen, {
      listStyleType: 'none',
      margin: '0',
      padding: '0'
    }],
    header: [classNames.header, fonts.small, {
      fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
      color: semanticColors.menuHeader,
      background: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      height: _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["CONTEXTUAL_MENU_ITEM_HEIGHT"],
      lineHeight: _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["CONTEXTUAL_MENU_ITEM_HEIGHT"],
      cursor: 'default',
      padding: '0px 6px',
      userSelect: 'none',
      textAlign: 'left'
    }],
    title: [classNames.title, {
      fontSize: fonts.mediumPlus.fontSize,
      paddingRight: '14px',
      paddingLeft: '14px',
      paddingBottom: '5px',
      paddingTop: '5px',
      backgroundColor: palette.neutralLight
    }],
    subComponentStyles: {
      callout: {
        root: {
          boxShadow: effects.elevation8
        }
      },
      menuItem: {}
    }
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js ***!
  \***************************************************************************************************/
/*! exports provided: DirectionalHint, ContextualMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return ContextualMenuItemType; });
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });


/**
 * {@docCategory ContextualMenu}
 */

var ContextualMenuItemType;

(function (ContextualMenuItemType) {
  ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
  ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
  ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
  ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType || (ContextualMenuItemType = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js ***!
  \******************************************************************************************************/
/*! exports provided: ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return ContextualMenuItemBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "./node_modules/office-ui-fabric-react/lib/Icon.js");






var renderItemIcon = function (props) {
  var item = props.item,
      hasIcons = props.hasIcons,
      classNames = props.classNames;
  var iconProps = item.iconProps;

  if (!hasIcons) {
    return null;
  }

  if (item.onRenderIcon) {
    return item.onRenderIcon(props);
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, iconProps, {
    className: classNames.icon
  }));
};

var renderCheckMarkIcon = function (_a) {
  var onCheckmarkClick = _a.onCheckmarkClick,
      item = _a.item,
      classNames = _a.classNames;
  var isItemChecked = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["getIsChecked"])(item);

  if (onCheckmarkClick) {
    // Ensures that the item is passed as the first argument to the checkmark click callback.
    var onClick = function (e) {
      return onCheckmarkClick(item, e);
    };

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      iconName: isItemChecked ? 'CheckMark' : '',
      className: classNames.checkmarkIcon,
      onClick: onClick
    });
  }

  return null;
};

var renderItemName = function (_a) {
  var item = _a.item,
      classNames = _a.classNames;

  if (item.text || item.name) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: classNames.label
    }, item.text || item.name);
  }

  return null;
};

var renderSecondaryText = function (_a) {
  var item = _a.item,
      classNames = _a.classNames;

  if (item.secondaryText) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: classNames.secondaryText
    }, item.secondaryText);
  }

  return null;
};

var renderSubMenuIcon = function (_a) {
  var item = _a.item,
      classNames = _a.classNames;

  if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item)) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      iconName: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])() ? 'ChevronLeft' : 'ChevronRight'
    }, item.submenuIconProps, {
      className: classNames.subMenuIcon
    }));
  }

  return null;
};

var ContextualMenuItemBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuItemBase, _super);

  function ContextualMenuItemBase() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.openSubMenu = function () {
      var _a = _this.props,
          item = _a.item,
          openSubMenu = _a.openSubMenu,
          getSubmenuTarget = _a.getSubmenuTarget;

      if (getSubmenuTarget) {
        var submenuTarget = getSubmenuTarget();

        if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item) && openSubMenu && submenuTarget) {
          openSubMenu(item, submenuTarget);
        }
      }
    };

    _this.dismissSubMenu = function () {
      var _a = _this.props,
          item = _a.item,
          dismissSubMenu = _a.dismissSubMenu;

      if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item) && dismissSubMenu) {
        dismissSubMenu();
      }
    };

    _this.dismissMenu = function (dismissAll) {
      var dismissMenu = _this.props.dismissMenu;

      if (dismissMenu) {
        dismissMenu(undefined
        /* ev */
        , dismissAll);
      }
    };

    return _this;
  }

  ContextualMenuItemBase.prototype.render = function () {
    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: item.split ? classNames.linkContentMenu : classNames.linkContent
    }, renderCheckMarkIcon(this.props), renderItemIcon(this.props), renderItemName(this.props), renderSecondaryText(this.props), renderSubMenuIcon(this.props));
  };

  return ContextualMenuItemBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js ***!
  \*************************************************************************************************/
/*! exports provided: ContextualMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return ContextualMenuItem; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenuItem.base */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.classNames */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js");



/**
 * ContextualMenuItem description
 */

var ContextualMenuItem = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuItemBase"], _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_2__["getItemStyles"], undefined, {
  scope: 'ContextualMenuItem'
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ContextualMenuAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuAnchor", function() { return ContextualMenuAnchor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");








var ContextualMenuAnchor =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuAnchor, _super);

  function ContextualMenuAnchor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._anchor = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._getMemoizedMenuButtonKeytipProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (keytipProps) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, {
        hasMenu: true
      });
    });

    _this._getSubmenuTarget = function () {
      return _this._anchor.current ? _this._anchor.current : undefined;
    };

    _this._onItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemClick = _a.onItemClick;

      if (onItemClick) {
        onItemClick(item, ev);
      }
    };

    return _this;
  }

  ContextualMenuAnchor.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames,
        index = _a.index,
        focusableElementIndex = _a.focusableElementIndex,
        totalItemCount = _a.totalItemCount,
        hasCheckmarks = _a.hasCheckmarks,
        hasIcons = _a.hasIcons,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__["ContextualMenuItem"] : _b,
        expandedMenuItemKey = _a.expandedMenuItemKey,
        onItemClick = _a.onItemClick,
        openSubMenu = _a.openSubMenu,
        dismissSubMenu = _a.dismissSubMenu,
        dismissMenu = _a.dismissMenu;
    var anchorRel = item.rel;

    if (item.target && item.target.toLowerCase() === '_blank') {
      anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
    }

    var subMenuId = this._getSubMenuId(item);

    var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["hasSubmenu"])(item);
    var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(item, _Utilities__WEBPACK_IMPORTED_MODULE_2__["anchorProperties"]);
    var disabled = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item);
    var itemProps = item.itemProps;
    var keytipProps = item.keytipProps;

    if (keytipProps && itemHasSubmenu) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], {
      keytipProps: item.keytipProps,
      ariaDescribedBy: nativeProps['aria-describedby'],
      disabled: disabled
    }, function (keytipAttributes) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, nativeProps, keytipAttributes, {
        ref: _this._anchor,
        href: item.href,
        target: item.target,
        rel: anchorRel,
        className: classNames.root,
        role: "menuitem",
        "aria-owns": item.key === expandedMenuItemKey ? subMenuId : undefined,
        "aria-haspopup": itemHasSubmenu || undefined,
        "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
        "aria-posinset": focusableElementIndex + 1,
        "aria-setsize": totalItemCount,
        "aria-disabled": Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item),
        style: item.style,
        onClick: _this._onItemClick,
        onMouseEnter: _this._onItemMouseEnter,
        onMouseLeave: _this._onItemMouseLeave,
        onMouseMove: _this._onItemMouseMove,
        onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : undefined
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        componentRef: item.componentRef,
        item: item,
        classNames: classNames,
        index: index,
        onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined,
        hasIcons: hasIcons,
        openSubMenu: openSubMenu,
        dismissSubMenu: dismissSubMenu,
        dismissMenu: dismissMenu,
        getSubmenuTarget: _this._getSubmenuTarget
      }, itemProps)));
    }));
  };

  return ContextualMenuAnchor;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ContextualMenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuButton", function() { return ContextualMenuButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");








var ContextualMenuButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuButton, _super);

  function ContextualMenuButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._btn = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._getMemoizedMenuButtonKeytipProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (keytipProps) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, {
        hasMenu: true
      });
    });

    _this._getSubmenuTarget = function () {
      return _this._btn.current ? _this._btn.current : undefined;
    };

    return _this;
  }

  ContextualMenuButton.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames,
        index = _a.index,
        focusableElementIndex = _a.focusableElementIndex,
        totalItemCount = _a.totalItemCount,
        hasCheckmarks = _a.hasCheckmarks,
        hasIcons = _a.hasIcons,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__["ContextualMenuItem"] : _b,
        expandedMenuItemKey = _a.expandedMenuItemKey,
        onItemMouseDown = _a.onItemMouseDown,
        onItemClick = _a.onItemClick,
        openSubMenu = _a.openSubMenu,
        dismissSubMenu = _a.dismissSubMenu,
        dismissMenu = _a.dismissMenu;

    var subMenuId = this._getSubMenuId(item);

    var isChecked = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["getIsChecked"])(item);
    var canCheck = isChecked !== null;
    var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
    var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["hasSubmenu"])(item);
    var itemProps = item.itemProps,
        ariaLabel = item.ariaLabel;
    var buttonNativeProperties = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(item, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"]); // Do not add the disabled attribute to the button so that it is focusable

    delete buttonNativeProperties.disabled;
    var itemButtonProperties = {
      className: classNames.root,
      onClick: this._onItemClick,
      onKeyDown: itemHasSubmenu ? this._onItemKeyDown : undefined,
      onMouseEnter: this._onItemMouseEnter,
      onMouseLeave: this._onItemMouseLeave,
      onMouseDown: function (ev) {
        return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
      },
      onMouseMove: this._onItemMouseMove,
      href: item.href,
      title: item.title,
      'aria-label': ariaLabel,
      'aria-haspopup': itemHasSubmenu || undefined,
      'aria-owns': item.key === expandedMenuItemKey ? subMenuId : undefined,
      'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
      'aria-checked': canCheck ? !!isChecked : undefined,
      'aria-posinset': focusableElementIndex + 1,
      'aria-setsize': totalItemCount,
      'aria-disabled': Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item),
      role: item.role || defaultRole,
      style: item.style
    };
    var keytipProps = item.keytipProps;

    if (keytipProps && itemHasSubmenu) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], {
      keytipProps: keytipProps,
      ariaDescribedBy: buttonNativeProperties['aria-describedby'],
      disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item)
    }, function (keytipAttributes) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        ref: _this._btn
      }, buttonNativeProperties, itemButtonProperties, keytipAttributes), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        componentRef: item.componentRef,
        item: item,
        classNames: classNames,
        index: index,
        onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined,
        hasIcons: hasIcons,
        openSubMenu: openSubMenu,
        dismissSubMenu: dismissSubMenu,
        dismissMenu: dismissMenu,
        getSubmenuTarget: _this._getSubmenuTarget
      }, itemProps)));
    });
  };

  return ContextualMenuButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ContextualMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemWrapper", function() { return ContextualMenuItemWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



var ContextualMenuItemWrapper =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuItemWrapper, _super);

  function ContextualMenuItemWrapper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._onItemMouseEnter = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseEnter = _a.onItemMouseEnter;

      if (onItemMouseEnter) {
        onItemMouseEnter(item, ev, ev.currentTarget);
      }
    };

    _this._onItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemClickBase = _a.onItemClickBase;

      if (onItemClickBase) {
        onItemClickBase(item, ev, ev.currentTarget);
      }
    };

    _this._onItemMouseLeave = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseLeave = _a.onItemMouseLeave;

      if (onItemMouseLeave) {
        onItemMouseLeave(item, ev);
      }
    };

    _this._onItemKeyDown = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemKeyDown = _a.onItemKeyDown;

      if (onItemKeyDown) {
        onItemKeyDown(item, ev);
      }
    };

    _this._onItemMouseMove = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseMove = _a.onItemMouseMove;

      if (onItemMouseMove) {
        onItemMouseMove(item, ev, ev.currentTarget);
      }
    };

    _this._getSubMenuId = function (item) {
      var getSubMenuId = _this.props.getSubMenuId;

      if (getSubMenuId) {
        return getSubMenuId(item);
      }
    };

    _this._getSubmenuTarget = function () {
      return undefined;
    };

    return _this;
  }

  ContextualMenuItemWrapper.prototype.shouldComponentUpdate = function (newProps) {
    return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["shallowCompare"])(newProps, this.props);
  };

  return ContextualMenuItemWrapper;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ContextualMenuSplitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuSplitButton", function() { return ContextualMenuSplitButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContextualMenu.classNames */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Divider */ "./node_modules/office-ui-fabric-react/lib/Divider.js");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");









var TouchIdleDelay = 500;
/* ms */

var ContextualMenuSplitButton =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuSplitButton, _super);

  function ContextualMenuSplitButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._getMemoizedMenuButtonKeytipProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (keytipProps) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, {
        hasMenu: true
      });
    });

    _this._onItemKeyDown = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemKeyDown = _a.onItemKeyDown;

      if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
        _this._executeItemClick(ev);

        ev.preventDefault();
        ev.stopPropagation();
      } else if (onItemKeyDown) {
        onItemKeyDown(item, ev);
      }
    };

    _this._getSubmenuTarget = function () {
      return _this._splitButton;
    };

    _this._onItemMouseEnterPrimary = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseEnter = _a.onItemMouseEnter;

      if (onItemMouseEnter) {
        onItemMouseEnter(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, {
          subMenuProps: undefined,
          items: undefined
        }), ev, _this._splitButton);
      }
    };

    _this._onItemMouseEnterIcon = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseEnter = _a.onItemMouseEnter;

      if (onItemMouseEnter) {
        onItemMouseEnter(item, ev, _this._splitButton);
      }
    };

    _this._onItemMouseMovePrimary = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseMove = _a.onItemMouseMove;

      if (onItemMouseMove) {
        onItemMouseMove(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, {
          subMenuProps: undefined,
          items: undefined
        }), ev, _this._splitButton);
      }
    };

    _this._onItemMouseMoveIcon = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemMouseMove = _a.onItemMouseMove;

      if (onItemMouseMove) {
        onItemMouseMove(item, ev, _this._splitButton);
      }
    };

    _this._onIconItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          onItemClickBase = _a.onItemClickBase;

      if (onItemClickBase) {
        onItemClickBase(item, ev, _this._splitButton ? _this._splitButton : ev.currentTarget);
      }
    };

    _this._executeItemClick = function (ev) {
      var _a = _this.props,
          item = _a.item,
          executeItemClick = _a.executeItemClick,
          onItemClick = _a.onItemClick;

      if (item.disabled || item.isDisabled) {
        return;
      }

      if (_this._processingTouch && onItemClick) {
        return onItemClick(item, ev);
      }

      if (executeItemClick) {
        executeItemClick(item, ev);
      }
    };

    _this._onTouchStart = function (ev) {
      if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
        _this._handleTouchAndPointerEvent(ev);
      }
    };

    _this._onPointerDown = function (ev) {
      if (ev.pointerType === 'touch') {
        _this._handleTouchAndPointerEvent(ev);

        ev.preventDefault();
        ev.stopImmediatePropagation();
      }
    };

    return _this;
  }

  ContextualMenuSplitButton.prototype.componentDidMount = function () {
    if (this._splitButton && 'onpointerdown' in this._splitButton) {
      this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
    }
  };

  ContextualMenuSplitButton.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        item = _a.item,
        classNames = _a.classNames,
        index = _a.index,
        focusableElementIndex = _a.focusableElementIndex,
        totalItemCount = _a.totalItemCount,
        hasCheckmarks = _a.hasCheckmarks,
        hasIcons = _a.hasIcons,
        onItemMouseLeave = _a.onItemMouseLeave,
        expandedMenuItemKey = _a.expandedMenuItemKey;
    var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item);
    var keytipProps = item.keytipProps;

    if (keytipProps) {
      keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
    }

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_5__["KeytipData"], {
      keytipProps: keytipProps,
      disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item)
    }, function (keytipAttributes) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        "data-ktp-target": keytipAttributes['data-ktp-target'],
        ref: function (splitButton) {
          return _this._splitButton = splitButton;
        },
        role: 'menuitem',
        "aria-label": item.ariaLabel,
        className: classNames.splitContainer,
        "aria-disabled": Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item),
        "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
        "aria-haspopup": true,
        "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(item.ariaDescription, keytipAttributes['aria-describedby']),
        "aria-checked": item.isChecked || item.checked,
        "aria-posinset": focusableElementIndex + 1,
        "aria-setsize": totalItemCount,
        onMouseEnter: _this._onItemMouseEnterPrimary,
        onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, {
          subMenuProps: null,
          items: null
        })) : undefined,
        onMouseMove: _this._onItemMouseMovePrimary,
        onKeyDown: _this._onItemKeyDown,
        onClick: _this._executeItemClick,
        onTouchStart: _this._onTouchStart,
        tabIndex: 0,
        "data-is-focusable": true,
        "aria-roledescription": item['aria-roledescription']
      }, _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons), _this._renderSplitDivider(item), _this._renderSplitIconButton(item, classNames, index, keytipAttributes));
    });
  };

  ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, classNames, index, hasCheckmarks, hasIcons) {
    var _a = this.props,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"] : _b,
        onItemClick = _a.onItemClick;
    var itemProps = {
      key: item.key,
      disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item) || item.primaryDisabled,
      name: item.name,
      text: item.text || item.name,
      className: classNames.splitPrimary,
      canCheck: item.canCheck,
      isChecked: item.isChecked,
      checked: item.checked,
      iconProps: item.iconProps,
      'data-is-focusable': false,
      'aria-hidden': true
    };
    var itemComponentProps = item.itemProps;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"])), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      "data-is-focusable": false,
      item: itemProps,
      classNames: classNames,
      index: index,
      onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined,
      hasIcons: hasIcons
    }, itemComponentProps)));
  };

  ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
    var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__["getSplitButtonVerticalDividerClassNames"];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Divider__WEBPACK_IMPORTED_MODULE_7__["VerticalDivider"], {
      getClassNames: getDividerClassNames
    });
  };

  ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, index, keytipAttributes) {
    var _a = this.props,
        _b = _a.contextualMenuItemAs,
        ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"] : _b,
        onItemMouseLeave = _a.onItemMouseLeave,
        onItemMouseDown = _a.onItemMouseDown,
        openSubMenu = _a.openSubMenu,
        dismissSubMenu = _a.dismissSubMenu,
        dismissMenu = _a.dismissMenu;
    var itemProps = {
      onClick: this._onIconItemClick,
      disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item),
      className: classNames.splitMenu,
      subMenuProps: item.subMenuProps,
      submenuIconProps: item.submenuIconProps,
      split: true,
      key: item.key
    };

    var buttonProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"]), {
      onMouseEnter: this._onItemMouseEnterIcon,
      onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
      onMouseDown: function (ev) {
        return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
      },
      onMouseMove: this._onItemMouseMoveIcon,
      'data-is-focusable': false,
      'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
      'aria-hidden': true
    });

    var itemComponentProps = item.itemProps;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, buttonProps), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      componentRef: item.componentRef,
      item: itemProps,
      classNames: classNames,
      index: index,
      hasIcons: false,
      openSubMenu: openSubMenu,
      dismissSubMenu: dismissSubMenu,
      dismissMenu: dismissMenu,
      getSubmenuTarget: this._getSubmenuTarget
    }, itemComponentProps)));
  };

  ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
    var _this = this;

    var onTap = this.props.onTap;

    if (onTap) {
      onTap(ev);
    } // If we already have an existing timeout from a previous touch/pointer event
    // cancel that timeout so we can set a new one.


    if (this._lastTouchTimeoutId) {
      this._async.clearTimeout(this._lastTouchTimeoutId);

      this._lastTouchTimeoutId = undefined;
    }

    this._processingTouch = true;
    this._lastTouchTimeoutId = this._async.setTimeout(function () {
      _this._processingTouch = false;
      _this._lastTouchTimeoutId = undefined;
    }, TouchIdleDelay);
  };

  return ContextualMenuSplitButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_8__["ContextualMenuItemWrapper"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: ContextualMenuAnchor, ContextualMenuButton, ContextualMenuSplitButton, ContextualMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextualMenuAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextualMenuAnchor */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuAnchor", function() { return _ContextualMenuAnchor__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuAnchor"]; });

/* harmony import */ var _ContextualMenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenuButton */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuButton", function() { return _ContextualMenuButton__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuButton"]; });

/* harmony import */ var _ContextualMenuSplitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenuSplitButton */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuSplitButton", function() { return _ContextualMenuSplitButton__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuSplitButton"]; });

/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemWrapper", function() { return _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]; });






/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js ***!
  \************************************************************************************/
/*! exports provided: ContextualMenu, getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase, DirectionalHint, ContextualMenuItemType, ContextualMenuItem, ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextualMenu */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return _ContextualMenu__WEBPACK_IMPORTED_MODULE_0__["ContextualMenu"]; });

/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.base */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["getSubmenuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["canAnyMenuItemsCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuBase"]; });

/* harmony import */ var _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.types */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"]; });

/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"]; });

/* harmony import */ var _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextualMenuItem.base */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_4__["ContextualMenuItemBase"]; });







/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.base.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.base.js ***!
  \********************************************************************************************/
/*! exports provided: VerticalDividerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalDividerBase", function() { return VerticalDividerBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var VerticalDividerBase = function (props) {
  var styles = props.styles,
      theme = props.theme,
      deprecatedGetClassNames = props.getClassNames,
      className = props.className;
  var classNames = getClassNames(styles, {
    theme: theme,
    getClassNames: deprecatedGetClassNames,
    className: className
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classNames.wrapper
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classNames.divider
  }));
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js ***!
  \**************************************************************************************************/
/*! exports provided: getDividerClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDividerClassNames", function() { return getDividerClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


/**
 * @deprecated use getStyles exported from VerticalDivider.styles.ts
 */

var getDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme) {
  return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
    wrapper: {
      display: 'inline-flex',
      height: '100%',
      alignItems: 'center'
    },
    divider: {
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.neutralTertiaryAlt
    }
  });
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js ***!
  \***************************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return VerticalDivider; });
/* harmony import */ var _VerticalDivider_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalDivider.styles */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.styles.js");
/* harmony import */ var _VerticalDivider_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalDivider.base */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.base.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



var VerticalDivider = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(_VerticalDivider_base__WEBPACK_IMPORTED_MODULE_1__["VerticalDividerBase"], _VerticalDivider_styles__WEBPACK_IMPORTED_MODULE_0__["getStyles"], undefined, {
  scope: 'VerticalDivider'
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.styles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.styles.js ***!
  \**********************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
  var theme = props.theme,
      getClassNames = props.getClassNames,
      className = props.className;

  if (!theme) {
    throw new Error('Theme is undefined or null.');
  }

  if (getClassNames) {
    var names = getClassNames(theme);
    return {
      wrapper: [names.wrapper],
      divider: [names.divider]
    };
  }

  return {
    wrapper: [{
      display: 'inline-flex',
      height: '100%',
      alignItems: 'center'
    }, className],
    divider: [{
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.neutralTertiaryAlt
    }]
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/index.js ***!
  \*****************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalDivider */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return _VerticalDivider__WEBPACK_IMPORTED_MODULE_0__["VerticalDivider"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js ***!
  \**********************************************************************************/
/*! exports provided: FabricBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricBase", function() { return FabricBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Fabric_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fabric.styles */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();

var FabricBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FabricBase, _super);

  function FabricBase(props) {
    var _this = _super.call(this, props) || this;

    _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._disposables = [];

    _this._onMouseDown = function (ev) {
      _this.setState({
        isFocusVisible: false
      });
    };

    _this._onKeyDown = function (ev) {
      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isDirectionalKeyCode"])(ev.which)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    };

    _this.state = {
      isFocusVisible: false
    };
    return _this;
  }

  FabricBase.prototype.render = function () {
    var className = this.props.className;
    var classNames = getClassNames(_Fabric_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"], {
      theme: this.props.theme,
      className: className,
      isFocusVisible: this.state.isFocusVisible
    });
    var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, {
      className: classNames.root,
      ref: this._rootElement
    }));
  };

  FabricBase.prototype.componentDidMount = function () {
    var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(this._rootElement.current);

    if (win) {
      this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(win, 'mousedown', this._onMouseDown, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(win, 'keydown', this._onKeyDown, true));
    }
  };

  FabricBase.prototype.componentWillUnmount = function () {
    this._disposables.forEach(function (dispose) {
      return dispose();
    });
  };

  return FabricBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js ***!
  \*****************************************************************************/
/*! exports provided: Fabric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return Fabric; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Fabric_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fabric.base */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js");
/* harmony import */ var _Fabric_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fabric.styles */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js");



var Fabric = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Fabric_base__WEBPACK_IMPORTED_MODULE_1__["FabricBase"], _Fabric_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
  scope: 'Fabric'
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js ***!
  \************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var inheritFont = {
  fontFamily: 'inherit'
};
var GlobalClassNames = {
  root: 'ms-Fabric'
};
var getStyles = function (props) {
  var theme = props.theme,
      className = props.className,
      isFocusVisible = props.isFocusVisible;
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
  return {
    root: [classNames.root, isFocusVisible && 'is-focusVisible', theme.fonts.medium, {
      color: theme.palette.neutralPrimary,
      selectors: {
        '& button': inheritFont,
        '& input': inheritFont,
        '& textarea': inheritFont
      }
    }, className]
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js ***!
  \****************************************************************************/
/*! exports provided: Fabric, FabricBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fabric */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return _Fabric__WEBPACK_IMPORTED_MODULE_0__["Fabric"]; });

/* harmony import */ var _Fabric_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fabric.base */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricBase", function() { return _Fabric_base__WEBPACK_IMPORTED_MODULE_1__["FabricBase"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.js ***!
  \*******************************************************************************************/
/*! exports provided: FocusTrapZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapZone", function() { return FocusTrapZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var FocusTrapZone =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FocusTrapZone, _super);

  function FocusTrapZone(props) {
    var _this = _super.call(this, props) || this;

    _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._firstBumper = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._lastBumper = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._hasFocus = false;

    _this._onRootFocus = function (ev) {
      if (_this.props.onFocus) {
        _this.props.onFocus(ev);
      }

      _this._hasFocus = true;
    };

    _this._onRootBlur = function (ev) {
      if (_this.props.onBlur) {
        _this.props.onBlur(ev);
      }

      var relatedTarget = ev.relatedTarget;

      if (ev.relatedTarget === null) {
        // In IE11, due to lack of support, event.relatedTarget is always
        // null making every onBlur call to be "outside" of the ComboBox
        // even when it's not. Using document.activeElement is another way
        // for us to be able to get what the relatedTarget without relying
        // on the event
        relatedTarget = _this._getDocument().activeElement;
      }

      if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._root.current, relatedTarget)) {
        _this._hasFocus = false;
      }
    };

    _this._onFirstBumperFocus = function () {
      _this._onBumperFocus(true);
    };

    _this._onLastBumperFocus = function () {
      _this._onBumperFocus(false);
    };

    _this._onBumperFocus = function (isFirstBumper) {
      if (_this.props.disabled) {
        return;
      }

      var currentBumper = isFirstBumper === _this._hasFocus ? _this._lastBumper.current : _this._firstBumper.current;

      if (_this._root.current) {
        var nextFocusable = isFirstBumper === _this._hasFocus ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getLastTabbable"])(_this._root.current, currentBumper, true, false) : Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getFirstTabbable"])(_this._root.current, currentBumper, true, false);

        if (nextFocusable) {
          if (_this._isBumper(nextFocusable)) {
            // This can happen when FTZ contains no tabbable elements. focus will take care of finding a focusable element in FTZ.
            _this.focus();
          } else {
            nextFocusable.focus();
          }
        }
      }
    };

    _this._onFocusCapture = function (ev) {
      if (_this.props.onFocusCapture) {
        _this.props.onFocusCapture(ev);
      }

      if (ev.target !== ev.currentTarget && !_this._isBumper(ev.target)) {
        // every time focus changes within the trap zone, remember the focused element so that
        // it can be restored if focus leaves the pane and returns via keystroke (i.e. via a call to this.focus(true))
        _this._previouslyFocusedElementInTrapZone = ev.target;
      }
    };

    _this._forceFocusInTrap = function (ev) {
      if (_this.props.disabled) {
        return;
      }

      if (FocusTrapZone._focusStack.length && _this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
        var focusedElement = _this._getDocument().activeElement;

        if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._root.current, focusedElement)) {
          _this.focus();

          _this._hasFocus = true; // set focus here since we stop event propagation

          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };

    _this._forceClickInTrap = function (ev) {
      if (_this.props.disabled) {
        return;
      }

      if (FocusTrapZone._focusStack.length && _this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
        var clickedElement = ev.target;

        if (clickedElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._root.current, clickedElement)) {
          _this.focus();

          _this._hasFocus = true; // set focus here since we stop event propagation

          ev.preventDefault();
          ev.stopPropagation();
        }
      }
    };

    Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
    return _this;
  }

  FocusTrapZone.prototype.componentDidMount = function () {
    this._bringFocusIntoZone();

    this._updateEventHandlers(this.props);
  }; // tslint:disable-next-line function-name


  FocusTrapZone.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var elementToFocusOnDismiss = nextProps.elementToFocusOnDismiss;

    if (elementToFocusOnDismiss && this._previouslyFocusedElementOutsideTrapZone !== elementToFocusOnDismiss) {
      this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss;
    }

    this._updateEventHandlers(nextProps);
  };

  FocusTrapZone.prototype.componentDidUpdate = function (prevProps) {
    var prevForceFocusInsideTrap = prevProps.forceFocusInsideTrap !== undefined ? prevProps.forceFocusInsideTrap : true;
    var newForceFocusInsideTrap = this.props.forceFocusInsideTrap !== undefined ? this.props.forceFocusInsideTrap : true;
    var prevDisabled = prevProps.disabled !== undefined ? prevProps.disabled : false;
    var newDisabled = this.props.disabled !== undefined ? this.props.disabled : false;

    if (!prevForceFocusInsideTrap && newForceFocusInsideTrap || prevDisabled && !newDisabled) {
      // Transition from forceFocusInsideTrap / FTZ disabled to enabled.
      // Emulate what happens when a FocusTrapZone gets mounted.
      this._bringFocusIntoZone();
    } else if (prevForceFocusInsideTrap && !newForceFocusInsideTrap || !prevDisabled && newDisabled) {
      // Transition from forceFocusInsideTrap / FTZ enabled to disabled.
      // Emulate what happens when a FocusTrapZone gets unmounted.
      this._returnFocusToInitiator();
    }
  };

  FocusTrapZone.prototype.componentWillUnmount = function () {
    // don't handle return focus unless forceFocusInsideTrap is true or focus is still within FocusTrapZone
    if (!this.props.disabled || this.props.forceFocusInsideTrap || !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, this._getDocument().activeElement)) {
      this._returnFocusToInitiator();
    }
  };

  FocusTrapZone.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        _b = _a.disabled,
        disabled = _b === void 0 ? false : _b,
        ariaLabelledBy = _a.ariaLabelledBy;
    var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
    var bumperProps = {
      style: {
        pointerEvents: 'none',
        position: 'fixed' // 'fixed' prevents browsers from scrolling to bumpers when viewport does not contain them

      },
      tabIndex: disabled ? -1 : 0,
      'data-is-visible': true
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, {
      className: className,
      ref: this._root,
      "aria-labelledby": ariaLabelledBy,
      onFocusCapture: this._onFocusCapture,
      onFocus: this._onRootFocus,
      onBlur: this._onRootBlur
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bumperProps, {
      ref: this._firstBumper,
      onFocus: this._onFirstBumperFocus
    })), this.props.children, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bumperProps, {
      ref: this._lastBumper,
      onFocus: this._onLastBumperFocus
    })));
  };

  FocusTrapZone.prototype.focus = function () {
    var _a = this.props,
        focusPreviouslyFocusedInnerElement = _a.focusPreviouslyFocusedInnerElement,
        firstFocusableSelector = _a.firstFocusableSelector;

    if (focusPreviouslyFocusedInnerElement && this._previouslyFocusedElementInTrapZone && Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, this._previouslyFocusedElementInTrapZone)) {
      // focus on the last item that had focus in the zone before we left the zone
      this._focusAsync(this._previouslyFocusedElementInTrapZone);

      return;
    }

    var focusSelector = typeof firstFocusableSelector === 'string' ? firstFocusableSelector : firstFocusableSelector && firstFocusableSelector();
    var _firstFocusableChild = null;

    if (this._root.current) {
      if (focusSelector) {
        _firstFocusableChild = this._root.current.querySelector('.' + focusSelector);
      } // Fall back to first element if query selector did not match any elements.


      if (!_firstFocusableChild) {
        _firstFocusableChild = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNextElement"])(this._root.current, this._root.current.firstChild, false, false, false, true);
      }
    }

    if (_firstFocusableChild) {
      this._focusAsync(_firstFocusableChild);
    }
  };

  FocusTrapZone.prototype._focusAsync = function (element) {
    if (!this._isBumper(element)) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["focusAsync"])(element);
    }
  };

  FocusTrapZone.prototype._bringFocusIntoZone = function () {
    var _a = this.props,
        elementToFocusOnDismiss = _a.elementToFocusOnDismiss,
        _b = _a.disabled,
        disabled = _b === void 0 ? false : _b,
        _c = _a.disableFirstFocus,
        disableFirstFocus = _c === void 0 ? false : _c;

    if (disabled) {
      return;
    }

    FocusTrapZone._focusStack.push(this);

    this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss ? elementToFocusOnDismiss : this._getDocument().activeElement;

    if (!disableFirstFocus && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, this._previouslyFocusedElementOutsideTrapZone)) {
      this.focus();
    }
  };

  FocusTrapZone.prototype._returnFocusToInitiator = function () {
    var _this = this;

    var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
    FocusTrapZone._focusStack = FocusTrapZone._focusStack.filter(function (value) {
      return _this !== value;
    });

    var doc = this._getDocument();

    var activeElement = doc.activeElement;

    if (!ignoreExternalFocusing && this._previouslyFocusedElementOutsideTrapZone && typeof this._previouslyFocusedElementOutsideTrapZone.focus === 'function' && (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, activeElement) || activeElement === doc.body)) {
      this._focusAsync(this._previouslyFocusedElementOutsideTrapZone);
    }
  };

  FocusTrapZone.prototype._updateEventHandlers = function (newProps) {
    var _a = newProps.isClickableOutsideFocusTrap,
        isClickableOutsideFocusTrap = _a === void 0 ? false : _a,
        _b = newProps.forceFocusInsideTrap,
        forceFocusInsideTrap = _b === void 0 ? true : _b;

    if (forceFocusInsideTrap && !this._disposeFocusHandler) {
      this._disposeFocusHandler = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'focus', this._forceFocusInTrap, true);
    } else if (!forceFocusInsideTrap && this._disposeFocusHandler) {
      this._disposeFocusHandler();

      this._disposeFocusHandler = undefined;
    }

    if (!isClickableOutsideFocusTrap && !this._disposeClickHandler) {
      this._disposeClickHandler = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'click', this._forceClickInTrap, true);
    } else if (isClickableOutsideFocusTrap && this._disposeClickHandler) {
      this._disposeClickHandler();

      this._disposeClickHandler = undefined;
    }
  };

  FocusTrapZone.prototype._isBumper = function (element) {
    return element === this._firstBumper.current || element === this._lastBumper.current;
  };

  FocusTrapZone.prototype._getDocument = function () {
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])(this._root.current);
  };

  FocusTrapZone._focusStack = [];
  return FocusTrapZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js ***!
  \***********************************************************************************/
/*! exports provided: FocusTrapZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusTrapZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusTrapZone */ "./node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapZone", function() { return _FocusTrapZone__WEBPACK_IMPORTED_MODULE_0__["FocusTrapZone"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js ***!
  \***********************************************************************************/
/*! exports provided: FocusZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return FocusZone; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FocusZone.types */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uifabric/merge-styles */ "@uifabric/merge-styles");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_6__);







var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var focusZoneStyles;
var focusZoneClass = 'ms-FocusZone'; // Helper function that will return a class for when the root is focused

function getRootClass() {
  if (!focusZoneStyles) {
    focusZoneStyles = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_6__["mergeStyles"])({
      selectors: {
        ':focus': {
          outline: 'none'
        }
      }
    }, focusZoneClass);
  }

  return focusZoneStyles;
}

var _allInstances = {};

var _outerZones = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a();

var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;

var FocusZone =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"](FocusZone, _super);

  function FocusZone(props) {
    var _this = _super.call(this, props) || this;

    _this._disposables = [];
    _this._root = react__WEBPACK_IMPORTED_MODULE_3__["createRef"]();

    _this._onFocus = function (ev) {
      if (_this._portalContainsElement(ev.target)) {
        // If the event target is inside a portal do not process the event.
        return;
      }

      var _a = _this.props,
          onActiveElementChanged = _a.onActiveElementChanged,
          doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate,
          onFocusNotification = _a.onFocusNotification;

      var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);

      var newActiveElement;

      if (onFocusNotification) {
        onFocusNotification();
      }

      if (isImmediateDescendant) {
        newActiveElement = ev.target;
      } else {
        var parentElement = ev.target;

        while (parentElement && parentElement !== _this._root.current) {
          if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementTabbable"])(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
            newActiveElement = parentElement;
            break;
          }

          parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
      }

      var initialElementFocused = !_this._activeElement; // If the new active element is a child of this zone and received focus,
      // update alignment an immediate descendant

      if (newActiveElement && newActiveElement !== _this._activeElement) {
        if (isImmediateDescendant || initialElementFocused) {
          _this._setFocusAlignment(newActiveElement, initialElementFocused);
        }

        _this._activeElement = newActiveElement;

        if (initialElementFocused) {
          _this._updateTabIndexes();
        }
      }

      if (onActiveElementChanged) {
        onActiveElementChanged(_this._activeElement, ev);
      }

      if (doNotAllowFocusEventToPropagate) {
        ev.stopPropagation();
      }
    };

    _this._onBlur = function () {
      _this._setParkedFocus(false);
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */


    _this._onKeyDownCapture = function (ev) {
      if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].tab) {
        _outerZones.forEach(function (zone) {
          return zone._updateTabIndexes();
        });
      }
    };

    _this._onMouseDown = function (ev) {
      if (_this._portalContainsElement(ev.target)) {
        // If the event target is inside a portal do not process the event.
        return;
      }

      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      var target = ev.target;
      var path = [];

      while (target && target !== _this._root.current) {
        path.push(target);
        target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(target, ALLOW_VIRTUAL_ELEMENTS);
      }

      while (path.length) {
        target = path.pop();

        if (target && Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementTabbable"])(target)) {
          _this._setActiveElement(target, true);
        }

        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(target)) {
          // Stop here since the focus zone will take care of its own children.
          break;
        }
      }
    };
    /**
     * Handle the keystrokes.
     */


    _this._onKeyDown = function (ev) {
      if (_this._portalContainsElement(ev.target)) {
        // If the event target is inside a portal do not process the event.
        return;
      }

      var _a = _this.props,
          direction = _a.direction,
          disabled = _a.disabled,
          isInnerZoneKeystroke = _a.isInnerZoneKeystroke;

      if (disabled) {
        return;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(ev);
      } // If the default has been prevented, do not process keyboard events.


      if (ev.isDefaultPrevented()) {
        return;
      }

      if (_this._getDocument().activeElement === _this._root.current && _this._isInnerZone) {
        // If this element has focus, it is being controlled by a parent.
        // Ignore the keystroke.
        return;
      }

      if (isInnerZoneKeystroke && isInnerZoneKeystroke(ev) && _this._isImmediateDescendantOfZone(ev.target)) {
        // Try to focus
        var innerZone = _this._getFirstInnerZone();

        if (innerZone) {
          if (!innerZone.focus(true)) {
            return;
          }
        } else if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusSubZone"])(ev.target)) {
          if (!_this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNextElement"])(ev.target, ev.target.firstChild, true))) {
            return;
          }
        } else {
          return;
        }
      } else if (ev.altKey) {
        return;
      } else {
        switch (ev.which) {
          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].space:
            if (_this._tryInvokeClickForFocusable(ev.target)) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].left:
            if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical && _this._moveFocusLeft()) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].right:
            if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical && _this._moveFocusRight()) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up:
            if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal && _this._moveFocusUp()) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down:
            if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal && _this._moveFocusDown()) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].tab:
            if (_this.props.allowTabKey || _this.props.handleTabKey === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneTabbableElements"].all || _this.props.handleTabKey === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneTabbableElements"].inputOnly && _this._isElementInput(ev.target)) {
              var focusChanged = false;
              _this._processingTabKey = true;

              if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical || !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
              } else if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal || direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].bidirectional) {
                var tabWithDirection = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? !ev.shiftKey : ev.shiftKey;
                focusChanged = tabWithDirection ? _this._moveFocusLeft() : _this._moveFocusRight();
              }

              _this._processingTabKey = false;

              if (focusChanged) {
                break;
              }
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].home:
            if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, false)) {
              return false;
            }

            var firstChild = _this._root.current && _this._root.current.firstChild;

            if (_this._root.current && firstChild && _this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNextElement"])(_this._root.current, firstChild, true))) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].end:
            if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, true)) {
              return false;
            }

            var lastChild = _this._root.current && _this._root.current.lastChild;

            if (_this._root.current && _this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getPreviousElement"])(_this._root.current, lastChild, true, true, true))) {
              break;
            }

            return;

          case _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter:
            if (_this._tryInvokeClickForFocusable(ev.target)) {
              break;
            }

            return;

          default:
            return;
        }
      }

      ev.preventDefault();
      ev.stopPropagation();
    }; // Manage componentRef resolution.


    Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["initializeComponentRef"])(_this);

    if (true) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["warnDeprecations"])('FocusZone', props, {
        rootProps: undefined,
        allowTabKey: 'handleTabKey',
        elementType: 'as',
        ariaDescribedBy: 'aria-describedby',
        ariaLabelledBy: 'aria-labelledby'
      });
    }

    _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('FocusZone');
    _this._focusAlignment = {
      x: 0,
      y: 0
    };
    _this._processingTabKey = false;
    return _this;
  }
  /** Used for testing purposes only. */


  FocusZone.getOuterZones = function () {
    return _outerZones.size;
  };

  FocusZone.prototype.componentDidMount = function () {
    var root = this._root.current;
    _allInstances[this._id] = this;

    if (root) {
      var windowElement = root.ownerDocument.defaultView;
      var parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(root, ALLOW_VIRTUAL_ELEMENTS);

      while (parentElement && parentElement !== this._getDocument().body && parentElement.nodeType === 1) {
        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(parentElement)) {
          this._isInnerZone = true;
          break;
        }

        parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
      }

      if (!this._isInnerZone) {
        _outerZones.add(this);
      }

      if (windowElement && _outerZones.size === 1) {
        this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["on"])(windowElement, 'keydown', this._onKeyDownCapture, true));
      }

      this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["on"])(root, 'blur', this._onBlur, true)); // Assign initial tab indexes so that we can set initial focus as appropriate.


      this._updateTabIndexes();

      if (this.props.defaultActiveElement) {
        this._activeElement = this._getDocument().querySelector(this.props.defaultActiveElement);
        this.focus();
      }
    }
  };

  FocusZone.prototype.componentDidUpdate = function () {
    var root = this._root.current;

    var doc = this._getDocument();

    if (doc && this._lastIndexPath && (doc.activeElement === doc.body || doc.activeElement === root)) {
      // The element has been removed after the render, attempt to restore focus.
      var elementToFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getFocusableByIndexPath"])(root, this._lastIndexPath);

      if (elementToFocus) {
        this._setActiveElement(elementToFocus, true);

        elementToFocus.focus();

        this._setParkedFocus(false);
      } else {
        // We had a focus path to restore, but now that path is unresolvable. Park focus
        // on the container until we can try again.
        this._setParkedFocus(true);
      }
    }
  };

  FocusZone.prototype.componentWillUnmount = function () {
    delete _allInstances[this._id];

    if (!this._isInnerZone) {
      _outerZones.delete(this);
    } // Dispose all events.


    this._disposables.forEach(function (d) {
      return d();
    });
  };

  FocusZone.prototype.render = function () {
    var _a = this.props,
        rootProps = _a.rootProps,
        ariaDescribedBy = _a.ariaDescribedBy,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className;
    var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_5__["htmlElementProperties"]);
    var Tag = this.props.as || this.props.elementType || 'div'; // Note, right before rendering/reconciling proceeds, we need to record if focus
    // was in the zone before the update. This helper will track this and, if focus
    // was actually in the zone, what the index path to the element is at this time.
    // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
    // the case the element was removed.

    this._evaluateFocusBeforeRender();

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Tag, tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"]({
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy
    }, divProps, rootProps, {
      // Once the getClassName correctly memoizes inputs this should
      // be replaced so that className is passed to getRootClass and is included there so
      // the class names will always be in the same order.
      className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])(getRootClass(), className),
      ref: this._root,
      "data-focuszone-id": this._id,
      onKeyDown: this._onKeyDown,
      onFocus: this._onFocus,
      onMouseDownCapture: this._onMouseDown
    }), this.props.children);
  };
  /**
   * Sets focus to the first tabbable item in the zone.
   * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
   * if focus is already in the focus zone.
   * @returns True if focus could be set to an active element, false if no operation was taken.
   */


  FocusZone.prototype.focus = function (forceIntoFirstElement) {
    if (forceIntoFirstElement === void 0) {
      forceIntoFirstElement = false;
    }

    if (this._root.current) {
      if (!forceIntoFirstElement && this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
        var ownerZoneElement = this._getOwnerZone(this._root.current);

        if (ownerZoneElement !== this._root.current) {
          var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];

          return !!ownerZone && ownerZone.focusElement(this._root.current);
        }

        return false;
      } else if (!forceIntoFirstElement && this._activeElement && Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["elementContains"])(this._root.current, this._activeElement) && Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementTabbable"])(this._activeElement)) {
        this._activeElement.focus();

        return true;
      } else {
        var firstChild = this._root.current.firstChild;
        return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNextElement"])(this._root.current, firstChild, true));
      }
    }

    return false;
  };
  /**
   * Sets focus to a specific child element within the zone. This can be used in conjunction with
   * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
   * location and then focus.)
   * @param element - The child element within the zone to focus.
   * @returns True if focus could be set to an active element, false if no operation was taken.
   */


  FocusZone.prototype.focusElement = function (element) {
    var onBeforeFocus = this.props.onBeforeFocus;

    if (onBeforeFocus && !onBeforeFocus(element)) {
      return false;
    }

    if (element) {
      // when we Set focus to a specific child, we should recalculate the alignment depend on its position
      this._setActiveElement(element);

      if (this._activeElement) {
        this._activeElement.focus();
      }

      return true;
    }

    return false;
  };
  /**
   * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference, rather than a center based on
   * the last horizontal motion.
   * @param point - the new reference point.
   */


  FocusZone.prototype.setFocusAlignment = function (point) {
    this._focusAlignment = point;
  };

  FocusZone.prototype._evaluateFocusBeforeRender = function () {
    var root = this._root.current;

    var doc = this._getDocument();

    if (doc) {
      var focusedElement = doc.activeElement; // Only update the index path if we are not parked on the root.

      if (focusedElement !== root) {
        var shouldRestoreFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["elementContains"])(root, focusedElement, false);
        this._lastIndexPath = shouldRestoreFocus ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getElementIndexPath"])(root, focusedElement) : undefined;
      }
    }
  };
  /**
   * When focus is in the zone at render time but then all focusable elements are removed,
   * we "park" focus temporarily on the root. Once we update with focusable children, we restore
   * focus to the closest path from previous. If the user tabs away from the parked container,
   * we restore focusability to the pre-parked state.
   */


  FocusZone.prototype._setParkedFocus = function (isParked) {
    var root = this._root.current;

    if (root && this._isParked !== isParked) {
      this._isParked = isParked;

      if (isParked) {
        if (!this.props.allowFocusRoot) {
          this._parkedTabIndex = root.getAttribute('tabindex');
          root.setAttribute('tabindex', '-1');
        }

        root.focus();
      } else {
        if (!this.props.allowFocusRoot) {
          if (this._parkedTabIndex) {
            root.setAttribute('tabindex', this._parkedTabIndex);
            this._parkedTabIndex = undefined;
          } else {
            root.removeAttribute('tabindex');
          }
        }
      }
    }
  };

  FocusZone.prototype._setActiveElement = function (element, forceAlignment) {
    var previousActiveElement = this._activeElement;
    this._activeElement = element;

    if (previousActiveElement) {
      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(previousActiveElement)) {
        this._updateTabIndexes(previousActiveElement);
      }

      previousActiveElement.tabIndex = -1;
    }

    if (this._activeElement) {
      if (!this._focusAlignment || forceAlignment) {
        this._setFocusAlignment(element, true, true);
      }

      this._activeElement.tabIndex = 0;
    }
  };
  /**
   * Walk up the dom try to find a focusable element.
   */


  FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
    if (target === this._root.current) {
      return false;
    }

    do {
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return false;
      }

      if (this._isImmediateDescendantOfZone(target) && target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["raiseClick"])(target);
        return true;
      }

      target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(target, ALLOW_VIRTUAL_ELEMENTS);
    } while (target !== this._root.current);

    return false;
  };
  /**
   * Traverse to find first child zone.
   */


  FocusZone.prototype._getFirstInnerZone = function (rootElement) {
    rootElement = rootElement || this._activeElement || this._root.current;

    if (!rootElement) {
      return null;
    }

    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(rootElement)) {
      return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
    }

    var child = rootElement.firstElementChild;

    while (child) {
      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(child)) {
        return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
      }

      var match = this._getFirstInnerZone(child);

      if (match) {
        return match;
      }

      child = child.nextElementSibling;
    }

    return null;
  };

  FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
    if (useDefaultWrap === void 0) {
      useDefaultWrap = true;
    }

    var element = this._activeElement;
    var candidateDistance = -1;
    var candidateElement = undefined;
    var changedFocus = false;
    var isBidirectional = this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].bidirectional;

    if (!element || !this._root.current) {
      return false;
    }

    if (this._isElementInput(element)) {
      if (!this._shouldInputLoseFocus(element, isForward)) {
        return false;
      }
    }

    var activeRect = isBidirectional ? element.getBoundingClientRect() : null;

    do {
      element = isForward ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNextElement"])(this._root.current, element) : Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getPreviousElement"])(this._root.current, element);

      if (isBidirectional) {
        if (element) {
          var targetRect = element.getBoundingClientRect();
          var elementDistance = getDistanceFromCenter(activeRect, targetRect);

          if (elementDistance === -1 && candidateDistance === -1) {
            candidateElement = element;
            break;
          }

          if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
            candidateDistance = elementDistance;
            candidateElement = element;
          }

          if (candidateDistance >= 0 && elementDistance < 0) {
            break;
          }
        }
      } else {
        candidateElement = element;
        break;
      }
    } while (element); // Focus the closest candidate


    if (candidateElement && candidateElement !== this._activeElement) {
      changedFocus = true;
      this.focusElement(candidateElement);
    } else if (this.props.isCircularNavigation && useDefaultWrap) {
      if (isForward) {
        return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNextElement"])(this._root.current, this._root.current.firstElementChild, true));
      } else {
        return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getPreviousElement"])(this._root.current, this._root.current.lastElementChild, true, true, true));
      }
    }

    return changedFocus;
  };

  FocusZone.prototype._moveFocusDown = function () {
    var _this = this;

    var targetTop = -1;
    var leftAlignment = this._focusAlignment.x;

    if (this._moveFocus(true, function (activeRect, targetRect) {
      var distance = -1; // ClientRect values can be floats that differ by very small fractions of a decimal.
      // If the difference between top and bottom are within a pixel then we should treat
      // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
      // but without Math.Floor they will be handled incorrectly.

      var targetRectTop = Math.floor(targetRect.top);
      var activeRectBottom = Math.floor(activeRect.bottom);

      if (targetRectTop < activeRectBottom) {
        if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
          return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
        }

        return LARGE_DISTANCE_FROM_CENTER;
      }

      if (targetTop === -1 && targetRectTop >= activeRectBottom || targetRectTop === targetTop) {
        targetTop = targetRectTop;

        if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
          distance = 0;
        } else {
          distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
        }
      }

      return distance;
    })) {
      this._setFocusAlignment(this._activeElement, false, true);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusUp = function () {
    var _this = this;

    var targetTop = -1;
    var leftAlignment = this._focusAlignment.x;

    if (this._moveFocus(false, function (activeRect, targetRect) {
      var distance = -1; // ClientRect values can be floats that differ by very small fractions of a decimal.
      // If the difference between top and bottom are within a pixel then we should treat
      // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
      // but without Math.Floor they will be handled incorrectly.

      var targetRectBottom = Math.floor(targetRect.bottom);
      var targetRectTop = Math.floor(targetRect.top);
      var activeRectTop = Math.floor(activeRect.top);

      if (targetRectBottom > activeRectTop) {
        if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
          return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
        }

        return LARGE_DISTANCE_FROM_CENTER;
      }

      if (targetTop === -1 && targetRectBottom <= activeRectTop || targetRectTop === targetTop) {
        targetTop = targetRectTop;

        if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
          distance = 0;
        } else {
          distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
        }
      }

      return distance;
    })) {
      this._setFocusAlignment(this._activeElement, false, true);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusLeft = function () {
    var _this = this;

    var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);

    if (this._moveFocus(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])(), function (activeRect, targetRect) {
      var distance = -1;
      var topBottomComparison;

      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])()) {
        // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
        // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
        // This is important, because we want to be comparing the top of the target rect
        // with the bottom of the active rect.
        topBottomComparison = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(targetRect.top.toFixed(3)) < _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(activeRect.bottom.toFixed(3));
      } else {
        topBottomComparison = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(targetRect.bottom.toFixed(3)) > _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(activeRect.top.toFixed(3));
      }

      if (topBottomComparison && targetRect.right <= activeRect.right && _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical) {
        distance = activeRect.right - targetRect.right;
      } else {
        if (!shouldWrap) {
          distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
        }
      }

      return distance;
    }, undefined
    /*ev*/
    , shouldWrap)) {
      this._setFocusAlignment(this._activeElement, true, false);

      return true;
    }

    return false;
  };

  FocusZone.prototype._moveFocusRight = function () {
    var _this = this;

    var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);

    if (this._moveFocus(!Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])(), function (activeRect, targetRect) {
      var distance = -1;
      var topBottomComparison;

      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])()) {
        // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
        // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
        // This is important, because we want to be comparing the bottom of the target rect
        // with the top of the active rect.
        topBottomComparison = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(targetRect.bottom.toFixed(3)) > _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(activeRect.top.toFixed(3));
      } else {
        topBottomComparison = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(targetRect.top.toFixed(3)) < _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(activeRect.bottom.toFixed(3));
      }

      if (topBottomComparison && targetRect.left >= activeRect.left && _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical) {
        distance = targetRect.left - activeRect.left;
      } else if (!shouldWrap) {
        distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
      }

      return distance;
    }, undefined
    /*ev*/
    , shouldWrap)) {
      this._setFocusAlignment(this._activeElement, true, false);

      return true;
    }

    return false;
  };

  FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
    if (this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].bidirectional && (!this._focusAlignment || isHorizontal || isVertical)) {
      var rect = element.getBoundingClientRect();
      var left = rect.left + rect.width / 2;
      var top_1 = rect.top + rect.height / 2;

      if (!this._focusAlignment) {
        this._focusAlignment = {
          x: left,
          y: top_1
        };
      }

      if (isHorizontal) {
        this._focusAlignment.x = left;
      }

      if (isVertical) {
        this._focusAlignment.y = top_1;
      }
    }
  };

  FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
    return this._getOwnerZone(element) === this._root.current;
  };

  FocusZone.prototype._getOwnerZone = function (element) {
    var parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(element, ALLOW_VIRTUAL_ELEMENTS);

    while (parentElement && parentElement !== this._root.current && parentElement !== this._getDocument().body) {
      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(parentElement)) {
        return parentElement;
      }

      parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
    }

    return parentElement;
  };

  FocusZone.prototype._updateTabIndexes = function (element) {
    if (!element && this._root.current) {
      this._defaultFocusElement = null;
      element = this._root.current;

      if (this._activeElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["elementContains"])(element, this._activeElement)) {
        this._activeElement = null;
      }
    } // If active element changes state to disabled, set it to null.
    // Otherwise, we lose keyboard accessibility to other elements in focus zone.


    if (this._activeElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementTabbable"])(this._activeElement)) {
      this._activeElement = null;
    }

    var childNodes = element && element.children;

    for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
      var child = childNodes[childIndex];

      if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementFocusZone"])(child)) {
        // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
        if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
          child.setAttribute(TABINDEX, '-1');
        }

        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isElementTabbable"])(child)) {
          if (this.props.disabled) {
            child.setAttribute(TABINDEX, '-1');
          } else if (!this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === child)) {
            this._defaultFocusElement = child;

            if (child.getAttribute(TABINDEX) !== '0') {
              child.setAttribute(TABINDEX, '0');
            }
          } else if (child.getAttribute(TABINDEX) !== '-1') {
            child.setAttribute(TABINDEX, '-1');
          }
        } else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
          // Disgusting IE hack. Sad face.
          child.setAttribute('focusable', 'false');
        }
      } else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
        if (!this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === child)) {
          this._defaultFocusElement = child;

          if (child.getAttribute(TABINDEX) !== '0') {
            child.setAttribute(TABINDEX, '0');
          }
        } else if (child.getAttribute(TABINDEX) !== '-1') {
          child.setAttribute(TABINDEX, '-1');
        }
      }

      this._updateTabIndexes(child);
    }
  };

  FocusZone.prototype._isElementInput = function (element) {
    if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
      return true;
    }

    return false;
  };

  FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
    // If a tab was used, we want to focus on the next element.
    if (!this._processingTabKey && element && element.type && ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
      var selectionStart = element.selectionStart;
      var selectionEnd = element.selectionEnd;
      var isRangeSelected = selectionStart !== selectionEnd;
      var inputValue = element.value; // We shouldn't lose focus in the following cases:
      // 1. There is range selected.
      // 2. When selection start is larger than 0 and it is backward.
      // 3. when selection start is not the end of length and it is forward.
      // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit tab)
      // and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is determined by calling the
      // callback shouldInputLoseFocusOnArrowKey

      if (isRangeSelected || selectionStart > 0 && !isForward || selectionStart !== inputValue.length && isForward || !!this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element))) {
        return false;
      }
    }

    return true;
  };

  FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
    return !!this.props.checkForNoWrap ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shouldWrapFocus"])(element, noWrapDataAttribute) : true;
  };
  /**
   * Returns true if the element is a descendant of the FocusZone through a React portal.
   */


  FocusZone.prototype._portalContainsElement = function (element) {
    return element && !!this._root.current && Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["portalContainsElement"])(element, this._root.current);
  };

  FocusZone.prototype._getDocument = function () {
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getDocument"])(this._root.current);
  };

  FocusZone.defaultProps = {
    isCircularNavigation: false,
    direction: _FocusZone_types__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].bidirectional
  };
  return FocusZone;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js ***!
  \*****************************************************************************************/
/*! exports provided: FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return FocusZoneTabbableElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return FocusZoneDirection; });
/**
 * {@docCategory FocusZone}
 */
var FocusZoneTabbableElements = {
  /** Tabbing is not allowed */
  none: 0,

  /** All tabbing action is allowed */
  all: 1,

  /** Tabbing is allowed only on input elements */
  inputOnly: 2
};
/**
 * {@docCategory FocusZone}
 */

var FocusZoneDirection;

(function (FocusZoneDirection) {
  /** Only react to up/down arrows. */
  FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
  /** Only react to left/right arrows. */

  FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
  /** React to all arrows. */

  FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection || (FocusZoneDirection = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js ***!
  \*******************************************************************************/
/*! exports provided: FocusZone, FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusZone */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return _FocusZone__WEBPACK_IMPORTED_MODULE_0__["FocusZone"]; });

/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FocusZone.types */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__["FocusZoneTabbableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__["FocusZoneDirection"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js ***!
  \*****************************************************************************/
/*! exports provided: getIconContent, FontIcon, getFontIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconContent", function() { return getIconContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontIcon", function() { return FontIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontIcon", function() { return getFontIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.styles */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");





var getIconContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (iconName) {
  var iconDefinition = Object(_Styling__WEBPACK_IMPORTED_MODULE_4__["getIcon"])(iconName) || {
    subset: {
      className: undefined
    },
    code: undefined
  };
  return {
    children: iconDefinition.code,
    iconClassName: iconDefinition.subset.className
  };
});
/**
 * Fast icon component which only supports font glyphs (not images) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */

var FontIcon = function (props) {
  var iconName = props.iconName,
      className = props.className;

  var _a = getIconContent(iconName),
      iconClassName = _a.iconClassName,
      children = _a.children;

  var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"]);
  var containerProps = props['aria-label'] ? {} : {
    role: 'presentation',
    'aria-hidden': true
  };
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
    "data-icon-name": iconName
  }, containerProps, nativeProps, {
    className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Icon_styles__WEBPACK_IMPORTED_MODULE_2__["MS_ICON"], _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["classNames"].root, iconClassName, !iconName && _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["classNames"].placeholder, className)
  }), children);
};
/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 * {@docCategory Icon}
 */

var getFontIcon = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (iconName, className, ariaLabel) {
  return FontIcon({
    iconName: iconName,
    className: className,
    'aria-label': ariaLabel
  });
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js":
/*!******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js ***!
  \******************************************************************************/
/*! exports provided: IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.types */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image/Image */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.js");
/* harmony import */ var _Image_Image_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image/Image.types */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _FontIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FontIcon */ "./node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js");







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])({
  disableCaching: true
});

var IconBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconBase, _super);

  function IconBase(props) {
    var _this = _super.call(this, props) || this;

    _this.onImageLoadingStateChange = function (state) {
      if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
        _this.props.imageProps.onLoadingStateChange(state);
      }

      if (state === _Image_Image_types__WEBPACK_IMPORTED_MODULE_4__["ImageLoadState"].error) {
        _this.setState({
          imageLoadError: true
        });
      }
    };

    _this.state = {
      imageLoadError: false
    };
    return _this;
  }

  IconBase.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        styles = _a.styles,
        iconName = _a.iconName,
        imageErrorAs = _a.imageErrorAs,
        theme = _a.theme;
    var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
    var isImage = this.props.iconType === _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"].image || this.props.iconType === _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"].Image || !!this.props.imageProps;

    var _b = Object(_FontIcon__WEBPACK_IMPORTED_MODULE_6__["getIconContent"])(iconName),
        iconClassName = _b.iconClassName,
        children = _b.children;

    var classNames = getClassNames(styles, {
      theme: theme,
      className: className,
      iconClassName: iconClassName,
      isImage: isImage,
      isPlaceholder: isPlaceholder
    });
    var RootType = isImage ? 'div' : 'i';
    var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_5__["htmlElementProperties"], ['aria-label']);
    var imageLoadError = this.state.imageLoadError;

    var imageProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props.imageProps, {
      onLoadingStateChange: this.onImageLoadingStateChange
    });

    var ImageType = imageLoadError && imageErrorAs || _Image_Image__WEBPACK_IMPORTED_MODULE_3__["Image"];
    var ariaLabel = this.props.ariaLabel || this.props['aria-label'];
    var containerProps = ariaLabel ? {
      'aria-label': ariaLabel
    } : {
      role: 'presentation',
      'aria-hidden': imageProps.alt || imageProps['aria-labelledby'] ? false : true
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      "data-icon-name": iconName
    }, containerProps, nativeProps, {
      className: classNames.root
    }), isImage ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps)) : children);
  };

  return IconBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js ***!
  \*************************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.base */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js");
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.styles */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");



/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */

var Icon = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Icon_base__WEBPACK_IMPORTED_MODULE_1__["IconBase"], _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
  scope: 'Icon'
}, true);

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js ***!
  \********************************************************************************/
/*! exports provided: classNames, MS_ICON, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_ICON", function() { return MS_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

/** Class names used in themeable and non-themeable Icon components */

var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"])({
  root: {
    display: 'inline-block'
  },
  placeholder: ['ms-Icon-placeHolder', {
    width: '1em'
  }],
  image: ['ms-Icon-imageContainer', {
    overflow: 'hidden'
  }]
});
/** Class name used only in non-themeable Icon components */

var MS_ICON = 'ms-Icon';
var getStyles = function (props) {
  var className = props.className,
      iconClassName = props.iconClassName,
      isPlaceholder = props.isPlaceholder,
      isImage = props.isImage,
      styles = props.styles;
  return {
    root: [isPlaceholder && classNames.placeholder, classNames.root, isImage && classNames.image, iconClassName, className, styles && styles.root, styles && styles.imageContainer]
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js ***!
  \*******************************************************************************/
/*! exports provided: IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return IconType; });
/**
 * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
 * {@docCategory Icon}
 */
var IconType;

(function (IconType) {
  /**
   * Render using the fabric icon font.
   * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
   */
  IconType[IconType["default"] = 0] = "default";
  /**
   * Render using an image, where imageProps would be used.
   * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
   */

  IconType[IconType["image"] = 1] = "image";
  /**
   * Deprecated, use `default`.
   * @deprecated Use `default`.
   */

  IconType[IconType["Default"] = 100000] = "Default";
  /**
   * Deprecated, use `image`.
   * @deprecated Use `image`.
   */

  IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/ImageIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/ImageIcon.js ***!
  \******************************************************************************/
/*! exports provided: ImageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return ImageIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image/Image */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon.styles */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");





/**
 * Fast icon component which only supports images (not font glyphs) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */

var ImageIcon = function (props) {
  var className = props.className,
      imageProps = props.imageProps;
  var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"]);
  var containerProps = props['aria-label'] ? {} : {
    role: 'presentation',
    'aria-hidden': imageProps.alt || imageProps['aria-labelledby'] ? false : true
  };
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, nativeProps, {
    className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Icon_styles__WEBPACK_IMPORTED_MODULE_4__["MS_ICON"], _Icon_styles__WEBPACK_IMPORTED_MODULE_4__["classNames"].root, _Icon_styles__WEBPACK_IMPORTED_MODULE_4__["classNames"].image, className)
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Image_Image__WEBPACK_IMPORTED_MODULE_2__["Image"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps)));
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/index.js ***!
  \**************************************************************************/
/*! exports provided: Icon, IconBase, IconType, getIconContent, FontIcon, getFontIcon, ImageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.base */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _Icon_base__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _Icon_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.types */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"]; });

/* harmony import */ var _FontIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FontIcon */ "./node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconContent", function() { return _FontIcon__WEBPACK_IMPORTED_MODULE_3__["getIconContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontIcon", function() { return _FontIcon__WEBPACK_IMPORTED_MODULE_3__["FontIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontIcon", function() { return _FontIcon__WEBPACK_IMPORTED_MODULE_3__["getFontIcon"]; });

/* harmony import */ var _ImageIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageIcon */ "./node_modules/office-ui-fabric-react/lib/components/Icon/ImageIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return _ImageIcon__WEBPACK_IMPORTED_MODULE_4__["ImageIcon"]; });







/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js ***!
  \********************************************************************************/
/*! exports provided: ImageBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBase", function() { return ImageBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Image_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.types */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var KEY_PREFIX = 'fabricImage';

var ImageBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageBase, _super);

  function ImageBase(props) {
    var _this = _super.call(this, props) || this; // Make an initial assumption about the image layout until we can
    // check the rendered element. The value here only takes effect when
    // shouldStartVisible is true.


    _this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].portrait;
    _this._imageElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._frameElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();

    _this._onImageLoaded = function (ev) {
      var _a = _this.props,
          src = _a.src,
          onLoad = _a.onLoad;

      if (onLoad) {
        onLoad(ev);
      }

      _this._computeCoverStyle(_this.props);

      if (src) {
        _this.setState({
          loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded
        });
      }
    };

    _this._onImageError = function (ev) {
      if (_this.props.onError) {
        _this.props.onError(ev);
      }

      _this.setState({
        loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].error
      });
    };

    _this.state = {
      loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded
    };
    return _this;
  } // tslint:disable-next-line function-name


  ImageBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded
      });
    } else if (this.state.loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded) {
      this._computeCoverStyle(nextProps);
    }
  };

  ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
    this._checkImageLoaded();

    if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
      this.props.onLoadingStateChange(this.state.loadState);
    }
  };

  ImageBase.prototype.render = function () {
    var imageProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["imageProperties"], ['width', 'height']);
    var _a = this.props,
        src = _a.src,
        alt = _a.alt,
        width = _a.width,
        height = _a.height,
        shouldFadeIn = _a.shouldFadeIn,
        shouldStartVisible = _a.shouldStartVisible,
        className = _a.className,
        imageFit = _a.imageFit,
        role = _a.role,
        maximizeFrame = _a.maximizeFrame,
        styles = _a.styles,
        theme = _a.theme;
    var loadState = this.state.loadState;
    var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
    var classNames = getClassNames(styles, {
      theme: theme,
      className: className,
      width: width,
      height: height,
      maximizeFrame: maximizeFrame,
      shouldFadeIn: shouldFadeIn,
      shouldStartVisible: shouldStartVisible,
      isLoaded: loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded || loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded && this.props.shouldStartVisible,
      isLandscape: coverStyle === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].landscape,
      isCenter: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].center,
      isCenterContain: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerContain,
      isCenterCover: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerCover,
      isContain: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].contain,
      isCover: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].cover,
      isNone: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].none,
      isError: loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].error,
      isNotImageFit: imageFit === undefined
    }); // If image dimensions aren't specified, the natural size of the image is used.

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: classNames.root,
      style: {
        width: width,
        height: height
      },
      ref: this._frameElement
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps, {
      onLoad: this._onImageLoaded,
      onError: this._onImageError,
      key: KEY_PREFIX + this.props.src || '',
      className: classNames.image,
      ref: this._imageElement,
      src: src,
      alt: alt,
      role: role
    })));
  };

  ImageBase.prototype._checkImageLoaded = function () {
    var src = this.props.src;
    var loadState = this.state.loadState;

    if (loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded) {
      // testing if naturalWidth and naturalHeight are greater than zero is better than checking
      // .complete, because .complete will also be set to true if the image breaks. However,
      // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
      // to checking .complete for these images.
      var isLoaded = this._imageElement.current ? src && this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0 || this._imageElement.current.complete && ImageBase._svgRegex.test(src) : false;

      if (isLoaded) {
        this._computeCoverStyle(this.props);

        this.setState({
          loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded
        });
      }
    }
  };

  ImageBase.prototype._computeCoverStyle = function (props) {
    var imageFit = props.imageFit,
        width = props.width,
        height = props.height; // Do not compute cover style if it was already specified in props

    if ((imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].cover || imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].contain || imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerContain || imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerCover) && this.props.coverStyle === undefined && this._imageElement.current && this._frameElement.current) {
      // Determine the desired ratio using the width and height props.
      // If those props aren't available, measure measure the frame.
      var desiredRatio = void 0;

      if (!!width && !!height && imageFit !== _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerContain && imageFit !== _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerCover) {
        desiredRatio = width / height;
      } else {
        desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
      } // Examine the source image to determine its original ratio.


      var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight; // Should we crop from the top or the sides?

      if (naturalRatio > desiredRatio) {
        this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].landscape;
      } else {
        this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].portrait;
      }
    }
  };

  ImageBase.defaultProps = {
    shouldFadeIn: true
  };
  ImageBase._svgRegex = /\.svg$/i;
  return ImageBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.js ***!
  \***************************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Image_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.base */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.styles */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js");



var Image = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Image_base__WEBPACK_IMPORTED_MODULE_1__["ImageBase"], _Image_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
  scope: 'Image'
}, true);

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js ***!
  \**********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var GlobalClassNames = {
  root: 'ms-Image',
  rootMaximizeFrame: 'ms-Image--maximizeFrame',
  image: 'ms-Image-image',
  imageCenter: 'ms-Image-image--center',
  imageContain: 'ms-Image-image--contain',
  imageCover: 'ms-Image-image--cover',
  imageCenterContain: 'ms-Image-image--centerContain',
  imageCenterCover: 'ms-Image-image--centerCover',
  imageNone: 'ms-Image-image--none',
  imageLandscape: 'ms-Image-image--landscape',
  imagePortrait: 'ms-Image-image--portrait'
};
var getStyles = function (props) {
  var className = props.className,
      width = props.width,
      height = props.height,
      maximizeFrame = props.maximizeFrame,
      isLoaded = props.isLoaded,
      shouldFadeIn = props.shouldFadeIn,
      shouldStartVisible = props.shouldStartVisible,
      isLandscape = props.isLandscape,
      isCenter = props.isCenter,
      isContain = props.isContain,
      isCover = props.isCover,
      isCenterContain = props.isCenterContain,
      isCenterCover = props.isCenterCover,
      isNone = props.isNone,
      isError = props.isError,
      isNotImageFit = props.isNotImageFit,
      theme = props.theme;
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
  var ImageFitStyles = {
    position: 'absolute',
    left: '50% /* @noflip */',
    top: '50%',
    transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);

  }; // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit

  var window = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getWindow"])();
  var supportsObjectFit = window !== undefined && window.navigator.msMaxTouchPoints === undefined;
  var fallbackObjectFitStyles = isContain && isLandscape || isCover && !isLandscape ? {
    width: '100%',
    height: 'auto'
  } : {
    width: 'auto',
    height: '100%'
  };
  return {
    root: [classNames.root, theme.fonts.medium, {
      overflow: 'hidden'
    }, maximizeFrame && [classNames.rootMaximizeFrame, {
      height: '100%',
      width: '100%'
    }], isLoaded && shouldFadeIn && !shouldStartVisible && _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].fadeIn400, (isCenter || isContain || isCover || isCenterContain || isCenterCover) && {
      position: 'relative'
    }, className],
    image: [classNames.image, {
      display: 'block',
      opacity: 0
    }, isLoaded && ['is-loaded', {
      opacity: 1
    }], isCenter && [classNames.imageCenter, ImageFitStyles], isContain && [classNames.imageContain, supportsObjectFit && {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }, !supportsObjectFit && fallbackObjectFitStyles, ImageFitStyles], isCover && [classNames.imageCover, supportsObjectFit && {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }, !supportsObjectFit && fallbackObjectFitStyles, ImageFitStyles], isCenterContain && [classNames.imageCenterContain, isLandscape && {
      maxWidth: '100%'
    }, !isLandscape && {
      maxHeight: '100%'
    }, ImageFitStyles], isCenterCover && [classNames.imageCenterCover, isLandscape && {
      maxHeight: '100%'
    }, !isLandscape && {
      maxWidth: '100%'
    }, ImageFitStyles], isNone && [classNames.imageNone, {
      width: 'auto',
      height: 'auto'
    }], isNotImageFit && [!!width && !height && {
      height: 'auto',
      width: '100%'
    }, !width && !!height && {
      height: '100%',
      width: 'auto'
    }, !!width && !!height && {
      height: '100%',
      width: '100%'
    }], isLandscape && classNames.imageLandscape, !isLandscape && classNames.imagePortrait, !isLoaded && 'is-notLoaded', shouldFadeIn && 'is-fadeIn', isError && 'is-error']
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js ***!
  \*********************************************************************************/
/*! exports provided: ImageFit, ImageCoverStyle, ImageLoadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFit", function() { return ImageFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCoverStyle", function() { return ImageCoverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoadState", function() { return ImageLoadState; });
/**
 * The possible methods that can be used to fit the image.
 * {@docCategory Image}
 */
var ImageFit;

(function (ImageFit) {
  /**
   * The image is not scaled. The image is centered and cropped within the content box.
   */
  ImageFit[ImageFit["center"] = 0] = "center";
  /**
   * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
   * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
   * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
   */

  ImageFit[ImageFit["contain"] = 1] = "contain";
  /**
   * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
   * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
   */

  ImageFit[ImageFit["cover"] = 2] = "cover";
  /**
   * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
   * frame will have empty space.
   */

  ImageFit[ImageFit["none"] = 3] = "none";
  /**
   * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
   * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
   * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
   */

  ImageFit[ImageFit["centerCover"] = 4] = "centerCover";
  /**
   * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
   * behave as ImageFit.center if the image's natural height and width is less than the Image frame's height and width,
   * but if either natural height or width are larger than the frame it will behave as ImageFit.contain.
   */

  ImageFit[ImageFit["centerContain"] = 5] = "centerContain";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 * {@docCategory Image}
 */


var ImageCoverStyle;

(function (ImageCoverStyle) {
  /**
   * The image will be shown at 100% height of container and the width will be scaled accordingly
   */
  ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
  /**
   * The image will be shown at 100% width of container and the height will be scaled accordingly
   */

  ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
/**
 * {@docCategory Image}
 */


var ImageLoadState;

(function (ImageLoadState) {
  /**
   * The image has not yet been loaded, and there is no error yet.
   */
  ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
  /**
   * The image has been loaded successfully.
   */

  ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
  /**
   * An error has been encountered while loading the image.
   */

  ImageLoadState[ImageLoadState["error"] = 2] = "error";
  /**
   * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
   * and rerender the Image with a difference src.
   * @deprecated Use `onLoadingStateChange` instead
   * and rerender the Image with a difference src.
   */

  ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js ***!
  \*************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return KeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_keytips_KeytipManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/keytips/KeytipManager */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js");
/* harmony import */ var _utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/keytips/KeytipUtils */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js");





/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */

var KeytipData =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KeytipData, _super);

  function KeytipData() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._keytipManager = _utilities_keytips_KeytipManager__WEBPACK_IMPORTED_MODULE_3__["KeytipManager"].getInstance();
    return _this;
  }

  KeytipData.prototype.componentDidMount = function () {
    // Register Keytip in KeytipManager
    if (this.props.keytipProps) {
      this._uniqueId = this._keytipManager.register(this._getKtpProps());
    }
  };

  KeytipData.prototype.componentWillUnmount = function () {
    // Unregister Keytip in KeytipManager
    this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
  };

  KeytipData.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.keytipProps !== this.props.keytipProps || prevProps.disabled !== this.props.disabled) {
      // If keytipProps or disabled has changed update Keytip in KeytipManager
      this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
    }
  };

  KeytipData.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        keytipProps = _a.keytipProps,
        ariaDescribedBy = _a.ariaDescribedBy;
    var nativeKeytipProps = {};

    if (keytipProps) {
      nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
    }

    return children(nativeKeytipProps);
  };

  KeytipData.prototype._getKtpProps = function () {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      disabled: this.props.disabled
    }, this.props.keytipProps);
  };
  /**
   * Gets the aria- and data- attributes to attach to the component
   * @param keytipProps - props for Keytip
   * @param describedByPrepend - ariaDescribedBy value to prepend
   */


  KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
    if (keytipProps) {
      // Add the parent overflow sequence if necessary
      var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps); // Construct aria-describedby and data-ktp-id attributes and return


      var ariaDescribedBy = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["getAriaDescribedBy"])(newKeytipProps.keySequences);
      var keySequences = newKeytipProps.keySequences.slice();

      if (newKeytipProps.overflowSetSequence) {
        keySequences = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["mergeOverflows"])(keySequences, newKeytipProps.overflowSetSequence);
      }

      var ktpId = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["sequencesToID"])(keySequences);
      return {
        'aria-describedby': Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(describedByPrepend, ariaDescribedBy),
        'data-ktp-target': ktpId,
        'data-ktp-execute-target': ktpId
      };
    }

    return undefined;
  };

  return KeytipData;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js ***!
  \********************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipData */ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _KeytipData__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js ***!
  \********************************************************************************/
/*! exports provided: LayerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Fabric */ "./node_modules/office-ui-fabric-react/lib/Fabric.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layer.notification */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();

var LayerBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerBase, _super);

  function LayerBase(props) {
    var _this = _super.call(this, props) || this;
    /**
     * rootElement wrapper for setting virtual parent as soon as root element ref is available.
     */


    _this._handleRootElementRef = function (ref) {
      _this._rootElement = ref;

      if (ref) {
        // TODO: Calling _setVirtualParent in this ref wrapper SHOULD allow us to remove
        //    other calls to _setVirtualParent throughout this class. However,
        //    as this is an immediate fix for a P0 issue the existing _setVirtualParent
        //    calls are left for now to minimize potential regression.
        _this._setVirtualParent();
      }
    };
    /**
     * Helper to stop events from bubbling up out of Layer.
     */


    _this._filterEvent = function (ev) {
      // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though mouseenter and
      //    mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on event name rather than ev.bubble.
      if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== 'mouseenter' && ev.type !== 'mouseleave') {
        ev.stopPropagation();
      }
    };

    _this.state = {
      hasMounted: false
    };

    if (true) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["warnDeprecations"])('Layer', props, {
        onLayerMounted: 'onLayerDidMount'
      });
    }

    if (_this.props.hostId) {
      Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["registerLayer"])(_this.props.hostId, _this);
    }

    return _this;
  } // tslint:disable-next-line function-name


  LayerBase.prototype.UNSAFE_componentWillMount = function () {
    this._layerElement = this._getLayerElement();
  }; // tslint:disable-next-line function-name


  LayerBase.prototype.UNSAFE_componentWillUpdate = function () {
    if (!this._layerElement) {
      this._layerElement = this._getLayerElement();
    }
  };

  LayerBase.prototype.componentDidMount = function () {
    // We can safely set state immediately because the ref wrapper will make sure the virtual
    //    parent has been set before componentDidMount is called.
    this.setState({
      hasMounted: true
    });

    this._setVirtualParent();

    var _a = this.props,
        onLayerDidMount = _a.onLayerDidMount,
        onLayerMounted = _a.onLayerMounted;

    if (onLayerMounted) {
      onLayerMounted();
    }

    if (onLayerDidMount) {
      onLayerDidMount();
    }
  };

  LayerBase.prototype.componentWillUnmount = function () {
    this._removeLayerElement();

    var _a = this.props,
        onLayerWillUnmount = _a.onLayerWillUnmount,
        hostId = _a.hostId;

    if (onLayerWillUnmount) {
      onLayerWillUnmount();
    }

    if (hostId) {
      Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["unregisterLayer"])(hostId, this);
    }
  };

  LayerBase.prototype.componentDidUpdate = function () {
    this._setVirtualParent();
  };

  LayerBase.prototype.render = function () {
    var classNames = this._getClassNames();

    var eventBubblingEnabled = this.props.eventBubblingEnabled;
    var hasMounted = this.state.hasMounted;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "ms-layer",
      ref: this._handleRootElementRef
    }, this._layerElement && hasMounted && react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"](eventBubblingEnabled ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Fabric__WEBPACK_IMPORTED_MODULE_3__["Fabric"], {
      className: classNames.content
    }, this.props.children) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Fabric__WEBPACK_IMPORTED_MODULE_3__["Fabric"], {
      className: classNames.content,
      onClick: this._filterEvent,
      onContextMenu: this._filterEvent,
      onDoubleClick: this._filterEvent,
      onDrag: this._filterEvent,
      onDragEnd: this._filterEvent,
      onDragEnter: this._filterEvent,
      onDragExit: this._filterEvent,
      onDragLeave: this._filterEvent,
      onDragOver: this._filterEvent,
      onDragStart: this._filterEvent,
      onDrop: this._filterEvent,
      onMouseDown: this._filterEvent,
      onMouseEnter: this._filterEvent,
      onMouseLeave: this._filterEvent,
      onMouseMove: this._filterEvent,
      onMouseOver: this._filterEvent,
      onMouseOut: this._filterEvent,
      onMouseUp: this._filterEvent,
      onKeyDown: this._filterEvent,
      onKeyPress: this._filterEvent,
      onKeyUp: this._filterEvent,
      onFocus: this._filterEvent,
      onBlur: this._filterEvent,
      onChange: this._filterEvent,
      onInput: this._filterEvent,
      onInvalid: this._filterEvent,
      onSubmit: this._filterEvent
    }, this.props.children), this._layerElement));
  };

  LayerBase.prototype._getClassNames = function () {
    var _a = this.props,
        className = _a.className,
        styles = _a.styles,
        theme = _a.theme;
    var classNames = getClassNames(styles, {
      theme: theme,
      className: className,
      isNotHost: !this.props.hostId
    });
    return classNames;
  };

  LayerBase.prototype._setVirtualParent = function () {
    if (this._rootElement && this._layerElement) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(this._layerElement, this._rootElement);
    }
  };

  LayerBase.prototype._getLayerElement = function () {
    var host = this._getHost();

    var classNames = this._getClassNames();

    if (host !== this._host) {
      this._removeLayerElement();
    }

    if (host) {
      this._host = host;

      if (!this._layerElement) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])();

        if (!doc) {
          return;
        }

        this._layerElement = doc.createElement('div');
        this._layerElement.className = classNames.root;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setPortalAttribute"])(this._layerElement);
        this.props.insertFirst ? host.insertBefore(this._layerElement, host.firstChild) : host.appendChild(this._layerElement);
      }
    }

    return this._layerElement;
  };

  LayerBase.prototype._removeLayerElement = function () {
    if (this._layerElement) {
      this.props.onLayerWillUnmount();
      var parentNode = this._layerElement.parentNode;

      if (parentNode) {
        parentNode.removeChild(this._layerElement);
      }

      this._layerElement = undefined;
    }
  };

  LayerBase.prototype._getHost = function () {
    var hostId = this.props.hostId;
    var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])();

    if (!doc) {
      return undefined;
    }

    if (hostId) {
      return doc.getElementById(hostId);
    } else {
      var defaultHostSelector = Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["getDefaultTarget"])();
      return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
    }
  };

  LayerBase.defaultProps = {
    onLayerDidMount: function () {
      return undefined;
    },
    onLayerWillUnmount: function () {
      return undefined;
    }
  };
  LayerBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["customizable"])('Layer', ['theme', 'hostId'])], LayerBase);
  return LayerBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js ***!
  \***************************************************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js");
/* harmony import */ var _Layer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer.styles */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js");



var Layer = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"], _Layer_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
  scope: 'Layer',
  fields: ['hostId', 'theme', 'styles']
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js ***!
  \****************************************************************************************/
/*! exports provided: registerLayer, unregisterLayer, notifyHostChanged, setDefaultTarget, getDefaultTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLayer", function() { return registerLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterLayer", function() { return unregisterLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHostChanged", function() { return notifyHostChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultTarget", function() { return setDefaultTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTarget", function() { return getDefaultTarget; });
var _layersByHostId = {};

var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */


function registerLayer(hostId, layer) {
  if (!_layersByHostId[hostId]) {
    _layersByHostId[hostId] = [];
  }

  _layersByHostId[hostId].push(layer);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */

function unregisterLayer(hostId, layer) {
  if (_layersByHostId[hostId]) {
    var idx = _layersByHostId[hostId].indexOf(layer);

    if (idx >= 0) {
      _layersByHostId[hostId].splice(idx, 1);

      if (_layersByHostId[hostId].length === 0) {
        delete _layersByHostId[hostId];
      }
    }
  }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */

function notifyHostChanged(id) {
  if (_layersByHostId[id]) {
    _layersByHostId[id].forEach(function (layer) {
      return layer.forceUpdate();
    });
  }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */

function setDefaultTarget(selector) {
  _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */

function getDefaultTarget() {
  return _defaultHostSelector;
}

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js ***!
  \**********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var GlobalClassNames = {
  root: 'ms-Layer',
  rootNoHost: 'ms-Layer--fixed',
  content: 'ms-Layer-content'
};
var getStyles = function (props) {
  var className = props.className,
      isNotHost = props.isNotHost,
      theme = props.theme;
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
  return {
    root: [classNames.root, theme.fonts.medium, isNotHost && [classNames.rootNoHost, {
      position: 'fixed',
      zIndex: _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      visibility: 'hidden'
    }], className],
    content: [classNames.content, {
      visibility: 'visible'
    }]
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js ***!
  \*******************************************************************************/
/*! exports provided: LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer.notification */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js");





var LayerHost =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerHost, _super);

  function LayerHost() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LayerHost.prototype.shouldComponentUpdate = function () {
    return false;
  };

  LayerHost.prototype.componentDidMount = function () {
    Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
  };

  LayerHost.prototype.componentWillUnmount = function () {
    Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
  };

  LayerHost.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, {
      className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-LayerHost', this.props.className)
    }));
  };

  return LayerHost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/index.js ***!
  \***************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_0__["Layer"]; });

/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony import */ var _LayerHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerHost */ "./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _LayerHost__WEBPACK_IMPORTED_MODULE_2__["LayerHost"]; });





/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.base.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.base.js ***!
  \********************************************************************************/
/*! exports provided: PivotBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotBase", function() { return PivotBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ "./node_modules/office-ui-fabric-react/lib/Button.js");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FocusZone */ "./node_modules/office-ui-fabric-react/lib/FocusZone.js");
/* harmony import */ var _PivotItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PivotItem */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/PivotItem.js");
/* harmony import */ var _Pivot_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pivot.types */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.types.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Icon */ "./node_modules/office-ui-fabric-react/lib/Icon.js");









var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var PivotItemType = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PivotItem__WEBPACK_IMPORTED_MODULE_5__["PivotItem"], null).type;
/**
 *  Usage:
 *
 *     <Pivot>
 *       <PivotItem headerText="Foo">
 *         <Label>Pivot #1</Label>
 *       </PivotItem>
 *       <PivotItem headerText="Bar">
 *         <Label>Pivot #2</Label>
 *       </PivotItem>
 *       <PivotItem headerText="Bas">
 *         <Label>Pivot #3</Label>
 *       </PivotItem>
 *     </Pivot>
 */

var PivotBase =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PivotBase, _super);

  function PivotBase(props) {
    var _this = _super.call(this, props) || this;

    _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();

    _this._renderPivotLink = function (linkCollection, link, selectedKey) {
      var itemKey = link.itemKey,
          headerButtonProps = link.headerButtonProps;
      var tabId = linkCollection.keyToTabIdMapping[itemKey];
      var onRenderItemLink = link.onRenderItemLink;
      var linkContent;
      var isSelected = selectedKey === itemKey;

      if (onRenderItemLink) {
        linkContent = onRenderItemLink(link, _this._renderLinkContent);
      } else {
        linkContent = _this._renderLinkContent(link);
      }

      var contentString = link.headerText || '';
      contentString += link.itemCount ? ' (' + link.itemCount + ')' : ''; // Adding space supplementary for icon

      contentString += link.itemIcon ? ' xx' : '';
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["CommandButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, headerButtonProps, {
        id: tabId,
        key: itemKey,
        className: isSelected ? _this._classNames.linkIsSelected : _this._classNames.link,
        onClick: _this._onLinkClick.bind(_this, itemKey),
        onKeyPress: _this._onKeyPress.bind(_this, itemKey),
        ariaLabel: link.ariaLabel,
        role: "tab",
        "aria-selected": isSelected,
        name: link.headerText,
        keytipProps: link.keytipProps,
        "data-content": contentString
      }), linkContent);
    };

    _this._renderLinkContent = function (link) {
      var itemCount = link.itemCount,
          itemIcon = link.itemIcon,
          headerText = link.headerText;
      var classNames = _this._classNames;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: classNames.linkContent
      }, itemIcon !== undefined && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: classNames.icon
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        iconName: itemIcon
      })), headerText !== undefined && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: classNames.text
      }, " ", link.headerText), itemCount !== undefined && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: classNames.count
      }, " (", itemCount, ")"));
    };

    _this._warnDeprecations({
      initialSelectedKey: 'defaultSelectedKey',
      initialSelectedIndex: 'defaultSelectedIndex'
    });

    _this._pivotId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Pivot');

    var links = _this._getPivotLinks(props).links;

    var _a = props.defaultSelectedKey,
        defaultSelectedKey = _a === void 0 ? props.initialSelectedKey : _a,
        _b = props.defaultSelectedIndex,
        defaultSelectedIndex = _b === void 0 ? props.initialSelectedIndex : _b;
    var selectedKey;

    if (defaultSelectedKey) {
      selectedKey = defaultSelectedKey;
    } else if (typeof defaultSelectedIndex === 'number') {
      selectedKey = links[defaultSelectedIndex].itemKey;
    } else if (links.length) {
      selectedKey = links[0].itemKey;
    }

    _this.state = {
      selectedKey: selectedKey
    };
    return _this;
  }
  /**
   * Sets focus to the first pivot tab.
   */


  PivotBase.prototype.focus = function () {
    if (this._focusZone.current) {
      this._focusZone.current.focus();
    }
  };

  PivotBase.prototype.render = function () {
    var linkCollection = this._getPivotLinks(this.props);

    var selectedKey = this._getSelectedKey(linkCollection);

    var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
    this._classNames = this._getClassNames(this.props);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps), this._renderPivotLinks(linkCollection, selectedKey), selectedKey && this._renderPivotItem(linkCollection, selectedKey));
  };

  PivotBase.prototype._getSelectedKey = function (linkCollection) {
    var propsSelectedKey = this.props.selectedKey;

    if (this._isKeyValid(linkCollection, propsSelectedKey) || propsSelectedKey === null) {
      return propsSelectedKey;
    }

    var stateSelectedKey = this.state.selectedKey;

    if (this._isKeyValid(linkCollection, stateSelectedKey)) {
      return stateSelectedKey;
    }

    if (linkCollection.links.length) {
      return linkCollection.links[0].itemKey;
    }

    return undefined;
  };
  /**
   * Renders the set of links to route between pivots
   */


  PivotBase.prototype._renderPivotLinks = function (linkCollection, selectedKey) {
    var _this = this;

    var items = linkCollection.links.map(function (l) {
      return _this._renderPivotLink(linkCollection, l, selectedKey);
    });
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], {
      componentRef: this._focusZone,
      direction: _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: this._classNames.root,
      role: "tablist"
    }, items));
  };
  /**
   * Renders the current Pivot Item
   */


  PivotBase.prototype._renderPivotItem = function (linkCollection, itemKey) {
    if (this.props.headersOnly || !itemKey) {
      return null;
    }

    var index = linkCollection.keyToIndexMapping[itemKey];
    var selectedTabId = linkCollection.keyToTabIdMapping[itemKey];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      role: "tabpanel",
      "aria-labelledby": selectedTabId,
      className: this._classNames.itemContainer
    }, react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(this.props.children)[index]);
  };
  /**
   * Gets the set of PivotLinks as array of IPivotItemProps
   * The set of Links is determined by child components of type PivotItem
   */


  PivotBase.prototype._getPivotLinks = function (props) {
    var _this = this;

    var result = {
      links: [],
      keyToIndexMapping: {},
      keyToTabIdMapping: {}
    };
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(props.children), function (child, index) {
      if (typeof child === 'object' && child.type === PivotItemType) {
        var pivotItem = child;

        var _a = pivotItem.props,
            linkText = _a.linkText,
            pivotItemProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["linkText"]);

        var itemKey = pivotItem.props.itemKey || index.toString();
        result.links.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
          // Use linkText (deprecated) if headerText is not provided
          headerText: linkText
        }, pivotItemProps, {
          itemKey: itemKey
        }));
        result.keyToIndexMapping[itemKey] = index;
        result.keyToTabIdMapping[itemKey] = _this._getTabId(itemKey, index);
      } else {
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warn"])('The children of a Pivot component must be of type PivotItem to be rendered.');
      }
    });
    return result;
  };
  /**
   * Generates the Id for the tab button.
   */


  PivotBase.prototype._getTabId = function (itemKey, index) {
    if (this.props.getTabId) {
      return this.props.getTabId(itemKey, index);
    }

    return this._pivotId + ("-Tab" + index);
  };
  /**
   * whether the key exists in the pivot items.
   */


  PivotBase.prototype._isKeyValid = function (linkCollection, itemKey) {
    return itemKey !== undefined && itemKey !== null && linkCollection.keyToIndexMapping[itemKey] !== undefined;
  };
  /**
   * Handles the onClick event on PivotLinks
   */


  PivotBase.prototype._onLinkClick = function (itemKey, ev) {
    ev.preventDefault();

    this._updateSelectedItem(itemKey, ev);
  };
  /**
   * Handle the onKeyPress eventon the PivotLinks
   */


  PivotBase.prototype._onKeyPress = function (itemKey, ev) {
    if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
      ev.preventDefault();

      this._updateSelectedItem(itemKey);
    }
  };
  /**
   * Updates the state with the new selected index
   */


  PivotBase.prototype._updateSelectedItem = function (itemKey, ev) {
    this.setState({
      selectedKey: itemKey
    });

    var linkCollection = this._getPivotLinks(this.props);

    if (this.props.onLinkClick && linkCollection.keyToIndexMapping[itemKey] >= 0) {
      var index = linkCollection.keyToIndexMapping[itemKey]; // React.Element<any> cannot directly convert to PivotItem.

      var item = react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(this.props.children)[index];

      if (typeof item === 'object' && item.type === PivotItemType) {
        this.props.onLinkClick(item, ev);
      }
    }
  };

  PivotBase.prototype._getClassNames = function (props) {
    var theme = props.theme;
    var rootIsLarge = props.linkSize === _Pivot_types__WEBPACK_IMPORTED_MODULE_6__["PivotLinkSize"].large;
    var rootIsTabs = props.linkFormat === _Pivot_types__WEBPACK_IMPORTED_MODULE_6__["PivotLinkFormat"].tabs;
    return getClassNames(props.styles, {
      theme: theme,
      rootIsLarge: rootIsLarge,
      rootIsTabs: rootIsTabs
    });
  };

  return PivotBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.js ***!
  \***************************************************************************/
/*! exports provided: Pivot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pivot", function() { return Pivot; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Pivot_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pivot.base */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.base.js");
/* harmony import */ var _Pivot_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pivot.styles */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.styles.js");



/**
 * The Pivot control and related tabs pattern are used for navigating frequently accessed,
 * distinct content categories. Pivots allow for navigation between two or more content
 * views and relies on text headers to articulate the different sections of content.
 */

var Pivot = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Pivot_base__WEBPACK_IMPORTED_MODULE_1__["PivotBase"], _Pivot_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
  scope: 'Pivot'
});

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.styles.js ***!
  \**********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var globalClassNames = {
  count: 'ms-Pivot-count',
  icon: 'ms-Pivot-icon',
  linkIsSelected: 'is-selected',
  link: 'ms-Pivot-link',
  linkContent: 'ms-Pivot-linkContent',
  root: 'ms-Pivot',
  rootIsLarge: 'ms-Pivot--large',
  rootIsTabs: 'ms-Pivot--tabs',
  text: 'ms-Pivot-text'
};

var linkStyles = function (props) {
  var _a, _b;

  var rootIsLarge = props.rootIsLarge,
      rootIsTabs = props.rootIsTabs;
  var _c = props.theme,
      semanticColors = _c.semanticColors,
      fonts = _c.fonts;
  return [fonts.medium, {
    color: semanticColors.actionLink,
    display: 'inline-block',
    lineHeight: 44,
    height: 44,
    marginRight: 8,
    padding: '0 8px',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: 0,
    selectors: (_a = {
      ':before': {
        backgroundColor: 'transparent',
        bottom: 0,
        content: '""',
        height: 2,
        left: 8,
        position: 'absolute',
        right: 8,
        transition: "left " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].easeFunction2 + ",\n                      right " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].easeFunction2
      },
      ':after': {
        color: 'transparent',
        content: 'attr(data-content)',
        display: 'block',
        fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].bold,
        height: 1,
        overflow: 'hidden',
        visibility: 'hidden'
      },
      ':hover': {
        backgroundColor: semanticColors.buttonBackgroundHovered,
        color: semanticColors.buttonTextHovered,
        cursor: 'pointer'
      },
      ':active': {
        backgroundColor: semanticColors.buttonBackgroundPressed,
        color: semanticColors.buttonTextHovered
      },
      ':focus': {
        outline: 'none'
      }
    }, _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
      outline: "1px solid " + semanticColors.focusBorder
    }, _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus:after"] = {
      content: 'attr(data-content)',
      position: 'relative',
      border: 0
    }, _a)
  }, rootIsLarge && {
    fontSize: fonts.large.fontSize
  }, rootIsTabs && [{
    marginRight: 0,
    height: 44,
    lineHeight: 44,
    backgroundColor: semanticColors.buttonBackground,
    padding: '0 10px',
    verticalAlign: 'top',
    selectors: (_b = {
      ':focus': {
        outlineOffset: '-1px'
      }
    }, _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus::before"] = {
      height: 'auto',
      background: 'transparent',
      transition: 'none'
    }, _b)
  }]];
};

var getStyles = function (props) {
  var _a, _b, _c;

  var className = props.className,
      rootIsLarge = props.rootIsLarge,
      rootIsTabs = props.rootIsTabs,
      theme = props.theme;
  var semanticColors = theme.semanticColors,
      fonts = theme.fonts;
  var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(globalClassNames, theme);
  return {
    root: [classNames.root, fonts.medium, _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"], {
      position: 'relative',
      color: semanticColors.link,
      whiteSpace: 'nowrap'
    }, rootIsLarge && classNames.rootIsLarge, rootIsTabs && classNames.rootIsTabs, className],
    link: [classNames.link].concat(linkStyles(props), [rootIsTabs && {
      selectors: {
        '&:hover, &:focus': {
          color: semanticColors.buttonTextCheckedHovered
        },
        '&:active, &:hover': {
          color: semanticColors.primaryButtonText,
          backgroundColor: semanticColors.primaryButtonBackground
        }
      }
    }]),
    linkIsSelected: [classNames.link, classNames.linkIsSelected].concat(linkStyles(props), [{
      fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
      selectors: (_a = {
        ':before': {
          backgroundColor: semanticColors.inputBackgroundChecked,
          selectors: (_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
            backgroundColor: 'Highlight'
          }, _b)
        },
        ':hover::before': {
          left: 0,
          right: 0
        }
      }, _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        color: 'Highlight'
      }, _a)
    }, rootIsTabs && {
      backgroundColor: semanticColors.primaryButtonBackground,
      color: semanticColors.primaryButtonText,
      fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular,
      selectors: (_c = {
        ':before': {
          backgroundColor: 'transparent',
          transition: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          content: '""',
          height: 'auto'
        },
        ':hover': {
          backgroundColor: semanticColors.primaryButtonBackgroundHovered,
          color: semanticColors.primaryButtonText
        },
        '&:active': {
          backgroundColor: semanticColors.primaryButtonBackgroundPressed,
          color: semanticColors.primaryButtonText
        }
      }, _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
        fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
        color: 'HighlightText',
        background: 'Highlight',
        MsHighContrastAdjust: 'none'
      }, _c)
    }]),
    linkContent: [classNames.linkContent, {
      flex: '0 1 100%',
      selectors: {
        '& > * ': {
          marginLeft: 4
        },
        '& > *:first-child': {
          marginLeft: 0
        }
      }
    }],
    text: [classNames.text, {
      display: 'inline-block',
      verticalAlign: 'top'
    }],
    count: [classNames.count, {
      display: 'inline-block',
      verticalAlign: 'top'
    }],
    icon: classNames.icon
  };
};

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.types.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.types.js ***!
  \*********************************************************************************/
/*! exports provided: PivotLinkFormat, PivotLinkSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotLinkFormat", function() { return PivotLinkFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotLinkSize", function() { return PivotLinkSize; });
/**
 * {@docCategory Pivot}
 */
var PivotLinkFormat;

(function (PivotLinkFormat) {
  /**
   * Display Pivot Links as links
   */
  PivotLinkFormat[PivotLinkFormat["links"] = 0] = "links";
  /**
   * Display Pivot Links as Tabs
   */

  PivotLinkFormat[PivotLinkFormat["tabs"] = 1] = "tabs";
})(PivotLinkFormat || (PivotLinkFormat = {}));
/**
 * {@docCategory Pivot}
 */


var PivotLinkSize;

(function (PivotLinkSize) {
  /**
   * Display Link using normal font size
   */
  PivotLinkSize[PivotLinkSize["normal"] = 0] = "normal";
  /**
   * Display links using large font size
   */

  PivotLinkSize[PivotLinkSize["large"] = 1] = "large";
})(PivotLinkSize || (PivotLinkSize = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Pivot/PivotItem.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Pivot/PivotItem.js ***!
  \*******************************************************************************/
/*! exports provided: PivotItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotItem", function() { return PivotItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var PivotItem =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PivotItem, _super);

  function PivotItem(props) {
    var _this = _super.call(this, props) || this;

    _this._warnDeprecations({
      linkText: 'headerText'
    });

    return _this;
  }

  PivotItem.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"])), this.props.children);
  };

  return PivotItem;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Pivot/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Pivot/index.js ***!
  \***************************************************************************/
/*! exports provided: Pivot, PivotBase, PivotItem, PivotLinkFormat, PivotLinkSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pivot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pivot */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pivot", function() { return _Pivot__WEBPACK_IMPORTED_MODULE_0__["Pivot"]; });

/* harmony import */ var _Pivot_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pivot.base */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotBase", function() { return _Pivot_base__WEBPACK_IMPORTED_MODULE_1__["PivotBase"]; });

/* harmony import */ var _PivotItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PivotItem */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/PivotItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotItem", function() { return _PivotItem__WEBPACK_IMPORTED_MODULE_2__["PivotItem"]; });

/* harmony import */ var _Pivot_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pivot.types */ "./node_modules/office-ui-fabric-react/lib/components/Pivot/Pivot.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotLinkFormat", function() { return _Pivot_types__WEBPACK_IMPORTED_MODULE_3__["PivotLinkFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PivotLinkSize", function() { return _Pivot_types__WEBPACK_IMPORTED_MODULE_3__["PivotLinkSize"]; });






/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js ***!
  \***************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



/**
 * This adds accessibility to Dialog and Panel controls
 */

var Popup =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Popup, _super);

  function Popup(props) {
    var _this = _super.call(this, props) || this;

    _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this._disposables = [];

    _this._onKeyDown = function (ev) {
      switch (ev.which) {
        case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
          if (_this.props.onDismiss) {
            _this.props.onDismiss(ev);

            ev.preventDefault();
            ev.stopPropagation();
          }

          break;
      }
    };

    _this._onFocus = function () {
      _this._containsFocus = true;
    };

    _this._onBlur = function (ev) {
      if (_this._root.current && _this._root.current.contains(ev.relatedTarget)) {
        _this._containsFocus = false;
      }
    };

    _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
    _this.state = {
      needsVerticalScrollBar: false
    };
    return _this;
  } // tslint:disable-next-line function-name


  Popup.prototype.UNSAFE_componentWillMount = function () {
    this._originalFocusedElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])().activeElement;
  };

  Popup.prototype.componentDidMount = function () {
    if (this._root.current) {
      this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(this._root.current, 'focus', this._onFocus, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(this._root.current, 'blur', this._onBlur, true));

      if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["doesElementContainFocus"])(this._root.current)) {
        this._containsFocus = true;
      }
    }

    this._updateScrollBarAsync();
  };

  Popup.prototype.componentDidUpdate = function () {
    this._updateScrollBarAsync();

    this._async.dispose();
  };

  Popup.prototype.componentWillUnmount = function () {
    this._disposables.forEach(function (dispose) {
      return dispose();
    });

    if (this.props.shouldRestoreFocus && this._originalFocusedElement && this._containsFocus && this._originalFocusedElement !== window) {
      // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
      // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
      // to reset the focus back to the thing it thinks should have been focused.
      if (this._originalFocusedElement) {
        this._originalFocusedElement.focus();
      }
    }
  };

  Popup.prototype.render = function () {
    var _a = this.props,
        role = _a.role,
        className = _a.className,
        ariaLabel = _a.ariaLabel,
        ariaLabelledBy = _a.ariaLabelledBy,
        ariaDescribedBy = _a.ariaDescribedBy,
        style = _a.style;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
      ref: this._root
    }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), {
      className: className,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      onKeyDown: this._onKeyDown,
      style: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        overflowY: this.state.needsVerticalScrollBar ? 'scroll' : undefined,
        outline: 'none'
      }, style)
    }), this.props.children);
  };

  Popup.prototype._updateScrollBarAsync = function () {
    var _this = this;

    this._async.requestAnimationFrame(function () {
      _this._getScrollBar();
    });
  };

  Popup.prototype._getScrollBar = function () {
    // If overflowY is overriden, don't waste time calculating whether the scrollbar is necessary.
    if (this.props.style && this.props.style.overflowY) {
      return;
    }

    var needsVerticalScrollBar = false;

    if (this._root && this._root.current && this._root.current.firstElementChild) {
      // ClientHeight returns the client height of an element rounded to an
      // integer. On some browsers at different zoom levels this rounding
      // can generate different results for the root container and child even
      // though they are the same height. This causes us to show a scroll bar
      // when not needed. Ideally we would use BoundingClientRect().height
      // instead however seems that the API is 90% slower than using ClientHeight.
      // Therefore instead we will calculate the difference between heights and
      // allow for a 1px difference to still be considered ok and not show the
      // scroll bar.
      var rootHeight = this._root.current.clientHeight;
      var firstChildHeight = this._root.current.firstElementChild.clientHeight;

      if (rootHeight > 0 && firstChildHeight > rootHeight) {
        needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
      }
    }

    if (this.state.needsVerticalScrollBar !== needsVerticalScrollBar) {
      this.setState({
        needsVerticalScrollBar: needsVerticalScrollBar
      });
    }
  };

  Popup.defaultProps = {
    shouldRestoreFocus: true
  };
  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Popup/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Popup/index.js ***!
  \***************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js ***!
  \***************************************************************************************************/
/*! exports provided: getIsChecked, hasSubmenu, isItemDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsChecked", function() { return getIsChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSubmenu", function() { return hasSubmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isItemDisabled", function() { return isItemDisabled; });
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
  if (item.canCheck) {
    return !!(item.isChecked || item.checked);
  }

  if (typeof item.isChecked === 'boolean') {
    return item.isChecked;
  }

  if (typeof item.checked === 'boolean') {
    return item.checked;
  } // Item is not checkable.


  return null;
}
function hasSubmenu(item) {
  return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
  return !!(item.isDisabled || item.disabled);
}

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js ***!
  \***********************************************************************************/
/*! exports provided: getIsChecked, hasSubmenu, isItemDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contextualMenuUtility */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsChecked", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["getIsChecked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasSubmenu", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["hasSubmenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isItemDisabled", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["isItemDisabled"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js ***!
  \***************************************************************************************/
/*! exports provided: BaseDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecorator", function() { return BaseDecorator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



var BaseDecorator =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseDecorator, _super);

  function BaseDecorator(props) {
    var _this = _super.call(this, props) || this; // tslint:disable-next-line:typedef


    _this._skipComponentRefResolution = true;
    _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
    return _this;
  }
  /**
   * Updates the ref to the component composed by the decorator, which will also take care of hoisting
   * (and unhoisting as appropriate) methods from said component.
   *
   * Pass this method as the argument to the 'ref' property of the composed component.
   */


  BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
    this._composedComponentInstance = composedComponentInstance;

    if (composedComponentInstance) {
      this._hoisted = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["hoistMethods"])(this, composedComponentInstance);
    } else if (this._hoisted) {
      Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["unhoistMethods"])(this, this._hoisted);
    }
  };

  return BaseDecorator;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js ***!
  \********************************************************************************************/
/*! exports provided: ResponsiveMode, setResponsiveMode, withResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return ResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResponsiveMode", function() { return setResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withResponsiveMode", function() { return withResponsiveMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseDecorator */ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var ResponsiveMode;

(function (ResponsiveMode) {
  ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
  ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
  ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
  ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
  ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
  ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
})(ResponsiveMode || (ResponsiveMode = {}));

var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];

var _defaultMode;
/**
 * Allows a server rendered scenario to provide a default responsive mode.
 */


function setResponsiveMode(responsiveMode) {
  _defaultMode = responsiveMode;
}
function withResponsiveMode(ComposedComponent) {
  var resultClass =
  /** @class */
  function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithResponsiveMode, _super);

    function WithResponsiveMode(props) {
      var _this = _super.call(this, props) || this;

      _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
      _this.state = {
        responsiveMode: _this._getResponsiveMode()
      };
      return _this;
    }

    WithResponsiveMode.prototype.componentDidMount = function () {
      var _this = this;

      this._events.on(window, 'resize', function () {
        var responsiveMode = _this._getResponsiveMode();

        if (responsiveMode !== _this.state.responsiveMode) {
          _this.setState({
            responsiveMode: responsiveMode
          });
        }
      });
    };

    WithResponsiveMode.prototype.componentWillUnmount = function () {
      this._events.dispose();
    };

    WithResponsiveMode.prototype.render = function () {
      var responsiveMode = this.state.responsiveMode;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({
        ref: this._updateComposedComponentRef,
        responsiveMode: responsiveMode
      }, this.props));
    };

    WithResponsiveMode.prototype._getResponsiveMode = function () {
      var responsiveMode = ResponsiveMode.small;
      var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])();

      if (typeof win !== 'undefined') {
        try {
          while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
            responsiveMode++;
          }
        } catch (e) {
          // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
          responsiveMode = ResponsiveMode.large;
        }
      } else {
        if (_defaultMode !== undefined) {
          responsiveMode = _defaultMode;
        } else {
          throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' + 'Call setResponsiveMode to define what the responsive mode is.');
        }
      }

      return responsiveMode;
    };

    return WithResponsiveMode;
  }(_BaseDecorator__WEBPACK_IMPORTED_MODULE_2__["BaseDecorator"]);

  return Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["hoistStatics"])(ComposedComponent, resultClass);
}

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js ***!
  \**************************************************************************************/
/*! exports provided: KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return KTP_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return KTP_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return KTP_FULL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return DATAKTP_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return DATAKTP_EXECUTE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return KTP_LAYER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return KTP_ARIA_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return KeytipEvents; });
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', '; // Events

var KeytipEvents;

(function (KeytipEvents) {
  KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
  KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
  KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
  KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
  KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
  KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
  KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
  KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js":
/*!************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js ***!
  \************************************************************************************/
/*! exports provided: KeytipManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return KeytipManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/keytips/KeytipConstants */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js");



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */

var KeytipManager =
/** @class */
function () {
  function KeytipManager() {
    this.keytips = [];
    this.persistedKeytips = []; // This is (and should be) updated and kept in sync
    // with the inKeytipMode in KeytipLayer.

    this.inKeytipMode = false; // Boolean that gets checked before entering keytip mode by the KeytipLayer
    // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)

    this.shouldEnterKeytipMode = true;
  }
  /**
   * Static function to get singleton KeytipManager instance
   *
   * @returns {KeytipManager} Singleton KeytipManager instance
   */


  KeytipManager.getInstance = function () {
    return this._instance;
  };
  /**
   * Registers a keytip
   *
   * @param keytipProps - Keytip to register
   * @param persisted - T/F if this keytip should be persisted, default is false
   * @returns {string} Unique ID for this keytip
   */


  KeytipManager.prototype.register = function (keytipProps, persisted) {
    if (persisted === void 0) {
      persisted = false;
    }

    var props = keytipProps;

    if (!persisted) {
      // Add the overflowSetSequence if necessary
      props = this.addParentOverflow(keytipProps);
    } // Create a unique keytip


    var uniqueKeytip = this._getUniqueKtp(props); // Add to array


    persisted ? this.persistedKeytips.push(uniqueKeytip) : this.keytips.push(uniqueKeytip);
    var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_ADDED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_ADDED;
    _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
      keytip: props,
      uniqueID: uniqueKeytip.uniqueID
    });
    return uniqueKeytip.uniqueID;
  };
  /**
   * Update a keytip
   *
   * @param keytipProps - Keytip to update
   * @param uniqueID - Unique ID of this keytip
   */


  KeytipManager.prototype.update = function (keytipProps, uniqueID) {
    var newKeytipProps = this.addParentOverflow(keytipProps);

    var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);

    var keytipIndex = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["findIndex"])(this.keytips, function (ktp) {
      return ktp.uniqueID === uniqueID;
    });

    if (keytipIndex >= 0) {
      // Update everything except 'visible'
      uniqueKeytip.keytip.visible = this.keytips[keytipIndex].keytip.visible; // Update keytip in this.keytips

      this.keytips = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(this.keytips, uniqueKeytip, keytipIndex); // Raise event

      _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_UPDATED, {
        keytip: uniqueKeytip.keytip,
        uniqueID: uniqueKeytip.uniqueID
      });
    }
  };
  /**
   * Unregisters a keytip
   *
   * @param keytipToRemove - IKeytipProps of the keytip to remove
   * @param uniqueID - Unique ID of this keytip
   * @param persisted - T/F if this keytip should be persisted, default is false
   */


  KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
    if (persisted === void 0) {
      persisted = false;
    }

    if (persisted) {
      // Remove keytip from this.persistedKeytips
      this.persistedKeytips = this.persistedKeytips.filter(function (uniqueKtp) {
        return uniqueKtp.uniqueID !== uniqueID;
      });
    } else {
      // Remove keytip from this.keytips
      this.keytips = this.keytips.filter(function (uniqueKtp) {
        return uniqueKtp.uniqueID !== uniqueID;
      });
    }

    var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_REMOVED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_REMOVED;
    _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
      keytip: keytipToRemove,
      uniqueID: uniqueID
    });
  };
  /**
   * Manual call to enter keytip mode
   */


  KeytipManager.prototype.enterKeytipMode = function () {
    _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].ENTER_KEYTIP_MODE);
  };
  /**
   * Manual call to exit keytip mode
   */


  KeytipManager.prototype.exitKeytipMode = function () {
    _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].EXIT_KEYTIP_MODE);
  };
  /**
   * Gets all IKeytipProps from this.keytips
   *
   * @returns {IKeytipProps[]} All keytips stored in the manager
   */


  KeytipManager.prototype.getKeytips = function () {
    return this.keytips.map(function (uniqueKeytip) {
      return uniqueKeytip.keytip;
    });
  };
  /**
   * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
   *
   * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
   * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
   */


  KeytipManager.prototype.addParentOverflow = function (keytipProps) {
    var fullSequence = keytipProps.keySequences.slice();
    fullSequence.pop();

    if (fullSequence.length !== 0) {
      var parentKeytip = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["find"])(this.getKeytips(), function (keytip) {
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["arraysEqual"])(fullSequence, keytip.keySequences);
      });

      if (parentKeytip && parentKeytip.overflowSetSequence) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, {
          overflowSetSequence: parentKeytip.overflowSetSequence
        });
      }
    }

    return keytipProps;
  };
  /**
   * Public function to bind for overflow items that have a submenu
   *
   * @param overflowButtonSequences
   * @param keytipSequences
   */


  KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
    _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_EXECUTE, {
      overflowButtonSequences: overflowButtonSequences,
      keytipSequences: keytipSequences
    });
  };
  /**
   * Creates an IUniqueKeytip object
   *
   * @param keytipProps - IKeytipProps
   * @param uniqueID - Unique ID, will default to the next unique ID if not passed
   * @returns {IUniqueKeytip} IUniqueKeytip object
   */


  KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
    if (uniqueID === void 0) {
      uniqueID = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getId"])();
    }

    return {
      keytip: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps),
      uniqueID: uniqueID
    };
  };

  KeytipManager._instance = new KeytipManager();
  return KeytipManager;
}();



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js ***!
  \**********************************************************************************/
/*! exports provided: sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return sequencesToID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return mergeOverflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return ktpTargetFromSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return ktpTargetFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return getAriaDescribedBy; });
/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipConstants */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns {string} String to use for the keytip ID.
 */

function sequencesToID(keySequences) {
  return keySequences.reduce(function (prevValue, keySequence) {
    return prevValue + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_SEPARATOR"] + keySequence.split('').join(_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_SEPARATOR"]);
  }, _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_PREFIX"]);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
 */

function mergeOverflows(keySequences, overflowKeySequences) {
  var overflowSequenceLen = overflowKeySequences.length;
  var overflowSequence = overflowKeySequences.slice().pop();
  var newKeySequences = keySequences.slice();
  return Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["addElementAtIndex"])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns {string} String selector to use to query for the keytip target.
 */

function ktpTargetFromSequences(keySequences) {
  return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"] + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns {string} String selector to use to query for the keytip execute target.
 */

function ktpTargetFromId(keytipId) {
  return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"] + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns {string} The aria-describedby value to set on the component with this keytip.
 */

function getAriaDescribedBy(keySequences) {
  var describedby = ' ' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_LAYER_ID"];

  if (!keySequences.length) {
    // Return just the layer ID
    return describedby;
  }

  return describedby + ' ' + sequencesToID(keySequences);
}

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning.js":
/*!**************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning.js ***!
  \**************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, getMaxHeight, getOppositeEdge, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning/index */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["__positioningTestPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Position"]; });



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js ***!
  \********************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, getMaxHeight, getOppositeEdge, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["__positioningTestPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning.types */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["Position"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js ***!
  \**************************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, getMaxHeight, getOppositeEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return __positioningTestPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return positionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return positionCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return getMaxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return getOppositeEdge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positioning.types */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js");
var _a;






var Rectangle =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Rectangle, _super);

  function Rectangle() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Rectangle;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"]);



function _createPositionData(targetEdge, alignmentEdge, isAuto) {
  return {
    targetEdge: targetEdge,
    alignmentEdge: alignmentEdge,
    isAuto: isAuto
  };
} // Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target


var DirectionalDictionary = (_a = {}, _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, undefined, true), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, undefined, true), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right), _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom), _a);

function _isRectangleWithinBounds(rect, boundingRect) {
  if (rect.top < boundingRect.top) {
    return false;
  }

  if (rect.bottom > boundingRect.bottom) {
    return false;
  }

  if (rect.left < boundingRect.left) {
    return false;
  }

  if (rect.right > boundingRect.right) {
    return false;
  }

  return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */


function _getOutOfBoundsEdges(rect, boundingRect) {
  var outOfBounds = new Array();

  if (rect.top < boundingRect.top) {
    outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top);
  }

  if (rect.bottom > boundingRect.bottom) {
    outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom);
  }

  if (rect.left < boundingRect.left) {
    outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left);
  }

  if (rect.right > boundingRect.right) {
    outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right);
  }

  return outOfBounds;
}

function _getEdgeValue(rect, edge) {
  return rect[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][edge]];
}

function _setEdgeValue(rect, edge, value) {
  rect[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][edge]] = value;
  return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @returns {number}
 */


function _getCenterValue(rect, edge) {
  var edges = _getFlankingEdges(edge);

  return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 *
 *
 * @param {RectangleEdge} edge
 * @param {number} value
 * @returns {number}
 */


function _getRelativeEdgeValue(edge, value) {
  if (edge > 0) {
    return value;
  } else {
    return value * -1;
  }
}

function _getRelativeRectEdgeValue(edge, rect) {
  return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}

function _getRelativeEdgeDifference(rect, hostRect, edge) {
  var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);

  return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} newValue
 * @returns {Rectangle}
 */


function _moveEdge(rect, edge, newValue) {
  var difference = _getEdgeValue(rect, edge) - newValue;
  rect = _setEdgeValue(rect, edge, newValue);
  rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
  return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} edge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */


function _alignEdges(rect, target, edge, gap) {
  if (gap === void 0) {
    gap = 0;
  }

  return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} targetEdge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */


function _alignOppositeEdges(rect, target, targetEdge, gap) {
  if (gap === void 0) {
    gap = 0;
  }

  var oppositeEdge = targetEdge * -1;

  var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);

  return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} bounds
 * @param {RectangleEdge} edge
 * @returns {boolean}
 */


function _isEdgeInBounds(rect, bounds, edge) {
  var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);

  return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @returns {IElementPosition}
 */


function _flipToFit(rect, target, bounding, positionData, gap) {
  if (gap === void 0) {
    gap = 0;
  }

  var directions = [_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top]; // In RTL page, RectangleEdge.right has a higher priority than RectangleEdge.left, therefore the order should be updated.

  if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])()) {
    directions[0] *= -1;
    directions[1] *= -1;
  }

  var currentEstimate = rect;
  var currentEdge = positionData.targetEdge;
  var currentAlignment = positionData.alignmentEdge; // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.

  for (var i = 0; i < 4; i++) {
    if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
      directions.splice(directions.indexOf(currentEdge), 1);

      if (directions.indexOf(currentEdge * -1) > -1) {
        currentEdge = currentEdge * -1;
      } else {
        currentAlignment = currentEdge;
        currentEdge = directions.slice(-1)[0];
      }

      currentEstimate = _estimatePosition(rect, target, {
        targetEdge: currentEdge,
        alignmentEdge: currentAlignment
      }, gap);
    } else {
      return {
        elementRectangle: currentEstimate,
        targetEdge: currentEdge,
        alignmentEdge: currentAlignment
      };
    }
  }

  return {
    elementRectangle: rect,
    targetEdge: positionData.targetEdge,
    alignmentEdge: currentAlignment
  };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges into position,
 * when alignTargetEdge is specified.
 * @param elementEstimate
 * @param target
 * @param bounding
 * @param gap
 */


function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
  var alignmentEdge = elementEstimate.alignmentEdge,
      targetEdge = elementEstimate.targetEdge,
      elementRectangle = elementEstimate.elementRectangle;
  var oppositeEdge = alignmentEdge * -1;

  var newEstimate = _estimatePosition(elementRectangle, target, {
    targetEdge: targetEdge,
    alignmentEdge: oppositeEdge
  }, gap, coverTarget);

  return {
    elementRectangle: newEstimate,
    targetEdge: targetEdge,
    alignmentEdge: oppositeEdge
  };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 *
 * @param {Rectangle} element
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [directionalHintFixed]
 * @param {boolean} [coverTarget]
 * @returns {IElementPosition}
 */


function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
  if (gap === void 0) {
    gap = 0;
  }

  var alignmentEdge = positionData.alignmentEdge,
      alignTargetEdge = positionData.alignTargetEdge;
  var elementEstimate = {
    elementRectangle: element,
    targetEdge: positionData.targetEdge,
    alignmentEdge: alignmentEdge
  };

  if (!directionalHintFixed && !coverTarget) {
    elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
  }

  var outOfBounds = _getOutOfBoundsEdges(element, bounding);

  if (alignTargetEdge) {
    // The edge opposite to the alignment edge might be out of bounds. Flip alignment to see if we can get it within bounds.
    if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
      var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);

      if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
        return flippedElementEstimate;
      }
    }
  } else {
    for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
      var direction = outOfBounds_1[_i];
      elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
    }
  }

  return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} point
 * @returns {Rectangle}
 */


function _centerEdgeToPoint(rect, edge, point) {
  var positiveEdge = _getFlankingEdges(edge).positiveEdge;

  var elementMiddle = _getCenterValue(rect, edge);

  var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);

  return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 *
 * @param {Rectangle} elementToPosition
 * @param {Rectangle} target
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [coverTarget]
 * @returns {Rectangle}
 */


function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
  if (gap === void 0) {
    gap = 0;
  }

  var estimatedElementPosition;
  var alignmentEdge = positionData.alignmentEdge,
      targetEdge = positionData.targetEdge;
  var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
  estimatedElementPosition = coverTarget ? _alignEdges(elementToPosition, target, targetEdge, gap) : _alignOppositeEdges(elementToPosition, target, targetEdge, gap); // if no alignment edge is provided it's supposed to be centered.

  if (!alignmentEdge) {
    var targetMiddlePoint = _getCenterValue(target, targetEdge);

    estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
  } else {
    estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
  }

  return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 *
 * @param {RectangleEdge} edge
 * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
 */


function _getFlankingEdges(edge) {
  if (edge === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top || edge === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom) {
    return {
      positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left,
      negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right
    };
  } else {
    return {
      positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top,
      negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom
    };
  }
}
/**
 * Retrieve the final value for the return edge of elementRectangle.
 * If the elementRectangle is closer to one side of the bounds versus the other, the return edge is flipped to grow inward.
 *
 * @param elementRectangle
 * @param targetEdge
 * @param bounds
 */


function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
  if (bounds && Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) > Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
    return returnEdge * -1;
  }

  return returnEdge;
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 *
 * @param {Rectangle} elementRectangle
 * @param {HTMLElement} hostElement
 * @param {RectangleEdge} targetEdge
 * @param {RectangleEdge} bounds
 * @param {RectangleEdge} [alignmentEdge]
 * @param {boolean} coverTarget
 * @returns {IPartialIRectangle}
 */


function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget) {
  var returnValue = {};

  var hostRect = _getRectangleFromElement(hostElement);

  var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
  var elementEdgeString = _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][elementEdge];

  var returnEdge = _finalizeReturnEdge(elementRectangle, alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);

  returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
  returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
  return returnValue;
} // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)


function _calculateActualBeakWidthInPixels(beakWidth) {
  return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
 * For instance bottomLeftEdge would become bottomRightEdge.
 * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
 *
 * @param {IPositionProps} props
 * @returns {IPositionDirectionalHintData}
 */


function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
  if (directionalHint === void 0) {
    directionalHint = _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomAutoEdge;
  }

  if (previousPositions) {
    return {
      alignmentEdge: previousPositions.alignmentEdge,
      isAuto: previousPositions.isAuto,
      targetEdge: previousPositions.targetEdge
    };
  }

  var positionInformation = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, DirectionalDictionary[directionalHint]);

  if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])()) {
    // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
    if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
      positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
    }

    return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
  }

  return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 *
 * @param {IPositionDirectionalHintData} positionData
 * @param {Rectangle} target
 * @param {Rectangle} boundingRect
 * @param {boolean} [coverTarget]
 * @returns {IPositionDirectionalHintData}
 */


function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
  if (positionData.isAuto) {
    positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
  }

  positionData.alignTargetEdge = alignTargetEdge;
  return positionData;
}

function getClosestEdge(targetEdge, target, boundingRect) {
  var targetCenter = _getCenterValue(target, targetEdge);

  var boundingCenter = _getCenterValue(boundingRect, targetEdge);

  var _a = _getFlankingEdges(targetEdge),
      positiveEdge = _a.positiveEdge,
      negativeEdge = _a.negativeEdge;

  if (targetCenter <= boundingCenter) {
    return positiveEdge;
  } else {
    return negativeEdge;
  }
}

function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
  var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);

  if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
    return {
      elementRectangle: estimatedElementPosition,
      targetEdge: positionData.targetEdge,
      alignmentEdge: positionData.alignmentEdge
    };
  } else {
    return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
  }
}

function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
  var targetEdge = elementPosition.targetEdge * -1; // The "host" element that we will use to help position the beak.

  var actualElement = new Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
  var returnValue = {};

  var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);

  returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
  returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
  return {
    elementPosition: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, returnValue),
    closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
    targetEdge: targetEdge
  };
}

function _positionBeak(beakWidth, elementPosition) {
  var target = elementPosition.targetRectangle;
  /**
   * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
   * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
   * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
   * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
   * */

  var _a = _getFlankingEdges(elementPosition.targetEdge),
      positiveEdge = _a.positiveEdge,
      negativeEdge = _a.negativeEdge;

  var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);

  var elementBounds = new Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
  var beakPosition = new Rectangle(0, beakWidth, 0, beakWidth);
  beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
  beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));

  if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
    beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
  } else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
    beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
  }

  return beakPosition;
}

function _getRectangleFromElement(element) {
  var clientRect = element.getBoundingClientRect();
  return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}

function _getRectangleFromIRect(rect) {
  return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
}

function _getTargetRect(bounds, target) {
  var targetRectangle;

  if (target) {
    if (target.preventDefault) {
      var ev = target;
      targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
    } else if (target.getBoundingClientRect) {
      targetRectangle = _getRectangleFromElement(target); // HTMLImgElements can have x and y values. The check for it being a point must go last.
    } else {
      var point = target;
      targetRectangle = new Rectangle(point.x, point.x, point.y, point.y);
    }

    if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
      var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);

      for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
        var direction = outOfBounds_2[_i];
        targetRectangle[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][direction]] = bounds[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][direction]];
      }
    }
  } else {
    targetRectangle = new Rectangle(0, 0, 0, 0);
  }

  return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */


function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
  var maxHeight = 0;
  var directionalHint = DirectionalDictionary[targetEdge]; // If cover target is set, then the max height should be calculated using the opposite of the target edge since
  // that's the direction that the callout will expand in.
  // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
  // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
  // is (bottom of target) - (top of screen) - gapSpace.

  var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;

  if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top) {
    maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
  } else if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom) {
    maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
  } else {
    maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
  }

  return maxHeight > 0 ? maxHeight : bounds.height;
}

function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
  var gap = props.gapSpace ? props.gapSpace : 0;

  var targetRect = _getTargetRect(boundingRect, props.target);

  var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);

  var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);

  return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, positionedElement, {
    targetRectangle: targetRect
  });
}

function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget) {
  var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget);

  return {
    elementPosition: finalizedElement,
    targetEdge: positionedElement.targetEdge,
    alignmentEdge: positionedElement.alignmentEdge
  };
}

function _positionElement(props, hostElement, elementToPosition, previousPositions) {
  var boundingRect = props.bounds ? _getRectangleFromIRect(props.bounds) : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);

  var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);

  return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
}

function _positionCallout(props, hostElement, callout, previousPositions) {
  var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
  var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
  var positionProps = props;
  positionProps.gapSpace = gap;
  var boundingRect = props.bounds ? _getRectangleFromIRect(props.bounds) : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);

  var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);

  var beakPositioned = _positionBeak(beakWidth, positionedElement);

  var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);

  return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget), {
    beakPosition: finalizedBeakPosition
  });
} // END PRIVATE FUNCTIONS

/* tslint:disable:variable-name */


var __positioningTestPackage = {
  _finalizePositionData: _finalizePositionData,
  _finalizeBeakPosition: _finalizeBeakPosition,
  _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
  _positionElementWithinBounds: _positionElementWithinBounds,
  _positionBeak: _positionBeak,
  _getPositionData: _getPositionData,
  _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle
};
/* tslint:enable:variable-name */

/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositioningData
 * can be passed to ensure that the positioning element repositions based on
 * its previous targets rather than starting with directionalhint.
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @param {IPositionedData} previousPositions
 * @returns
 */

function positionElement(props, hostElement, elementToPosition, previousPositions) {
  return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
  return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */

function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
  if (gapSpace === void 0) {
    gapSpace = 0;
  }

  var mouseTarget = target;
  var elementTarget = target;
  var pointTarget = target;
  var targetRect;
  var boundingRectangle = bounds ? _getRectangleFromIRect(bounds) : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);

  if (mouseTarget.stopPropagation) {
    targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
  } else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
    targetRect = new Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
  } else {
    targetRect = _getRectangleFromElement(elementTarget);
  }

  return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */

function getOppositeEdge(edge) {
  return edge * -1;
}

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js ***!
  \********************************************************************************************/
/*! exports provided: RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return RectangleEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var RectangleEdge;

(function (RectangleEdge) {
  RectangleEdge[RectangleEdge["top"] = 1] = "top";
  RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
  RectangleEdge[RectangleEdge["left"] = 2] = "left";
  RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));

var Position;

(function (Position) {
  Position[Position["top"] = 0] = "top";
  Position[Position["bottom"] = 1] = "bottom";
  Position[Position["start"] = 2] = "start";
  Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));

/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/version.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/version.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "@uifabric/set-version");
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__);
// office-ui-fabric-react@6.185.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('office-ui-fabric-react', '6.185.0');

/***/ })

};;
//# sourceMappingURL=0.js.map