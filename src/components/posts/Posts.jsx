import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div  className='grid grid-cols-4 gap-4'>
           
            {
                posts.map(post => <Post 
                key={post.id}
                post= {post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;