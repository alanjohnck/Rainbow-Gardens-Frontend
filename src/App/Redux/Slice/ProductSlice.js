import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async()=>{
        const response = await axios.get('http://localhost:3001/api/getproduct');
        console.log(response);
        return response;
    }
)

export const fetchProductByPno = createAsyncThunk(
    'fetchProductByPno',
    async(productId)=>{
        const response = await axios.get('http://localhost:3001/api/getproduct/'+productId);
        console.log(response);
        return response;
    }
)


 const productSlice = createSlice({
    name:'product',
    initialState:{
        isLoading:false,
        fetchProductStatus:0,
        fetchProductByIdStatus:0,
        product:{},
        productList:[],
        cart:[]
    },
    reducers:{
       addProduct(state,action){
        const {product} = action.payload;
        state.cart.push(product);
       },
       incrementQuantity(state,action){
        const {index} = action.payload;
        state.cart[index].quantity++;
       },
       decrementQuantity(state,action){
        const {index} = action.payload;
        if(state.cart[index].quantity > 1){
            state.cart[index].quantity--;
        }
       }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.fetchProductStatus = action.payload.status;
            state.productList=action.payload.data;
        });
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            state.fetchProductStatus = action.payload.response.data.status;
        });
        builder.addCase(fetchProductByPno.pending, (state)=>{
            state.isLoading =true;
        });
        builder.addCase(fetchProductByPno.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.product=action.payload.data;
        });
        builder.addCase(fetchProductByPno.rejected, (state,action)=>{
            state.fetchProductByIdStatus = action.payload.response.data.status;
        });
    }
})
export const {incrementQuantity,decrementQuantity,addProduct} = productSlice.actions;
export default productSlice.reducer;