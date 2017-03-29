import React, { Component } from "react";
import { Card, CardSection, Title, Subtitle, Navbar } from "./common";
import { 
    Text, 
    Button, 
    Badge,
    Container, 
    Item,
    Input,
    Icon
 } from 'native-base';

 import { View, Picker } from "react-native";
 import { Actions } from "react-native-router-flux";

class LogDailyValues extends Component {

    state = { values: [], selectedEmotion: "Select", error: "", weight: "", emotion: "" };

    renderDate() {
        var date = new Date();
        return `${date.getMonth() + 1 }/${date.getDate()}/${date.getFullYear()}`;
    }

    onValueChange(e) { this.setState({emotion: e}); }

    handleLogButtonPress() {
        Actions.home({type: "reset"});
    }

    renderEmotionIcon() {
        const { emotion } = this.state;
        if(emotion) {
            return (
                <Icon name={emotions[emotion].icon} style={emotions[emotion].styles} />
            )
        }
        return <Icon name="happy" style={{fontSize: 70, fontWeight: 'bold'}} />
    }

    render() {
        return (
            <Container>
                <Navbar title="Log Today's Stats" />
                <Card>
                    <CardSection style={{padding: 0, marginBottom: 0, marginTop: 0}}>
                        {/*<Title>Check In!</Title>*/}
                        {this.renderEmotionIcon()}
                    </CardSection>

                    <CardSection style={{paddingTop: 10, marginBottom: 0, marginTop: 0}}>
                        <Item regular>
                            <Input 
                                onChangeText={(e) => this.setState({weight: e})}
                                placeholder="Weight"
                                value={this.state.weight}
                                success={true}
                                style={{fontSize: 25}}
                            />
                            <Icon 
                                style={styles.iconStyle} 
                                name={this.state.weight ? "checkmark" : "close"} />
                        </Item>
                        <Picker
                            style={{ height: 70, width: 170, marginTop: 0, paddingTop: 0 }}
                            onValueChange={this.onValueChange.bind(this)}
                            selectedValue={this.state.emotion}
                        >
                            <Picker.Item label="Happy" value="happy" />
                            <Picker.Item label="Sad" value="sad"/>
                            <Picker.Item label="Anxious" value="anxious" />
                            <Picker.Item label="Confident" value="confident" />
                            <Picker.Item label="Depressed" value="depressed" />
                        </Picker>
                    </CardSection>

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
            fontSize:  70,
            fontWeight: 'bold'
        },
        icon: "happy"  
    },
    sad: { 
        styles: {
            color: "red",
            fontSize:  70,
            fontWeight: 'bold'
        },
        icon: "sad"
    },
    
    anxious: {
        styles: {
            color: "orange",
            fontSize:  70,
            fontWeight: 'bold'
        },
        icon: "sad"
    },

    confident: {
        styles: {
            color: "lime",
            fontSize:  70,
            fontWeight: 'bold'
        },
        icon: "happy"
    },
    depressed: {
        styles: {
            color: "blue",
            fontSize:  70,
            fontWeight: 'bold'
        },
        icon: "sad"
    }
}

export default LogDailyValues;
