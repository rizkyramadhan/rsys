import grapesjs from "grapesjs";

export default grapesjs.plugins.add(
  "gjs-custom-plugin",
  (editor, opts = {}) => {
    const config = {
      styleTraits: styleTraits,
      styleManager: styleManager,
      ...opts
    };

    const components = [
      require("./ui-text"),
      require("./ui-layout"),
      require("./ui-button"),
      require("./ui-select"),
      require("./ui-query")
    ];

    // DOM Components
    components.forEach((ui: any) => {
      ui.default(editor, config);
    });

    editor.TraitManager.addType("label", {
      noLabel: true,
      templateInput: "",
      createInput({ trait }) {
        return `<div class="gjs-traits-label" style="margin: 0 -10px; background: #313742; letter-spacing: 1px;font-family: Helvetica,sans-serif;
        font-size: .75rem;">${trait.attributes.label}</div>`;
      }
    });

    // Default Style
    styleTraits.forEach(trait => {
      editor.TraitManager.addType(trait.type, {
        ...styleManager[trait.type]
      });
    });
  }
);

const styleTraits = [
  {
    label: "Spacing",
    type: "label"
  },
  {
    label: "Spacing",
    name: "spacing",
    type: "layoutspacing"
  },
  {
    label: "Size",
    type: "label"
  },
  {
    label: "Size",
    name: "size",
    type: "layoutSize"
  },
  {
    label: "Overflow",
    name: "overflow",
    type: "layoutOverflow"
  },
  {
    label: "Layout",
    type: "label"
  },
  {
    label: "Display",
    name: "display",
    type: "layoutDisplay"
  },
  {
    label: "Direction",
    name: "direction",
    type: "layoutDirection"
  },
  {
    label: "Align",
    name: "align",
    type: "layoutAlign"
  },
  {
    label: "Justify",
    name: "justify",
    type: "layoutJustify"
  }
];

