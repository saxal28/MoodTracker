import React from "react";
// import { View, Text } from 'react-native';
import { Container, Button, Content, Text } from "native-base";

const App = () => {
    const { containerStyle } = style;
    return (
        <Container style={containerStyle}>
            <Content>
                 <Button primary><Text>Hi</Text></Button>
            </Content>
        </Container>
    )
}

const style = {
    viewStyle: {
        marginTop: 20
    },
    containerStyle: {
        marginTop: 20
    }
}

export default App;