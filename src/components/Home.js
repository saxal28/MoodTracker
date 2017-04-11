import React, { Component } from "react";
import { Container, Content, Text, ListItem, Fab, Icon, Button, View, Grid, Col, Row } from "native-base";
import { Card, CardSection, FooterNav, Navbar, Title, Subtitle, FabMenu } from './common';
import { doDatesMatch, sortData } from "../util";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import { getStats, setTodaysStats } from '../actions/userActions';
import  { logoutUser } from "../actions";

class Home extends Component {

    state = { active: true, user: "", logged: 'false', todaysStats: {weight: null, emotion: null} };

    componentDidMount() {
        // work-around for wonky Fab Button not opening on load
        this.setState({ active: false });
        // todays stats passed from log form
        //pushes results to state
        if(this.props.todaysStats) {
            const { weight, emotion } = this.props.todaysStats;
            this.setState({logged: "Worked!", todaysStats: { weight, emotion} });
        }
        // fixes bug where todays stats weren't rendering
        // when returning home from bottom navbar
        if(this.props.allStats.length > 0) {
            this.getTodaysStats(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.getTodaysStats(nextProps);
    }

    handleFabPress() {
        this.setState({ active: !this.state.active })
    }

    getTodaysStats({ allStats }) {
        if(this.props.todaysStats) {
            this.setState({logged: "todays stats", todaysStats: this.props.todaysStats});
        } else {
            sortData(allStats)
                if (doDatesMatch(allStats[0])) {
                    this.setState({logged: "true", todaysStats: allStats[0]})
                } else {
                    this.setState({logged: 'didnt work...'});
                }
        }
    }

    render() {
        const { rowStyle, colStyle } = styles;
        const { allStats, loggedStats, } = this.props;
        const { todaysStats, logged } = this.state;
        return (
            <Container>
                <Navbar 
                    title="Home" 
                    leftButton
                    leftButton={() => Actions.logDailyValues()}
                />
                <View style={{flex: 1 }}>
                        <Grid>
                            <Col style={colStyle}>
                                <Row style={rowStyle}>
                                    <Title>{todaysStats.weight}</Title>
                                </Row>
                            </Col>
                            <Col style={colStyle}>
                                <Row style={rowStyle}>
                                    <Title style={{color:"white"}}>{todaysStats.emotion}</Title>
                                </Row>
                            </Col>
                        </Grid>
                   <FabMenu 
                    active={this.state.active}                   
                    handlePress={this.handleFabPress.bind(this)} />
                </View>
                 <FooterNav homeActive />
            </Container>
        )
    }
}

const styles = {
    colStyle: {
        backgroundColor: "darkgray", 
    },
    rowStyle: {
        paddingTop: 10, 
        paddingBottom:10, 
        backgroundColor: "orange",
        justifyContent: 'center'    
    }
}


const mapStateToProps = (state) => {

    const { loggedStats, allStats } = state.user;
    return { loggedStats, allStats }
}

export default connect(mapStateToProps, {getStats, logoutUser, setTodaysStats})(Home);