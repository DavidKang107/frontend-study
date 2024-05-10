// 개념 설명만을 위한 예제

import React, { useContext } from "react";

// context를 사용하면 모든 컴포넌트를 일일이 통과하지 않고도 원라는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음
// 'light'를 기본값으로 하는 테마 context를 만드는 코드
const ThemeContext = React.createContext('light');

function App() {
  // Provider를 이용해 하위 트리에 테마 값을 보내줌
  // 아무리 깊숙히 있어도, 모든 컴포넌트가 이값을 읽을 수 있음
  // 아래 여시는 dark를 현재 테마값으로 보내고 있음
  
  return (
    <ThemeContext.Provider value="dark">
    <Toolbar theme="dark"/>;
    </ThemeContext.Provider>
  ) 
}
function Toolbar(props) {
  // 이제 중간에 있는 컴포넌트가 일일 테마를 넘겨줄 필요가 없음
  return (
  <div>
    <ThemedButton theme={props.theme}/>
  </div>
  );
}


function ThemedButton(props) {
  // useContext훅 사용 시
  const value = useContext(ThemeContext);
  return (
    <button theme={value}/>
    // <ThemeContext.Consumer>
    //   {(value) => <button theme={value}/>}
    // </ThemeContext.Consumer>
  )
};

