import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem } from "./common";
import { Container, Content, Text, Button, Tab } from 'native-base';
import { Actions } from "react-native-router-flux";
import { View } from 'react-native';

class Strength extends Component {
    render() {
        return (
            <Container>
               <TabbedNavbar title="Strength">
                    <Tab heading="Log">
                        <Content>
                            
                        </Content>
                    </Tab>
                    <Tab heading="Stats" active>
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
               <FooterNav stengthActive/>
            </Container>
        );
    }
}

export default Strength;