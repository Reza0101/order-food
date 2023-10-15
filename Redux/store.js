import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/user";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
