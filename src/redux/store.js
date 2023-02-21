import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
    //   cartUi: cartUiSlice.reducer,
    },
  });
  
  export default store;