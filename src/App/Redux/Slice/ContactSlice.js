import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addContact=createAsyncThunk(
    'addContact',
    async(data)=>{
        try{
            const response = await axios.post('http://localhost:3001/api/createcontact',data);
            return response;
        }catch(error){
            return error;
        }
        
    }
)

const contactSlice = createSlice({
    name:'contact',
    initialState:{
        isLoading:false,
        addContactStatus:null
    },
    extraReducers:(builder)=>{
        builder.addCase(addContact.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(addContact.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.addContactStatus = action.payload.status;
        });
        builder.addCase(addContact.rejected, (state,action)=>{
            state.addContactStatus = action.payload.response.data.status;
        })
    }
});

export default contactSlice.reducer;