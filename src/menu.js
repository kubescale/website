import React from "react";
import {
  Create,
  AtlassianNavigation,
  PrimaryButton,
  generateTheme
} from "@atlaskit/atlassian-navigation";

const NavButton = (props) => {
    return (
        <div className="navButton">
            <PrimaryButton>{props.children}</PrimaryButton>
        </div>
    );
}
const AboutButton = () => <NavButton>About</NavButton>;
const DocumentationButton = () => <NavButton>Docs</NavButton>;
const PricingButton = () => <NavButton>Pricing</NavButton>;

const CreateButton = () => (
  <Create
    buttonTooltip="I'm shown on bigger viewports"
    iconButtonTooltip="I'm shown when on smaller viewports"
    text="Get Started"
    onClick={console.log}
  />
);
const Signin = () => <NavButton>My Account</NavButton>;

const Home = () => (
  <h1 style={{ color: "black", fontFamily: "Inter" }}>Kubescale</h1>
);
export default function Menu() {
  return (
    <AtlassianNavigation
      theme={theme}
      label="site"
      primaryItems={[
        <AboutButton />,
        <DocumentationButton />,
        <PricingButton />
      ]}
      renderSettings={Signin}
      renderSignIn={CreateButton}
      renderProductHome={Home}
    />
  );
}

const theme = generateTheme({
  name: "high-contrast",
  backgroundColor: "#F3F3F3",
  highlightColor: "#CC5577"
});
