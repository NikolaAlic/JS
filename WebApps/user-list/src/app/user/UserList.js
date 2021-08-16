import React from 'react';
import UserItem from './UserItem';


const UserList = props => {
    const userItems = props.data.map((user, index) => <UserItem userData = {user} key = {index} />)
    return (
        <div className="container">
            <div className="row">
                {userItems}
            </div>
        </div>
    )
}

export default UserList;