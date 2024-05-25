import React from 'react';
import './Header.scss';
import logo from '~/Assets/Images/nav-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="" />
            <div className="header-user">
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7078672293634932738.jpeg?lk3s=a5d48078&nonce=43435&refresh_token=4f8e840e4e7cb0a9164cd41178ff9bea&x-expires=1716814800&x-signature=ImmKrwDUloJC7ET2fW%2BGWnOFCBE%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    );
};

export default Header;
