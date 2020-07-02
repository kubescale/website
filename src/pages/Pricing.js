import React from "react";
import PricingComparison from "../components/pricing/PricingComparison";
import {titleStyle, blackWeight} from "../styles/fonts"
export default () => (
    <div>
        <div style={{textAlign: "center", marginTop: "50px"}}>
        <h1 style={{...titleStyle, ...blackWeight}}>Pricing</h1>
        <PricingComparison/>
        </div>

    </div>
)