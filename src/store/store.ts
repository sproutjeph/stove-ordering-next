import menuItemDetailsReducer from "@/featuers/menuItemDetails/menuItemDetailsSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sidebarReducer from "../featuers/sidebar/sidebarSlice";
// import authReducer from "../featuers/auth/authSlice";
import cartReducer from "@/featuers/cart/cartSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cart: cartReducer,
    menuItemDetails: menuItemDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
