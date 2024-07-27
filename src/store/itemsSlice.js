import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items";

const itemsSlice = createSlice({
  name: "items",
  initialState: items,
  reducers: {
    addItems: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
