import React from "react";

function JsxUse() {
  // JSX의 사용법 (문법)
  // 1. 꼭 닫혀야 하는 태그
  // const element = (
  //   <div>
  //     {/* <input type="text">
  //     <br> */}

  //     {/* HTML에서는 태그를 닫지 않고 사용 가능
  //         리액트 에서는 태그를 열었으면 무조건 닫아야 함 */}
  //     <div></div>
  //     <input type="text" />
  //     <br />
  //   </div>
  // );

  // 2. 꼭 감싸져야만 하는 태그
  // 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
  // const element = (
    // 반드시 하나의 부모 태그로 감싸져야 함
    // <div>
    //   <div>안녕하세요</div>
    //   <div>안녕히계세요</div>
    // </div>
    // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는세 별로 좋지 않을 수 있음
    // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때로 복잡해짐
    // 이때 사용하는 것이 React Fragment 

    // React Fragment 는 생략 가능
    // <>
    // <div>안녕하세요</div>
    // <div>안녕히계세요</div>
    // </>
  // );

  // 3. JSX 안에 자바스크립트 값 또는 표현식 사용하기
  // 자바스크립트 변수(또는 함수)를 사용할 때는 {}사용
  const name = 'react';

  const user = {
    firstName: 'David',
    lastName: 'Kang'
  };

  const formatName = (User) => {
    return `${user.firstName} ${user.lastName}`
  }

  const element = (
    <>
      <div>{name} 배우기</div>
      <h1>Hello, {formatName(user)}</h1>
    </>
  );
  return element;


}

export default JsxUse; // JsxUse 함수 컴포넌트 내보내기
// export를 해줘야 다른 곳에서 import해서 사용 가능