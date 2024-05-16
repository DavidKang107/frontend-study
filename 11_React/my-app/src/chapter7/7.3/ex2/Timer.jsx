import { useEffect } from "react";

function Timer() {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);
    // 화면에서 사라질 때 만든 타이머 정리하기
    // useEffect()에서 리턴하는 함수
    // => 뒷정리(clean-up) 함수
    // 컴포넌트가 언마운트 될 때 호출됨
    return () => {
      clearInterval(timer);
      console.log(`ID ${timer}번 타이머 종료!`);
    };
  }, [])


  return (
    <>
      <span>타이머가 시작 됐습니다.</span>
    </>
  );
};

export default Timer;