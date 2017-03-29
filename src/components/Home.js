import React, { Component } from "react";
import { Container, Content, Text, ListItem } from "native-base";
import { Card, CardSection, FooterNav, Navbar } from './common';
import { connect } from 'react-redux';

class Home extends Component {
    
    render() {
        return (
            <Container>
                <Navbar title="Home" subtitle="this is your homepage" />
                <Content >
                    <ListItem itemDivider>
                        <Text>Ideas of what to add....</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Emotions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Trends</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Ideas of what to add....</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Emotions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Trends</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Ideas of what to add....</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Emotions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Trends</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Ideas of what to add....</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Emotions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Trends</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Ideas of what to add....</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Emotions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Trends</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Ideas of what to add....</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Emotions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Trends</Text>
                    </ListItem>
                 </Content>
                 <FooterNav homeActive />
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    const { user } = state.auth;
    return { user }
}

export default connect(mapStateToProps, null)(Home);