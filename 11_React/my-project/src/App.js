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



function App() {
  return (
    <>
      <GlobalStyle />
      <Mainpage />
    </>
  );
}

export default App;
