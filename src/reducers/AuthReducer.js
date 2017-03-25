const INITIAL_STATE = { 
    email: "",
    Password: ""
}

export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return INITIAL_STATE;
    }
    return state;
};

