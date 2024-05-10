// 개념 설명만을 위한 예제
import React, { useContext } from "react";
// 테마 정보를 담은 ThemeContext
const ThemeContext = React.createContext('light');

// 로그인한 유저 정보를 담는 UserContext
const UserContext = React.createContext({
  name: 'Guest',
});

function App(props) {
  const { signedInUser, theme } = props;

  // props로 받아온 값을 Context에 제공
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// 여러 Context의 값을 받는 Content 컴포넌트
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}


// 상태관리 Context API의 한계(단점)? 왜 외부 상태 관리 라이브러를 꼭 써야하는지? 리덕스 같이 따로 설치해야 함
// 1. 여러 개의 데이터를 전역으로 사용하려면 프로바이더를 여러개 만들어야 됨
//    (비효율적이고 가독성 떨어짐)
// 2. value 값이 바뀌면 프로바이더의 하위 consumer 컴포넌트가 전부 다 재렌더링 됨
// 3. Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있음
// => Consumer와 Provider를 분리할 수 없기에 재사용성(Reusablility)이 떨어짐