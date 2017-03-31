import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, LineChart } from "./common";
import { Container, Content, Text, Button, Tab, ListItem, Grid, Col, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { days, months, daysArr, formatFullDate, fakeData, sortData, findAverage } from "../util";
import { View } from 'react-native';

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

    renderTenDayWeightData() {
        let counter = 0;
        return fakeData.map((data, index) => {
            if(counter < 10) {
                counter += 1;
                 return (
                    <ThreeColumnListItem 
                        key={index}
                        col1={formatFullDate(data.date)}
                        col3={data.weight}
                    />
                );
            }
        });
    }

    render() {
        sortData(fakeData);
        const firstTenDays = fakeData.slice(0,9); //for testing
        return (
            <Container>
               <TabbedNavbar title="Weight Stats">

                   <Tab heading="Past 10 Days">
                       <ThreeColumnListItem 
                            bold
                            col1="Date"
                            col3="Weight"
                         />
                        <Content>
                            {this.renderTenDayWeightData()}
                        </Content>
                    </Tab>

                    <Tab heading="Trend">
                        <Content contentContainerStyle={{alignSelf: "center", justifyContent: "center"}}>
                           <LineChart data={firstTenDays} y="weight"/>
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