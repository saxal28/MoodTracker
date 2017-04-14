import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem } from "./common";
import { Container, Content, Text, Button, Tab, Grid, Col, Row, Form, Item, Label, Input, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { View } from 'react-native';

class Strength extends Component {

    state = { numberOfSets: [1,2,3] };

    renderSets() {
        return this.state.numberOfSets.map((x, index) => {
            return (
                <Grid style={{marginTop: 20}} key={index}>
                                <Col>
                                    <Item>
                                        <Input 
                                            style={{textAlign: "center"}}
                                            placeholder="145"
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item>
                                        <Input 
                                            style={{textAlign: 'center'}}
                                            placeholder="145"
                                        />
                                    </Item>
                                </Col>

                                <Col>
                                    <Item>
                                        <Input 
                                            style={{textAlign: "center"}}
                                            placeholder="145"
                                        />
                                    </Item>
                                </Col>                                
                            </Grid>
            )
        })
    }

    render() {
        return (
            <Container>
               <TabbedNavbar title="Strength">

                    <Tab heading="Log">
                        <Content>
                           <Grid style={{ height: 50, justifyContent: "center", alignItems:"center"}}>
                               <Col><Text style={{textAlign:'center'}}>Weight</Text></Col>
                               <Col><Text style={{textAlign:'center'}}>Reps</Text></Col>
                               <Col><Text style={{textAlign:'center'}}>Completed</Text></Col>
                            </Grid>
                            {this.renderSets()}
                            <Button full transparent
                                style={{padding: 10, marginTop: 10, marginLeft: 10, marginRight: 10}}
                            ><Text>Add a Set</Text>
                            </Button>

                            <Button full transparent
                                    style={{padding: 10, marginTop: 10, marginLeft: 10, marginRight: 10}}
                            ><Text>Remove Last Set</Text>
                            </Button>

                            <Button full success
                                style={styles.buttonStyle}
                            ><Text>Log</Text>
                            </Button>
                        </Content>
                    </Tab>

                    <Tab heading="Stats" active>
                        <Content>
                            {this.renderSets()}
                        </Content>
                    </Tab>

                    <Tab heading="PR Trend">
                        <Content>
                            <Text>This is the Weight Container </Text>
                        </Content>
                    </Tab>

                </TabbedNavbar>
               <FooterNav stengthActive/>
            </Container>
        );
    }
}

const styles = {
    buttonStyle: {
        padding: 10, 
        marginTop: 10, 
        marginLeft: 20,
        marginRight: 20,
        shadowColor:"#333",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
}

export default Strength;