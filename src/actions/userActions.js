import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    STATS_CREATED,
    GET_ALL_STATS
} from "./types";

// update weight/mood
// save initial stats
export const saveStats = (weight, emotion, date) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        const statsObj = { weight, emotion, date }
        firebase.database().ref(`/users/${currentUser.uid}/stats`)
            .push(statsObj)
            .then((stats) => {
                dispatch({type: STATS_CREATED, payload: statsObj});
                Actions.home({type: "reset"});
            })
            .catch(e => console.log(e))

    };
}
// get stats => weight/mood
export const getStats = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/stats`)
            .on('value', snapshot => {
                console.log(snapshot.val())
                dispatch({type: GET_ALL_STATS, payload: snapshot.val()})
            })
    }
}


//add strength records


