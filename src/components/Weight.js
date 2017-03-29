import React, { Component } from 'react';
import { TabbedNavbar, FooterNav } from "./common";
import { Container, Content, Text, Button, Tab, ListItem } from 'native-base';
import { Actions } from "react-native-router-flux";

const fakeData = [1,2,3,4,5,6,7,8,9,0,9,8,6,7,5,4,3,2,1,1,2,3,4,5,6,7,8,6,5,3,4,3,2,1,1,2,3,5,3,3,4,6,4,6];

class Weight extends Component {

    renderWeightData() {
        return fakeData.map((data, index) => {
            return (
                <ListItem key={index}>
                    <Text>{data}</Text>
                </ListItem>
            );
        });
    }

    render() {
        return (
            <Container style={{backgroundColor: "#333"}}>
               <TabbedNavbar title="Weight Stats">

                   <Tab heading="tab1">
                        <Content>
                            {this.renderWeightData()}
                        </Content>
                        
                    </Tab>
                    <Tab heading="tab2">
                        <Content>
                            {this.renderWeightData()}
                        </Content>
                    </Tab>

                </TabbedNavbar>
               <FooterNav weightActive/>
            </Container>
        );
    }
}

export default Weight;