import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { observable } from "mobx";
import { TextField } from "office-ui-fabric-react";

const state = observable({
  value: {},
  editable: ""
});
export default observer((props: any) => {
  const changeInput = (e, key) => {
    state.value[key] = e.nativeEvent.target.value + "px";
    callback(state.value);
    state.editable = "";
  };
  const handleMouseDown = (original, value) => {
    const currentVal = state.value[value] || 0;
    window.onmouseup = () => {
      window.onmousemove = null;
      window.onmouseup = null;
      callback(state.value);
    };
    window.onmousemove = ({ clientX, clientY }) => {
      const moveX = clientX - original.clientX;
      const moveY = clientY - original.clientY;
      let v = currentVal;
      if (["marginTop", "paddingBottom"].indexOf(value) > -1) v += moveY * -1;
      else if (["marginBottom", "paddingTop"].indexOf(value) > -1) v += moveY;
      else if (["marginLeft", "paddingRight"].indexOf(value) > -1)
        v += moveX * -1;
      else if (["marginRight", "paddingLeft"].indexOf(value) > -1) v += moveX;
      state.value[value] = v + "px";
    };
  };
  const callback = val => {
    let newVal = { ...val };
    Object.keys(newVal).forEach(key => {
      if (key.includes("margin") || key.includes("padding"))
        newVal[key] += "px";
    });
    props.callback(newVal);
  };

  useEffect(() => {
    state.value = props.state.value;
    Object.keys(state.value).forEach(key => {
      if (
        state.value[key] &&
        (key.includes("margin") || key.includes("padding"))
      ) {
        state.value[key].replace("px", "");
      }
    });
  }, [props.state.value]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px"
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: "8px 4px",
          gridTemplateColumns: "44px 1fr",
          padding: "0px 8px 8px",
          gridColumn: "1 / -1"
        }}
      >
        <div
          style={{
            position: "relative",
            display: "grid",
            width: "224px",
            height: "120px",
            gridTemplateColumns: "36px 4px 36px 1fr 36px 4px 36px",
            gridTemplateRows: "24px 4px 24px 1fr 24px 4px 24px",
            outlineStyle: "none",
            cursor: "default",
            userSelect: "none"
          }}
        >
          <div
            //   width="224"
            //   height="120"
            style={{
              gridArea: "1 / 1 / -1 / -1",
              display: "grid",
              gridTemplateColumns: "36px 1fr 36px",
              gridTemplateRows: "24px minmax(16px, 1fr) 24px",
              justifyItems: "center",
              width: "224px",
              height: "120px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="120"
              style={{
                gridArea: "1 / 1 / -1 / -1"
              }}
            >
              <g>
                <g>
                  <path
                    className="margin-top"
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
                    //   threshold="1"
                    data-automation-id="margin-top-button"
                    aria-label="Margin top button"
                    //   delay="0"
                    style={{
                      color: "#3d4654",
                      cursor: "n-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "marginTop")
                    }
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="margin-right"
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
                    //   threshold="1"
                    data-automation-id="margin-right-button"
                    aria-label="Margin right button"
                    //   delay="0"
                    style={{
                      color: "#434e5f",
                      cursor: "e-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "marginRight")
                    }
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="margin-bottom"
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
                    //   threshold="1"
                    data-automation-id="margin-bottom-button"
                    aria-label="Margin bottom button"
                    //   delay="0"
                    style={{
                      color: "#3d4654",
                      cursor: "s-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "marginBottom")
                    }
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="margin-left"
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
                    //   threshold="1"
                    data-automation-id="margin-left-button"
                    aria-label="Margin left button"
                    //   delay="0"
                    style={{
                      color: "#434e5f",
                      cursor: "w-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "marginLeft")
                    }
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
                  style={{
                    pointerEvents: "none"
                  }}
                ></rect>
              </clipPath>
              <rect
                clipPath="url(#margin-outer)"
                x="0"
                y="0"
                width="224"
                height="120"
                fill="transparent"
                rx="2"
                ry="2"
                style={{
                  pointerEvents: "none",
                  strokeWidth: "2px",
                  stroke: "rgb(51, 51, 51)"
                }}
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
                  style={{
                    pointerEvents: "none"
                  }}
                ></rect>
              </clipPath>
              <rect
                clipPath="url(#margin-inner)"
                x="36"
                y="24"
                width="152"
                height="72"
                fill="transparent"
                rx="2"
                ry="2"
                style={{
                  pointerEvents: "none",
                  strokeWidth: "2px",
                  stroke: "rgb(51, 51, 51)"
                }}
              ></rect>
            </svg>
            <div
              className="margin-top-value"
              //   mode="delta"
              //   name="marginTop"
              data-automation-id="margin-top-edit"
              aria-label="Margin top edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "1 / 2 / 2 / 3"
              }}
              onClick={() => (state.editable = "marginTop")}
            >
              {state.editable === "marginTop" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).marginTop || 0}
                  onBlur={e => changeInput(e, "marginTop")}
                />
              ) : (
                (state.value as any).marginTop || 0
              )}
            </div>
            <div
              className="margin-right-value"
              //   mode="delta"
              // name="marginRight"
              data-automation-id="margin-right-edit"
              aria-label="Margin right edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                color: "rgb(217, 217, 217)",
                backgroundColor: "transparent",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "2 / 3 / 3 / 4"
              }}
              onClick={() => (state.editable = "marginRight")}
            >
              {state.editable === "marginRight" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).marginRight || 0}
                  onBlur={e => changeInput(e, "marginRight")}
                />
              ) : (
                (state.value as any).marginRight || 0
              )}
            </div>
            <div
              className="margin-bottom-value"
              //   mode="delta"
              //   name="marginBottom"
              data-automation-id="margin-bottom-edit"
              aria-label="Margin bottom edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "3 / 2 / 4 / 3"
              }}
              onClick={() => (state.editable = "marginBottom")}
            >
              {state.editable === "marginBottom" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).marginBottom || 0}
                  onBlur={e => changeInput(e, "marginBottom")}
                />
              ) : (
                (state.value as any).marginBottom || 0
              )}
            </div>
            <div
              className="margin-left-value"
              //   mode="delta"
              //   name="marginLeft"
              data-automation-id="margin-left-edit"
              aria-label="Margin left edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                color: "rgb(217, 217, 217)",
                backgroundColor: "transparent",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "2 / 1 / 3 / 2"
              }}
              onClick={() => (state.editable = "marginLeft")}
            >
              {state.editable === "marginLeft" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).marginLeft || 0}
                  onBlur={e => changeInput(e, "marginLeft")}
                />
              ) : (
                (state.value as any).marginLeft || 0
              )}
            </div>
          </div>
          <div
            // width="144"
            // height="64"
            style={{
              gridArea: "3 / 3 / span 3 / span 3",
              display: "grid",
              gridTemplateColumns: "36px 1fr 36px",
              gridTemplateRows: "24px minmax(16px, 1fr) 24px",
              justifyItems: "center",
              width: "144px",
              height: "64px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="144"
              height="64"
              style={{
                gridArea: "1 / 1 / -1 / -1"
              }}
            >
              <g>
                <g>
                  <path
                    className="padding-top"
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
                    // threshold="1"
                    data-automation-id="padding-top-button"
                    aria-label="Padding top button"
                    // delay="0"
                    style={{
                      color: "#3d4654",
                      cursor: "s-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "paddingTop")
                    }
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="padding-right"
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
                    // threshold="1"
                    data-automation-id="padding-right-button"
                    aria-label="Padding right button"
                    // delay="0"
                    style={{
                      color: "#434e5f",
                      cursor: "w-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "paddingRight")
                    }
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="padding-bottom"
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
                    // threshold="1"
                    data-automation-id="padding-bottom-button"
                    aria-label="Padding bottom button"
                    // delay="0"
                    style={{
                      color: "#3d4654",
                      cursor: "n-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "paddingBottom")
                    }
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="padding-left"
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
                    // threshold="1"
                    data-automation-id="padding-left-button"
                    aria-label="Padding left button"
                    // delay="0"
                    style={{
                      color: "#434e5f",
                      cursor: "e-resize"
                    }}
                    onMouseDown={({ clientX, clientY }) =>
                      handleMouseDown({ clientX, clientY }, "paddingLeft")
                    }
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
                  style={{
                    pointerEvents: "none"
                  }}
                ></rect>
              </clipPath>
              <rect
                clipPath="url(#padding-outer)"
                x="0"
                y="0"
                width="144"
                height="64"
                fill="transparent"
                rx="2"
                ry="2"
                style={{
                  pointerEvents: "none",
                  strokeWidth: "2px",
                  stroke: "rgb(51, 51, 51)"
                }}
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
                  style={{
                    pointerEvents: "none"
                  }}
                ></rect>
              </clipPath>
              <rect
                clipPath="url(#padding-inner)"
                x="36"
                y="24"
                width="72"
                height="16"
                fill="transparent"
                rx="2"
                ry="2"
                style={{
                  pointerEvents: "none",
                  strokeWidth: "2px",
                  stroke: "rgb(51, 51, 51)"
                }}
              ></rect>
            </svg>
            <div
              className="padding-top-value"
              //   mode="delta"
              //   name="paddingTop"
              data-automation-id="padding-top-edit"
              aria-label="Padding top edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                color: "rgb(217, 217, 217)",
                backgroundColor: "transparent",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "1 / 2 / 2 / 3"
              }}
              onClick={() => (state.editable = "paddingTop")}
            >
              {state.editable === "paddingTop" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).paddingTop || 0}
                  onBlur={e => changeInput(e, "paddingTop")}
                />
              ) : (
                (state.value as any).paddingTop || 0
              )}
            </div>
            <div
              className="padding-right-value"
              //   mode="delta"
              //   name="paddingRight"
              data-automation-id="padding-right-edit"
              aria-label="Padding right edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                color: "rgb(217, 217, 217)",
                background: "transparent",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "2 / 3 / 3 / 4"
              }}
              onClick={() => (state.editable = "paddingRight")}
            >
              {state.editable === "paddingRight" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).paddingRight || 0}
                  onBlur={e => changeInput(e, "paddingRight")}
                />
              ) : (
                (state.value as any).paddingRight || 0
              )}
            </div>
            <div
              className="padding-bottom-value"
              //   mode="delta"
              //   name="paddingBottom"
              data-automation-id="padding-bottom-edit"
              aria-label="Padding bottom edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                color: "rgb(217, 217, 217)",
                backgroundColor: "transparent",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "3 / 2 / 4 / 3"
              }}
              onClick={() => (state.editable = "paddingBottom")}
            >
              {state.editable === "paddingBottom" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).paddingBottom || 0}
                  onBlur={e => changeInput(e, "paddingBottom")}
                />
              ) : (
                (state.value as any).paddingBottom || 0
              )}
            </div>
            <div
              className="padding-left-value"
              //   mode="delta"
              //   name="paddingLeft"
              data-automation-id="padding-left-edit"
              aria-label="Padding left edit"
              style={{
                cursor: "default",
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "10px",
                letterSpacing: "-0.2px",
                display: "flex",
                color: "rgb(217, 217, 217)",
                backgroundColor: "transparent",
                padding: "2px",
                marginLeft: "-2px",
                borderRadius: "2px",
                maxWidth: "100%",
                boxSizing: "content-box",
                placeSelf: "center",
                position: "relative",
                opacity: 1,
                alignItems: "center",
                justifyContent: "center",
                gridArea: "2 / 1 / 3 / 2"
              }}
              onClick={() => (state.editable = "paddingLeft")}
            >
              {state.editable === "paddingLeft" ? (
                <TextField
                  type="number"
                  autoFocus={true}
                  styles={inputStyle}
                  defaultValue={(state.value as any).paddingLeft || 0}
                  onBlur={e => changeInput(e, "paddingLeft")}
                />
              ) : (
                (state.value as any).paddingLeft || 0
              )}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            style={{
              gridArea: "3 / 3 / span 3 / span 3",
              pointerEvents: "none",
              marginTop: "6px"
            }}
          >
            <text
              x="6"
              y="6"
              fill="#a6a6a6"
              fontStyle="italic"
              fontWeight={600}
              fontSize="8px"
            >
              PADDING
            </text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            style={{
              gridArea: "1 / 1 / -1 / -1",
              pointerEvents: "none",
              marginTop: "6px"
            }}
          >
            <text
              x="6"
              y="6"
              fill="#a6a6a6"
              fontStyle="italic"
              fontWeight={600}
              fontSize="8px"
            >
              MARGIN
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
});

const inputStyle: any = {
  fieldGroup: {
    height: "19px",
    border: 0
  },
  field: {
    width: "30px",
    height: "18px",
    fontSize: "10px",
    fontWeight: 600,
    textAlign: "center",
    padding: 0
  }
};
