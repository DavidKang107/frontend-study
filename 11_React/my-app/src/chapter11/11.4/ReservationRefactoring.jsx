import { useState } from "react";

function ReservationRefactoring() {
  // 만역 여러개의 stste가 서로 관련이 있는 데이터라면 객체 형태로 묶어서 관리 가능
  // input에 name 속성을 설정하고 이벤트가 발생했을 때 이 값을 참조하여 객체에 접근
  // 물론 관련이 없는 데이터라면 여러개의 state로 선언해서 사용

  const [inputs, setInputs] = useState({
    breakfast: false,
    numberOfGuest: 2,
    roomType: 'SINGLE'
  });

  const {breakfast, numberOfGuest, roomType} = inputs; // 구조 분해 할당을 통해 값 추출

  const handleInputChange = (e) => {
    console.log(e.target); // 이벤트가 발생한 대상 객체
    const { type, name, checked, value} = e.target;
    console.log(type, name, checked, value);
    const inputValue = type === 'checkbox' ? checked : value;
    console.log(name, inputValue);

    // 중요!
    // 리액트 상태에서 객체를 수정해야 할 때는 
    // 아래와 같이 기존 상태를 직접 수정해서 set 함수에 넣으면 안됨
    inputs[name] = inputValue;
    // setInputs(inputs);
    // => inputs가 가리키는 객체의 내부 데이터만 바뀐 것이지 주소값(참조값)은 변하지 않았기 때문
    // 그 대신 새로운 객체를 만들어서 변화를 주고 이를 상태로 사용해야함
    // 이러한 작업을 "불변성을 지키다" 라고 부음(기존 객체를 변경하지 x)
    // 불변성을 지켜주어야 리액트 컴포넌트에서 상태가 업데이트 됐음을 감지할 수 있고 이에따라 재렌더링이 진행됨
    // 방법1: 차근차근 방법
    // const copyInputs = {...inputs};
    // copyInputs[name] = inputValue;
    // setInputs(copyInputs);

    // 방법2: 코드 단축 버전
    setInputs({
      ...inputs,
      [name]: inputValue
    });

    // 결론: 리액트 상태에서 객체를 업제이트 할 때에는 기존 객체를 직접 수정하면 안되고,
    // 새로운 객체(기존 객체의 복사본)를 만들고 그 객체에 변화를 주고 마지막으로 set 함수에 넣어줘야함
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식여부: ${breakfast}, 투숙객 수: ${numberOfGuest}, 룸 타입: ${roomType}`);
  }

  // 여러 입력 양식을 제어해야 할 때, 각 엘리먼트에 name 속성을 추가하고
  // event.target.name 값을 통해 어떤 입력 양식인지 구문할 수 있게 해줌
  // 그리고 useState 에서는 기본 타입의 값이 아니라 객체 형태의 상태를 관리
  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부
        <input 
        type="checkbox" 
        name="breakfast" // name 속성 추가
        checked ={breakfast}
        onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
        type="number"
        name="umberOfGuest"
        value={numberOfGuest}
        onChange={handleInputChange}
        />
      </label>

      <br />

        룸타입
      <label>
        <input 
        type="radio"
        name="roomType"
        value="SINGLE" 
        checked = {roomType === 'SINGLE'}
        onChange={handleInputChange}
        style={{marginTop: 10}}
        />
        싱글
      </label>
      <label>
        <input 
        type="radio"
        name="roomType"
        value="DOUBLE" 
        checked = {roomType === 'DOUBLE'}
        onChange={handleInputChange}
        />
        더블
      </label>
      <label>
        <input 
        type="radio"
        name="roomType"
        value="TWIN" 
        checked = {roomType === 'TWIN'}
        onChange={handleInputChange}
        />
        트윈
      </label>
      <button type="submit" style={{marginLeft: 10}}>제출</button>

    </form>
  );
};

export default ReservationRefactoring;