import './App.css';
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Mainpage from './component/Mainpage';

const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
 
  body {
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  button {
    border: none;
    cursor: pointer;
  }
  
  input {
    border: none;
    outline: none;
  }
`;


function App() {
  

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Mainpage />
    </>
  );
}

export default App;
