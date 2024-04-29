import React from 'react';

function UserGreeting() {
  return <h1>환영합니다. 고객님!</h1>
}

function GuestGreeting() {
  return <h1>로그인이 필요합니다.</h1>
}

function Greeting(props) {

  const isLoggedIn = props.isLoggedIn;

  // 로그인 여부에 따라 두개의 컴포넌트를 선책적으로 보여줌
  if (isLoggedIn) {
    return <UserGreeting />
  } // 불필요한 else문은 갇이 안씀
  return <GuestGreeting />

}

export default Greeting;