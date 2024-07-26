import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export default store;
