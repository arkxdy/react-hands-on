import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { resolve } from "path";

const initialState = {
    counter:0,
}

export const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers:{
        increment: (state, action) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("Pending");
        })
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        })
    },
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount: number) => {
        await new Promise((resolve) => setTimeout(resolve,2000));
        return amount;
    }
);

export const { increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;