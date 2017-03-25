import React, { Component } from "react";
import { View } from 'react-native';
import { 
    Text, 
    Button, 
    Container, 
    Form,
    Item,
    Input,
    Label
 } from 'native-base';
import { Title, Subtitle, Card, CardSection } from "./common";
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        const { cardSectionStyle, containerStyle, inputStyle, subtitleStyle } = style;
        //test for redux
        console.log(this.props);
        return (
            <Container style={containerStyle}>
                <Card>
                    <CardSection>
                        <Title>Login</Title>
                        <Subtitle style={subtitleStyle}>You can also create an account here!</Subtitle>
                    </CardSection>

                    <CardSection>
                        <Item underline>
                            <Input placeholder="username" />
                        </Item>
                        <Item underline>
                            <Input placeholder="password" secureTextEntry/>
                        </Item>
                    </CardSection>

                    <CardSection style={cardSectionStyle}>
                        <Button full>
                            <Text>Login</Text>
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
    },
    inputStyle: {
        marginTop: 15
    },
    subtitleStyle: {
        fontSize: 17
    }
}

const mapStateToProps = state => {
    return {
        reduxStore: state
    }
}

export default connect(mapStateToProps, null)(Login);