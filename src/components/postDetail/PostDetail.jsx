import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id, userId, title, body} = post;

    const navigate = useNavigate();

    const backNavigation = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about your post of:{id}</h3>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
            <button className='rounded-lg bg-slate-500 hover:bg-slate-600 p-3' onClick={backNavigation}>Go Back</button>
        </div>
    );
};

export default PostDetail;