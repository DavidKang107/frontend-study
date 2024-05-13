import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;
  
  .app-title {
    background-color: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background-color: white;
  }

`

// const AppTiltle = styled.div`
//   background-color: #22b8cf;
//   color: white;
//   height: 4rem;
//   font-size: 1.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `


// 화면을 가운데 정렬하고, 앱 타이틀을 보여주는 컴포넌트
// children으로 내부 자식 엘리머트들을 props로 받아와서 렌더링
function TodoTemplate(props) {
  const {children} = props;
  return (
    <TodoTemplateWrapper>
      {/* <AppTiltle>일정 관리</AppTiltle> */}
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
      
    </TodoTemplateWrapper>
  );
};

export default TodoTemplate;