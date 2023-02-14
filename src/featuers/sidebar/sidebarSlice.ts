import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "../../stores/store";

export interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { closeSidebar, openSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
