import { useEffect } from "react";
import { useState } from "react";

function CounterEffect() {

  // 실행 시점: HTML COM 랜더링 직후(즉, 우리가 만든 컴포넌트가 화면에 나타난 상태 이후)
  useEffect(() => {
    console.log('effect 실행!');

    //DOM API로 문서 타이틀 업데이트
    document.title = `clicked ${count} times`
  // },); // 랜더링 될 때마다 실행됨
  },[]); // 마운트 될 때만 실행됨

  const [count, setCount] = useState(0);
  return (
    <>
      <p> 총 {count}번 클릭했습니다.</p>
      <button type="button" onClick={() => {
        setCount(count + 1);
        // useEffect와 차이점 비교 테스트
        document.title = `clicked ${count} times`;
        // 1. 초기에 타이틀이 안바껴 있음(왜? 처음 마운트 시 실행)
        // 2. 버튼 클릭 시 count 값이 제대로 반영 안됨(왜? set함수는 비동기 함수)
        }}>클릭</button>
    </>
  );
  // (정리)
  // onClick과 useEffect는 실행 시점이 다르기에 동작이 다를수 밖에 없음(완전히 다른 용도)
  // onClick 속성으로 넣어준 콜백 함수는 "클릭 시 호출되는" 함수이고,
  // useEffect 내부에 있는 콜백 함수는 "렌더링 시 (의존성 배열에 따라) 호출되는" 함수임
  // 어떻게 사용하는지에 따라 겹치는 결과도 있겠지만, onClick과 useEffect는 완전히 다른 의도를 가짐
};

export default CounterEffect;

// (정리) useEffect() 언제, 왜 쓸까?
// 주로 API 요청 같은 "서버에서 데이터 받아오는 작업"을 넣음
// => 아래 2)번 시간이 걸리는 작업에 해당
// => useEffect를 안쓰고 서버에 동기식으로 요청을 보내고 서버에서 응답이 없으면 화면 렌더링이 안됨
// => 또는 서버에 비동기식으로 요청을 보내고 받아온 데이터를 state에 넣어줘야 하는데 useEffect를 안쓰면 API 요청을 반복하므로 무한 루프에 걸림

// 적용 가능한 여러 가지 상황들
// 1) 처음 렌더링 시 해줘야 하는 초기 작업들
// => 타이머 설정, 라이브러리 연동 작업 등
// 2) 연산 또는 시간이 걸리는 작업들
// => 작업이 끝날때까지 화면 렌더링이 안됨
// => useEffect() 안에 콜백 함수는 HTML DOM 렌더링 후에 동작하기 때문에
// 3) DOM의 속성을 읽거나 직접 변경하는 작업
// => ref객체를 사용해서 DOM 노드를 참조하는 코드인 경우 
// useEffect를 안쓰고 ref에 접근을 한다면 화면에 렌더링 되기 이전이므로 DOM노드가 아닌 undefined가 나올 수 있음
// 예: 7.6 TextInputWithFocusButton 가서 확인
// 4) count가 바뀔때 마다 특정 로직이 실행돼야 하는데 count를 바꾸는 기능이 여기저기 여러 군데 있을 때
// 같은 로직을 여러 군데에 반복해서 넣어야 됨(비효율적) => useEffect 쓰면 해결!
// 같은 로직을 반복해 여러번 쓰는것보다 useEffect 안에 넣고 count 값이 변할 때마다 실행시키게 하면 편리
// 예: my-todo 앱에서 로컬 스토리지에 저장하는 로직

// (참고)
// 하나의 비즈니스 로직을 하나의 useEffect로 나눠서 담으면 가독성이 올라가고 유지보수 하기도 한결 편함
// 기능이 다르면 쪼개서 넣는 것을 권장