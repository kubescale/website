import "./styles.css";
import React from "react";

import Menu from "./menu.js";
import { Title } from "./title";

export default function App() {
  return (
      <div style={marginWrapper}>
          <Menu/>
          <Title />
      </div>
  );
}
const marginWrapper = {
    marginLeft: window.innerWidth > 768 ? '20%' : '0',
    marginRight: window.innerWidth > 768 ? '20%' : '0',
}
