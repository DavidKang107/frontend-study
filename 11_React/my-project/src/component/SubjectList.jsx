import styled from 'styled-components';
import { MdOutlineStarOutline, MdOutlineStar, MdOutlineWbSunny } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Items = styled.div`
  font-size: 16px;
  height: 40px;
  display: flex;
  line-height: 40px;
  padding: 0 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
  border: 1px solid black;
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
        오늘 할 일
      </Items>
      <Items>
        <IconWrapper>
          <MdOutlineStarOutline />
        </IconWrapper>
        중요
      </Items>
      <hr style={{background: '#717171', width: '200px', margin: '0 auto'}}/>
      
      
    </Wrapper>
  );
};

export default SubjectList;