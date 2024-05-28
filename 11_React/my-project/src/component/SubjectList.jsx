import styled from 'styled-components';
import { MdOutlineStarOutline, MdOutlineWbSunny, MdHome, MdOutlineSort } from "react-icons/md";
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const HomeButton = styled.button`
  font-size: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
  ${props => props.$homeBG && `background: #d2d1e9`}
`;
const TodayButton = styled.button`
  font-size: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
  ${props => props.$todayBG && `background: #d2d1e9`}
`;

const ImportantButton = styled.button`
  font-size: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
  ${props => props.$importantBG && `background: #d2d1e9`}
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

`;

const DueDateSortButton = styled.button`
  font-size: 16px;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
  ${props => props.$importantBG && `background: #d2d1e9`}
`;

function SubjectList(props) {
  const { handleImportantList, handleHomeList, handleTodayList, handleSortDueDate, handleSortTodo, handleSortCreateDate } = props;
  const [homeBG, setHomeBG] = useState(true);
  const [todayBG, setTodayBG] = useState(false);
  const [importantBG, setImportantBG] = useState(false);


  return (
    <Wrapper>
      <HomeButton
        $homeBG={homeBG}
        onClick={() => {
          handleHomeList();
          setHomeBG(true);
          setTodayBG(false);
          setImportantBG(false);
        }}>
        <IconWrapper>
          <MdHome />
        </IconWrapper>
        <span>홈</span>
      </HomeButton>
      <TodayButton
        $todayBG={todayBG}
        onClick={() => {
          handleTodayList()
          setHomeBG(false);
          setTodayBG(true);
          setImportantBG(false);
        }}>
        <IconWrapper >
          <MdOutlineWbSunny />
        </IconWrapper>
        <span>오늘 할 일</span>
      </TodayButton>
      <ImportantButton
        $importantBG={importantBG}
        onClick={() => {
          setHomeBG(false);
          setTodayBG(false);
          setImportantBG(true);
          handleImportantList()
        }}>
        <IconWrapper>
          <MdOutlineStarOutline />
        </IconWrapper>
        <span>중요</span>
      </ImportantButton>
      <div>
        <hr style={{ background: '#717171', width: '80%', margin: '0 auto' }} />
      </div>
      <DueDateSortButton
        onClick={() => {
          handleSortDueDate()
        }}>
        <IconWrapper>
          <MdOutlineSort />
        </IconWrapper>
        <span>마감일 순</span>
      </DueDateSortButton>
      <DueDateSortButton
        onClick={() => {
          handleSortCreateDate()
        }}>
        <IconWrapper>
          <MdOutlineSort />
        </IconWrapper>
        <span>생성일 순</span>
      </DueDateSortButton>
      <DueDateSortButton
        onClick={() => {
          handleSortTodo()
        }}>
        <IconWrapper>
          <MdOutlineSort />
        </IconWrapper>
        <span>가나다 순</span>
      </DueDateSortButton>

    </Wrapper>
  );
};

export default SubjectList;