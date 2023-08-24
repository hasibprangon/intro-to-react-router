import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {id, name, email, phone, website} = friend;
    return (
        <div className='bg-cyan-500 rounded-lg p-4 px-5  text-center'>
            <h2>{name}</h2>
            <p>Phone Number:{phone}</p>
            <p className='truncate hover:text-clip'>Email:{email}</p>
            <p>Web:{website}</p>
            <p><Link to={`/friend/:${id}`} className='font-bold hover:bg-cyan-700 '>Show me Details</Link></p>
        </div>
    );
};

export default Friend;