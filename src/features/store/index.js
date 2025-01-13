import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import asyncDataReducer from "../reducers";

const store = createStore(asyncDataReducer, applyMiddleware(thunk));

export default store;
