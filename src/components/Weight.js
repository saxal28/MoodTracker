import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem } from "./common";
import { Container, Content, Text, Button, Tab, ListItem, Grid, Col, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { daysArr, monthsArr, formatFullDate, fakeData } from "../util";



class Weight extends Component {

    renderWeightData() {
        return fakeData.map((data, index) => {
            return (
                <ThreeColumnListItem 
                    key={index}
                    col1={formatFullDate(data.date)}
                    col3={data.weight}
                />
            );
        });
    }

    render() {
        console.log(daysArr, monthsArr)
        return (
            <Container>
               <TabbedNavbar title="Weight Stats">

                   <Tab heading="This Week">
                        <Content>
                            {this.renderWeightData()}
                        </Content>
                    </Tab>

                    <Tab heading="Trend">
                        <Content>
                            {this.renderWeightData()}
                        </Content>
                    </Tab>

                     <Tab heading="All Data">
                        <ThreeColumnListItem 
                            bold
                            col1="Date"
                            col3="Weight"
                         />
                        <Content>
                            {this.renderWeightData()}
                        </Content>
                    </Tab>

                </TabbedNavbar>
               <FooterNav weightActive/>
            </Container>
        );
    }
}

export default Weight;