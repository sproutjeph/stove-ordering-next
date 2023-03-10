import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, Option, ReturnData } from "@/utils/types";

type MenuItemDetailsState = {
  selectedItemData?: ICartItem | null;
  totalItemPrice: number | null;
  allAddedMods: Option[];
};

const initialState: MenuItemDetailsState = {
  selectedItemData: null,
  totalItemPrice: null,
  allAddedMods: [],
};

const menuItemSlice = createSlice({
  name: "menuItemDetails",
  initialState,
  reducers: {
    getMenuItemDetails: (
      state,
      { payload }: PayloadAction<{ currentItem: ICartItem }>
    ) => {
      let item = payload.currentItem;
      if (item) {
        item = {
          ...item,
          qty: 1,
          addedModifiers: [],
        };
      }
      state.selectedItemData = item;
      state.totalItemPrice = Number(item?.item_price);
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
        (mod) =>
          mod.id + mod.name === payload.modifier.id + payload.modifier.name
      );
      if (exists) {
        state.allAddedMods = state.allAddedMods.filter(
          (mod) =>
            mod.id + mod.name !== payload.modifier.id + payload.modifier.name
        );
      } else {
        state.selectedItemData?.addedModifiers!.push(payload.modifier);
      }

      // state.selectedItemData!.addedModifiers = state.allAddedMods;

      if (payload.modifier.isSelected) {
        state.totalItemPrice =
          state.totalItemPrice! + Number(payload.modifier.price);

        state.selectedItemData!.item_price = String(state.totalItemPrice);
      } else {
        state.totalItemPrice =
          state.totalItemPrice! - Number(payload.modifier.price);
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
