import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 방법1: 스타일드 컴포넌트 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`;
// 방법2: GlobalStyled에 공통 스타일로 작성

function ProductListItem(props) {

  const { product: { imagePath, title, price, id } } = props;

  // 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR', {style: 'currency', currency: 'KRW'});

  const navigate = useNavigate();


  return (
    <StyledCol md={4} sm={6} className="cursor-pointer">
      <img src={imagePath} width="80%" alt="product-img" 
        onClick={() => {
          navigate(`/detail/${id}`)
          
        }}
      />
      <h4>{title}</h4>
      <p>{formatter.format(price)}</p>
    </StyledCol>
  );
};

export default ProductListItem;