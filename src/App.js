import React from "react";
import "./styles.css";

import { Create, AtlassianNavigation } from "@atlaskit/atlassian-navigation";

const CreateButton = () => (
  <Create
    buttonTooltip="I'm shown on bigger viewports"
    iconButtonTooltip="I'm shown when on smaller viewports"
    text="Create"
    onClick={console.log}
  />
);

const Home = () => (
  <h1 style={{ color: "black", fontFamily: "Inter" }}>Kubescale</h1>
);

export default function App() {
  return (
    <AtlassianNavigation
      label="site"
      renderProductHome={Home}
      renderCreate={CreateButton}
      primaryItems={[]}
    />
  );
}
