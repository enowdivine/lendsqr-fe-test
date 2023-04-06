import React from "react";
import Logo from "../logo/Logo";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileIcon from "../profileIcon/ProfileIcon";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="search-input">
        <input type="text" placeholder="Search for anything" />
        <div className="search-icon">
          <span className="icon">
            <AiOutlineSearch />
          </span>
        </div>
      </div>
      <div className="docs-and-profile-group">
        <Link to="#">Docs</Link>
        <span className="notification-bell">
          <BsBell />
        </span>
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Header;
