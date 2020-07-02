import React from "react";
import {Grid, GridColumn} from '@atlaskit/page';
import Card from "../Card";
import Lozenge from '@atlaskit/lozenge';
const Hr = () => (
    <div style={{ height: '1px', backgroundColor: '#ddd', margin: '1em 0' }} />
);

export default () => {
    return (
        <div style={{marginTop: "50px"}}>
            <Grid>
                <GridColumn medium={4}>
                    <Card>
                        <h1>Hobby </h1>
                        <Hr/>
                       <h1 style={{textTransform: "none", margin: "4px 6px"}}>Free</h1>
                        <Hr/>
                        <p>
                            Lorem ipsum dolor sit amet and consectetur adipisicing elit.
                            Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
                            commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
                            possimus labore! Mollitia est quis minima asperiores.
                        </p></Card>
                </GridColumn>
                <GridColumn medium={4}>
                    <Card>
                        <h1>Production</h1>
                        <Hr/>
                        <h1 style={{textTransform: "none", margin: "4px 6px"}}>
                            $5<span style={{fontSize: "10px"}}>/month</span></h1>
                        <Hr/>
                        <p>
                            Lorem ipsum dolor sit amet and consectetur adipisicing elit.
                            Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
                            commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
                            possimus labore! Mollitia est quis minima asperiores.
                        </p></Card>
                </GridColumn>
                <GridColumn medium={4}>
                    <Card>
                        <h1>Enterprise</h1>
                        <Hr/>
                        <h1 style={{textTransform: "none", margin: "4px 6px"}}>
                            $25<span style={{fontSize: "10px"}}>/month</span></h1>
                        <Hr/>
                        <p>
                            Lorem ipsum dolor sit amet and consectetur adipisicing elit.
                            Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
                            commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
                            possimus labore! Mollitia est quis minima asperiores.
                        </p></Card>
                </GridColumn>
            </Grid>
        </div>
    )
}