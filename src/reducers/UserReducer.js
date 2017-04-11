import { STATS_CREATED, GET_ALL_STATS, SET_TODAYS_STATS } from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE = {
    loggedStats: false,
    allStats: [],
    weight: null,
    emotion: null,
    date: null,
    strength: {
        benchPress: null,
        overheadPress: null,
        squat: null,
        deadlift: null,
        row: null
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    console.log("action.payload: ", action.payload)
    switch(action.type) {
        case STATS_CREATED:
            const { weight, emotion, date } = action.payload;
            console.log({ ...state, weight, emotion, date });
            return { ...state, weight, emotion, date }
        case GET_ALL_STATS:
        
            let arr = _.map(action.payload, (val, uid) => {
                return {...val, uid};
            });

            return { ...state, allStats: arr};
        case SET_TODAYS_STATS:
            console.log("SET_TODAYS_STATS ", {...state, ...action.payload, loggedStats: true })
            return {...state, ...action.payload, loggedStats: true }
        default: 
            return state;
    }
}

export default userReducer;