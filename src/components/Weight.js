import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, LineChart } from "./common";
import { Container, Content, Text, Button, Tab, ListItem, Grid, Col, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { days, months, daysArr, formatFullDate, fakeData, sortData, findAverage } from "../util";
import { View } from 'react-native';

class Weight extends Component {

    renderWeightData() {
        // 185 is the average of the previous 10 days
        return fakeData.map((data, index) => {
            return (
                <ThreeColumnListItem 
                    key={index}
                    col1={formatFullDate(data.date)}
                    col2={data.weight}
                    col3={(data.weight - 185).toFixed(1)}
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
                        col2={data.weight}
                        col3={(data.weight - 185).toFixed(1)}
                    />
                );
            }
        });
    }

    render() {
        sortData(fakeData);
        const firstTenDays = fakeData.slice(0,9); //for testing
        const firstMonth = fakeData.slice(0,29); // for testing
        const threeMonths = fakeData.slice(0,89); //for testing
        return (
            <Container>
               <TabbedNavbar title="Weight">

                   <Tab heading="Past 10 Days">
                       <ThreeColumnListItem 
                            bold
                            col1="Date"
                            col2="Weight"
                            col3="Last Week"
                         />
                        <Content>
                            {this.renderTenDayWeightData()}
                        </Content>
                    </Tab>

                    <Tab heading="Trend">
                        <Content contentContainerStyle={{alignSelf: "center", justifyContent: "center"}}>
                            <ThreeColumnListItem 
                                bold
                                col2="Past 10 Days"
                            />
                           <LineChart data={firstTenDays} y="weight"/>

                            <ThreeColumnListItem 
                                bold
                                col2="Past 30 Days"
                            />
                           <LineChart data={firstMonth} y="weight"/>

                           <ThreeColumnListItem 
                                bold
                                col2="Past 90 Days"
                            />
                           <LineChart data={threeMonths} y="weight"/>

                           <ThreeColumnListItem 
                                bold
                                col2="All"
                            />
                           <LineChart data={fakeData} y="weight"/>

                        </Content>
                    </Tab>

                     <Tab heading="All Data">
                        <ThreeColumnListItem 
                            bold
                            col1="Date"
                            col2="Weight"
                            col3="Last Week"
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