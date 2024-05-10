// WelcomeDialog를 범용적인 Dialog로 리펙터링

import FancyBorder from "../13.1.1.1/FancyBorder";

function Dialog(props) {
  return (
    // 타이틀과 메세지, 컬러를 어떻게 사용하느냐에 따라 
    // 인사말이 될 수도 있고, 경고가 될 수도 있음
    // 범용적인 Dialog를 만들고 이를 구체화하여 사용
    // 예: 확인 모달, 경고 모달 등
    <FancyBorder color={props.color}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
};

export default Dialog;