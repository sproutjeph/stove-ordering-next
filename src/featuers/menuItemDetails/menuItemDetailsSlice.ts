import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, Option, ReturnData } from "@/utils/types";

let data;
let initialSelectedItemData;
let initialItemIndex;
if (typeof window !== "undefined") {
  data = localStorage.getItem("menuItemData");
  initialItemIndex = localStorage.getItem("itemIndex");
}

if (initialItemIndex) {
  initialItemIndex = JSON.parse(initialItemIndex);
}

if (data) {
  let mData: ReturnData = JSON.parse(data);
  initialSelectedItemData = mData.menuItems[
    Number(initialItemIndex)
  ] as ICartItem;
}

type MenuItemDetailsState = {
  menuData: ReturnData;
  selectedItemData?: ICartItem;
  itemIndex: number;
  totalItemPrice: number;
  allAddedMods: Option[];
};

const initialState: MenuItemDetailsState = {
  menuData: data ? JSON.parse(data) : null,
  selectedItemData: {
    ...initialSelectedItemData,
    qty: 1,
    addedModifiers: [],
  } as ICartItem,
  itemIndex: Number(initialItemIndex),
  totalItemPrice: Number(initialSelectedItemData?.item_price),
  allAddedMods: [],
};

const menuItemSlice = createSlice({
  name: "menuItemDetails",
  initialState,
  reducers: {
    getMenuItemDetails: (
      state,
      { payload }: PayloadAction<{ index: number }>
    ) => {
      state.itemIndex = payload.index;
      let menuItem = state.menuData?.menuItems.find(
        (_, i) => i === payload.index
      ) as ICartItem;
      if (menuItem) {
        menuItem = {
          ...menuItem,
          qty: 1,
          addedModifiers: [],
        };
      }
      state.selectedItemData = menuItem;
    },

    increaseItem: (state) => {
      if (state.selectedItemData) {
        state.selectedItemData.qty = state.selectedItemData.qty! + 1;
      }
    },

    decreaseItem: (state) => {
      if (state.selectedItemData && state.selectedItemData.qty! > 1) {
        state.selectedItemData.qty = state.selectedItemData.qty! - 1;
      }
    },
    calculateTotalsInMenuItemsDetails: (state) => {
      state.totalItemPrice =
        state.selectedItemData?.qty! *
        Number(state.selectedItemData?.item_price);
    },
    getAddedModifiers: (
      state,
      { payload }: PayloadAction<{ modifier: Option }>
    ) => {
      const exists = state.allAddedMods.find(
        (mod) => mod.id === payload.modifier.id
      );
      if (exists) {
        state.allAddedMods = state.allAddedMods.filter(
          (mod) => mod.id !== payload.modifier.id
        );
      } else {
        state.allAddedMods.push(payload.modifier);
      }

      state.selectedItemData!.addedModifiers = state.allAddedMods;

      if (payload.modifier.isSelected) {
        state.totalItemPrice =
          state.totalItemPrice + Number(payload.modifier.price);

        state.selectedItemData!.item_price = String(state.totalItemPrice);
      } else {
        state.totalItemPrice =
          state.totalItemPrice - Number(payload.modifier.price);
        state.selectedItemData!.item_price = String(state.totalItemPrice);
      }

      // console.log(state.allAddedMods);
    },
  },
});

export const {
  getMenuItemDetails,
  increaseItem,
  decreaseItem,
  calculateTotalsInMenuItemsDetails,
  getAddedModifiers,
} = menuItemSlice.actions;
// export const selectCartState = (state: RootState) => state.;
// export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default menuItemSlice.reducer;
