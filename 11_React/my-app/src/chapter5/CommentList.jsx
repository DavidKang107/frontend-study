import React from 'react';
import Comment from './Comment';


// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      <Comment
        name="강정모"
        content="안녕하세요."
      />
      <Comment
        name="김민아"
        content="안녕하세유."
      />
      <Comment
        name="최현아"
        content="안녕하세용."
      />
      <Comment
        name="김지연"
        content="안녕하세욥."
      />

    </div>
  );
}

export default CommentList;