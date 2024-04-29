import React, { useState } from 'react';

function Toggle(props) {

  const [isToggleOn, setIsToggleOn] = useState(true); // [조기값, 상태변경함수]

  // 방법1. 함수 선언문 사용

  // function handleToggle() {
  //   setIsToggleOn(!isToggleOn);
  // }
  
  // 방법2. 화살표 함수 사용

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  }

  return (
    // 이벤트를 카멜케이스(camelCase)를 사용
    // 함수(이벤트 핸들러)를 바로 전달하면 됨
    // 주의! handleToggle()작성 시 함수가 바로 호출됨
    <button type="button" onClick={handleToggle}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

export default Toggle;