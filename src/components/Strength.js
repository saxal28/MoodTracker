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
                            <ThreeColumnListItem 
                                bold
                                col1="Bench Press"
                                col2="reps"
                                col3="weight"
                            />
                             <ThreeColumnListItem 
                                col1="Bench Press"
                                col2="input"
                                col3="checkmark"
                            />
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