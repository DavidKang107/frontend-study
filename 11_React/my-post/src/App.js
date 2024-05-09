// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import PostDetail from './components/PostDetail';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);
  

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  const [inputs, setInputs] = useState('');
  const [heart, setHeart] = useState(['💔','💔','💔']);

  return (
    <>
      <header className="header--dark">
        <h4>Gonilog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록
        <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2021년 1월 20일</p>
          <p>by goni.kang</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2018년 1월 20일</p>
          <p>by goni</p>
        </div> */}

        {/* Quiz: map()을 이용하여 posts 반복 렌더링하기 */}
        {posts.map((value, index) => {
          return (
            <div className='list' key={index} onClick={() => {
              setShowPostDetail(true);
              setCurrentIndex(index); 
            }}>
              <h4>{value}</h4>
              <p>2021년 1월 20일</p>
              <p>by goni.kang</p>
              <hr/>
              <div className='toolbar'>
                <span onClick={(e) => {
                  // (버그 수정) 좋아요 버튼 누를 때 글 상세보기까지 같이 눌림, 이벤트 버블링
                  // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남
                  e.stopPropagation();
                  const copyListCount = [...likeCount];
                  copyListCount[index] += 1;
                  setLikeCount(copyListCount);
                  const copyHeart = [...heart];
                  copyHeart[index]= '💗';
                  setHeart(copyHeart);
                }}>{heart[index]} {likeCount[index]}</span>
                {/* 포스트 삭제하기 */}
                <span style={{fontSize:27}} onClick={(e) => {
                  // div 하나를 직업 제거하는 것 x
                  // posts state 에서 제거하면 알아서 자동으로 렌더링 ㅇ
                  e.stopPropagation();
                  // const copyPosts = [...posts];
                  // copyPosts.splice(index, 1);
                  // setPosts(copyPosts);

                  // filter() 함수를 사용해서 index 값 제거
                  const filteredPosts = posts.filter((value, idx) => {
                    return index !== idx;
                  });
                  setPosts(filteredPosts);

                  // (버그 수정) 삭제 시 해당 포스트 좋아요 카운트로 같이 삭제
                  const copyListCount = [...likeCount];
                  copyListCount.splice(index, 1);
                  setLikeCount(copyListCount);

                }}>
                  🗑
                </span>
              </div>
            </div>
          )
        })}

        {/* 포스트 등록하기 */}
        {/* input에 제목 입력 후 등록 버튼 누르면 맨앞에 새로운 포스트 추가
        
          1) input을 제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리
          2) 등록 버튼 클릭 시 posts 상태의 맨 앞에 새로운 데이터 추가
          
          */}
        <input type='text' value={inputs} onChange={(e) => {
          setInputs(e.target.value);
        }} />
        <button type='button' onClick={() => {
          const copyPosts = [...posts];
          copyPosts.unshift(inputs);
          setPosts(copyPosts);

          // const copyListCount = [...likeCount];
          // copyListCount.unshift(0);
          setLikeCount([0,...likeCount]);

          const copyHeart = ['💔',...heart];
          setHeart(copyHeart);
          setInputs('');
        }}>
          포스트 등록
        </button>

        {/* 포스트 상세보기 */}
        {/* Quiz: 조건부 렌더링 */}
        { (showPostDetail) && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts} setShowPostDetail={setShowPostDetail}/>}
        
      </div>
    </>
  );
}

export default App;

// (참고) 왜 새로고침 하면 다 없어질까?
// 새로고침 시 html/css/js 파일을 다시 싫어와서 그럼
// 데이터를 유지하려면 서버에 보내서 DB에 영구 저장하고 
// 새로고침이 발생 시 DB에서 다시 읽어오면 됨

// <추가 개선 과제>
// 1. 현재 배열 안에 글 제목만 있는 문자열 데이터를 
// 제목, 날짜, 작성자, 좋아요 수 등을 포함한 객체 형태로 처리해보기
// state에 글 제목만 저장되어 있는게 아니라 날짜같은 것도 저장해두고 보여주는 식이면 굿(글 등록 시 현재 날짜까지 같이 저장되도록 하면 나이스)
// => 로직을 많이 바꿔야 하므로 시간이 많을 때 하기를 권장(어차피 다른 예제에서 객체 형태로 된 state를 다룰 예정)

// 2. input에 아무것도 입력안하고 등록 버튼 누르는거 막기
// 유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됨
// 1) 미입력시 비활성화 -> 입력이 생기면 버튼 활성화
// 2) 등록 버튼 누를 시 유효성 검사

// 3. 포스트 수정할 때 input으로 입력받은 내용으로 수정해보기

// 4. 글 오름차순 정렬

// 5. 그 외 개선 및 구현할 것 많으니 자유롭게 연습해보기
// => PostList 또는 PostListItem 컴포넌트 추출
