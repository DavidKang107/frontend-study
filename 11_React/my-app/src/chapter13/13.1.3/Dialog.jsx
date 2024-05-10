// WelcomeDialog를 범용적인 Dialog로 리펙터링

import FancyBorder from "../13.1.1.1/FancyBorder";

function Dialog(props) {
  return (
    // 타이틀과 메세지는 간담히 props로 받아서 설정하고, 
    // 그안에 자식으로 무엇이 들어올지 모를때는 children으로 받아서 동적으로 처리
    // 예: 공통 모달창 만들 때 단순 확인 모달, 사용자의 입력을 받는 모달 등 다양한 모달
    <FancyBorder color={props.color}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
};

export default Dialog;