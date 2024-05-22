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

function TodoList() {
  return (
    <Wrapper>
      <TodoListItem />
      <TodoListItem />
    </Wrapper>
  );
};

export default TodoList;