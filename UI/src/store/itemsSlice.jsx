/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      return state;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
