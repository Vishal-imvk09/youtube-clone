import React, { useState } from "react";
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] =useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <Link to="/">
                   <img 
                      className="header__logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png" 
                     alt="" 
                    />
                </Link>
            </div>
            <div className="header__input">
                <input 
                   onChange={e => setInputSearch(e.target.value)} 
                   value={inputSearch} 
                   placeholder="Search" 
                   type="text" 
                />
                <Link to={`/search/${inputSearch}`}>
                   <SearchSharpIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon" />
                <AppsSharpIcon className="header__icon" />
                <NotificationsSharpIcon className="header__icon" />
                <Avatar 
                   alt="Vishal Kumar" 
                   src="https://lh3.googleusercontent.com/a-/AOh14GgF3Txp1g5DayPe0m4p2gZX5XDguZC16O-9nNyUPA=s88-c-k-c0x00ffffff-no-rj-mo"
                />
            </div>
        </div>
    )
}

export default Header
