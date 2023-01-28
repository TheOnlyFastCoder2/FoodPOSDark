import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import ordersReducer from "./orders";

export const rootReducer: Reducer = combineReducers({
  ordersReducer
});

const store = configureStore({
  reducer: rootReducer
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;