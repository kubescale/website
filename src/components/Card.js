import React from "react"
import {fontStyle} from "../styles/fonts";

const cardStyle = {
    ...fontStyle,
  boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: "4px",
  color: "rgba(0, 0, 0, 0.87)",
  backgroundColor: "#fff",
  padding: "10px",
  paddingBottom: "20px",
  margin: "2px",
  height: "100%"
}

export default (props) => (
  <div style={cardStyle}>
    {props.children}
  </div>
);