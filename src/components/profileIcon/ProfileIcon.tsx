import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <div className="user-profile-icon">
      <NavDropdown
        title={
          <div className="profile-image">
            <img
              className="thumbnail-image"
              src={require("../../assets/images/profile.png")}
              alt="Profile"
            />
            <span>Adedeji</span>
          </div>
        }
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item className="menu-item">
          <Link to="#">
            <CgProfile className="m-1" />
            Go to profile
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="menu-item text-danger">
          <Link to="#" className="signout-link">
            <GoSignOut className="m-1" />
            Sign Out
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default ProfileIcon;
