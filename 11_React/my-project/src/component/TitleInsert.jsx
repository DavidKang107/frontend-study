import styled from "styled-components";
import { GoPencil } from "react-icons/go";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: 16px;
`;

const TitleInput = styled.input`
  font-size: 32px;
  font-weight: 600;
  width: 30%;
  background-color: transparent;
  color: black;
  &::placeholder{
    color: gray;
  }
`;

const TitleModifyButton = styled.button`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  & > svg {
    font-size: 24px;
    color: #555555;
  }
`;



function TitleInsert() {
  return (
    <Wrapper>
      <TitleInput placeholder="제목"/>
      <TitleModifyButton>
        <GoPencil />
      </TitleModifyButton>
    </Wrapper>
  );
};

export default TitleInsert;