import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { forwardRef, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
// npm install react-datepicker --save
// npm install date-fns --save

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
    color: ${props => props.$insertTodo ? 'black': '#757575' }
  }
`;

const TodoInput = styled.input`
  flex: 1;
  background: #f2f2f2;
  font-size: 16px;
`;

const CalendarButton = styled.label`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > svg {
    font-size: 20px;
  }
`;

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button id="button" className="custom-input" onClick={onClick} ref={ref}>
    ~ {value}
  </button>
));

function TodoInsert(props) {

  const { handleInsert } = props;
  
  const [dueDate, setDueDate] = useState(new Date());
  const [insertTodo, setInsertTodo] = useState('');

  return (
    <Wrapper>
      <SubmitButton 
        disabled={!insertTodo}
        $insertTodo={insertTodo}
        onClick={() => {
        handleInsert(insertTodo, dueDate);
        setInsertTodo('');
        setDueDate(new Date());
      }}>
        <AiOutlinePlus />
      </SubmitButton>
      <TodoInput
        value={insertTodo}
        onChange={(e) => {
          setInsertTodo(e.target.value)
        }}
      />
      <DatePicker
        locale={ko}
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        dateFormat={"yyyy. MM. dd"}
        customInput={<CustomInput />}
      ></DatePicker>
      <CalendarButton htmlFor="button">
        <MdOutlineCalendarMonth />
      </CalendarButton>
    </Wrapper>
  );
}

export default TodoInsert;
