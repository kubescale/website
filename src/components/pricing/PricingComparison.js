import React from "react";
import Card from "../Card";
import CheckIcon from '@atlaskit/icon/glyph/check';
//import CrossIcon from '@atlaskit/icon/glyph/cross';
import {normalWeightFontStyle} from "../../styles/fonts"

const Hr = () => (
    <div style={{height: '1px', backgroundColor: '#ddd', margin: '1em 0'}}/>
);

const gridStyle = {display: "flex", flexWrap: "wrap", justifyContent: "center"}
const columnStyle = {width: "23%", minWidth: "230px", margin: "0 10px  0px 10px", marginBottom: "45px"}
export default () => {
    return (
        <div style={{marginTop: "50px"}}>
            <div style={gridStyle}>
                <div style={columnStyle}>
                    <Card>
                        <h1 style={normalWeightFontStyle}>Hobby </h1>
                        <Hr/>
                        <div style={{margin: "0 auto", width: "max-content"}}>
                            <div style={{display: "inline-block"}}>
                                <h1 style={{fontSize: "40px", textTransform: "none", margin: "4px 6px"}}>Free</h1>
                            </div>

                        </div>
                        <Hr/>

                        <div style={{textAlign: "left", marginLeft: "5px"}}>
                            <p><CheckIcon primaryColor="green"/>Up to 3 workers</p>
                            <p><CheckIcon primaryColor="green"/>Secured communication over an encrypted mesh network</p>
                            <p><CheckIcon primaryColor="green"/>Kubescale manages the Dataplane</p>
                        </div>
                    </Card>
                </div>
                <div style={columnStyle}>
                    <Card>
                        <h1 style={normalWeightFontStyle}>Production</h1>
                        <Hr/>

                        <div style={{margin: "0 auto", width: "max-content", minHeight: "55px"}}>
                            <div style={{display: "inline-block"}}>
                                <h1 style={{fontSize: "40px", textTransform: "none", margin: "4px 6px"}}>$5</h1>
                            </div>
                            <div style={{display: "inline-block"}}>
                                <p style={{fontSize: "10px", margin: "0"}}>per cluster</p>

                                <p style={{fontSize: "10px", margin: "0px", marginTop: "-3px"}}>per month</p>
                            </div>
                        </div>
                        <Hr/>

                        <div style={{textAlign: "left", marginLeft: "5px"}}>
                            <p><CheckIcon primaryColor="green"/>Up to 10 workers</p>
                            <p><CheckIcon primaryColor="green"/>Secured communication over an encrypted mesh network</p>
                            <p><CheckIcon primaryColor="green"/>Kubescale manages the dataplane</p>
                            <p><CheckIcon primaryColor="green"/>Lite workers</p>
                        </div>
                    </Card>
                </div>
                <div style={columnStyle}>
                    <Card>
                        <h1 style={normalWeightFontStyle}>Enterprise</h1>
                        <Hr/>

                        <div style={{margin: "0 auto", width: "max-content"}}>
                            <div style={{display: "inline-block"}}>
                                <h1 style={{ fontSize: "40px", textTransform: "none", margin: "4px 6px"}}>$25</h1>
                            </div>
                            <div style={{display: "inline-block"}}>
                                <p style={{fontSize: "10px", margin: "0"}}>per cluster</p>

                                <p style={{fontSize: "10px", margin: "0px", marginTop: "-3px"}}>per month</p>
                            </div>
                        </div>
                        <Hr/>
                        <div style={{textAlign: "left", marginLeft: "5px"}}>
                            <p><CheckIcon primaryColor="green"/>Up to 100 workers</p>
                            <p><CheckIcon primaryColor="green"/>Secured communication over an encrypted mesh network</p>
                            <p><CheckIcon primaryColor="green"/>Kubescale manages the dataplane</p>
                            <p><CheckIcon primaryColor="green"/>Lite workers</p>
                            <p><CheckIcon primaryColor="green"/>Isolated Dataplane and Controlplane</p>
                            <p><CheckIcon primaryColor="green"/>On-prem distribution</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}