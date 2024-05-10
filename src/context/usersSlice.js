import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: []
    },
    reducers: {
        addToUsers(state, action) {
            state.value = [...state.value, action.payload];
        },
        removeToUser(state, action) {
            state.value = state.value.filter(user => user.id !== action.payload.id);
        }
    }
});


export const {addToUsers,removeToUser}=userSlice.actions
export default userSlice.reducer