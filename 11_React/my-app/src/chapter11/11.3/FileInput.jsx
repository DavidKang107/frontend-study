import { useRef } from "react";

function FileInput() {

  const fileInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileInput.current.files);
    alert(`선택된 파일: ${fileInput.current.files[0].name}`)
    
  };

  // file input은 값을 설정할 수 없고 사용자가 첨부한 파일의 정보만 읽어올 수 있기 때문에 비제어 컴포넌트가 됨
  // 파일에 접근하기 위해서 DOM 요소의 ref를 만들어 접근


  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일 업로드:
        <input ref={fileInput} type="file" />
      </label>
      <br />
      <button type="submit">제출</button>

    </form>
  );
};

export default FileInput;