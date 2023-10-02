import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/Data";
const { productItems } = data;

export const productSlice = createSlice({
    name: 'spend',
    initialState: {
      value: 5000000,
      items: productItems,
    },
    reducers: {
      incrementInputValue: (state, action) => {
        const { itemId } = action.payload;
        const item = state.items.find(item => item.id === itemId);
        if (item) {
          item.inputValue += 1;
        }
        const fiyat = item.price;
        const deger = state.value;
        state.value = deger - fiyat;
      },
      decrementInputValue: (state, action) => {
        const { itemId } = action.payload;
        const item = state.items.find(item => item.id === itemId);
        if (item) {
          item.inputValue -= 1;
        }
        const fiyat = item.price;
        const deger = state.value;
        state.value = deger + fiyat;
      }
    },
  });
  
  export const { incrementInputValue, decrementInputValue } = productSlice.actions;

  export default productSlice.reducer;
