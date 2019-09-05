import { defineElementDirect } from "../../Elements/util";
import { observable } from "mobx";

const reactEl = {
  attributes: require("./attributes").default,
  global: require("./global").default,
  typography: require("./typography").default
};

export default (elName, attribute, callback) => {
  const el = document.createElement("div");
  const state = observable({
    ...attribute
  });
  defineElementDirect(el, reactEl[elName], {
    state: state,
    callback: callback
  });
  return el;
};

export const groupNameStyles = {
  label: {
    textAlign: "left",
    fontSize: "14px",
    letterSpacing: "normal"
  },
  icon: {
    fontSize: "10px"
  },
  root: {
    border: "0",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    backgroundColor: "#313742",
    padding: "0 10px"
  }
};

export const btnIconRadioStyles = {
  root: {
    borderLeft: "1px solid rgba(0,0,0,0.2)"
  },
  rootChecked: {
    backgroundColor: "rgba(255,255,255,0.2)"
  }
};

export const btnIconRadioStyle = {
  display: "flex",
  flexGrow: 1,
  justifyContent: "center"
};

export const btnStyles = {
  root: {
    border: "0",
    borderLeft: "1px solid rgba(0,0,0,0.2)",
    backgroundColor: "transparent"
  },
  rootChecked: {
    backgroundColor: "rgba(255,255,255,0.2)"
  }
};

export const dropdownStyles = {
  root: {
    width: "100%"
  },
  title: {
    border: "0px",
    height: "22px",
    lineHeight: "20px",
    flexGrow: 1,
    width: "100%",
    backgroundColor: "rgb(43, 49, 59)"
  },
  caretDownWrapper: {
    lineHeight: "20px",
    height: "22px",
    fontSize: "8px"
  }
};

export const dropdownStyle = {
  display: "flex",
  flexGrow: 1,
  width: "100%"
};

export const textMultiline = {
  label: {
    fontWeight: 400
  },
  fieldGroup: {
    backgroundColor: "#2b313b",
    border: "0"
  },
  root: {
    width: "100%"
  }
};

export const inputStyle: any = {
  fieldGroup: {
    backgroundColor: "#2b313b",
    border: 0,
    height: "22px"
  },
  field: {
    height: "21px"
  },
  root: {
    width: "100%"
  }
};

export const checkboxStyle = {
  checkbox: {
    border: "0",
    background: "#2b313b"
  }
};
