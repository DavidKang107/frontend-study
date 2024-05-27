import styled, { css } from "styled-components";
import { MdSave, MdEdit, MdRemoveCircleOutline, MdOutlineStar, MdCheckCircle, MdOutlineCircle, MdOutlineStarOutline, MdCheckCircleOutline } from "react-icons/md";
import dayjs from "dayjs"
import { useState } from "react";


const Wrapper = styled.div`
  background: #f2f2f2;
  height: 56px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  ${props => props.$warning &&
    css`
      background-color: #ff6363;
    `}
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
  background: transparent;
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
    `}
  ${props => props.$warning &&
    css`
      color: white;
      font-weight: 600;
    `}
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
  background:transparent;
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
  background: transparent;
`;

const UpdateTodo = styled.input`
  flex: 1;
  height: 70%;
  font-size: 16px;
  
`

const SaveButton = styled.button`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
  }
  background: transparent;
`


function TodoListItem(props) {
  const { todo: { todo, todoNo, dueDate, done, important }, handleOnDone, handleImportant, handleRemove, handelUpdate } = props;
  // console.log(createDate);

  const [checkIcon, setCheckIcon] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(false);
  const handleUpdate = () => {
    setUpdateTodo(true);
  };

  const [updateTodoValue, setUpdateTodoValue] = useState(todo);
  const handleSave = () => {
    handelUpdate(updateTodoValue, todoNo);
    setUpdateTodo(false);
  }



  return (
    <Wrapper
      $warning={(dayjs(dueDate).format("DD") < dayjs().format("DD"))}
      onMouseOver={() => setEditTodo(true)}
      onMouseOut={() => setEditTodo(false)}
    >
      <TodoButton
        onMouseOver={() => setCheckIcon(true)}
        onMouseOut={() => setCheckIcon(false)}
        onClick={() => handleOnDone(todoNo)}
      >
        {done ? <MdCheckCircle /> : (checkIcon ? <MdCheckCircleOutline /> : <MdOutlineCircle />)}
      </TodoButton>
      {updateTodo ?
        <UpdateTodo
          value={updateTodoValue}
          onChange={(e) => {
            setUpdateTodoValue(e.target.value);
          }}
        /> :
        <Todo
          $done={done}
          $warning={(dayjs(dueDate).format("DD") < dayjs().format("DD"))}
        >
          {todo}
        </Todo>}
      {updateTodo && <SaveButton onClick={handleSave}><MdSave /></SaveButton>}
      {!updateTodo &&
        <DueDate>
          {(dayjs(dueDate).format("DD") >= dayjs().format("DD")) ?
            (dayjs(dueDate).format("DD") - dayjs().format("DD")) + '일 남았습니다.' :
            (dayjs().format("DD")) - dayjs(dueDate).format("DD") + '일 초과하였습니다.'}
        </DueDate>}
      {!updateTodo && editTodo &&
        <IconWrapper onClick={handleUpdate}>
          <MdEdit />
        </IconWrapper>}
      {!updateTodo && editTodo &&
        <IconWrapper onClick={() => handleRemove(todoNo)}>
          <MdRemoveCircleOutline />
        </IconWrapper>}
      <ImportantButton
        onClick={() => handleImportant(todoNo)}
      >
        {important ? <MdOutlineStar /> : <MdOutlineStarOutline />}
      </ImportantButton>
    </Wrapper>
  );
};

export default TodoListItem;