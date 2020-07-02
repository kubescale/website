import React from "react";
import {
  Create,
  AtlassianNavigation,
  PrimaryButton,
    PrimaryDropdownButton,
  generateTheme

} from "@atlaskit/atlassian-navigation";

import { withRouter } from "react-router-dom";

export default function Menu() {
    return (
        <AtlassianNavigation
            theme={theme}
            label="site"
            primaryItems={[
                <NavButton to="./pricing">Pricing</NavButton>,
                <NavButton to="./features">Features</NavButton>,
                <NavButton to="/about">About</NavButton>,
                <NavButton to="./docs">Docs</NavButton>,
            ]}
            renderSettings={Signin}
            renderSignIn={CreateButton}
            renderProductHome={Home}
        />
    );
}

const Home = () => (<NavButton to="./">
    <h1 style={{ color: "black", fontFamily: "Inter", marginRight: "5px" }}>Kubescale</h1>
</NavButton>);


const Signin = () => (
    <div className="navButton">
        <PrimaryDropdownButton>My Account</PrimaryDropdownButton>
    </div>
)

const CreateButton = () => (
  <Create
    buttonTooltip="I'm shown on bigger viewports"
    iconButtonTooltip="I'm shown when on smaller viewports"
    text="Get Started"
    onClick={console.log}
  />
);

// Wrapper to add custom theming
const NavButton = withRouter((props) => {
    return (
        <div className="navButton">
            <PrimaryButton onClick={() => props.history.push(props.to)}>{props.children}</PrimaryButton>

        </div>
    );
})


const theme = generateTheme({
  name: "high-contrast",
  backgroundColor: "#F3F3F3",
  highlightColor: "#CC5577"
});
