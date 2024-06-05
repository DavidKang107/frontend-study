import { useDispatch, useSelector } from "react-redux";
import { addToProductList, removeFromProductList, selectProduct } from "./productSlice";
import { useState } from "react";



function ProductList() {
  const dispatch = useDispatch();
  const item = useSelector(selectProduct);
  const [product, setProduct] = useState('');
  const handleAddProduct = () => {
    product &&
    dispatch(addToProductList(product));
    setProduct('');
  }
  return (
    <>
      <p>상품 추가:
        <input
          type="text"
          value={product}
          onChange={(e) => { setProduct(e.target.value) }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleAddProduct();
            }
          }}
        >
        </input>
        <button
          type="button"
          onClick={() => handleAddProduct()}
        >
          추가
        </button>
        <button
          type="button"
          onClick={() => {
            item &&
              dispatch(removeFromProductList());

          }}
        >
          제거
        </button>
      </p>
      <p>상품목록</p>
      <ul>
        {/* 반복렌더링 */}
        {item.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  );
};

export default ProductList;