import styled from "styled-components";
import { MdOutlineCircle, MdOutlineStarOutline, MdCheckCircleOutline } from "react-icons/md";
import dayjs from "dayjs"
import { useState } from "react";


const Wrapper = styled.div`
  background: #f2f2f2;
  height: 56px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  
`;

const TodoButton = styled.button`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
  }
`;

const Todo = styled.p`
  flex: 1;
  background-color: transparent;
  padding: 8px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const ImportantButton = styled.button`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
  }
`;




function TodoListItem() {

  const now = dayjs();
  now.format("YY-MM-DD");
  console.log(now);
  
  const [checkIcon, setCheckIcon] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());


  return (
    <Wrapper>
      <TodoButton 
        onMouseOver={() => setCheckIcon(true)}
        onMouseOut={() => setCheckIcon(false)}
      >
        {checkIcon ? <MdCheckCircleOutline /> : <MdOutlineCircle />}
      </TodoButton>
      <Todo>
        
      </Todo>
      <ImportantButton>
        <MdOutlineStarOutline />
      </ImportantButton>
    </Wrapper>
  );
};

export default TodoListItem;