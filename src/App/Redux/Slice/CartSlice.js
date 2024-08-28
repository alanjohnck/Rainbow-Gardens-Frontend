import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addProductToCart=createAsyncThunk(
    'addProductToCart',
    async(data)=>{
       const response = await axios.post('http://localhost:3001/api/addtocart',data);
       console.log(response);
       return response;
    }
);
const cartSlice = createSlice({
    name:'cart',
    initialState:{
     isLoading:false,
     addCartStatus:0,
     cartItems:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(addProductToCart.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(addProductToCart.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.addCartStatus=action.payload.status;
        });
        builder.addCase(addProductToCart.rejected, (state,action)=>{
            state.addCartStatus = action.payload.response.data.status;
        })
    }
});

export default cartSlice.reducer;