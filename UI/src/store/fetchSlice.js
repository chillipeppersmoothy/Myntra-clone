import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: true,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
      return;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      return;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
      return;
    },
  },
});

export const fetchingAction = fetchSlice.actions;
export default fetchSlice;
