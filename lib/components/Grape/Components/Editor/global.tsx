import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { DefaultButton, registerIcons } from "office-ui-fabric-react";
import React, { useEffect } from "react";
import { groupNameStyles } from ".";
import Layout from "./layout/index";
import Spacing from "./spacing/index";
import Size from "./size/index";
import Background from "./background/index";
import Borders from "./borders/index";

const caretAcv = { iconName: "CaretSolidDown" };
const caretInAcv = { iconName: "CaretSolidRight" };
const state = observable({
  layout: true,
  spacing: true,
  size: true,
  background: true,
  borders: true
});
export default observer((props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        margin: "-5px -10px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <DefaultButton
          toggle
          checked={state.layout}
          text={"Layout"}
          iconProps={state.layout ? caretAcv : caretInAcv}
          onClick={() => {
            state.layout = !state.layout;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.layout && <Layout {...props} />}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <DefaultButton
          toggle
          checked={state.spacing}
          text={"Spacing"}
          iconProps={state.spacing ? caretAcv : caretInAcv}
          onClick={() => {
            state.spacing = !state.spacing;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.spacing && <Spacing {...props} />}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <DefaultButton
          toggle
          checked={state.size}
          text={"Size"}
          iconProps={state.size ? caretAcv : caretInAcv}
          onClick={() => {
            state.size = !state.size;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.size && <Size {...props} />}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <DefaultButton
          toggle
          checked={state.background}
          text={"Background"}
          iconProps={state.background ? caretAcv : caretInAcv}
          onClick={() => {
            state.background = !state.background;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.background && <Background {...props} />}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        <DefaultButton
          toggle
          checked={state.borders}
          text={"Borders"}
          iconProps={state.borders ? caretAcv : caretInAcv}
          onClick={() => {
            state.borders = !state.borders;
          }}
          allowDisabledFocus
          styles={groupNameStyles}
        />
        {state.borders && <Borders {...props} />}
      </div>
    </div>
  );
});

registerIcons({
  icons: {
    alignStart: (
      <svg
        data-icon="align-items-start-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M2.5 3.5h7v3h-7zm0 5h5v3h-5z"
        ></path>
        <path fill="currentColor" d="M0 0h1v16H0z"></path>
      </svg>
    ),
    alignCenter: (
      <svg
        data-icon="align-items-center-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M3.5 3.5h8v3h-8zm1 5h6v3h-6z"
        ></path>
        <path fill="currentColor" d="M7 0h1v16H7z"></path>
      </svg>
    ),
    alignEnd: (
      <svg
        data-icon="align-items-end-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M6.5 3.5h7v3h-7zm2 5h5v3h-5z"
        ></path>
        <path fill="currentColor" d="M15 0h1v16h-1z"></path>
      </svg>
    ),
    alignBetween: (
      <svg
        data-icon="align-items-stretch-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M2.5 3.5h11v3h-11zm0 5h11v3h-11z"
        ></path>
        <path fill="currentColor" d="M0 0h1v16H0zm15 0h1v16h-1z"></path>
      </svg>
    ),
    alignAround: (
      <svg
        data-icon="align-items-start-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M2.5 3.5h7v3h-7zm0 5h5v3h-5z"
        ></path>
        <path fill="currentColor" d="M0 0h1v16H0z"></path>
      </svg>
    ),
    row: (
      <svg version="1.1" width="16" height="16" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"
        ></path>
      </svg>
    ),
    column: (
      <svg
        version="1.1"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path>
      </svg>
    ),
    rowReverse: (
      <svg
        data-icon="arrow-reverse"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.99 4L11 1 7 5l4 4-.01-3V4zM15 4h-4v2h4V4zm-9.99 6L5 7l4 4-4 4 .01-3v-2zM1 12h4v-2H1v2z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    justifyStart: (
      <svg
        data-icon="justify-content-start-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M4.5 2.5h7v3h-7zm0 5h7v3h-7z"
        ></path>
        <path fill="currentColor" d="M0 0h16v1H0z"></path>
      </svg>
    ),
    justifyCenter: (
      <svg
        data-icon="justify-content-center-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M4.5 2.5h7v3h-7zm0 7h7v3h-7z"
        ></path>
        <path fill="currentColor" d="M0 7h16v1H0z"></path>
      </svg>
    ),
    justifyEnd: (
      <svg
        data-icon="justify-content-end-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M4.5 5.5h7v3h-7zm0 5h7v3h-7z"
        ></path>
        <path fill="currentColor" d="M0 15h16v1H0z"></path>
      </svg>
    ),
    justifyBetween: (
      <svg
        data-icon="justify-content-space-between-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M4.5 2.5h7v3h-7zm0 8h7v3h-7z"
        ></path>
        <path fill="currentColor" d="M0 0h16v1H0zm0 15h16v1H0z"></path>
      </svg>
    ),
    justifyAround: (
      <svg
        data-icon="justify-content-space-around-column"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M4.5 3.5h7v3h-7zm0 6h7v3h-7z"
        ></path>
        <path fill="currentColor" d="M0 0h16v1H0zm0 15h16v1H0z"></path>
      </svg>
    ),
    visible: (
      <svg
        data-icon="eye"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 13c3.866 0 7-4.5 7-5s-3.134-5-7-5-7 4.5-7 5 3.134 5 7 5zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          fill="currentColor"
        ></path>
        <circle opacity=".6" cx="8" cy="8" r="2" fill="currentColor"></circle>
      </svg>
    ),
    hidden: (
      <svg
        data-icon="eye-invisible"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.842 3.33A5.537 5.537 0 0 0 8 3C4.134 3 1 7.5 1 8c0 .23.666 1.311 1.763 2.409l2.242-2.242a3 3 0 0 1 3.162-3.162l1.675-1.676zm-2.009 7.665a3 3 0 0 0 3.162-3.162l2.242-2.242C14.334 6.69 15 7.77 15 8c0 .5-3.134 5-7 5a5.538 5.538 0 0 1-1.842-.33l1.675-1.675z"
          fill="currentColor"
        ></path>
        <path d="M2 14L14 2" stroke="currentColor" strokeWidth="1.5"></path>
      </svg>
    ),
    scroll: (
      <svg
        data-icon="overflow-scroll"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 2v1l-1-1h1zM9 3l1-1H0v1h9zm0 10H0v1h10l-1-1zm4 0l-1 1h1v-1z"
          fill="currentColor"
        ></path>
        <path
          opacity=".6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4h7v2H2V4zm0 3h7v2H2V7zm7 3H2v2h7v-2z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 4h2v8h-2l3 3 3-3h-2V4h2l-3-3-3 3z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    radiusSingle: (
      <svg
        data-icon="border-radius-single"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5zm0 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    radiusMultiple: (
      <svg
        data-icon="border-radius-multiple"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 2a3 3 0 0 0-3 3v2h2V5a1 1 0 0 1 1-1h2V2H5zm6 0a3 3 0 0 1 3 3v2h-2V5a1 1 0 0 0-1-1H9V2h2zM5 14a3 3 0 0 1-3-3V9h2v2a1 1 0 0 0 1 1h2v2H5zm6 0a3 3 0 0 0 3-3V9h-2v2a1 1 0 0 1-1 1H9v2h2z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    cross: (
      <svg
        data-icon="cross"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.414 8l3.293-3.293-1.414-1.414L8 6.586 4.707 3.293 3.293 4.707 6.586 8l-3.293 3.293 1.414 1.414L8 9.414l3.293 3.293 1.414-1.414L9.414 8z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    borderSolid: (
      <svg
        data-icon="border-style-solid"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path fill="currentColor" d="M1 7h14v2H1z"></path>
      </svg>
    ),
    borderDashed: (
      <svg
        data-icon="border-style-dashed"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path fill="currentColor" d="M0 7h4v2H0zm6 0h4v2H6zm6 0h4v2h-4z"></path>
      </svg>
    ),
    borderDotted: (
      <svg
        data-icon="border-style-dotted"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fill="currentColor"
          d="M1 7h2v2H1zm4 0h2v2H5zm4 0h2v2H9zm4 0h2v2h-2z"
        ></path>
      </svg>
    ),
    radiusTopLeft: (
      <svg
        data-icon="border-radius-topleft"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 2h5v5h-2V4H9V2zm3 7h2v5H9v-2h3V9zM2 14V9h2v3h3v2H2z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 2a3 3 0 0 0-3 3v2h2V5a1 1 0 0 1 1-1h2V2H5z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    radiusTopRight: (
      <svg
        data-icon="border-radius-topright"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 9v5H9v-2h3V9h2zm-7 3v2H2V9h2v3h3zM2 2h5v2H4v3H2V2z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 5a3 3 0 0 0-3-3H9v2h2a1 1 0 0 1 1 1v2h2V5z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    radiusBottomLeft: (
      <svg
        data-icon="border-radius-bottomleft"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 7V2h5v2H4v3H2zm7-3V2h5v5h-2V4H9zm5 10H9v-2h3V9h2v5z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 11a3 3 0 0 0 3 3h2v-2H5a1 1 0 0 1-1-1V9H2v2z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    radiusBottomRight: (
      <svg
        data-icon="border-radius-bottomright"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 14H2V9h2v3h3v2zM4 7H2V2h5v2H4v3zm10-5v5h-2V4H9V2h5z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 14a3 3 0 0 0 3-3V9h-2v2a1 1 0 0 1-1 1H9v2h2z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    borderTop: (
      <svg
        data-icon="border-top"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 5v7H4V5H2v9h12V5h-2z"
          fill="currentColor"
        ></path>
        <path fill="currentColor" d="M14 2v2H2V2z"></path>
      </svg>
    ),
    borderLeft: (
      <svg
        data-icon="border-left"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 4h7v8H5v2h9V2H5v2z"
          fill="currentColor"
        ></path>
        <path fill="currentColor" d="M2 2h2v12H2z"></path>
      </svg>
    ),
    borderAll: (
      <svg
        data-icon="border-all"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 2H2v12h12V2zm-2 2H4v8h8V4z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    borderRight: (
      <svg
        data-icon="border-right"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 4H4v8h7v2H2V2h9v2z"
          fill="currentColor"
        ></path>
        <path fill="currentColor" d="M14 2h-2v12h2z"></path>
      </svg>
    ),
    borderBottom: (
      <svg
        data-icon="border-bottom"
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="bem-Svg"
        style={{
          transform: "translate(0px, 0px)"
        }}
      >
        <path
          opacity=".4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 11V4h8v7h2V2H2v9h2z"
          fill="currentColor"
        ></path>
        <path fill="currentColor" d="M2 14v-2h12v2z"></path>
      </svg>
    )
  }
});
