import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {

    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Everything sbout this person is here</h3>
            <h1>Name: {friend.name}</h1>
            <h2>UseName: {friend.username}</h2>
            <p>Web:{friend.website}</p>
        </div>
    );
};

export default FriendDetail;