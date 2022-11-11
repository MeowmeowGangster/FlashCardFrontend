import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./combineReducer";

const middleware = [thunk];

const store = configureStore({
	reducer: rootReducer,
	middleware,
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
