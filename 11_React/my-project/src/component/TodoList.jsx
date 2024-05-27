import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  flex: 1;

  & > * {
    margin-bottom: 8px;
  }
`;

const DoneBanner =styled.div`
  height: 20px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid grey;
  background-color: lightgrey;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  
`

function TodoList(props) {

  const { todos, handleOnDone, handleImportant, handleRemove, handelUpdate } = props;
  
  return (
    <Wrapper>
      {todos.filter(todo => !todo.done).map(todo =>
        <TodoListItem
          todo={todo}
          handleOnDone={handleOnDone}
          handleImportant={handleImportant}
          key={todo.todoNo}
          handleRemove={handleRemove}
          handelUpdate={handelUpdate}
        />
      )}
      {todos.filter(todo => todo.done).length > 0 && 
      <DoneBanner>
        완료됨 {todos.filter(todo => todo.done).length}
      </DoneBanner>}
      {todos.filter(todo => todo.done).map(todo =>
        <TodoListItem
          todo={todo}
          handleOnDone={handleOnDone}
          handleImportant={handleImportant}
          key={todo.todoNo}
          handleRemove={handleRemove}
          handelUpdate={handelUpdate}
        />
      )}

    </Wrapper>
  );
};

export default TodoList;