//import { combineReducers } from "redux";
import { combineReducers } from '@reduxjs/toolkit';
import { operationsReducer } from "./todoapp/reducers/operations";

// Combine all the reducers into a single rootReducer
export const rootReducer = combineReducers({
    operationsReducer,                     // Reducer to handle todo operations
    // more reducers can be added here
})