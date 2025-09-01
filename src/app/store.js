import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/users/userSlice"
import registeredUserReducer from "../features/users/registeredUsers"

export const store = configureStore({
    reducer: {userReducer, registeredUserReducer},
})