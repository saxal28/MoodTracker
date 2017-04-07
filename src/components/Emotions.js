import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, BarChart } from "./common";
import { Container, Content, Text, Button, Tab } from 'native-base';
import { allStats, formatFullDate, sortData, countEmotions } from "../util";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class Emotions extends Component {

    renderMood() {
        const{allStats} = this.props;
        return allStats.map((data, index) => {
            return (
                <ThreeColumnListItem 
                    key={index}
                    col1={formatFullDate(data.date)}
                    col2={data.emotion}
                />
            )
        })
    }

    render10DayMood() {
        const{allStats} = this.props;
        let counter = 0;
        return allStats.map((data, index) => {
            if(counter < 10) {
                counter ++;
                return (
                    <ThreeColumnListItem 
                        key={index}
                        col1={formatFullDate(data.date)}
                        col2={data.emotion}
                    />
                )
            }
        })
    }

    render() {
        const { allStats } = this.props;
        console.log(allStats);
        sortData(allStats);
        const firstTenDays = allStats.slice(0,9); //for testing
        const firstMonth = allStats.slice(0,29); // for testing
        const threeMonths = allStats.slice(0,89); //for testing

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
                           <BarChart data={firstTenDays} y="emotion" />
                        </Content>
                    </Tab>
                    <Tab heading="All">
                        <Content>
                             {this.renderMood()}
                        </Content>
                    </Tab>
                </TabbedNavbar>
               <FooterNav emotionsActive/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { allStats } = state.user;
    return {
        allStats
    }
}

export default connect(mapStateToProps, null)(Emotions);