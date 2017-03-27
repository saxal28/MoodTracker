import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import StartScreen from "./StartScreen";
import Login from "./Login";
import Home from "./Home";

const scenes = Actions.create(
    <Scene key="app">
        <Scene key="auth">
            <Scene key="startScreen" component={StartScreen} hideNavBar />
            <Scene key="login" component={Login} hideNavBar={false}/>
        </Scene>
        <Scene key="main">
            <Scene key="home" component={Home} title="Home" />
        </Scene>
    </Scene>
);

export default scenes;

