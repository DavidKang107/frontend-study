import './App.css';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from 'styled-components';
import Mainpage from './component/Mainpage';


const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  @font-face {
    font-family: ;
    src: url();
  }
`;

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainTitleText>
        To-do List
      </MainTitleText>
      <Mainpage />
    </>
  );
}

export default App;
