import React, { Component } from "react";
import { View } from 'react-native';
import { 
    Text, 
    Button, 
    Container, 
    H1,
    H2,
    H3,
 } from 'native-base';
import { Title, Subtitle, Card, CardSection } from "./common";
import  { Actions } from "react-native-router-flux";
import firebase from 'firebase';

class StartScreen extends Component {

    state = { user: null };
    
    componentDidMount(){
        const user = firebase.auth().currentUser;
        this.setState({user});
    }
    
    render() {
        const { cardSectionStyle, containerStyle } = style;
         return (
            <Container style={containerStyle}>
                <Card>
                    <CardSection>
                        <Title>Tracker</Title>
                        <Subtitle>What do You Want To Do?</Subtitle>
                    </CardSection>

                    <CardSection>
                        <Button full style={{marginBottom: 10}} onPress={() => Actions.login({redirect: "logDailyValues"})}>
                            <Text>Log Weight & Mood</Text>
                        </Button>
                        <Button full danger style={{marginBottom: 10}} onPress={() => Actions.login({redirect: "strength"})}>
                            <Text>Track Gym</Text>
                        </Button>
                        <Button full warning style={{marginBottom: 10}} onPress={() => Actions.login({redirect: "home"})}>
                            <Text>Dashboard</Text>
                        </Button>                        
                    </CardSection>
                </Card>
            </Container>
        )
    }
}

const style = {
    cardSectionStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerStyle: {
        flexDirection: 'row'
    }
}

export default StartScreen;