import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) => {
      return state?.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
