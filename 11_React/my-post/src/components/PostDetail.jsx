function PostDetail(props) {


  return (
    <div className="detail">
      <h4>제목: {props.posts[props.currentIndex]} </h4>
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자: David</p>
      <p>...상세 내용...</p>
    </div>
  );
};

export default PostDetail;