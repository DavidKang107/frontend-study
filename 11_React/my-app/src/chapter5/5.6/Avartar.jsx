import React from 'react';

function Avartar(props) {
  return (
    // user로 바꿔줌. 여러 곳에서 쓰일 수 있으므로
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%'
      }}
    />
  );
}

export default Avartar;