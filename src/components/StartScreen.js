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
    
    componentWillMount(){
        const user = firebase.auth().currentUser;
        if (user) {
            Actions.main();
        }
    }

    handleLoginPress() {
        Actions.login();
    }
    
    render() {
        const { cardSectionStyle, containerStyle } = style;
         return (
            <Container style={containerStyle}>
                <Card>
                    <CardSection>
                        <Title>Tracker</Title>
                        <Subtitle>Login / Register to get Started</Subtitle>
                    </CardSection>

                    <CardSection style={cardSectionStyle}>
                        <Button full style={{marginBottom: 10}} onPress={this.handleLoginPress.bind(this)}>
                            <Text>Login</Text>
                        </Button>
                        <Button full>
                            <Text>Register</Text>
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