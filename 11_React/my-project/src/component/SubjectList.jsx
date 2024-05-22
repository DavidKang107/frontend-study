import styled from 'styled-components';
import { MdOutlineStarOutline, MdOutlineWbSunny } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Items = styled.div`
  font-size: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 28px;
  & > svg {
    font-size: 20px;
    color: #717171;
  }

`

function SubjectList() {
  return (
    <Wrapper>
      <Items>
        <IconWrapper>
          <MdOutlineWbSunny />
        </IconWrapper>
        <span>오늘 할 일</span>
      </Items>
      <Items>
        <IconWrapper>
          <MdOutlineStarOutline />
        </IconWrapper>
        <span>중요</span>
      </Items>
      <hr style={{background: '#717171', width: '200px', margin: '0 auto'}}/>
      
      
    </Wrapper>
  );
};

export default SubjectList;