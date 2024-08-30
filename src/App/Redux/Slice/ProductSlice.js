import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch all products
export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getproduct`);
    console.log(response);
    return response.data;  // Return only the data from the response
  }
);

// Thunk to fetch product by product number (ID)
export const fetchProductByPno = createAsyncThunk(
  'fetchProductByPno',
  async (productId) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getproduct/${productId}`);
    console.log(response);
    return response.data;  // Return only the data from the response
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    fetchProductStatus: 0,
    fetchProductByIdStatus: 0,
    product: {},
    productList: [],
    cart: []
  },
  reducers: {
    addProduct(state, action) {
      const { product } = action.payload;
      state.cart.push(product);
    },
    incrementQuantity(state, action) {
      const { index } = action.payload;
      state.cart[index].quantity++;
    },
    decrementQuantity(state, action) {
      const { index } = action.payload;
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fetchProductStatus = 200;  // Set status to 200 directly
        state.productList = action.payload;  // Payload is now the data directly
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchProductStatus = action.error?.status || 'Error';
      })
      .addCase(fetchProductByPno.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductByPno.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;  // Payload is now the data directly
        state.fetchProductByIdStatus = 200;  // Set status to 200 directly
      })
      .addCase(fetchProductByPno.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchProductByIdStatus = action.error?.status || 'Error';
      });
  }
});

export const { incrementQuantity, decrementQuantity, addProduct } = productSlice.actions;
export default productSlice.reducer;
