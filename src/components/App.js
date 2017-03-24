import React, { Component } from "react";
import { Container, Button, Content, Text } from "native-base";
import { View } from 'react-native';
import { Title } from "./common";
import scenes from "./Routes";
import { Router } from "react-native-router-flux";
import firebase from "firebase";

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBjCs7K2w52bdwmUbat-4yGUtMEamSl_2I",
            authDomain: "moodtracker-d47d7.firebaseapp.com",
            databaseURL: "https://moodtracker-d47d7.firebaseio.com",
            storageBucket: "moodtracker-d47d7.appspot.com",
            messagingSenderId: "808622200328"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Container>
                <Router scenes={scenes} />
            </Container>
        )
    }
}

export default App;