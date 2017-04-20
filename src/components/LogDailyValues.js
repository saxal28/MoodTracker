import React, { Component } from "react";
import { Card, CardSection, Title, Subtitle, Navbar, ImageBackground } from "./common";
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
 import { saveStats, getStats, updateStats, setTodaysStats } from '../actions/userActions'
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
        generatedPickerRange: null,
        yesterdaysStats: {
            weight: null,
        },
        todaysDate: new Date().toString(),
    };

    componentWillMount() {
        if(this.props.visited) {
            this.alreadyLogged(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.getStatsFromYesterday(nextProps);
        this.alreadyLogged(nextProps);
        this.getPickerNumber(nextProps, this.state.weight);
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

    alreadyLogged({ allStats }) {
        //checks to see if we already logged our stats for the day
        const todaysDate = new Date().toString();
        sortData(allStats);
        if(allStats.length > 1) {
             if( todaysDate.substring(0,15) == allStats[0].date.substring(0,15)) {
                this.setState({
                    alreadyLogged: true, 
                    weight: String(allStats[0].weight), 
                    emotion: allStats[0].emotion, 
                    uid: allStats[0].uid, 
                    date: allStats[0].date,
                    generatedPickerRange: String(allStats[0].weight),
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
        let { weight, emotion, yesterdaysStats } = this.state;
        weight = String(weight);
        // dispatch params to redux via action creator
        this.props.saveStats(weight, emotion, date, yesterdaysStats);
    }

    handleUpdateButtonPress() {
        let { weight, emotion, date, uid, yesterdaysStats } = this.state;
        weight = String(weight)
        this.props.updateStats(weight, emotion, date, uid, yesterdaysStats);
        this.props.setTodaysStats(weight, emotion, uid);
    }

    getPickerNumber(nextProps){
        const { allStats } = nextProps;
        this.setState({generatedPickerRange: allStats[0].weight});
        console.log("generated picker numner: ", allStats[0].weight);
    }

    generatePickerWeights(range) {
        let min = this.state.generatedPickerRange - 10;
        let max = min + 20;
        var arr = generateSmallRange(min, max);

        console.log(`Generated Picker Range: ${this.state.generatedPickerRange} min: ${min} max: ${max} state.weight: ${this.state.weight}` )

        return arr.map(num => {
            return (
                <Picker.Item label={String(num)} value={num} key={num} color="white"/>
            )
        })   
    }

    renderButton() {
        if(this.state.alreadyLogged) {
            return (
                 <Button 
                    full
                    warning
                    style={styles.buttonStyle}
                    onPress={this.handleUpdateButtonPress.bind(this)}
                >
                    <Text>Update Log</Text>
                </Button>                
            )
        }
        return (
             <Button 
                full 
                success
                style={styles.buttonStyle}
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
        return <Icon name="happy" style={{fontSize: 100, fontWeight: 'bold', backgroundColor:'transparent'}} />
    }

    render() {
        const { alreadyLogged, date, todaysDate, message } = this.state;
        const { textStyle, messageStyle } = styles;
        return (
            <ImageBackground imageLink={require("../assets/graphWallpaper.png")}>
                <Navbar title={alreadyLogged ? "Edit!" : "Log!"}  disableMenuButton={!alreadyLogged} transparent />

                <View style={{paddingTop: 50, flex: 1}}>                
                    <CardSection style={{padding: 0, marginBottom: 0, marginTop: 0}}>
                        <Title style={textStyle}>{date ? formatDisplayDate(date) : formatDisplayDate(todaysDate)}</Title>
                        {this.renderEmotionIcon()}
                        <Title style={textStyle}>{`${this.state.weight} lbs`}</Title>
                        <Text style={messageStyle}>{ message }</Text>
                    </CardSection>

                    <Grid>
                        <Col>
                            <Picker
                                style={{ height: 100, marginBottom: 10, marginTop: 10, minWidth: 150}}
                                onValueChange={this.onWeightChange.bind(this)}
                                selectedValue={this.state.weight}
                            >
                                {this.generatePickerWeights()}
                            </Picker>
                        </Col>
                        <Col>
                            <Picker
                                style={{ height: 100, marginTop: 10, marginBottom: 10, paddingTop: 0, minWidth: 150}}
                                onValueChange={this.onEmotionChange.bind(this)}
                                selectedValue={this.state.emotion}
                            >
                                <Picker.Item label="Happy" value="happy" color="white"/>
                                <Picker.Item label="Sad" value="sad" color="white"/>
                                <Picker.Item label="Anxious" value="anxious" color="white" />
                                <Picker.Item label="Confident" value="confident" color="white" />
                                <Picker.Item label="Depressed" value="depressed" color="white" />
                            </Picker>
                        </Col>
                    </Grid>
                        
                    <CardSection style={styles.emotionContainerStyle}>
                        {this.renderButton()}
                    </CardSection> 

                    </View>
                
            </ImageBackground>
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
        right: 0,
        backgroundColor:'transparent'
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
    },
    buttonStyle: {
        flex: 1,
        shadowColor:"#333",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    },
    textStyle: {
        color: 'white',
        backgroundColor: "transparent"
    },
    messageStyle: {
        color:'white', 
        backgroundColor:"rgba(0,0,0,0.5)", 
        padding: 10,
    }
}

const emotions = {
    happy : {
        styles: {
            color: "green",
            fontSize:  100,
            fontWeight: 'bold',
            backgroundColor:'transparent'
        },
        icon: "happy"  
    },
    sad: { 
        styles: {
            color: "red",
            fontSize:  100,
            fontWeight: 'bold',
            backgroundColor:'transparent'
        },
        icon: "sad"
    },
    
    anxious: {
        styles: {
            color: "orange",
            fontSize:  100,
            fontWeight: 'bold',
            backgroundColor:'transparent'
        },
        icon: "sad"
    },

    confident: {
        styles: {
            color: "lime",
            fontSize:  100,
            fontWeight: 'bold',
            backgroundColor:'transparent'
        },
        icon: "happy"
    },
    depressed: {
        styles: {
            color: "blue",
            fontSize:  100,
            fontWeight: 'bold',
            backgroundColor:'transparent'
        },
        icon: "sad"
    }
}

const mapStateToProps = state => {
    const { user } = state;
    const { allStats } = state.user;
    _.each(allStats, (value, key) => value.weight = Number(value.weight)); 
    return { user, allStats }
}

export default connect(mapStateToProps, {
    saveStats, 
    getStats, 
    updateStats,
    setTodaysStats
})(LogDailyValues);
