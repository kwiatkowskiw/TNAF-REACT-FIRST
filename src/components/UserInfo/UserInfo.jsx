import React from 'react';
import './UserInfo.css';

function UserInfo(props) {
    return (
        <div className="user-info">
            <h2>{props.user.name}</h2>
            <h3>{props.user.date}</h3>
            <h3>{props.user.email}</h3>
        </div>
    )
}

export default UserInfo;