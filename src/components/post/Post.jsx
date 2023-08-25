import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='bg-cyan-500 rounded-lg p-1 shadow-2xl flex flex-col justify-end'>
            <h1 className='font-bold text-2xl mt-4'>ID: {id}</h1>
            <h2 className='font-bold mt-2'>title:{title}</h2>
            <Link className=' text-white mt-auto' to={`/post/${id}`}> Show Detail</Link>
            <button className='rounded-full bg-cyan-600 p-2 hover:bg-cyan-700 mt-auto'>Show Post detail</button>
        </div>
    );
};

export default Post;