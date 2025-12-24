import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {
    CreateCustomer: (state, action) => {
      return [
        ...state,
        action.payload
      ];
    },
     DeleteCustomer: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    }
  }
});

export const { CreateCustomer,DeleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
