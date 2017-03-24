import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import StartScreen from "./StartScreen";
import Login from "./Login";

const scenes = Actions.create(
    <Scene key="auth">
        <Scene key="startScreen" component={StartScreen} hideNavBar />
        <Scene key="login" component={Login} hideNavBar={false}/>
    </Scene>
);

export default scenes;

