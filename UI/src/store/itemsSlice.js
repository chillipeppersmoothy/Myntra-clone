import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
