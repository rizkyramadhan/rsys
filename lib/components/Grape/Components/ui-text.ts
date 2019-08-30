export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;

  dc.addType("text-ui", {
    model: {
      defaults: {
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
          {
            label: "Text",
            name: "text",
            placeholder: "<empty>"
          },
          {
            label: "Typogrhapy",
            type: "label"
          },
          {
            type: "select",
            label: "Weight",
            name: "textweight",
            options: [
              { id: "100", name: "100 - Tint" },
              { id: "200", name: "200 - Extra Light" },
              { id: "300", name: "300 - Light" },
              { id: "400", name: "400 - Normal" },
              { id: "500", name: "500 - Medium" },
              { id: "600", name: "600 - Semi Bold" },
              { id: "700", name: "700 - Bold" },
              { id: "800", name: "800 - Extra Bold" },
              { id: "900", name: "900 - Black" }
            ],
            value: "400"
          },
          {
            type: "color",
            label: "Color",
            name: "textcolor",
            value: "#000000"
          },
          {
            label: "Align",
            name: "textalign",
            type: "textAlign"
          },
          {
            label: "Style",
            name: "textstyle",
            type: "textstyle"
          },
          {
            label: "Size",
            name: "textsize",
            type: "textSize"
          },
          ...c.styleTraits
        ]
      }
    }
  });

  dt.addType("textSize", {
    noLabel: true,
    templateInput: "",
    createInput: ({ trait, component }) => {
      const el = document.createElement("div");
      const textSize = "18px";
      component.addAttributes({
        textSize
      });
      el.innerHTML = `
      <div style="display: flex; flex-direction: column; border-top: 1px solid #313742; padding-top: 10px">
        <div style="display: flex; flex-direction: row; margin-bottom: 10px;">
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 0; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Size">Size</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-size" type="text" placeholder="" value="${textSize}"></div>
            </div>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div class="gjs-label-wrp" style="padding: 0 5px 0 10px; white-space: nowrap; min-width: 35%;"><div class="gjs-label" title="Height">Height</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
              <div class="gjs-field gjs-field-text" data-input=""><input class="inp-height" type="text" placeholder=""></div>
            </div>
          </div>
        </div>
      </div>
    `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const textSize = elInput.querySelector(".inp-size").value;
      const textHeight = elInput.querySelector(".inp-height").value;
      component.addAttributes({
        textHeight,
        textSize
      });
    }
  });

  dt.addType("textAlign", {
    createInput: ({ trait, component }) => {
      const el = document.createElement("div");
      const textalign = "left";
      component.addAttributes({ textalign });
      el.innerHTML = `
    <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block; border-top: 1px solid #313742; ">
      
    <div class="gjs-field-radio"><div class="gjs-radio-items">
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-text-align" id="text-align-start" name="text-align" value="left">
            <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Left" for="text-align-start">
            <svg data-icon="text-align-left" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zm-4 3H2v2h8V5zm-8 6h8v2H2v-2zm12-3H2v2h12V8z" fill="currentColor"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-text-align" id="text-align-center" name="text-align" value="center">
            <label class="icons-flex icon-dir-row-rev gjs-sm-icon gjs-radio-item-label" title="Center" for="text-align-center">
            <svg data-icon="text-align-center" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zm-2 3H4v2h8V5zm-8 6h8v2H4v-2zm10-3H2v2h12V8z" fill="currentColor"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-text-align" id="text-align-right" name="text-align" value="right">
            <label class="icons-flex icon-dir-col gjs-sm-icon gjs-radio-item-label" title="Right" for="text-align-right">
            <svg data-icon="text-align-right" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zm0 3H6v2h8V5zm-8 6h8v2H6v-2zm8-3H2v2h12V8z" fill="currentColor"></path></svg>
            </label>
          </div>
        
          <div class="gjs-radio-item">
            <input type="radio" class="gjs-sm-radio inp-text-align" id="text-align-justify" name="text-align" value="justify">
            <label class="icons-flex icon-dir-col-rev gjs-sm-icon gjs-radio-item-label" title="Justify" for="text-align-justify">
            <svg data-icon="text-align-justify" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zm0 3H2v2h12V5zM2 11h12v2H2v-2zm12-3H2v2h12V8z" fill="currentColor"></path></svg>
            </label>
          </div>
        </div></div>
  </div>
      `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const textalign = elInput.querySelector(".inp-text-align:checked").value;
      component.addAttributes({ textalign });
    }
  });

  dt.addType("textstyle", {
    noLabel: true,
    templateInput: "",
    createInput: ({ component }) => {
      const el = document.createElement("div");
      const textstyle = "normal";
      const textdecoration = "none";
      component.addAttributes({ textstyle, textdecoration });
      el.innerHTML = `
      <div style="display: flex; flex-direction: row; align-items: center;">
        <div class="gjs-label" title="Style" style="margin-right: 25px">Style</div>
        <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block; background-color: rgba(0,0,0,0.2);">
          <div class="gjs-field-radio">
            <div class="gjs-radio-items">
              <div class="gjs-radio-item" style="justify-content: center;align-items: center;display: flex;">
                <input type="radio" class="gjs-sm-radio inp-text-style" id="text-style-normal" name="text-style" value="normal">
                <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Visible" for="text-style-normal" style="width: 100%;">
                <svg data-icon="font-style-none" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3h2v2H9v6h2v2H5v-2h2V5H5V3h4z" fill="currentColor"></path></svg>
                </label>
              </div>
              <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
                <input type="radio" class="gjs-sm-radio inp-text-style" id="text-style-italic" name="text-style" value="italic">
                <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Hidden" for="text-style-italic" style="width: 100%;">
                <svg data-icon="font-style-italic" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" stroke="currentColor" d="M7.5 3.5h5v1h-5zm-4 8h5v1h-5z"></path><path d="M5.5 12l5-8" stroke="currentColor" stroke-width="2"></path></svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id="gjs-sm-flex-direction" class="gjs-sm-property gjs-sm-radio gjs-sm-property__flex-direction gjs-sm-property--full" style="display: block; background-color: rgba(0,0,0,0.2); margin-left: 10px">
          <div class="gjs-field-radio">
            <div class="gjs-radio-items">
              <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
                <input type="radio" class="gjs-sm-radio inp-text-decoration" id="text-decoration-none" name="text-decoration" value="none">
                <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Scroll" for="text-decoration-none" style="width: 100%;">
                <svg data-icon="cross" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.414 8l3.293-3.293-1.414-1.414L8 6.586 4.707 3.293 3.293 4.707 6.586 8l-3.293 3.293 1.414 1.414L8 9.414l3.293 3.293 1.414-1.414L9.414 8z" fill="currentColor"></path></svg>
                </label>
              </div>
              <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
                <input type="radio" class="gjs-sm-radio inp-text-decoration" id="text-decoration-strikethrough" name="text-decoration" value="strikethrough">
                <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Scroll" for="text-decoration-strikethrough" style="width: 100%;">
                <svg data-icon="text-decoration-strike" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3h8v2H9v2H7V5H4V3zm3 6v4h2V9H7z" fill="currentColor"></path><path fill="currentColor" d="M1 8h14v1H1z"></path></svg>
                </label>
              </div>
              <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
                <input type="radio" class="gjs-sm-radio inp-text-decoration" id="text-decoration-underline" name="text-decoration" value="underline">
                <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Scroll" for="text-decoration-underline" style="width: 100%;">
                <svg data-icon="text-decoration-underline" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" d="M1 14h14v1H1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3H4v2h3v8h2V5h3V3z" fill="currentColor"></path></svg>
                </label>
              </div>
              <div class="gjs-radio-item"  style="justify-content: center;align-items: center;display: flex;">
                <input type="radio" class="gjs-sm-radio inp-text-decoration" id="text-decoration-overline" name="text-decoration" value="overline">
                <label class="icons-flex icon-dir-row gjs-sm-icon gjs-radio-item-label" title="Scroll" for="text-decoration-overline" style="width: 100%;">
                <svg data-icon="text-decoration-overline" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="transform: translate(0px, 0px);"><path fill="currentColor" d="M1 1h14v1H1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3H4v2h3v8h2V5h3V3z" fill="currentColor"></path></svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const textstyle = elInput.querySelector(".inp-text-style:checked").value;
      const textdecoration = elInput.querySelector(
        ".inp-text-decoration:checked"
      ).value;
      component.addAttributes({ textstyle, textdecoration });
    }
  });
}
