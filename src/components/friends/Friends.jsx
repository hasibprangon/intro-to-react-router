import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h3>Number of my friends: {friends.length}</h3>
        </div>
    );
};

export default Friends;