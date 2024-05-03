import { useState } from "react";

function Reservation() {
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuest, setNumberOfGuest] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  }

  const handleRoomChange = (e) => {
    setRoomType(e.target.value)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식여부: ${breakfast}, 투숙객 수: ${numberOfGuest}, 룸 타입: ${roomType}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부
        <input 
        type="checkbox" 
        checked ={breakfast}
        onChange={handleBreakfastChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
        type="number"
        value={numberOfGuest}
        onChange={(e) => setNumberOfGuest(e.target.value)}
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
        onChange={handleRoomChange}
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
        onChange={handleRoomChange}
        />
        더블
      </label>
      <label>
        <input 
        type="radio"
        name="roomType"
        value="TWIN" 
        checked = {roomType === 'TWIN'}
        onChange={handleRoomChange}
        />
        트윈
      </label>
      <button type="submit" style={{marginLeft: 10}}>제출</button>

    </form>
  );
};

export default Reservation;