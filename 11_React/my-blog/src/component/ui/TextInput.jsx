import styled from "styled-components";

const StyledTextInput = styled.textarea`
  width: calc(100% - 32px);
  height: ${props => props.height && props.height + 'px'};
  padding: 16px;
  line-height: 20px;

`

// 공통 텍스트 컴포넌트
function TextInput(props) {
  const { height, value, onChange } = props;

  return (
    <StyledTextInput height={height} value={value} onChange={onChange} />
  );
};

export default TextInput;