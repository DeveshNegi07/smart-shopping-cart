import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/state/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
