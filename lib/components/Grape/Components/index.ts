import grapesjs from "grapesjs";

export default grapesjs.plugins.add(
  "gjs-custom-plugin",
  (editor, opts = {}) => {
    const config = {
      styleTraits: styleTraits,
      styleManager: styleManager,
      ...opts
    };
    const components = [require("./ui-text"), require("./ui-layout")];

    // DOM Components
    components.forEach((ui: any) => {
      ui.default(editor, config);
    });

    editor.TraitManager.addType("label", {
      noLabel: true,
      createInput({ trait }) {
        return `<div class="gjs-traits-label" style="margin: 0 -10px; background: #313742">${trait.attributes.label}</div>`;
      },
      templateInput: ""
    });
  }
);

const styleTraits = [
  {
    label: "Style",
    type: "label"
  },
  {
    category: "Structure",
    label: "Direction",
    name: "direction",
    type: "direction"
  },
  {
    label: "Align",
    name: "align",
    type: "align"
  },
  {
    label: "Justify",
    name: "justify",
    type: "justify"
  }
];

const styleManager = {
  direction: ({ trait }) => {
    const el = document.createElement("div");
    el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio"><div class="gjs-radio-items">
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-row" name="flex-direction" value="row">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Row" for="flex-direction-row" style="width: 16px;">
            Horizontal
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-row-reverse" name="flex-direction" value="row-reverse">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Row reverse" for="flex-direction-row-reverse">
            Vertical
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column" name="flex-direction" value="column">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="Column" for="flex-direction-column">
            <svg data-icon="arrow-reverse" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.99 4L11 1 7 5l4 4-.01-3V4zM15 4h-4v2h4V4zm-9.99 6L5 7l4 4-4 4 .01-3v-2zM1 12h4v-2H1v2z" fill="currentColor"></path></svg>
            </label>
          </div>
        </div></div>
  </div>
      `;
    return el;
  },
  align: ({ trait }) => {
    const el = document.createElement("div");
    el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio"><div class="gjs-radio-items">
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-row" name="flex-direction" value="row">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Row" for="flex-direction-row" style="width: 16px;">
            <svg data-icon="align-items-start-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M2.5 3.5h7v3h-7zm0 5h5v3h-5z"></path><path fill="currentColor" d="M0 0h1v16H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-row-reverse" name="flex-direction" value="row-reverse">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Row reverse" for="flex-direction-row-reverse">
            <svg data-icon="align-items-center-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M3.5 3.5h8v3h-8zm1 5h6v3h-6z"></path><path fill="currentColor" d="M7 0h1v16H7z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column" name="flex-direction" value="column">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="Column" for="flex-direction-column">
            <svg data-icon="align-items-end-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M6.5 3.5h7v3h-7zm2 5h5v3h-5z"></path><path fill="currentColor" d="M15 0h1v16h-1z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column-reverse" name="flex-direction" value="column-reverse">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Column reverse" for="flex-direction-column-reverse">
            <svg data-icon="align-items-stretch-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M2.5 3.5h11v3h-11zm0 5h11v3h-11z"></path><path fill="currentColor" d="M0 0h1v16H0zm15 0h1v16h-1z"></path></svg>
            </label>
          </div>

          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column-reverse" name="flex-direction" value="column-reverse">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Column reverse" for="flex-direction-column-reverse">
            <svg data-icon="align-items-baseline-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" d="M7 0h1v16H7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3H3v4h9V3zM7 4H4v2h3V4zm3 4H3v4h7V8zM7 9H4v2h3V9z" fill="currentColor"></path></svg>
            </label>
          </div>
        </div></div>
  </div>
      `;
    return el;
  },
  justify: ({ trait }) => {
    const el = document.createElement("div");
    el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block;">
      
    <div class="gjs-field-radio"><div class="gjs-radio-items">
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-row" name="flex-direction" value="row">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Row" for="flex-direction-row" style="width: 16px;">
            <svg data-icon="justify-content-start-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 2.5h7v3h-7zm0 5h7v3h-7z"></path><path fill="currentColor" d="M0 0h16v1H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-row-reverse" name="flex-direction" value="row-reverse">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Row reverse" for="flex-direction-row-reverse">
            <svg data-icon="justify-content-center-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 2.5h7v3h-7zm0 7h7v3h-7z"></path><path fill="currentColor" d="M0 7h16v1H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column" name="flex-direction" value="column">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="Column" for="flex-direction-column">
            <svg data-icon="justify-content-end-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 5.5h7v3h-7zm0 5h7v3h-7z"></path><path fill="currentColor" d="M0 15h16v1H0z"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column-reverse" name="flex-direction" value="column-reverse">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Column reverse" for="flex-direction-column-reverse">
            <svg data-icon="justify-content-space-between-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 2.5h7v3h-7zm0 8h7v3h-7z"></path><path fill="currentColor" d="M0 0h16v1H0zm0 15h16v1H0z"></path></svg>
            </label>
          </div>

          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio" id="flex-direction-column-reverse" name="flex-direction" value="column-reverse">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Column reverse" for="flex-direction-column-reverse">
            <svg data-icon="justify-content-space-around-column" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M4.5 3.5h7v3h-7zm0 6h7v3h-7z"></path><path fill="currentColor" d="M0 0h16v1H0zm0 15h16v1H0z"></path></svg>
            </label>
          </div>
        </div></div>
  </div>
      `;
    return el;
  }
};
