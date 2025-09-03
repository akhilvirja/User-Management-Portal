import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    registerdUsers : [
        {
            username: 'a',
            password: 'a',
        }
    ],
    isLogin : false,
    currentUser : {}
}
const registeredUsersSlice = createSlice({
    name: "registeredUsers",
    initialState,
    reducers: {
        addUsers: (state, action) =>{
            const newUsers = {
                id: nanoid(),
                username: action.payload.username,
                password: action.payload.username,
            }

            state.registerdUsers.push(newUsers)
        },
        checkUserCredentials: (state, action) =>{
            console.log(action)
            state.registerdUsers.map((user) =>{
                if(user.username === action.payload.username && user.password === action.payload.password){
                   state.isLogin = true
                   state.currentUser = user
                }
            })            

        },
        setUserLoggedOut: (state) =>{
            state.isLogin = false
            state.currentUser = {}
        }
    }
})

export default registeredUsersSlice.reducer

export const {addUsers, checkUserCredentials, setUserLoggedOut} = registeredUsersSlice.actions