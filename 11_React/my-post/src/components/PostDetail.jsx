function PostDetail(props) {

  

  return (
    <div className="detail">
      <h4>제목: {props.posts[props.currentIndex]} </h4>
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자: David</p>
      <p>...상세 내용...</p>
      {/* 간단한 포스트 수정하기 */}
      <button type="button"
        onClick={() => {
          const copyPosts = [...props.posts];
          copyPosts[props.currentIndex] = `${copyPosts[props.currentIndex]} - 수정됨 `;
          props.setPosts(copyPosts);

          // state 변경할 때 알아야 할 것!
          // 1. state 변경 함수의 특징
          // 기존 state가 신규 state랑 같은 경우, 변경 안함
          // 2. 배열/객체의 특징
          // 변수에 주소(참조)값이 저장됨

        }}
      >
        수정하기
      </button>
      <button type="button" onClick={() => {
        props.setShowPostDetail(false);
      }}>닫기</button>
    </div>
  );
};

export default PostDetail;