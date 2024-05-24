import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function TodoList(props) {

  const { todos, handleOnDone, handleImportant, handleRemove } = props;
  console.log(todos);
  return (
    <Wrapper>
      {todos.map(todo =>
        <TodoListItem
          todo={todo}
          handleOnDone={handleOnDone}
          handleImportant={handleImportant}
          key={todo.todoNo}
          handleRemove={handleRemove}
          
        />
      )}
    </Wrapper>
  );
};

export default TodoList;