import React from 'react';
import { UserCard } from './UserCard';
import PropTypes from 'prop-types'

export const UserCards = props => {
    const userItems = props.data.map((user, index) => <UserCard userData = {user} key = {index} />)
    return (
        <div className="container">
            <div className="row">
                {userItems}
            </div>
        </div>
    )
}

UserCards.propType = {
    data: PropTypes.array.isRequired
}

UserCards.defaultProps = {
    data: []
}