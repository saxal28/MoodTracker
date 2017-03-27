import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../actions/types";

const INITIAL_STATE = { 
    email: "",
    password: "",
    user: "",
    error: ""
}

export default AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}; 
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_SUCCESS:
            return {...state, user: action.payload, error: ""}
        case LOGIN_FAIL:
            return {...state, error: action.payload}
        default: 
            return state;
    }
};

