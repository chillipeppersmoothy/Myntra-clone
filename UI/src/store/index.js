import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchSlice from "./fetchSlice";
import bagSlice from "./bagSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchSlice.reducer,
    bagItems: bagSlice.reducer,
  },
});

export default store;
