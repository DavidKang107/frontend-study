import React from 'react';
import UserInfo from './UserInfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

function CommentEx(props) {
  return (
    // <>
    //   {/* 원본 */}
    //   <div className="comment">
    //     <div className="user-info">
    //       <img className="avatar"
    //         src={props.user.avatarUrl}
    //         alt={props.user.name}
    //       />
    //       <div className="user-info-name">
    //         {props.user.name}
    //       </div>
    //     </div>

    //     <div className="comment-text">
    //       {props.text}
    //     </div>

    //     <div className="comment-date">
    //       {formatDate(props.date)}
    //     </div>
    //   </div>
    // </>
    
    <>
            <div className="comment">
        <UserInfo user = {props.user}/>

        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    </>
    
  );
}

export default CommentEx;