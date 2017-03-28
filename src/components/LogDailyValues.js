import React, { Component } from "react";
import { Card, CardSection, Title, Subtitle } from "./common";
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

    onValueChange(e) {
        // if(!this.state.values.includes(e) && this.state.values.length <= 4) {
        //     const values = [...this.state.values, e];
        //     this.setState({values});
        // } 
        this.setState({emotion: e})
    }

    handleLogButtonPress() {
        Actions.home();
    }

    deleteEmotionOnPress(emotion) {
        const { values } = this.state;
        if(values.includes(emotion)) {
            const index = values.indexOf(emotion);
            const arr = [...values];
            arr.splice(index, 1);
            this.setState({values: arr});
            
        }
        
    }

    renderEmotionIcon() {
        const { emotion } = this.state;
        if(emotion) {
            return (
                <Icon name={emotions[emotion].icon} style={emotions[emotion].styles} />
            )
        }
        return <Icon name="happy" style={styles.iconStyle} />
    }

    renderEmotions() {
        return this.state.values.map(emotion => {
            return (
                <Button
                    small
                    transparent
                    onPress={ () => this.deleteEmotionOnPress(emotion)}
                    key={emotion} 
                    
                >
                    <Text>{emotion}</Text>
                </Button>
            )
        })
    }

    render() {
        return (
            <Container>
                <Card>
                    <CardSection>
                        <Title>Check In!</Title>
                        {this.renderEmotionIcon()}
                    </CardSection>

                    <CardSection>
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
                            style={{ height: 50, width: 150, marginTop: 0, paddingTop: 0 }}
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
                            <Text>Log</Text>
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
        fontSize: 40,
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
            fontSize: 40,
            fontWeight: 'bold'
        },
        icon: "happy"  
    },
    sad: { 
        styles: {
            color: "red",
            fontSize: 40,
            fontWeight: 'bold'
        },
        icon: "sad"
    },
    
    anxious: {
        styles: {
            color: "orange",
            fontSize: 40,
            fontWeight: 'bold'
        },
        icon: "sad"
    },

    confident: {
        styles: {
            color: "lime",
            fontSize: 40,
            fontWeight: 'bold'
        },
        icon: "happy"
    },
    depressed: {
        styles: {
            color: "blue",
            fontSize: 40,
            fontWeight: 'bold'
        },
        icon: "sad"
    }
}

export default LogDailyValues;
