import React from 'react';
import PropTypes from "prop-types"

export const UserCard = props => {
    if (!props.userData) {
        return null;
    }
    const user = props.userData;
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={user.picture.large} alt="user"/>
                    <span className="card-title">{user.name}</span>
                </div>
                <div className="card-content">
                    <p>email: {user.hideEmail()}</p>
                    <p>date of birth: {user.formatDate()}</p>
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    userData: PropTypes.object.isRequired
}

UserCard.defaultProps = {
    userData: null
}