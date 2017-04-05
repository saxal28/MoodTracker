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
 import { generateRange, generateSmallRange, sortData } from "../util";
 import { saveStats, getStats } from '../actions/userActions'
 import { connect } from "react-redux";

class LogDailyValues extends Component {

    state = { 
        values: [], 
        error: "", 
        weight: 150, 
        emotion: "happy", 
        edit: false,
        alreadyLogged: false,
        date: null
    };

    componentWillMount() {
        if(this.props.visited) {
            this.alreadyLogged(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.alreadyLogged(nextProps);
    }

    alreadyLogged(nextProps) {
        const todaysDate = new Date().toString();
        const { allStats } = nextProps;
        sortData(allStats);
        if(allStats.length > 1) {
             if( todaysDate.substring(0,15) == allStats[0].date.substring(0,15)) {
                this.setState({alreadyLogged: true, weight:allStats[0].weight, emotion: allStats[0].emotion });
            }
        }
    }

    onEmotionChange(e) { this.setState({emotion: e}); }
    onWeightChange(e) { this.setState({weight: e}); }

    handleLogButtonPress() {
        const date = this.state.date ? this.state.date.toString() : (new Date()).toString();
        const { weight, emotion } = this.state;
        // dispatch params to redux via action creator
        this.props.saveStats(weight, emotion, date);
    }

    generatePickerWeights() {
        let min = this.state.weight - 10;
        let max = this.state.weight + 10;
        var arr = generateSmallRange(min, max);
        // var arr = arr = generateRange(100,400);
        
        return arr.map(num => {
            return (
                 <Picker.Item label={String(num)} value={num} key={num} />
            )
        })
    }

    renderButton() {
        if(this.state.alreadyLogged) {
            return (
                 <Button 
                    full
                    style={{flex: 1, backgroundColor: "orange"}}
                    onPress={this.handleLogButtonPress.bind(this)}
                >
                    <Text>Update Log</Text>
                </Button>                
            )
        }
        return (
             <Button 
                full 
                style={{flex: 1}}
                onPress={this.handleLogButtonPress.bind(this)}
            >
                <Text>Check In!</Text>
            </Button>
        )
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
        const { alreadyLogged } = this.state;
        console.log(alreadyLogged)
        return (
            <Container>
                <Navbar title={alreadyLogged ? "Edit!" : "Log!"}  disableMenuButton />
                <Card>
                    <CardSection style={{padding: 0, marginBottom: 0, marginTop: 0}}>
                        {this.renderEmotionIcon()}
                        <Title>{`${this.state.weight} lbs`}</Title>
                        <Text>{ alreadyLogged ? "Already Logged! Scroll to Update!" : "Scroll to Update!" }</Text>
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
                        {this.renderButton()}
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

const mapStateToProps = state => {
    const { user } = state;
    const { allStats } = state.user;
    return { user, allStats }
}

export default connect(mapStateToProps, {saveStats, getStats})(LogDailyValues);
