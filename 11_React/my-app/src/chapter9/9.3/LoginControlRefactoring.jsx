import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return <button type="button" onClick={props.onClick}>로그인</button>
}

function LogoutButton(props) {
  return <button type="button" onClick={props.onClick}>로그아웃</button>
}

function LoginControlRefactoring(props) {

  const [isLoggedIn, setIsToggleOn] = useState(false);

  const handleLogin = () => {
    setIsToggleOn(true);
  };
  
  const handleLogout = () => {
    setIsToggleOn(false);
  };

  // if문 사용 + button 변수에 컴포넌트를 대임

  // 2단계: if문 사용 + button 변수에 컴포넌트를 대입
  // (참고) JSX내부에서 조건부 렌더링해도 됨. 근데 JSX 내부에서는 IF문 사용 불가
  // => 삼항 연산자 또는 논리 연산자 대체 가능

  return (
    <>
      {/* Greeting 컴포넌트 재사용 */}
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 삼항 연산자로 if-else 구문을 JSX 내부에서 표현 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 떄 사용 */}
      {isLoggedIn
        ? <LogoutButton onClick={handleLogout}/> 
        : <LoginButton onClick={handleLogin}/> }
    </>
  );
}

export default LoginControlRefactoring;