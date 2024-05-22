import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Wrapper = styled.div`
  background: #f2f2f2;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  
`;

const SubmitButton = styled.button`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
  }
`;

const TodoInput = styled.input`
  flex: 1;
  background: #f2f2f2;
  font-size: 16px;
`;

const CalendarButton = styled.button`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
  }
`;


function TodoInsert() {
  return (
    <Wrapper>
      <SubmitButton>
        <AiOutlinePlus />
      </SubmitButton>
      <TodoInput />
      <CalendarButton>
        <MdOutlineCalendarMonth />
      </CalendarButton>
    </Wrapper>
  );
};

export default TodoInsert;