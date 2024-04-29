function Clock(params) {
  return (
    <>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </>
    // 리액트 엘리먼트 (js 일반 객체)를 반환
  )
}

export default Clock;