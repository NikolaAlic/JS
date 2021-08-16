import React from 'react';

const UserItem = props => {
    const { name, dob, picture, email } = props.userData;
    const dateFormated = new Intl.DateTimeFormat('en-US').format(dob);
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-image card-img-wrapper">
                    <img id="img" src={picture.thumbnail} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>name: {name}</p>
                        <p>email: {email}</p>
                        <p>date of birth: {dateFormated}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserItem;