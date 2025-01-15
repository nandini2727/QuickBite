import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state
            //RTK uses immet BTS
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            //RTK either  mutate the existing state or return a new state
            state.items.length=0;//original state = []
            // return {item:[]} This new object will be replaced inside the original state ={items:[]}
        },
        removeItem:(state)=>{
            state.items.pop();
        },
    },
})
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;