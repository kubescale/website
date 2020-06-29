import React from "react";
import { AkCode, AkCodeBlock } from "@atlaskit/code";

const divStyle = {
  textAlign: "center"
};
const titleStyle = {
  marginTop: "2em",
  fontFamily: "Inter",
  fontSize: "3em",
  color: "#222222"
};
const fontStyle = {
  fontSize: "18px",
  fontFamily: "Inter",
  fontWeight: "bold",
  background: "rgb(40, 52, 71) none repeat scroll 0% 0%",
  color: "rgb(220, 229, 245)",
  borderRadius: "4px",
  display: "inline",
  lineHeight: "1.66667",
  overflowX: "auto",
  whiteSpace: "preWrap",
  padding: "3px 8px"
};

const jsCode = `kubescale up <token>`;
const darkTheme = { mode: "dark" };

export function Title() {
  return (
    <div style={divStyle}>
      <h1 style={titleStyle}>Production Kubernetes within Seconds</h1>
      <span style={fontStyle}>
        <code>
          $ kubescale <span style={{ color: "#CC5577" }}>up</span>
        </code>
      </span>
    </div>
  );
}
