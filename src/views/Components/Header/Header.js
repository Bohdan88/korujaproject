import React from 'react';
import banner from '../../../assets/banner.jpg';
import './style.scss';
import {
    Image
} from 'semantic-ui-react';
const Header = () => {
    return (
        <div>
            <Image
                className='banner'
                src={banner}/>
        </div>
    );
};

export default Header;
