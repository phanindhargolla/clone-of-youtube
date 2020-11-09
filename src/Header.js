import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
            <Link to='/'>    
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
            </Link>
        </div>

        <div className="header__center">    
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder = "Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton" />
                </Link>
            </div>

        <div className="header__right">    
        <VideoCallIcon className="header__logo"/>        
        <AppsIcon className="header__logo"/>
        <NotificationIcon className="header_logo"/> 
        <Avatar className="header__logo" />
        </div>
                
        </div>
    )
}

export default Header
