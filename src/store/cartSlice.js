import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
     
     return [...state, action.payload]; 
        state.push(action.payload);
      

      // state.push(action.payload)
   
    },
    remove(state, action) {
        return state.filter((item) => item.id !== action.payload);
      },
    
    increement(state) {
      state.value += 1;
    },
    decreement(state) {
      state.value -= 1;
    },
  },
});
export const { add, remove, increement, decreement } = cartSlice.actions;
export default cartSlice.reducer;
