import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const store = () => {
  return configureStore({
    reducer: {
      // Add reducers here
      user: userSlice,
    },
  });
};
