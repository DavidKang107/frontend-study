import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedProduct, selectSelectedProduct } from "../features/product/productSlice";



function ProductDetail() {
  const { productId } = useParams();
  const selectedProduct = useSelector(selectSelectedProduct);
  const dispatch = useDispatch();
  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 이럭스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/DavidKang107/db-shop/products/${productId}`)
        dispatch(getSelectedProduct(response.data))
      } catch (err) {
        console.error(err);
      }
      }
      fetchProductById();

  }, []);
  


  const { imagePath, title, price, content } = selectedProduct;
  return (
    <Container className="pt-3">
      <Row>
        <Col md={6}>
          <img src={imagePath} width="80%" alt="product" placeholder="/images/logo.jpg"/>
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{title}</h4>
          <p>{content}</p>
          <p>{price}</p> 
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;