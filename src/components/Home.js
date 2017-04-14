import React, { Component } from "react";
import { Container, Content, Text, ListItem, Fab, Icon, Button, View, Grid, Col, Row } from "native-base";
import { Card, CardSection, FooterNav, Navbar, Title, Subtitle, FabMenu, ImageBackground } from './common';
import { doDatesMatch, sortData } from "../util";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import { getStats, setTodaysStats } from '../actions/userActions';
import  { logoutUser } from "../actions";

class Home extends Component {

    state = { 
        active: true, 
        user: "", 
        logged: 'false', 
        todaysStats: {
            weight: null, emotion: null
        },
        yesterdaysStats: {
            weight: null, emotion: null
        } 
    };

    componentWillMount() {
        this.props.getStats()
    }

    componentDidMount() {
        this.setState({active: false})
    }

    componentWillReceiveProps(nextProps) {
        const { allStats } = nextProps;
        sortData(allStats);
        this.setState({
            todaysStats: {
                weight: allStats[0].weight,
                emotion: allStats[0].emotion,
                uid: allStats[0].uid
            },
            yesterdaysStats: {
                weight: allStats[1].weight || null,
                emotion: allStats[1].emotion || null,
                uid: allStats[1].uid || null
            }
        })
    }

    handleFabPress() {
        this.setState({ active: !this.state.active })
    }

    render() {
        const { rowStyle, colStyle } = styles;
        const { allStats, loggedStats } = this.props;
        const { todaysStats, logged, yesterdaysStats } = this.state;

        return (
            <Container style={{backgroundColor:"red"}}>
                <Navbar 
                    title="Home" 
                    leftButton
                    leftButton={() => Actions.logDailyValues()}
                />
                <View style={{flex: 1, backgroundColor:'orange'}}>
                        {/*<Title style={{paddingTop: 10, alignSelf: "center"}}>{todaysStats.weight}</Title>
                        <Title style={{paddingTop: 10, alignSelf: "center"}}>
                            {(yesterdaysStats.weight - todaysStats.weight).toFixed(1)}
                        </Title>
                        <Title style={{paddingTop: 10, alignSelf: "center"}}>{yesterdaysStats.weight}</Title>*/}
                        <Grid>
                            <Col style={colStyle}>
                                <Row style={rowStyle}>
                                    <Title>{todaysStats.weight}</Title>
                                </Row>
                            </Col>
                            <Col style={colStyle}>
                                <Row style={rowStyle}>
                                    <Title style={{color:"slategray"}}>{todaysStats.emotion}</Title>
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
        backgroundColor: "white",
        justifyContent: 'center'    
    },
}


const mapStateToProps = (state) => {

    const { loggedStats, allStats } = state.user;
    return { loggedStats, allStats }
}

export default connect(mapStateToProps, {getStats, logoutUser, setTodaysStats})(Home);