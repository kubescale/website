import React from "react";

import Progress from "./progress"
import Card from "./Card"
import progress from "./progress";

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
  color: "#222222",
};
const codeStyle = {
  whiteSpace: "nowrap",
  color: "rgb(220, 229, 245)",
  background: "rgb(40, 52, 71) none repeat scroll 0% 0%",
    padding: "6px 8px",
    marginLeft: "4px",
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
        <div style={{width:"max-content", margin: "0 auto"}}>
        <p style={{...fontStyle, textAlign: "left", marginBottom: "0px", display: "block", }}>We take care of the control plane,</p>
        <span style={fontStyle}>You can run your workers on any machine. </span>{" "}
            <span style={{ ...fontStyle, ...codeStyle }}>
        $ kubescale <span style={{ color: "#CC5577" }}>up</span></span>
        </div>
        <div style={{marginTop: "30px"}}>
      <Card>
          <h2 style={{color: "#cc5577"}}>The Roadmap</h2>
          <div className="progress">
            <Progress/>
          </div>
      </Card>
        </div>
    </div>
  );
}