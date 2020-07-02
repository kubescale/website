import React from "react"

const cardStyle = {
  boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: "4px",
  color: "rgba(0, 0, 0, 0.87)",
  backgroundColor: "#fff",
  padding: "10px",
  paddingBottom: "20px",

  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}

export default (props) => (
  <div style={cardStyle}>
    {props.children}
  </div>
);