import React, { Component } from 'react';
import { TabbedNavbar, FooterNav, ThreeColumnListItem, StyledTab, Card } from "./common";
import { Container, Content, Text, Button, Tab, Grid, Col, Row, Form, Item, Label, Input, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";
import { View } from 'react-native';
import { generateArrFromNumber } from "../util";

class Strength extends Component {

    state = { 
        completed: false,
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

    calculateOneRepMax(obj) {
        if(obj) {
            console.log(Math.floor((Number(obj.weight) * 0.03 * (Number(obj.reps)) + Number(obj.weight))));
            return Math.floor((Number(obj.weight) * 0.03 * (Number(obj.reps)) + Number(obj.weight)));
        } else {
            return "225"
        }
        
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
            this.setState({completed: true});
        }
    }

    createStrengthLog() {
        console.log(this.state.strength)
    }

    renderSets() {
        const { strength, setExercise } = this.state;
        
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
                                  value={String(this.calculateOneRepMax(strength[setExercise][index]))}
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
        const { strength, numberOfSets, setExercise } = this.state;
        if(numberOfSets.length > 1) {
            const addedSet = numberOfSets[numberOfSets.length - 1] - 1;
            let generatedSets = generateArrFromNumber(addedSet);
            //removes last set from arr state when removed
            const adjustedArr = strength[setExercise].splice(strength[setExercise].length - 1, 1);
            console.log(adjustedArr);
            // const adjustedStrength = {...strength, }
            this.setState({
                numberOfSets: generatedSets
            });
        }
    }

    render() {
        const { strength, setExercise } = this.state;
        console.log(strength[setExercise][0]);
        return (
            <Container>
               <TabbedNavbar title="Strength">

                    <Tab heading="Log"
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
                                onPress={this.createStrengthLog.bind(this)}
                                style={styles.buttonStyle}
                            ><Text>Log</Text>
                            </Button>

                        </Content>
                    </Tab>

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