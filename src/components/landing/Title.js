import React from "react";

import Progress from "./Progress"
import Card from "../Card"
import {titleStyle, blackWeight} from "../../styles/fonts"
const divStyle = {
  textAlign: "center"
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
    marginLeft: "10px",
};

export function Title() {
  return (
    <div style={divStyle}>
      <h1 style={titleStyle}>
        <span style={blackWeight}>Production Kubernetes</span> anywhere
      </h1>
        <div style={{ margin: "0 auto", display: "table"}}>
        <p style={{...fontStyle, textAlign: "left", marginBottom: "0px", display: "block", }}>We take care of the control plane,</p>
        <span style={fontStyle}>You run your workers on any machine, on any network. </span>{" "}
            <span style={{ ...fontStyle, ...codeStyle }}>
             $ kubescale <span style={{ color: "#CC5577" }}>up</span></span>
        </div>
        <div style={{marginTop: "100px"}}>
      <Card>
          <h2 style={{color: "#cc5577"}}>The Roadmap</h2>
          <div className="progress">
            <Progress/>
          </div>
          <p style={{fontFamily: "Inter", marginTop: "40px", fontStyle: "italic"}}><span style={{fontWeight: "bold"}}>
              July 2020:</span>
              Implemented the Datastore operator. Working on the proof-of-concept operator for the free tier.</p>
      </Card>
        </div>
    </div>
  );
}
