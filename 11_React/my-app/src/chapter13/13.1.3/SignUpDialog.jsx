import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    setColor("black");
  };

  const handleClick = () => {
    setColor("red");
    alert(`${name}님 환영합니다!`);
    setName("");
  }

  return (
    <Dialog
      title="화성 탐사 프로그램😊😉"
      message="당신의 이름은?"
      color={color}
    >
      <input value={name} type="text" onChange={handleChange}/>
      <button type="button" onClick={handleClick}>가입하세요!</button>
    </Dialog>
  );
};

export default SignUpDialog;