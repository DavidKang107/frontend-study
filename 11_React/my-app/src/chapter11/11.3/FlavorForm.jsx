import { useState } from "react";

function FlavorForm() {

  const [value, setValue] = useState('coconut');
  const handleSubmit = (e) => {
    alert('가장 좋아하는 맛: ' + value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="check">
        좋아하는 맛 선택:
        {/* HTML DOM */}
        <select value={value} onChange={(e) => setValue(e.target.value)}  id="check">
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option>
          <option value="mango">망고</option>
        </select>
        <button type="submit">제출</button>
      </label>
    </form>
  );
};

export default FlavorForm;