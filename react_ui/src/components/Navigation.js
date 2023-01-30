import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navigation() {
    return (
        <nav className='navbar'>
            <Link className='navlink' to="/"> Home </Link>
            <Link className='navlink' to="/about"> About </Link>
            <Link className='navlink' to="/faq"> FAQ </Link>
        </nav>
    );
}

export default Navigation;