import styled from 'styled-components';
import SubjectList from './SubjectList';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  margin: 0 auto;
  max-width: 1040px;
  height: 800px;
  margin-top: 40px;
  background: #f2f2f2;
  border-radius: 8px;
  border: 1px solid lightgray;
  overflow: hidden;
`;

const SubjectArea = styled.div`
  padding: 80px 8px 0;
  width: 240px;
  background-color: #f2f2f2;
`;
const ContentArea = styled.div`
  margin-top: 40px;
  padding: 16px;
  flex: 1;
  background-color: #d2d1e9;
  border-radius: 8px 0 0 0;
`;

function Mainpage() {
  return (
    <Wrapper>
      <SubjectArea>
        <SubjectList></SubjectList>
      </SubjectArea>
      <ContentArea />
    </Wrapper>
  );
};

export default Mainpage;