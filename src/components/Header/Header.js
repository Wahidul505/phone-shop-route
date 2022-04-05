import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const {pathname} = useLocation();
    return (
        <div className={pathname.includes('phone') ? 'hidden':'flex justify-between p-4 items-center'}>
            <button className='text-cyan-600 font-semibold text-4xl'>Phono</button>
            <div className=' md:text-2xl text-cyan-800 flex gap-4 md:gap-10'>
                <Link to='/home'>Home</Link>
                <Link to='/order-review'>Order Review</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;