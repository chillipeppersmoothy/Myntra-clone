/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items";

const itemsSlice = createSlice({
  name: "items",
  initialState: items,
  reducers: {
    addItems: (state, action) => {
      return state;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
