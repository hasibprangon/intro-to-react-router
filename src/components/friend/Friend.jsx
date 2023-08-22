import React from 'react';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name, email, phone, website} = friend;
    return (
        <div>
            <h2>{name}</h2>
            <p>Phone Number:{phone}</p>
            <p>Email:{email}</p>
            <p>Web:{website}</p>
        </div>
    );
};

export default Friend;