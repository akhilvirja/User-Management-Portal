import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    registerdUsers : [
        {
            username: 'a',
            password: 'a',
        }
    ],
    isLogin : false,
    currentUser : {},
    error : null,
}
const registeredUsersSlice = createSlice({
    name: "registeredUsers",
    initialState,
    reducers: {
        addUsers: (state, action) =>{
            let username = action.payload.username
            let password = action.payload.password
            console.log(action)
            state.registerdUsers.map((user) => {
                if(user.username === username && user.password === password){
                    state.error = "User already exist"
                    return
                }
            })

            const newUsers = {
                id: nanoid(),
                username: username,
                password: password,
            }
            state.registerdUsers.push(newUsers)
        },
        checkUserCredentials: (state, action) =>{
            console.log(action)
            state.registerdUsers.map((user) =>{
                if(user.username === action.payload.username && user.password === action.payload.password){
                   state.isLogin = true
                   state.currentUser = user
                   return
                }
            })      
            state.error ="Enter valid username and password"
        },
        setUserLoggedOut: (state) =>{
            state.error = null
            state.isLogin = false
            state.currentUser = {}
        }
    }
})

export default registeredUsersSlice.reducer

export const {addUsers, checkUserCredentials, setUserLoggedOut} = registeredUsersSlice.actions