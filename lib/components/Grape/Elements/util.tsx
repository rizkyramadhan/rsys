import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";
const win: any = window as any;

export const observeDOM = (function() {
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;

  return function(obj: any, callback: any) {
    if (!obj || obj.nodeType !== 1) return; // validation

    if (MutationObserver) {
      // define a new observer
      var obs = new MutationObserver(function(mutations, observer) {
        callback(mutations);
      });
      // have the observer observe foo for changes in children
      obs.observe(obj, { childList: true, subtree: true });
    } else if (win.addEventListener) {
      obj.addEventListener("DOMNodeInserted", callback, false);
      obj.addEventListener("DOMNodeRemoved", callback, false);
    }
  };
})();

export const observeAttr = (function() {
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;

  return function(obj: any, callback: any) {
    if (!obj || obj.nodeType !== 1) return; // validation

    if (MutationObserver) {
      // define a new observer
      var obs = new MutationObserver(function(mutations, observer) {
        mutations.forEach(function(mutation) {
          if (mutation.type == "attributes") {
            callback(mutation);
          }
        });
      });
      // have the observer observe foo for changes in children
      obs.observe(obj, { attributes: true });
    }
  };
})();

export const defineElementDirect = function(
  mountPoint: any,
  ReactEl: any,
  initProps: any = {}
) {
  // const state = observable({
  //   attr: initProps as any
  // });
  ReactDOM.render(<ReactEl {...initProps} />, mountPoint);
};

export const defineElement = function(
  name: any,
  ReactEl: any,
  rootStyle?: any
) {
  class Element extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement("div");

      if (rootStyle) {
        Object.keys(rootStyle).map(key => {
          this.style[key] = rootStyle[key];
        });
      }

      const state = observable({
        attr: {} as any
      });
      ReactDOM.render(<ReactEl state={state} />, mountPoint);
      if (mountPoint.children.length > 0) {
        const el = mountPoint.children[0];
        const shadow = this.attachShadow({ mode: "open" });
        const applyState = () => {
          const attr = {};
          for (let i in this.attributes) {
            const item = this.attributes[i];
            attr[item.nodeName] = item.nodeValue;
          }
          state.attr = attr;
        };
        (el as any).state = state;
        shadow.appendChild(el);

        observeAttr(this, applyState);
        applyState();
      }
    }
  }
  (window as any).ui = {
    ...(window as any).ui,
    [name]: Element
  };
  customElements.define(`${name}-ui`, (window as any).ui[name]);
  return Element;
};
