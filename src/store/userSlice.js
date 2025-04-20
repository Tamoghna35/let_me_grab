import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.loggedInUser = action.payload;
            localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
        },

        clearUser: (state, action) => {
            state.loggedInUser = null;
            localStorage.removeItem("loggedInUser");
        }

    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;