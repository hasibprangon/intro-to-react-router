import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='font-bold text-blue-600'>
            <Link to="/">Home</Link>
            <Link to="friends">Friends</Link>
            <Link to="about">About </Link>
            <Link to="contact">Contact</Link>
        </nav>
    );
};

export default Header;