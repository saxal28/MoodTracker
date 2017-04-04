import React, { Component } from 'react';
import { TabbedNavbar, FooterNav } from "./common";
import { Container, Content, Text, Button, Tab } from 'native-base';
import { Actions } from "react-native-router-flux";

class Strength extends Component {
    render() {
        return (
            <Container>
               <TabbedNavbar title="Strength">
                    <Tab heading="Log">
                        <Content>
                            <Text>This is the Weight Container </Text>
                        </Content>
                    </Tab>
                    <Tab heading="Stats">
                        <Content>
                            <Text>This is the Weight Container </Text>
                        </Content>
                    </Tab>
                    <Tab heading="PR Trend">
                        <Content>
                            <Text>This is the Weight Container </Text>
                        </Content>
                    </Tab>
                </TabbedNavbar>
               <Content />
               <FooteNav trendsActive/>
            </Container>
        );
    }
}

export default Strength;