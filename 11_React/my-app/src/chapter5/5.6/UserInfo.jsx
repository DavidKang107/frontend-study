import React from 'react';
import Avartar from './Avartar';

function UserInfo(props) {
  return (
    <div>
      <div className="user-info">
          <Avartar user={props.user}/>
          <div className="user-info-name">
            {props.user.name}
          </div>
        </div>
    </div>
  );
}

export default UserInfo;