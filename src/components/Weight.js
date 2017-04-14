import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, LineChart } from "./common";
import { Container, Content, Text, Button, Tab, ListItem, Grid, Col, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { days, months, daysArr, formatFullDate, fakeData, sortData, findAverage, reverseSortData } from "../util";
import { View } from 'react-native';
import { connect } from "react-redux";
import { getStats } from "../actions/userActions";
import _ from 'lodash';

class Weight extends Component {

    componentWillMount(){
        this.props.getStats();
        console.log(this.props.allStats);
    }

    renderWeightData() {
        const { allStats } = this.props;
        // 185 is the average of the previous 10 days
        return allStats.map((data, index) => {
            return (
                <ThreeColumnListItem 
                    key={index}
                    col1={formatFullDate(new Date(data.date))}
                    col2={data.weight}
                    col3={(data.weight - 185).toFixed(1)}
                />
            );
        });
    }

    renderTenDayWeightData() {
        const { allStats } = this.props;
        let counter = 0;
        return allStats.map((data, index) => {
            if(counter < 10) {
                counter += 1;
                 return (
                    <ThreeColumnListItem 
                        key={index}
                        col1={formatFullDate(new Date(data.date))}
                        col2={data.weight}
                        col3={(data.weight - 185).toFixed(1)}
                    />
                );
            }
        });
    }

    render() {
        const { allStats } = this.props;
        sortData(allStats);
        const firstTenDays = allStats.slice(0,9); //for testing
        const firstMonth = allStats.slice(0,29); // for testing
        const threeMonths = allStats.slice(0,89); //for testing
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
                           <LineChart data={reverseSortData(firstTenDays)} y="weight"/>

                            <ThreeColumnListItem 
                                bold
                                col2="Past 30 Days"
                            />
                           <LineChart data={reverseSortData(firstMonth)} y="weight"/>

                           <ThreeColumnListItem 
                                bold
                                col2="Past 90 Days"
                            />
                           <LineChart data={reverseSortData(threeMonths)} y="weight"/>

                           <ThreeColumnListItem 
                                bold
                                col2="All"
                            />
                           <LineChart data={reverseSortData(allStats)} y="weight"/>

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

const mapStateToProps = (state) => {

    let { allStats } = state.user;
    _.each(allStats, (value, key) => value.weight = Number(value.weight));     
    return { allStats }
}

export default connect(mapStateToProps, {getStats})(Weight) ;