import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../activeLink/ActiveLink';
const Header = () => {
    return (
        <nav className='font-bold text-blue-600'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About </ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;