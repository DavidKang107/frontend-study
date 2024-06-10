import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    }

  }

});

// 리듀서 함수들
export default productSlice.reducer;
export const { getAllProducts } = productSlice.actions;
export const selectProduct = state => state.product.productList;