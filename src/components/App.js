import React from "react";
import { Container, Button, Content, Text } from "native-base";
import { View } from 'react-native';
import { Title } from "./common";
import scenes from "./Routes";
import { Router } from "react-native-router-flux";

const App = () => {
    return (
        <Container>
            <Router scenes={scenes} />
       </Container>
    )
}

export default App;