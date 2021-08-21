import React from 'react';
import { UserCard } from './UserCard';
import PropTypes from 'prop-types'

export const UserCards = props => {
    if(props && props.data && props.data.length>0) {
    const userItems = props.data.map((user, index) => <UserCard userData = {user} key = {index} />)
    return (
        <div className="container">
            <div className="row">
                {userItems}
            </div>
        </div>
    )
    }return (<div></div>)
}

UserCards.propType = {
    data: PropTypes.array.isRequired
}

UserCards.defaultProps = {
    data: []
}