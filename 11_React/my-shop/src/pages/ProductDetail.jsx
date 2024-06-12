import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import { clearSelectedProduct, getSelectedProduct, selectSelectedProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";

// 스타일드 컴포넌트를 이용한 애니매이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #ed6b0e; }
  to { background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail() {
  const { productId } = useParams();
  const selectedProduct = useSelector(selectSelectedProduct) || {};
  const dispatch = useDispatch();
  
  const [shoeInfo, setShowInfo] = useState(true);
  const [orderCount, setOrderCount] = useState(1);

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if (isNaN(e.target.value)) {
      toast.error('숫자만 입력하세요!');
      return;
    }

    setOrderCount(Number(e.target.value));
  };


  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 이럭스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/DavidKang107/db-shop/products/${productId}`);
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    }
    fetchProductById();

    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    }
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowInfo(false);
    }, 3000);
    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeOut);
    }

  }, []);

  // if (!selectedProduct) { 
  //   return null;
  // }

  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });
  const { imagePath, title, price, content } = selectedProduct;
  return (
    <Container className="pt-3">
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기 
        힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 + 조건부 렌더링)
      */}
      {shoeInfo && (
        <StyledAlert variant="info" onClose={() => setShowInfo(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
        </StyledAlert>
      )}

      <Row>
        <Col md={6}>
          {imagePath && <img src={imagePath} width="80%" alt="product" />}
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{title}</h4>
          <p>{content}</p>
          {price && <p>{formatter.format(price)}</p>}

          <Col md={4} className="m-auto mb-3">
            {/* Quiz: text input을 제어 컴포넌트로 만들기  */}
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>
          
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;