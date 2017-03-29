import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import StartScreen from "./StartScreen";
import Login from "./Login";
import LogDailyValues from "./LogDailyValues";
import Home from "./Home";
import Weight from "./Weight";
import Emotions from "./Emotions";
import Trends from "./Trends";

const scenes = Actions.create(
    <Scene key="app">
        <Scene key="auth">
            <Scene key="startScreen" component={StartScreen} hideNavBar />
            <Scene key="login" component={Login} hideNavBar title="login" />
        </Scene>
        <Scene key="main">
            <Scene key="logDailyValues" component={LogDailyValues} hideNavBar />
            <Scene key="home"   component={Home} hideNavBar/>
            <Scene key="weight" component={Weight} hideNavBar/>
            <Scene key="emotions" component={Emotions} hideNavBar/>
            <Scene key="trends" component={Trends} hideNavBar/>
        </Scene>
    </Scene>
);

export default scenes;

