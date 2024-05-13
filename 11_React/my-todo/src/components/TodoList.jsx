import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px; // 57px X 9ea
  overflow-y: auto;
`;

// todos 배열을 props로 받아와서 map() 함수를 사용해 여러개의 TodoListItem 컴포넌트로 변환

function TodoList() {
  return (
    <TodoListWrapper>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListWrapper>
  );
};

export default TodoList;