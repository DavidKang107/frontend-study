import styled, { css } from "styled-components";
import { MdEdit, MdRemoveCircleOutline, MdOutlineStar, MdCheckCircle, MdOutlineCircle, MdOutlineStarOutline, MdCheckCircleOutline } from "react-icons/md";
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
  ${props => props.$done &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `
  }
`;
const TodoUpdate = styled.p`
  flex: 1;
  background-color: transparent;
  padding: 8px;
  font-size: 20px;
  display: flex;
  align-items: center;
  
`;

const DueDate = styled.div`
  /* flex: 1; */
  background-color: transparent;
  padding: 8px;
  font-size: 12px;
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

const IconWrapper = styled.button`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
  }
`;



function TodoListItem(props) {
  console.log(props);

  const [checkIcon, setCheckIcon] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(false);

  const { todo: { todo, todoNo, createDate, dueDate, done, important }, handleOnDone, handleImportant, handleRemove } = props;
  console.log(createDate);

  return (
    <Wrapper
      onMouseOver={() => setEditTodo(true)}
      onMouseOut={() => setEditTodo(false)}
    >
      <TodoButton
        onMouseOver={() => setCheckIcon(true)}
        onMouseOut={() => setCheckIcon(false)}
        onClick={() => handleOnDone(todoNo)}
      // onClick={handleImportant(titleNo)}
      >
        {done ? <MdCheckCircle /> : (checkIcon ? <MdCheckCircleOutline /> : <MdOutlineCircle />)}
      </TodoButton>
      <Todo $done={done}>
        {todo}
      </Todo>
      <DueDate>
        {editTodo && dayjs(dueDate).format("M월 DD일") + '까지'}
      </DueDate>
      {editTodo && <IconWrapper><MdEdit /></IconWrapper>}
      {editTodo && <IconWrapper onClick={() => handleRemove(todoNo)}><MdRemoveCircleOutline /></IconWrapper>}
      <ImportantButton
        onClick={() => handleImportant(todoNo)}
      >
        {important ? <MdOutlineStar /> : <MdOutlineStarOutline />}
      </ImportantButton>
    </Wrapper>
  );
};

export default TodoListItem;