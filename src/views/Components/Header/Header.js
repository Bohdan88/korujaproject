import React, {Component} from 'react';
import banner from '../../../assets/banner.jpg';
import './style.scss';

const Header = () => {
    return (
        <div>
            <img
                className='banner'
                src={banner}/>
        </div>
    );
};

export default Header;
