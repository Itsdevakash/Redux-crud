import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name:"customers",
    initialState: [],
    reducers:{
        CreateCustomer:(state,action)=>{
          return  [
           ...state,action.payload  

            ]
                       
        }
    }


})
export const { CreateCustomer} = customerSlice.actions
export default customerSlice.reducer