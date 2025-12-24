import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customer";

const store = configureStore({
  reducer: {
    customers: customerReducer
  }
});

export default store;