const styleManager = {
  layoutspacing: {
    noLabel: true,
    templateInput: "",
    createInput: ({ elInput }) => {
      const el = document.createElement("div");
      let marginL = 0;
      el.innerHTML = `
      <div
  style="align-items: center; display: grid; gap: 8px 4px; grid-template-columns: 44px 1fr; padding: 0px 8px 8px; grid-column: 1 / -1;"
>
  <div
    style="position: relative; display: grid; margin-top: 8px; margin-right: 8px; width: 224px; height: 120px; grid-template-columns: 36px 4px 36px 1fr 36px 4px 36px; grid-template-rows: 24px 4px 24px 1fr 24px 4px 24px; outline-style: none; cursor: default; user-select: none;"
  >
    <div
      width="224"
      height="120"
      style="grid-area: 1 / 1 / -1 / -1; display: grid; grid-template-columns: 36px 1fr 36px; grid-template-rows: 24px minmax(16px, 1fr) 24px; justify-items: center; width: 224px; height: 120px;"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="224"
        height="120"
        style="grid-area: 1 / 1 / -1 / -1;"
      >
        <g style="">
          <g style="">
            <path
              class="margin-top"
              mode="delta"
              fill="currentColor"
              cursor="n-resize"
              d="
    m1,1
    h223
    l-36,24
    h-151
    l-36,-24z
  "
              threshold="1"
              data-automation-id="margin-top-button"
              aria-label="Margin top button"
              delay="0"
              style="color: #3d4654; cursor: n-resize;"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              class="margin-right"
              mode="delta"
              fill="currentColor"
              cursor="e-resize"
              d="
    m223,1
    v119
    l-36,-24
    v-71
    l36,-24z
  "
              threshold="1"
              data-automation-id="margin-right-button"
              aria-label="Margin right button"
              delay="0"
              style="color: #434e5f; cursor: e-resize;"
            ></path>
          </g>
        </g>
        <g style="">
          <g style="">
            <path
              class="margin-bottom
              mode="delta"
              fill="currentColor"
              cursor="s-resize"
              d="
    m1,119
    h223
    l-36,-24
    h-151
    l-36,24z
  "
              threshold="1"
              data-automation-id="margin-bottom-button"
              aria-label="Margin bottom button"
              delay="0"
              style="color: #3d4654; cursor: s-resize;"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              class="margin-left"
              mode="delta"
              fill="currentColor"
              cursor="w-resize"
              d="
    m1,1
    v119
    l36,-24
    v-71
    l-36,-24z
  "
              threshold="1"
              data-automation-id="margin-left-button"
              aria-label="Margin left button"
              delay="0"
              style="color: #434e5f; cursor: w-resize;"
            ></path>
          </g>
        </g>
        <clipPath id="margin-outer">
          <rect
            x="0"
            y="0"
            width="224"
            height="120"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none;"
          ></rect>
        </clipPath>
        <rect
          clip-path="url(#margin-outer)"
          x="0"
          y="0"
          width="224"
          height="120"
          fill="transparent"
          rx="2"
          ry="2"
          style="pointer-events: none; stroke-width: 2px; stroke: rgb(51, 51, 51);"
        ></rect>
        <clipPath id="margin-inner">
          <rect
            x="36"
            y="24"
            width="152"
            height="72"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none;"
          ></rect>
        </clipPath>
        <rect
          clip-path="url(#margin-inner)"
          x="36"
          y="24"
          width="152"
          height="72"
          fill="transparent"
          rx="2"
          ry="2"
          style="pointer-events: none; stroke-width: 2px; stroke: rgb(51, 51, 51);"
        ></rect>
      </svg>
      <div
        class="margin-top-value"
        mode="delta"
        name="marginTop"
        data-automation-id="margin-top-edit"
        aria-label="Margin top edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(139, 190, 250); background: rgba(76, 152, 241, 0.15); padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 1 / 2 / 2 / 3;"
      >
        0
      </div>
      <div
        class="margin-right-value"
        mode="delta"
        name="marginRight"
        data-automation-id="margin-right-edit"
        aria-label="Margin right edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(217, 217, 217); background: transparent; padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 2 / 3 / 3 / 4;"
      >
        0
      </div>
      <div
        class="margin-bottom-value"
        mode="delta"
        name="marginBottom"
        data-automation-id="margin-bottom-edit"
        aria-label="Margin bottom edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(139, 190, 250); background: rgba(76, 152, 241, 0.15); padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 3 / 2 / 4 / 3;"
      >
        0
      </div>
      <div
        class="margin-left-value"
        mode="delta"
        name="marginLeft"
        data-automation-id="margin-left-edit"
        aria-label="Margin left edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(217, 217, 217); background: transparent; padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 2 / 1 / 3 / 2;"
      >
        0
      </div>
    </div>
    <div
      width="144"
      height="64"
      style="grid-area: 3 / 3 / span 3 / span 3; display: grid; grid-template-columns: 36px 1fr 36px; grid-template-rows: 24px minmax(16px, 1fr) 24px; justify-items: center; width: 144px; height: 64px;"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="144"
        height="64"
        style="grid-area: 1 / 1 / -1 / -1;"
      >
        <g style="">
          <g style="">
            <path
              class="padding-top"
              mode="delta"
              fill="currentColor"
              cursor="s-resize"
              d="
    m1,1
    h143
    l-36,24
    h-71
    l-36,-24z
  "
              threshold="1"
              data-automation-id="padding-top-button"
              aria-label="Padding top button"
              delay="0"
              style="color: #3d4654; cursor: s-resize;"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              class="padding-right"
              mode="delta"
              fill="currentColor"
              cursor="w-resize"
              d="
    m143,1
    v63
    l-36,-24
    v-15
    l36,-24z
  "
              threshold="1"
              data-automation-id="padding-right-button"
              aria-label="Padding right button"
              delay="0"
              style="color: #434e5f; cursor: w-resize;"
            ></path>
          </g>
        </g>
        <g style="">
          <g style="">
            <path
              class="padding-bottom"
              mode="delta"
              fill="currentColor"
              cursor="n-resize"
              d="
    m1,63
    h143
    l-36,-24
    h-71
    l-36,24z
  "
              threshold="1"
              data-automation-id="padding-bottom-button"
              aria-label="Padding bottom button"
              delay="0"
              style="color: #3d4654; cursor: n-resize;"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              class="padding-left"
              mode="delta"
              fill="currentColor"
              cursor="e-resize"
              d="
    m1,1
    v63
    l36,-24
    v-15
    l-36,-24z
  "
              threshold="1"
              data-automation-id="padding-left-button"
              aria-label="Padding left button"
              delay="0"
              style="color: #434e5f; cursor: e-resize;"
            ></path>
          </g>
        </g>
        <clipPath id="padding-outer">
          <rect
            x="0"
            y="0"
            width="144"
            height="64"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none;"
          ></rect>
        </clipPath>
        <rect
          clip-path="url(#padding-outer)"
          x="0"
          y="0"
          width="144"
          height="64"
          fill="transparent"
          rx="2"
          ry="2"
          style="pointer-events: none; stroke-width: 2px; stroke: rgb(51, 51, 51);"
        ></rect>
        <clipPath id="padding-inner">
          <rect
            x="36"
            y="24"
            width="72"
            height="16"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none;"
          ></rect>
        </clipPath>
        <rect
          clip-path="url(#padding-inner)"
          x="36"
          y="24"
          width="72"
          height="16"
          fill="transparent"
          rx="2"
          ry="2"
          style="pointer-events: none; stroke-width: 2px; stroke: rgb(51, 51, 51);"
        ></rect>
      </svg>
      <div
        class="padding-top-value"
        mode="delta"
        name="paddingTop"
        data-automation-id="padding-top-edit"
        aria-label="Padding top edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(217, 217, 217); background: transparent; padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 1 / 2 / 2 / 3;"
      >
        0
      </div>
      <div
        class="padding-right-value"
        mode="delta"
        name="paddingRight"
        data-automation-id="padding-right-edit"
        aria-label="Padding right edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(217, 217, 217); background: transparent; padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 2 / 3 / 3 / 4;"
      >
        0
      </div>
      <div
        class="padding-bottom-value"
        mode="delta"
        name="paddingBottom"
        data-automation-id="padding-bottom-edit"
        aria-label="Padding bottom edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(217, 217, 217); background: transparent; padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 3 / 2 / 4 / 3;"
      >
        0
      </div>
      <div
        class="padding-left-value"
        mode="delta"
        name="paddingLeft"
        data-automation-id="padding-left-edit"
        aria-label="Padding left edit"
        style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 10px; letter-spacing: -0.2px; display: flex; color: rgb(217, 217, 217); background: transparent; padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; place-self: center; position: relative; opacity: 1; align-items: center; justify-content: center; grid-area: 2 / 1 / 3 / 2;"
      >
        0
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style="grid-area: 3 / 3 / span 3 / span 3; pointer-events: none; margin-top: 6px;"
    >
      <text
        x="6"
        y="6"
        fill="#a6a6a6"
        font-style="italic"
        font-weight="bold"
        font-size="8"
      >
        PADDING
      </text></svg
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style="grid-area: 1 / 1 / -1 / -1; pointer-events: none; margin-top: 6px;"
    >
      <text
        x="6"
        y="6"
        fill="#a6a6a6"
        font-style="italic"
        font-weight="bold"
        font-size="8"
      >
        MARGIN
      </text>
    </svg>
  </div>
</div>
`;
      return el;
    },
    onUpdate({ elInput, component, event }) {
      const selector = [
        {
          el: ".margin-top",
          value: ".margin-top-value",
          attr: "layoutmargintop",
          type: "yt"
        },
        {
          el: ".margin-bottom",
          value: ".margin-bottom-value",
          attr: "layoutmarginbottom",
          type: "yb"
        },
        {
          el: ".margin-left",
          value: ".margin-left-value",
          attr: "layoutmarginleft",
          type: "xl"
        },
        {
          el: ".margin-right",
          value: ".margin-right-value",
          attr: "layoutmarginright",
          type: "xr"
        },
        {
          el: ".padding-top",
          value: ".padding-top-value",
          attr: "layoutpaddingtop",
          type: "yt"
        },
        {
          el: ".padding-bottom",
          value: ".padding-bottom-value",
          attr: "layoutpaddingbottom",
          type: "yb"
        },
        {
          el: ".padding-left",
          value: ".padding-left-value",
          attr: "layoutpaddingleft",
          type: "xl"
        },
        {
          el: ".padding-right",
          value: ".padding-right-value",
          attr: "layoutpaddingright",
          type: "xr"
        }
      ];

      selector.forEach(elem => {
        let value = elInput.querySelector(elem.value).textContent;
        elInput.querySelector(elem.el).onmousedown = e => {
          e.preventDefault();
          let initX = e.clientX;
          let initY = e.clientY;
          window.onmouseup = () => {
            window.onmouseup = null;
            window.onmousemove = null;
          };
          window.onmousemove = e => {
            e.preventDefault();
            let valX = initX - e.clientX;
            let valY = initY - e.clientY;
            let v = valY;
            if (elem.type === "yt") {
              v = valY;
            } else if (elem.type === "xl") {
              v = valX;
            } else if (elem.type === "yb") {
              v = valY * -1;
            } else if (elem.type === "xr") {
              v = valX * -1;
            }
            elInput.querySelector(elem.value).innerHTML = parseInt(value) + v;
            component.addAttributes({
              [elem.attr]: parseInt(value) + v + "px"
            });
          };
        };
      });
    }
  },
  layoutSize: {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait }) => {
      const el = document.createElement("div");
      el.innerHTML = `
      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; margin-bottom: 10px;">
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 0; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Width">Width</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-layout-width" type="text" placeholder=""></div>
            </div>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 10px; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Height">Height</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-layout-height" type="text" placeholder=""></div>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; margin-bottom: 10px;">
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 0; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Min W">Min W</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-layout-min-width" type="text" placeholder=""></div>
            </div>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 10px; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Min H">Min H</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-layout-min-height" type="text" placeholder=""></div>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; padding-bottom: 10px; border-bottom: 1px solid #313742">
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 0; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Max W">Max W</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-layout-max-width" type="text" placeholder=""></div>
            </div>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 10px; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Max W">Max W</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-layout-max-height" type="text" placeholder=""></div>
            </div>
          </div>
        </div>
      </div>
    `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const layoutwidth = elInput.querySelector(".inp-layout-width").value;
      const layoutminWidth = elInput.querySelector(".inp-layout-min-width")
        .value;
      const layoutmaxWidth = elInput.querySelector(".inp-layout-max-width")
        .value;
      const layoutheight = elInput.querySelector(".inp-layout-height").value;
      const layoutminHeight = elInput.querySelector(".inp-layout-min-height")
        .value;
      const layoutmaxHeight = elInput.querySelector(".inp-layout-max-height")
        .value;
      component.addAttributes({
        layoutwidth,
        layoutminWidth,
        layoutmaxWidth,
        layoutheight,
        layoutminHeight,
        layoutmaxHeight
      });
    }
  },
  layoutOverflow: {
    createInput: ({ trait }) => {
      const el = document.createElement("div");
      el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      <div class="gjs-field-radio">
        <div class="gjs-radio-items">
          <div class="gjs-radio-item" style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-overflow" id="overflow-visible" name="overflow" value="visible">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Visible" for="overflow-visible" style="width: 100%;">
            <svg data-icon="eye" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13c3.866 0 7-4.5 7-5s-3.134-5-7-5-7 4.5-7 5 3.134 5 7 5zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor"></path><circle opacity=".6" cx="8" cy="8" r="2" fill="currentColor"></circle></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-overflow" id="overflow-hidden" name="overflow" value="hidden">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Hidden" for="overflow-hidden" style="width: 100%;">
            <svg data-icon="eye-invisible" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M9.842 3.33A5.537 5.537 0 0 0 8 3C4.134 3 1 7.5 1 8c0 .23.666 1.311 1.763 2.409l2.242-2.242a3 3 0 0 1 3.162-3.162l1.675-1.676zm-2.009 7.665a3 3 0 0 0 3.162-3.162l2.242-2.242C14.334 6.69 15 7.77 15 8c0 .5-3.134 5-7 5a5.538 5.538 0 0 1-1.842-.33l1.675-1.675z" fill="currentColor"></path><path d="M2 14L14 2" stroke="currentColor" stroke-width="1.5"></path></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-overflow" id="overflow-scroll" name="overflow" value="scroll">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Scroll" for="overflow-scroll" style="width: 100%;">
            <svg data-icon="overflow-scroll" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2v1l-1-1h1zM9 3l1-1H0v1h9zm0 10H0v1h10l-1-1zm4 0l-1 1h1v-1z" fill="currentColor"></path><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M2 4h7v2H2V4zm0 3h7v2H2V7zm7 3H2v2h7v-2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4h2v8h-2l3 3 3-3h-2V4h2l-3-3-3 3z" fill="currentColor"></path></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-overflow" id="overflow-auto" name="overflow" value="auto">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Auto" for="overflow-auto" style="width: 100%;">
            Auto
            </label>
          </div>
        </div>
      </div>
    </div>
      `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const layoutoverflow = elInput.querySelector(
        ".inp-layout-overflow:checked"
      ).value;
      component.addAttributes({ layoutoverflow });
    }
  },
  layoutDisplay: {
    createInput: ({ trait }) => {
      const el = document.createElement("div");
      el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio">
    <div class="gjs-radio-items">
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-display" id="display-block" name="display" value="block">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Block" for="display-block" style="width: 100%;">
            <svg data-icon="display-block" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4h12v8H2V4zm10 2H4v4h8V6z" fill="currentColor"></path><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M2 1h12v1H2V1zm0 13h12v1H2v-1z" fill="currentColor"></path></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-display" id="display-flex" name="display" value="flex">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Horizontal" for="display-flex" style="width: 100%;">
            <svg data-icon="display-flex" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v12H2V2zM1 1h14v14H1V1z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4H4v8h3V4zm2 0h3v8H9V4z" fill="currentColor"></path></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-display" id="display-inline-block" name="display" value="inline-block">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Horizontal" for="display-inline-block" style="width: 100%;">
            <svg data-icon="display-inline-block" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4h8v8H4V4zm6 2H6v4h4V6z" fill="currentColor"></path><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M1 2h1v12H1V2zm14 0h-1v12h1V2z" fill="currentColor"></path></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-display" id="display-inline" name="display" value="inline">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Horizontal" for="display-inline" style="width: 100%;">
            <svg data-icon="display-inline" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M1 2h1v12H1V2zm14 0h-1v12h1V2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 3L3.5 13h2l1-3h3l1 3h2L8.75 3h-1.5zm1.917 6L8 5.5 6.833 9h2.334z" fill="currentColor"></path></svg>
            </label>
          </div>
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-display" id="display-none" name="display" value="none">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Horizontal" for="display-none" style="width: 100%;">
            <svg data-icon="eye-invisible" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M9.842 3.33A5.537 5.537 0 0 0 8 3C4.134 3 1 7.5 1 8c0 .23.666 1.311 1.763 2.409l2.242-2.242a3 3 0 0 1 3.162-3.162l1.675-1.676zm-2.009 7.665a3 3 0 0 0 3.162-3.162l2.242-2.242C14.334 6.69 15 7.77 15 8c0 .5-3.134 5-7 5a5.538 5.538 0 0 1-1.842-.33l1.675-1.675z" fill="currentColor"></path><path d="M2 14L14 2" stroke="currentColor" stroke-width="1.5"></path></svg>
            </label>
          </div>
        </div>
        </div>
  </div>
      `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const layoutdisplay = elInput.querySelector(".inp-layout-display:checked")
        .value;
      component.addAttributes({ layoutdisplay });
    }
  },
  layoutDirection: {
    createInput: ({ trait }) => {
      const el = document.createElement("div");
      el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio">
    <div class="gjs-radio-items">
          <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-direction" id="flex-direction-row" name="flex-direction" value="row">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Horizontal" for="flex-direction-row" style="width: 100%;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item" style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-direction" id="flex-direction-column" name="flex-direction" value="column">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Vertical" for="flex-direction-column" style="width: 100%;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></svg>

            </label>
          </div>
        
          <div class="gjs-radio-item" style="justify-content: center;align-items: center;display: flex;">
            <input type="radio" class="gjs-sm-radio inp-layout-direction" id="flex-direction-row-reverse" name="flex-direction" value="row-reverse">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="Reverse" for="flex-direction-row-reverse" style="width: 100%;">
            <svg data-icon="arrow-reverse" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.99 4L11 1 7 5l4 4-.01-3V4zM15 4h-4v2h4V4zm-9.99 6L5 7l4 4-4 4 .01-3v-2zM1 12h4v-2H1v2z" fill="currentColor"></path></svg>
            </label>
          </div>
        </div>
        </div>
  </div>
      `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const layoutdirection = elInput.querySelector(
        ".inp-layout-direction:checked"
      ).value;
      component.addAttributes({ layoutdirection });
    }
  },
  layoutAlign: {
    createInput: ({ trait }) => {
      const el = document.createElement("div");
      el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio"><div class="gjs-radio-items">
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-align" id="align-items-start" name="align-items" value="start">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Start" for="align-items-start">
            <svg data-icon="align-items-start-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M2.5 3.5h7v3h-7zm0 5h5v3h-5z"></path><path fill="currentColor" d="M0 0h1v16H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-align" id="align-items-center" name="align-items" value="center">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Center" for="align-items-center">
            <svg data-icon="align-items-center-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M3.5 3.5h8v3h-8zm1 5h6v3h-6z"></path><path fill="currentColor" d="M7 0h1v16H7z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-align" id="align-items-end" name="align-items" value="end">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="End" for="align-items-end">
            <svg data-icon="align-items-end-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M6.5 3.5h7v3h-7zm2 5h5v3h-5z"></path><path fill="currentColor" d="M15 0h1v16h-1z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-align" id="align-items-stretch" name="align-items" value="stretch">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Stretch" for="align-items-stretch">
            <svg data-icon="align-items-stretch-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M2.5 3.5h11v3h-11zm0 5h11v3h-11z"></path><path fill="currentColor" d="M0 0h1v16H0zm15 0h1v16h-1z"></path></svg>
            </label>
          </div>

          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-align" id="align-items-baseline" name="align-items" value="baseline">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Baseline" for="align-items-baseline">
            <svg data-icon="align-items-baseline-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" d="M7 0h1v16H7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3H3v4h9V3zM7 4H4v2h3V4zm3 4H3v4h7V8zM7 9H4v2h3V9z" fill="currentColor"></path></svg>
            </label>
          </div>
        </div></div>
  </div>
      `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const layoutalign = elInput.querySelector(".inp-layout-align:checked")
        .value;
      component.addAttributes({ layoutalign });
    }
  },
  layoutJustify: {
    createInput: ({ trait }) => {
      const el = document.createElement("div");
      el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio"><div class="gjs-radio-items">
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-justify" id="justify-content-start" name="justify-content" value="start">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Start" for="justify-content-start">
            <svg data-icon="justify-content-start-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 2.5h7v3h-7zm0 5h7v3h-7z"></path><path fill="currentColor" d="M0 0h16v1H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-justify" id="justify-content-center" name="justify-content" value="center">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Center" for="justify-content-center">
            <svg data-icon="justify-content-center-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 2.5h7v3h-7zm0 7h7v3h-7z"></path><path fill="currentColor" d="M0 7h16v1H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-justify" id="justify-content-end" name="justify-content" value="end">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="End" for="justify-content-end">
            <svg data-icon="justify-content-end-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 5.5h7v3h-7zm0 5h7v3h-7z"></path><path fill="currentColor" d="M0 15h16v1H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-justify" id="justify-content-space-between" name="justify-content" value="space-between">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Space Between" for="justify-content-space-between">
            <svg data-icon="justify-content-space-between-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 2.5h7v3h-7zm0 8h7v3h-7z"></path><path fill="currentColor" d="M0 0h16v1H0zm0 15h16v1H0z"></path></svg>
            </label>
          </div>

          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-layout-justify" id="justify-content-space-around" name="justify-content" value="space-around">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Space Around" for="justify-content-space-around">
            <svg data-icon="justify-content-space-around-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 3.5h7v3h-7zm0 6h7v3h-7z"></path><path fill="currentColor" d="M0 0h16v1H0zm0 15h16v1H0z"></path></svg>
            </label>
          </div>
        </div></div>
  </div>
      `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const layoutjustify = elInput.querySelector(".inp-layout-justify:checked")
        .value;
      component.addAttributes({ layoutjustify });
    }
  }
};
