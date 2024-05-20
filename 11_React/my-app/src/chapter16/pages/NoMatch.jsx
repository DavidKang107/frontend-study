import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoMatchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 64px;
`

function NoMatch() {
  const navigate = useNavigate();
  return (
    <NoMatchWrapper>
      <h1>404 Not Found</h1>
      <button type="button" onClick={() => navigate('/')}>메인으로</button>
    </NoMatchWrapper>
  );
};

export default NoMatch;