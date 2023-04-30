import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { toastFunc } from "../utils/middleware";
import rootReducer from "./combinedReducers";

const store = createStore(rootReducer, applyMiddleware(thunk, toastFunc));

export default store;
