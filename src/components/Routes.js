import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import Login from "./Login";

const scenes = Actions.create(
    <Scene key="auth">
        <Scene key="login" component={Login} title="Login" hideNavBar/>
    </Scene>
);

export default scenes;

