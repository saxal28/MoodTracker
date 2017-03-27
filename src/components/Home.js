import React, { Component } from "react";
import { Container } from "native-base";
import { Card, CardSection } from './common';
import { Text } from "react-native";
import { connect } from 'react-redux';

class Home extends Component {
    
    render() {
        return (
            <Container>
                <Card>
                    <CardSection>
                        <Text>Logged in User: {this.props.user.email}</Text>
                    </CardSection>
                 </Card>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    const { user } = state.auth;
    return { user }
}

export default connect(mapStateToProps, null)(Home);