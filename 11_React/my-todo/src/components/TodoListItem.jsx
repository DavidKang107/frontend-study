import { MdCheckBoxOutlineBlank, MdEdit, MdRemoveCircleOutline } from "react-icons/md";
import styled from "styled-components";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 짝수번째 배경색 지정 */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  /* 아이템 사이사이세 위쪽 테두리 넣기 */
  & + & {
    border-top: 1px solid #dee2e6;
  }

`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 1.5rem;
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #ff8787;
  }
`;


// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI보여줌
function TodoListItem() {
  return (
    <TodoListItemWrapper>
      <Checkbox>
        <MdCheckBoxOutlineBlank/>
      </Checkbox>
      <Text>할 일</Text>
      <Edit>
        <MdEdit />
      </Edit>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;