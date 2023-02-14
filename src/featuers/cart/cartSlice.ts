import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/utils/types";

type CartState = {
  cartItems: ICartItem[];
  totalPrice: number;
  totalCartItems: number;
};

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
  totalCartItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      cartState,
      {
        payload,
      }: PayloadAction<{ cartItem: ICartItem; qty: number; index?: number }>
    ) => {
      cartState.cartItems = [
        ...cartState.cartItems,
        {
          ...payload.cartItem,
          qty: payload.qty,
        },
      ];
    },

    calculateTotals: (cartState) => {
      let sumItems = 0;
      let sumEachItemPrice = 0;
      cartState.cartItems.forEach((item) => {
        sumItems += item.qty!;
        sumEachItemPrice += item.qty! * Number(item.item_price);
      });
      cartState.totalCartItems = sumItems;
      cartState.totalPrice = sumEachItemPrice;
    },
    increaseItem: (
      cartState,
      { payload }: PayloadAction<{ index: number }>
    ) => {
      const cartItem = cartState.cartItems.find((_, i) => i === payload.index);
      if (cartItem) {
        cartItem.qty = cartItem.qty! + 1;
      }
      cartState.totalCartItems += 1;
    },

    decreaseItem: (
      cartState,
      { payload }: PayloadAction<{ index: number }>
    ) => {
      const cartItem = cartState.cartItems.find((_, i) => i === payload.index);
      if (cartItem && cartItem?.qty! > 0) {
        cartItem.qty = cartItem.qty! - 1;
      }
      cartState.totalCartItems -= 1;
    },

    removeItem: (cartState, { payload }: PayloadAction<{ index: number }>) => {
      cartState.cartItems = cartState.cartItems.filter(
        (_, i) => i !== payload.index
      );
    },

    removeModifier: (
      state,
      {
        payload,
      }: PayloadAction<{ modId: string; price: number; index: number }>
    ) => {
      state.cartItems.forEach((item) => {
        item.addedModifiers = item.addedModifiers?.filter(
          (mod) => mod.id !== payload.modId
        );
      });
      const currentItem = state.cartItems.find(
        (item, i) => i === payload.index
      );
      if (currentItem) {
        currentItem.item_price = String(
          Number(currentItem.item_price) - payload.price
        );
      }
    },

    clearCart: (cartState) => {
      cartState.cartItems = [];
    },
  },
});

export const {
  addToCart,
  increaseItem,
  decreaseItem,
  calculateTotals,
  clearCart,
  removeItem,
  removeModifier,
} = cartSlice.actions;
// export const selectCartState = (state: RootState) => state.;
// export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
