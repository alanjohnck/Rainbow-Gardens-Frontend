import { configureStore } from "@reduxjs/toolkit";
import  productReducer from "../Slice/ProductSlice";
import cartReducer from "../Slice/CartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import contactReducer from "../Slice/ContactSlice";

const rootReducer = combineReducers({
    product:productReducer,
    cart:cartReducer,
    contact:contactReducer
})
 
const persistConfig = {
    key :'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store);

export {store,persistor};