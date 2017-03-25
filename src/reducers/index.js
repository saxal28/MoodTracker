import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const reducers = combineReducers({
    auth: () => "this is a test"
})

export default reducers;
