import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, StyledTab } from "./common";
import { Container, Content, Text, Button, Tab, Grid, Col, Row, Form, Item, Label, Input, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { View } from 'react-native';
import { generateArrFromNumber } from "../util";

class Strength extends Component {

    state = { 
        numberOfSets: generateArrFromNumber(3), 
        setExercise: "bench",
        strength: {
            bench: [],
            squat: [{set: null, weight: null, reps: null }],
            deadlift: [{set: null, weight: null, reps: null }],
            overheadPress: [{set: null, weight: null, reps: null }],
            row: [{set: null, weight: null, reps: null }],
        } 
    };

    calculateOneRepMax(weight, reps) {
        return Math.floor((weight * 0.03 * reps) + weight);
    }

    setStrength(set, weight, reps) {
        let { strength, setExercise } = this.state;
        if(weight) {
            strength[setExercise][Number(set) - 1] = {
                ...strength[setExercise][Number(set-1)],
                weight,
                set
            }     
            console.log(strength)       
        } else if (reps) {
            strength[setExercise][Number(set) - 1] = {
                ...strength[setExercise][Number(set-1)],
                reps,
                set
            }  
        }
    }

    renderSets() {
        const { strength } = this.state;
        return this.state.numberOfSets.map((set, index) => {
            return (
                <Grid style={{marginTop: 20}} key={index}>
                                <Col>
                                    <Item>
                                        <Input 
                                            style={{textAlign: "center"}}
                                            placeholder={strength.bench.weight || "175"}
                                            onChangeText={(weight) => this.setStrength(set, weight, null)}                                            
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item>
                                        <Input 
                                            style={{textAlign: 'center'}}
                                            placeholder={strength.bench.reps || "5"}
                                            onChangeText={(reps) => this.setStrength(set, null, reps)}  
                                        />
                                    </Item>
                                </Col>

                                <Col>
                                    <Item>
                                        <Input 
                                            style={{textAlign: "center"}}
                                            placeholder={String(this.calculateOneRepMax(225, 5))}
                                        />
                                    </Item>
                                </Col>                                
                            </Grid>
            )
        })
    }

    addSet() {
        const { numberOfSets } = this.state;
        const addedSet = numberOfSets[numberOfSets.length - 1] + 1;
        let generatedSets = generateArrFromNumber(addedSet)
        this.setState({numberOfSets: generatedSets});
    }

    removeSet() {
        const { numberOfSets } = this.state;
        if(numberOfSets.length > 1) {
            const addedSet = numberOfSets[numberOfSets.length - 1] - 1;
            let generatedSets = generateArrFromNumber(addedSet)
            this.setState({numberOfSets: generatedSets});
        }
    }

    render() {
        console.log(this.state.strength)
        return (
            <Container>
               <TabbedNavbar title="Strength">

                    <StyledTab heading="Log"
                        tabStyle={{backgroundColor:"#333"}} 
                        textStyle={{color:"white"}} 
                        activeTabStyle={{backgroundColor:"#333"}}
                    > 
                        <Content>
                           <Grid style={{ height: 50, justifyContent: "center", alignItems:"center"}}>
                               <Col><Text style={{textAlign:'center'}}>Weight</Text></Col>
                               <Col><Text style={{textAlign:'center'}}>Reps</Text></Col>
                               <Col><Text style={{textAlign:'center'}}>1RM</Text></Col>
                            </Grid>
                            {this.renderSets()}

                            <Button full transparent
                                onPress={this.addSet.bind(this)}
                                style={{flex: 1}}
                            ><Text>Add</Text>
                            </Button>

                            <Button full transparent
                                onPress={this.removeSet.bind(this)}
                                style={{flex: 1}}
                            ><Text>Remove</Text>
                            </Button>

                            <Button full success
                                style={styles.buttonStyle}
                            ><Text>Log</Text>
                            </Button>

                            <Text>

                            </Text>
                        </Content>
                    </StyledTab>

                    <Tab 
                        heading="Stats" 
                        tabStyle={{backgroundColor:"#333"}} 
                        textStyle={{color:"white"}} 
                        activeTabStyle={{backgroundColor:"#333"}}>
                        <Content>
                            {this.renderSets()}
                        </Content>
                    </Tab>

                    <Tab 
                        heading="PR Trend"
                        tabStyle={{backgroundColor:"#333"}} 
                        textStyle={{color:"white"}} 
                        activeTabStyle={{backgroundColor:"#333"}}
                        >
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