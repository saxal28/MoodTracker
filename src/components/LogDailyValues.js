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
 import { generateRange, generateSmallRange, sortData, formatDisplayDate } from "../util";
 import { saveStats, getStats, updateStats } from '../actions/userActions'
 import { connect } from "react-redux";

class LogDailyValues extends Component {

    state = { 
        values: [], 
        error: "", 
        weight: 150, 
        emotion: "happy", 
        uid: null,
        edit: false,
        alreadyLogged: false,
        message: "Scroll to Log!",
        date: null,
        generatedPickerRange: false,
        todaysDate: new Date().toString()
    };

    componentWillMount() {
        if(this.props.visited) {
            this.alreadyLogged(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.getStatsFromYesterday(nextProps);
        this.alreadyLogged(nextProps);
    }

    getStatsFromYesterday(nextProps){
        //sets our default stats from yesterday's data
        const { allStats } = nextProps;
        sortData(allStats);
        const { weight, emotion, uid } = allStats[0];
        this.setState({ 
            weight: String(weight), 
            emotion, 
            uid,
            message: "How did you fair from yesterday?"
        });
        console.log('got yesterdays stats and sent');

    }

    alreadyLogged(nextProps) {
        //checks to see if we already logged our stats for the day
        const todaysDate = new Date().toString();
        const { allStats } = nextProps;
        sortData(allStats);
        if(allStats.length > 1) {
             if( todaysDate.substring(0,15) == allStats[0].date.substring(0,15)) {
                this.setState({
                    alreadyLogged: true, 
                    weight: String(allStats[0].weight), 
                    emotion: allStats[0].emotion, 
                    uid: allStats[0].uid, 
                    date: allStats[0].date,
                    message: "Today's Stats Logged! Scroll to Update!"
                });
                console.log('got todays stats and sent');
            }
        }
    }

    onEmotionChange(e) { this.setState({emotion: e}); }
    onWeightChange(e) { this.setState({weight: e}); }

    handleLogButtonPress() {
        //have to convert date to string to store in firebase (boo)
        const date = this.state.date ? this.state.date.toString() : (new Date()).toString();
        const { weight, emotion } = this.state;
        // dispatch params to redux via action creator
        this.props.saveStats(weight, emotion, date);
    }

    handleUpdateButtonPress() {
        const { weight, emotion, date, uid } = this.state;
        this.props.updateStats(weight, emotion, date, uid);
    }

    generatePickerWeights() {

        let min = this.state.weight - 10;
        let max = min + 20;
        var arr = generateSmallRange(min, max);

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
                    onPress={this.handleUpdateButtonPress.bind(this)}
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
        const { alreadyLogged, date, todaysDate, message } = this.state;
        console.log(alreadyLogged)
        console.log("uid: ", this.state.uid);
        return (
            <Container>
                <Navbar title={alreadyLogged ? "Edit!" : "Log!"}  disableMenuButton={!alreadyLogged} />
                <Card>
                    <CardSection style={{padding: 0, marginBottom: 0, marginTop: 0}}>
                        <Title>{date ? formatDisplayDate(date) : formatDisplayDate(todaysDate)}</Title>
                        {this.renderEmotionIcon()}
                        <Title>{`${this.state.weight} lbs`}</Title>
                        <Text>{ message }</Text>
                    </CardSection>

                    <Grid>
                        <Col>
                            <Picker
                                style={{ height: 80, marginBottom: 20, paddingTop: 0, minWidth: 150}}
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

export default connect(mapStateToProps, {saveStats, getStats, updateStats})(LogDailyValues);
