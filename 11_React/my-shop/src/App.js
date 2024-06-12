import { createGlobalStyle } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";

// 글로번(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  *{
    box-sizing: inherit;
  }

  #root {
    text-align: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;




function App() {
  return (
    <>
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button>
      <Button variant="outline-primary">Primary</Button> */}
      <GlobalStyle />

      {/* 헤더 영역: 상단  */}

      {/* Quiz: Layout 컴포넌트로 추출 및 Nested Route 구성해 보기 */}
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
          <Route index element={<Main />}/>
          {/* <Route path="detail" element={<ProductDetail />} /> */}
          <Route path='/detail/:productId' element={<ProductDetail />}/>
        </Route>
      </Routes>
      
      {/* 토스트 컨테이너 하나로 재사용
          만약 다은 옵션의 토스트를 쓰고 싶다면 컨테이너 여러개 사용 */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/