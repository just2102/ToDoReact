import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer
    }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
