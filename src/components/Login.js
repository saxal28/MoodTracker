import React from "react";
import { View } from 'react-native';
import { 
    Text, 
    Button, 
    Container, 
    H1,
    H2,
    H3,
 } from 'native-base';
import { Title, Card, CardSection } from "./common";

const Login = () => {
    const { cardSectionStyle, containerStyle } = style;
    return (
        <Container style={containerStyle}>
            <Card>
                <CardSection>
                    <Title>Tracker</Title>
                    <H3>This is the login page</H3>
                </CardSection>

                <CardSection styles={cardSectionStyle}>
                    <Button full style={{marginBottom: 10}}>
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

export default Login;