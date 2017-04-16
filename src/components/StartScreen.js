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
import { Title, Subtitle, Card, CardSection, ImageBackground } from "./common";
import  { Actions } from "react-native-router-flux";
import firebase from 'firebase';

class StartScreen extends Component {

    state = { user: null };
    
    componentDidMount(){
        const user = firebase.auth().currentUser;
        this.setState({user});
    }
    
    render() {
        const { cardSectionStyle, containerStyle, buttonStyle } = style;
         return (
            <ImageBackground imageLink={require("../assets/graphWallpaper.png")}>
                <Card>
                    <CardSection>
                        <Title style={{color: "white", backgroundColor: "transparent"}}>Tracker</Title>
                        <Subtitle style={{color: "white", backgroundColor: "transparent"}}>What do You Want To Do?</Subtitle>
                    </CardSection>

                    <CardSection>
                        <Button full success style={buttonStyle} onPress={() => Actions.login({redirect: "logDailyValues"})}>
                            <Text>Log Weight & Mood</Text>
                        </Button>
                        <Button full warning style={buttonStyle} onPress={() => Actions.login({redirect: "strength"})}>
                            <Text>Track Gym</Text>
                        </Button>
                        <Button full light style={buttonStyle} onPress={() => Actions.login({redirect: "home"})}>
                            <Text>Dashboard</Text>
                        </Button>                         
                    </CardSection>
                </Card>
            </ImageBackground>
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
        flexDirection: 'row',
        backgroundColor: "slategray"        
    },
     buttonStyle: {
        padding: 10, 
        marginTop: 10, 
        shadowColor:"#333",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
}

export default StartScreen;