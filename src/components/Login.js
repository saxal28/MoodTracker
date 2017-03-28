import React, { Component } from "react";
import { View } from 'react-native';
import { 
    Text, 
    Button, 
    Container, 
    Item,
    Input,
 } from 'native-base';
import { Title, Subtitle, Card, CardSection } from "./common";
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import firebase from "firebase";

class Login extends Component {

    state = { email: "", password: ""};

    // componentWillMount() { Actions.main() }

    handleLogin(email, password) { this.props.loginUser(email, password); }
    handleEmailChange(e) { this.props.emailChanged(e); }
    handlePasswordChange(e) { this.props.passwordChanged(e); }

    showLoginError() {
        if(this.props.error) {
            return (
                <CardSection>
                    <Text style={style.errorStyle}>{this.props.error}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { cardSectionStyle, containerStyle, inputStyle, subtitleStyle, errorStyle } = style;
        const { email, password, user } = this.props;
        return (
            <Container style={containerStyle}>
                <Card>
                    <CardSection>
                        <Title>Login</Title>
                        <Subtitle style={subtitleStyle}>You can also create an account here!</Subtitle>
                    </CardSection>

                    <CardSection>
                        <Item underline>
                            <Input 
                                value={email}
                                placeholder="email" 
                                onChangeText={this.handleEmailChange.bind(this)}/>
                        </Item>
                        <Item underline>
                            <Input 
                                value={password}
                                placeholder="password" 
                                secureTextEntry
                                onChangeText={this.handlePasswordChange.bind(this)}
                                />
                        </Item>
                    </CardSection>

                    {this.showLoginError()}

                    <CardSection style={cardSectionStyle}>
                        <Button full onPress={() => this.handleLogin(email, password)}>
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
    },
    errorStyle: {
        color: "red"
    }
}

const mapStateToProps = state => {
    const { email, password, user, error } = state.auth;
    return { email, password, user, error }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);