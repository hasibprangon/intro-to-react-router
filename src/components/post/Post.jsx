import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='bg-cyan-500 rounded-lg p-1 shadow-2xl flex flex-col justify-end'>
            <h1 className='font-bold text-2xl mt-4'>ID: {id}</h1>
            <h2 className='font-bold mt-2'>title:{title}</h2>


            <Link className=' text-white mt-auto hover:bg-cyan-700 rounded-md' to={`/post/${id}`}> Show Detail</Link>
            

            <Link to={`/post/${id}`}><button className='rounded-full bg-cyan-600 p-2 hover:bg-cyan-700 mt-auto'>Show Post detail</button></Link>


            <button className='rounded-full bg-cyan-600 p-2 hover:bg-cyan-700 mt-auto' onClick={handleNavigation}>Button with handler</button>
        </div>
    );
};

export default Post;