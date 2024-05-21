import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 720px;
`;

const SubjectArea = styled.div`
  padding: 16px;
  width: 200px;
  background-color: yellow;
`;
const ContentArea = styled.div`
  padding: 16px;
  flex: 1;
  background-color: orange;
`;

function Mainpage() {
  return (
    <Wrapper>
      <SubjectArea />
      <ContentArea />
    </Wrapper>
  );
};

export default Mainpage;