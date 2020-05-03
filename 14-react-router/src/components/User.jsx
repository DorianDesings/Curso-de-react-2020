import React from 'react';

const User = ({ match }) => {
    const id = match.params.userId
    return (
        <>
            <h1> User </h1>
            {
                id && <h2>User id: {id}</h2>
            }

        </>
    )

}

export default User