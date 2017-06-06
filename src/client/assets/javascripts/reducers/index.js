import { combineReducers } from "redux";
import popupsReducer from "./popups.reducer.js";
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
    routing,
    popupsReducer
});
