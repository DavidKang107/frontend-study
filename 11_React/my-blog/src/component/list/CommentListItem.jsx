import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  cursor: pointer;

  &:hover {
    background: lightgrey;
  }
`;

function CommentListItem(props) {
  const { comment } = props;
  return (
    <Wrapper>
      {comment.content}
    </Wrapper>
  );
};

export default CommentListItem;