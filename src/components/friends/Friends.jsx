import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>Number of my friends: {friends.length}</h3>
            <div className='grid grid-cols-4 gap-4'>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;