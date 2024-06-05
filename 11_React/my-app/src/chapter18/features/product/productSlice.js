import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, {payload: productName}) => {
      // state.productList = [...state.productList, action.payload]; // 직접 수정해도 됨
      // state.productList.push(action.payload);
      state.productList.push(productName);
    },
    removeFromProductList: (state) => {
      state.productList.pop();
    }
  }
})
export const selectProduct = state => state.product.productList;
export const { addToProductList, removeFromProductList } = productSlice.actions;
export default productSlice.reducer;