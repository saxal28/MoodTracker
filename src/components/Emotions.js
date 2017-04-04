import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, BarChart } from "./common";
import { Container, Content, Text, Button, Tab } from 'native-base';
import { fakeData, formatFullDate, sortData, countEmotions } from "../util";
import { Actions } from "react-native-router-flux";

class Emotions extends Component {

    renderMood() {
        return fakeData.map((data, index) => {
            return (
                <ThreeColumnListItem 
                    key={index}
                    col1={formatFullDate(data.date)}
                    col2={data.mood}
                />
            )
        })
    }

    render10DayMood() {
        let counter = 0;
        return fakeData.map((data, index) => {
            if(counter < 10) {
                counter ++;
                return (
                    <ThreeColumnListItem 
                        key={index}
                        col1={formatFullDate(data.date)}
                        col2={data.mood}
                    />
                )
            }
        })
    }

    render() {
        sortData(fakeData);
        const firstTenDays = fakeData.slice(0,9); //for testing
        const firstMonth = fakeData.slice(0,29); // for testing
        const threeMonths = fakeData.slice(0,89); //for testing

        return (
            <Container>
                
               <TabbedNavbar title="Mood">
                   <Tab heading="10 Day Mood">
                       <ThreeColumnListItem 
                            bold
                            col1="Date"
                            col2="Mood"
                            col3="Last Week"
                       />
                        <Content>
                            {this.render10DayMood()}
                        </Content>
                    </Tab>
                    <Tab heading="Trends">
                        <Content>
                           <BarChart data={firstTenDays} y="mood" />
                        </Content>
                    </Tab>
                    <Tab heading="All">
                        <Content>
                            
                        </Content>
                    </Tab>
                </TabbedNavbar>
               <FooterNav emotionsActive/>
            </Container>
        );
    }
}

export default Emotions;