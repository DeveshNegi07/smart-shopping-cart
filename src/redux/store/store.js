import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/state/cartslice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
