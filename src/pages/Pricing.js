import React from "react";
import PricingComparison from "../components/pricing/PricingComparison";
import {titleStyle, normalWeight} from "../styles/fonts"
export default () => (
    <div>
        <div style={{textAlign: "center", marginTop: "50px"}}>
        <h1 style={{...titleStyle, ...normalWeight}}>Pricing</h1>
        <PricingComparison/>
        </div>

    </div>
)