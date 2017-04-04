import React, { Component } from "react";
import { Container, Content, Text, ListItem, Fab, Icon, Button, View } from "native-base";
import { Card, CardSection, FooterNav, Navbar, Title, Subtitle } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import { getStats } from '../actions/userActions'

class Home extends Component {

    state = { active: true, user: "" };

    componentWillMount() {
        let user = firebase.auth().currentUser;
        console.log(this.props.getStats())
        
    }

    componentDidMount() {
        this.setState({ active: false })
    }

    render() {
        return (
            <Container>
                <Navbar title="Home" />
                <View style={{flex: 1 }}>
                    <Card>
                        <CardSection>
                            <Title>home page</Title>
                            <Subtitle>Ideas...</Subtitle>
                            <Text>Update Weight</Text>
                            <Text>Set Goal Weight</Text>
                            <Text>progress bar to weight goal</Text>
                            <Text>You are averaging ... weight lost/gain this week</Text>
                            <Text>see trends</Text>
                            <Text>noise effect when logging stats</Text>
                        </CardSection>
                    </Card>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        <Icon name="md-apps" />
                        <Button 
                            style={{ backgroundColor: '#34A34F'}} 
                            onPress={() => Actions.auth()}
                        >
                            <Icon name="md-add" style={{color:'white'}}/>
                        </Button>
                        <Button 
                            style={{ backgroundColor: '#3B5998' }}
                            onPress={() => Actions.trends()}
                        >
                            <Icon name="md-stats" />
                        </Button>
                        <Button 
                            style={{ backgroundColor: '#DD5144' }}
                            onPress={() => Actions.trends()}
                        >
                            <Icon name="md-trending-up" />
                        </Button>
                    </Fab>
                </View>
                 <FooterNav homeActive />
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    const { user } = state.auth;
    return { user }
}

export default connect(mapStateToProps, {getStats})(Home);