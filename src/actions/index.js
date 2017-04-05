import firebase from 'firebase';
import { Actions } from "react-native-router-flux";
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN
 } from "./types";

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    Actions.home();
    // console.log(`loginSuccess:`, user)
};

const loginFail = (dispatch, message) => {
    dispatch({
        type: LOGIN_FAIL,
        payload: message
    })
}

export const loginUser = (email, password) => {
    return dispatch => {
    dispatch({type: LOGIN})
    //login user
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
     //if user doesnt exist, create user
        .catch((e) => {
            console.log(e)
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginSuccess(dispatch, user))
                .catch(e => {
                    console.log(e.message);
                    loginFail(dispatch, e.message);
                });
        });
    };
};

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}