import React from "react";
import {
  Create,
  AtlassianNavigation,
  PrimaryButton,
    PrimaryDropdownButton,
  generateTheme
} from "@atlaskit/atlassian-navigation";

export default function Menu() {
    return (
        <AtlassianNavigation
            theme={theme}
            label="site"
            primaryItems={[
                <PricingButton />,
                <FeaturesButton />,

                <AboutButton />,
                <DocumentationButton />,
            ]}
            renderSettings={Signin}
            renderSignIn={CreateButton}
            renderProductHome={Home}
        />
    );
}

const Home = () => <h1 style={{ color: "black", fontFamily: "Inter", marginRight: "5px" }}>Kubescale</h1>;

const FeaturesButton = () => <NavButton>Features</NavButton>;
const AboutButton = () => <NavButton>About</NavButton>;
const DocumentationButton = () => <NavButton>Docs</NavButton>;
const PricingButton = () => <NavButton>Pricing</NavButton>;

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
const NavButton = (props) => {
    return (
        <div className="navButton">
            <PrimaryButton>{props.children}</PrimaryButton>
        </div>
    );
}


const theme = generateTheme({
  name: "high-contrast",
  backgroundColor: "#F3F3F3",
  highlightColor: "#CC5577"
});
