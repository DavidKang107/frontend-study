import styled from "styled-components";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import { useNavigate } from "react-router-dom";


// 서버에서 받아온 데이터라고 가정
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function MainPage() {
  const navigate = useNavigate();
  
  return (
    <Wrapper>
      <Container>
        {/* 글 작성하기 페이지로 이동하는 버튼 */}
        <Button 
          title="글 작성하기"
          onClick={() => {
            // Quiz: /post-write 경로로 이동
            navigate('/post-write')
          }}
        />

        {/* 글 목록을 표시 */}
        <PostList posts={data} />
      </Container>
    </Wrapper>
  );
};

export default MainPage;