import React, { useState } from 'react';

function ConfirmButton(props) {

  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <button type="button" disabled={isToggleOn} onClick={(e) => {
      setIsToggleOn(!isToggleOn);
      // e.target.disabled = true;
      // set 함수는 비동기로 처리됨(=비동기 함수)
      // 동기로 사용하려면 함수형 업데이트 형태로 적용
      // console.log(isToggleOn);
    }} >
      {isToggleOn ? '확인됨' : '확인하기'}
      
      </button>
  );
}

export default ConfirmButton;

// Quiz: 사용자에게 확인을 요구하는 버튼 컴포넌트
// 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버큰 비활성화 처리 해보기