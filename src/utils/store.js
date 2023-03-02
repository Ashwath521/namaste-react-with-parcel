import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * create store
 *  - configureStore() - RTK
 *
 * Provide my store to app
 *  - <provider store = {store}> import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *       name:"",
 *        initialState:
 *        reducers: {
 *           addItem: (state,action)=>{state=action.payload}}})
 *        }
 * })
 *
 * export const {addItem, removeItem} = cartSlice.action
 * export default cartSlice.reducer;
 *
 * put that Slice into store
 *               - {
 *                  reducer:{
 *                  cart:cartSlice,
 *                  user:userSlice
 *                      }
 * }
 *
 */
