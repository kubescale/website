import React from "react";
import {
  Create,
  AtlassianNavigation,
  PrimaryButton,
  generateTheme
} from "@atlaskit/atlassian-navigation";
import Button from "@atlaskit/button";

const AboutButton = () => <PrimaryButton>About</PrimaryButton>;
const DocumentationButton = () => <PrimaryButton>Docs</PrimaryButton>;
const PricingButton = () => <PrimaryButton>Pricing</PrimaryButton>;

const CreateButton = () => (
  <Create
    buttonTooltip="I'm shown on bigger viewports"
    iconButtonTooltip="I'm shown when on smaller viewports"
    text="Get Started"
    onClick={console.log}
  />
);
const Signin = () => <PrimaryButton>My Account</PrimaryButton>;

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
      renderSignIn={Signin}
      renderSettings={CreateButton}
      renderProductHome={Home}
    />
  );
}

const theme = generateTheme({
  name: "high-contrast",
  backgroundColor: "#F3F3F3",
  highlightColor: "#CC5577"
});
