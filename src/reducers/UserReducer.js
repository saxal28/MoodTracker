import { STATS_CREATED, GET_ALL_STATS } from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE = {
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
            return { ...state, weight, emotion, date }
        case GET_ALL_STATS:
            let arr = _.values(action.payload);
            return { ...state, allStats: arr};
        default: 
            return state;
    }
}

export default userReducer;