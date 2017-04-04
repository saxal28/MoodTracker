import { STATS_CREATED } from "../actions/types";

const INITIAL_STATE = {
    weight: null,
    mood: null,
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
    switch(action.type) {
        case STATS_CREATED:
            return { ...state, weight: action.payload }
        default: 
            return state;
    }
}

export default userReducer;