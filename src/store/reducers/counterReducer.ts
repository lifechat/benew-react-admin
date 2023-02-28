import React from "react";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../index";


export interface CounterState {
  value: number;
  incrementAmount: number;
}

const initialState: CounterState = {
  value: 0,
  incrementAmount: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount;
    },
    decrement: (state) => {
      state.value -= state.incrementAmount;
    },
    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload;
    }
  },
});

export const { increment, decrement, changeIncrementAmount } = counterSlice.actions

export const selectCount = (state:RootState) => state.counter.value;

export default counterSlice.reducer
