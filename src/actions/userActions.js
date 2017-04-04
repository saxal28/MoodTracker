import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    STATS_CREATED
} from "./types";

// update weight/mood
// save initial stats
export const saveStats = (weight, emotion, date) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/stats`)
            .push({ weight, emotion, date })
            .then((stats) => {
                Actions.home({type: "reset"})
                dispatch({type: STATS_CREATED, payload: stats});
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
            })
    }
}


//add strength records


