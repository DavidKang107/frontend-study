import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return <button type="button" onClick={props.onClick}>로그인</button>
}

function LogoutButton(props) {
  return <button type="button" onClick={props.onClick}>로그아웃</button>
}

function LoginControl(props) {

  const [isLoggedIn, setIsToggleOn] = useState(false);

  const handleLogin = () => {
    setIsToggleOn(true);
  };
  
  const handleLogout = () => {
    setIsToggleOn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout}/>;
  } else {
    button = <LoginButton onClick={handleLogin}/>;
  }
  // if문 사용 + button 변수에 컴포넌트를 대임

  return (
    <>
      {/* Greeting 컴포넌트 재사용 */}
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}

export default LoginControl;