import React, { Component } from 'react';
import { TabbedNavbar, FooterNav } from "./common";
import { Container, Content, Text, Button, Tab } from 'native-base';
import { Actions } from "react-native-router-flux";

class Emotions extends Component {
    render() {
        return (
            <Container>
                
               <TabbedNavbar title="Emotions">
                   <Tab heading="tab1">
                        <Content>
                            <Text>This is the Weight Container </Text>
                        </Content>
                    </Tab>
                    <Tab heading="tab2">
                        <Content>
                            <Text>This is the Weight Container </Text>
                        </Content>
                    </Tab>
                </TabbedNavbar>
               <FooterNav emotionsActive/>
            </Container>
        );
    }
}

export default Emotions;