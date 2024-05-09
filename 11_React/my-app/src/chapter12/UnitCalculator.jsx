import { useState } from "react";
import UnitCounter from "./UnitCounter";
import UnitInput from "./UnitInput";

function UnitCalculator() {
  // Shared State 실습

  const [length, setLength] = useState(1);

  const handleChange = (e) => {
    setLength(Number(e.target.value));
  }
  return (
    <>
      <p>단위 변환 계산기</p>
      <label>
        <input type="number" value={length} onChange={handleChange} min={0} />
        미터(m)
      </label>
      <hr />
      <UnitCounter length = {length} onLengthChange={setLength}/>
      <br />
      <UnitInput length={length} unit={'mm'}/>
      <br />
      <UnitInput length={length} unit={'cm'}/>
      <br />
      <UnitInput length={length} unit={'m'}/>
      <br />
      <UnitInput length={length} unit={'km'}/>
      <br />
      <UnitInput length={length} unit={'inch'}/>
      <br />
      <UnitCounter length = {length} onLengthChange={setLength}/>
      
    </>
  );
};

export default UnitCalculator;