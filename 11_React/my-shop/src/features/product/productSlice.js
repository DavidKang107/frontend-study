import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: {}
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }

  }

});

// 리듀서 함수들
export default productSlice.reducer;
export const { 
  getAllProducts, 
  getSelectedProduct, 
  clearSelectedProduct 
} = productSlice.actions;
export const selectProductList = state => state.product.productList;
export const selectSelectedProduct = state => state.product.selectedProduct;