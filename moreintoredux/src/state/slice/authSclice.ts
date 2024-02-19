import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userProfile:{},
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers:{
        
    }

});