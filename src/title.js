import React from "react";

const divStyle = {
  textAlign: "center"
};
const titleStyle = {
  marginTop: "2em",
  fontFamily: "Inter",
  fontSize: "3em",
  fontWeight: "100",
  color: "#222222"
};
const fontStyle = {
  fontSize: "18px",
  fontFamily: "Inter",
  fontWeight: "bold",
  borderRadius: "4px",
  display: "inline",
  lineHeight: "1.66667",
  overflowX: "auto",
  whiteSpace: "preWrap",
  padding: "3px 8px",
  color: "#222222"
};
const codeStyle = {
  whiteSpace: "nowrap",
  color: "rgb(220, 229, 245)",
  background: "rgb(40, 52, 71) none repeat scroll 0% 0%"
};
const blackWeight = {
  fontWeight: "600"
};
export function Title() {
  return (
    <div style={divStyle}>
      <h1 style={titleStyle}>
        <span style={blackWeight}>Production Kubernetes</span> anywhere
      </h1>
      <span style={fontStyle}>Connect your workers within seconds </span>{" "}
      <span style={{ ...fontStyle, ...codeStyle }}>
        <code>
          $ kubescale <span style={{ color: "#CC5577" }}>up</span>
        </code>
      </span>
    </div>
  );
}
