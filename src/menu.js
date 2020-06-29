import React from "react";
import {
  Create,
  AtlassianNavigation,
  PrimaryButton
} from "@atlaskit/atlassian-navigation";

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

const Home = () => (
  <h1 style={{ color: "black", fontFamily: "Inter" }}>Kubescale</h1>
);
export default function Menu() {
  return (
    <AtlassianNavigation
      label="site"
      primaryItems={[
        <AboutButton />,
        <DocumentationButton />,
        <PricingButton />
      ]}
      renderProductHome={Home}
      renderCreate={CreateButton}
    />
  );
}
