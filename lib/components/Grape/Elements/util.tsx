import React from 'react';
import ReactDOM from 'react-dom';
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
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
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
          if (mutation.type == 'attributes') {
            callback(mutation);
          }
        });
      });
      // have the observer observe foo for changes in children
      obs.observe(obj, { attributes: true });
    }
  };
})();

export const defineElement = function(name: any, state: any, ReactEl: any) {
  class Element extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('div');
      ReactDOM.render(<ReactEl />, mountPoint);
      if (mountPoint.children.length > 0) {
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint.children[0]);
        observeAttr(this, m => {
          const attr = {};
          for (let i in this.attributes) {
            const item = this.attributes[i];
            attr[item.nodeName] = item.nodeValue;
          }
          state.attr = attr;
        });
      }
    }
  }
  (window as any).ui = {
    ...(window as any).ui,
    [name]: Element
  };
  customElements.define(`${name}-`, (window as any).ui[name]);
  return Element;
};
