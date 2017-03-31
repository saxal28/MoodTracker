import React, { Component } from "react";
import { Card, CardSection, Title, Subtitle, Navbar } from "./common";
import { 
    Text, 
    Button, 
    Badge,
    Container, 
    Item,
    Input,
    Icon,
    Grid,
    Col,
    Row
 } from 'native-base';

 import { View, Picker } from "react-native";
 import { Actions } from "react-native-router-flux";
 import { generateRange } from "../util";

class LogDailyValues extends Component {

    state = { values: [], error: "", weight: 150, emotion: "" };

    renderDate() {
        var date = new Date();
        return `${date.getMonth() + 1 }/${date.getDate()}/${date.getFullYear()}`;
    }

    onEmotionChange(e) { this.setState({emotion: e}); }
    onWeightChange(e) { this.setState({weight: e}); }

    handleLogButtonPress() {
        Actions.home({type: "reset"});
    }

    generatePickerWeights() {
        const arr = generateRange(100, 400);
        
        return arr.map(num => {
            return (
                 <Picker.Item label={String(num)} value={num} key={num} />
            )
        })
    }

    renderEmotionIcon() {
        const { emotion } = this.state;
        if(emotion) {
            return (
                <Icon name={emotions[emotion].icon} style={emotions[emotion].styles} />
            )
        }
        return <Icon name="happy" style={{fontSize: 100, fontWeight: 'bold'}} />
    }

    render() {
        return (
            <Container>
                <Navbar title="Log Today's Stats" />
                <Card>
                    <CardSection style={{padding: 0, marginBottom: 0, marginTop: 0}}>
                        {/*<Title>Check In!</Title>*/}
                        {this.renderEmotionIcon()}
                        <Title>{`${this.state.weight} lbs`}</Title>
                    </CardSection>

                    <Grid>
                        <Col>
                            <Picker
                                style={{ height: 100, marginTop: 0, paddingTop: 0, minWidth: 150}}
                                onValueChange={this.onWeightChange.bind(this)}
                                selectedValue={this.state.weight}
                            >
                                {this.generatePickerWeights()}
                            </Picker>
                        </Col>
                        <Col>
                            <Picker
                                style={{ height: 100, marginTop: 0, paddingTop: 0, minWidth: 150}}
                                onValueChange={this.onEmotionChange.bind(this)}
                                selectedValue={this.state.emotion}
                            >
                                <Picker.Item label="Happy" value="happy" />
                                <Picker.Item label="Sad" value="sad"/>
                                <Picker.Item label="Anxious" value="anxious" />
                                <Picker.Item label="Confident" value="confident" />
                                <Picker.Item label="Depressed" value="depressed" />
                            </Picker>
                        </Col>
                    </Grid>
                        
                    <CardSection style={styles.emotionContainerStyle}>
                        {/*{this.renderEmotions()}*/}
                        <Button 
                            full 
                            style={{flex: 1}}
                            onPress={this.handleLogButtonPress.bind(this)}
                        >
                            <Text>Check In!</Text>
                        </Button>
                    </CardSection>             

                </Card>
            </Container>
        )
    }
}

const styles = {
    emotionContainerStyle: {
        flexDirection:'row', 
        position: "absolute",
        flexWrap: "wrap",
        bottom: 0,
        left: 0,
        right: 0
    },
    iconStyle: {
        fontSize:  40,
        fontWeight: 'bold',
        color: "#333"
    },
    errorStyle: {
        color: 'red'
    },
    successStyle: {
        color: "lime"
    }
}

const emotions = {
    happy : {
        styles: {
            color: "green",
            fontSize:  100,
            fontWeight: 'bold'
        },
        icon: "happy"  
    },
    sad: { 
        styles: {
            color: "red",
            fontSize:  100,
            fontWeight: 'bold'
        },
        icon: "sad"
    },
    
    anxious: {
        styles: {
            color: "orange",
            fontSize:  100,
            fontWeight: 'bold'
        },
        icon: "sad"
    },

    confident: {
        styles: {
            color: "lime",
            fontSize:  100,
            fontWeight: 'bold'
        },
        icon: "happy"
    },
    depressed: {
        styles: {
            color: "blue",
            fontSize:  100,
            fontWeight: 'bold'
        },
        icon: "sad"
    }
}

export default LogDailyValues;
