import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id, userId, title, body} = post;
    return (
        <div>
            <h3>Details about your post of:{id}</h3>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetail;