import { useState } from "react";

function EssayForm() {
  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 작성하세요.');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('제출된 에세이: ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} preve>
      <label>
        이세이:
        <textarea value={value} onChange={handleChange} ></textarea>
        {/* HTML DOM */}
        {/* <textarea>
          Hello world!
        </textarea> */}
        <button type="submit">제출</button>
      </label>
    </form>
  );
};

export default EssayForm;