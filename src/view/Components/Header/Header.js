import React from 'react';
import {Image as CloudImage} from "cloudinary-react";
import './style.scss';


const Header = () => {
    return (
        <div
            id="home"
        >
            <CloudImage
                cloudName={'koruja'}
                className='banner'
                publicId="koruja/assets/bannerr.jpg">
            </CloudImage>
            <a
                href={'https://www.instagram.com/krj.export/'}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CloudImage
                    cloudName={'koruja'}
                    className={'icon-instagram-default icon-banner-instagram'}
                    publicId="koruja/assets/instagram0.2_v2ozw6">
                </CloudImage>
            </a>
        </div>
    )
};
export default Header;
