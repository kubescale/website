import "./styles.css";
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Menu from "./menu.js";
import {Title} from "./components/landing/Title";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import About from "./pages/About";
import Docs from "./pages/Docs";

export default function App() {
    return (
        <Router>
            <div style={marginWrapper}>
                <Menu/>
                <Switch>
                    <Route path="/pricing">
                        <Pricing/>
                    </Route>
                    <Route path="/features">
                        <Features/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/docs">
                        <Docs/>
                    </Route>
                    <Route path="/">
                        <Title/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
const marginWrapper = {
    marginLeft: window.innerWidth > 768 ? '20%' : '0',
    marginRight: window.innerWidth > 768 ? '20%' : '0',
}
