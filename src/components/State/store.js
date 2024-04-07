import { authReducer } from "./Authentication/Reducer";
import {thunk} from "redux-thunk";
import {applyMiddleware, combineReducers,legacy_createStore} from "redux";
const rooteReducer=combineReducers({
    auth:authReducer,
})

export const store=legacy_createStore(rooteReducer,applyMiddleware(thunk))