import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users : [
        {
            id: nanoid(),
            name: "xyz",
            email: "xyz@gmail.com",
            phoneNo: "+91 1234567890",
            dateOfBirth: "13/08/1999",
            department: "Backend",
            joiningDate: "01/01/2025",
        }
    ]
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser : (state, action) =>{
            const user = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                phoneNo: action.payload.phone_no,
                dateOfBirth: action.payload.date_of_birth,
                department: action.payload.department,
                joiningDate: action.payload.joining_date,
            }
            state.users.push(user)
        },

        deleteUser: (state, action) =>{
            state.users = state.users.filter((user) =>{
                return action.payload.id !== user.id
            })
        },

        updateUser: (state, action) =>{
            state.users = state.users.map((user) =>{
                if(action.payload.id == user.id){
                    return {
                        id: action.payload.id,
                        name: action.payload.name,
                        email: action.payload.email,
                        phoneNo: action.payload.phone_no,
                        dateOfBirth: action.payload.date_of_birth,
                        department: action.payload.department,
                        joiningDate: action.payload.joining_date,
                    }
                }
                return user
            })
        }

    }
})

export default userSlice.reducer
export const { addUser, deleteUser, updateUser } = userSlice.actions