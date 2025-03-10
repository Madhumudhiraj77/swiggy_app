import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCount: 0,
    totalItemsBill: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.resItem.info.id === action.payload.resItem.info.id,
      );
      if (existingItem) {
        existingItem.count += 1; // Increase count
      } else {
        state.items.push({ ...action.payload, count: 1 }); // Add with count = 1
      }
      let price =
        (action.payload.resItem.info.price ??
          action.payload.resItem.info.defaultPrice) / 100 || 0;
      state.totalItemsBill += price;
      state.totalCount = state.totalCount + 1;
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.resItem.info.id === action.payload.resItem.info.id,
      );

      if (existingItem) {
        let price =
          (action.payload.resItem.info.price ??
            action.payload.resItem.info.defaultPrice) / 100 || 0;

        if (existingItem.count > 1) {
          existingItem.count -= 1; // Decrease count
        } else {
          state.items = state.items.filter(
            (item) => item.resItem.info.id !== action.payload.resItem.info.id,
          );
        }
        state.totalItemsBill -= price;
        state.totalCount = state.totalCount - 1;
      }
    },

    emptyItems: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalItemsBill = 0;
    },
  },
});

export const { addItem, removeItem, emptyItems } = cartSlice.actions;

export default cartSlice.reducer;
