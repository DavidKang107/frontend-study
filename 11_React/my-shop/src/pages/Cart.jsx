import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 */}
          {Array.isArray(cartList) && cartList.map((cart, index) => 
            
            <tr key={cart.id}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <Button onClick={() => dispatch(decreaseCount(cart.id))}>
                  -
                </Button>
                {cart.count}
                <Button onClick={() => dispatch(increaseCount(cart.id))}>
                  +
                </Button>
              </td>
              <td>{formatter.format(cart.price * cart.count)}원</td>
              <td>
              <Button
                variant="danger"
                onClick={() => dispatch(removeItemFromCart(cart.id))}>
                X
              </Button>
              </td>
            </tr>
            
          )}
          {/* 합계 구하기 */}
          <tr>
            <th>총 합계</th>
            <td></td>
            <td></td>
            <th>{formatter.format(cartList.reduce((prev, cartItem) =>{
              return prev + (cartItem.price * cartItem.count);
            }, 0))}원
            </th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;