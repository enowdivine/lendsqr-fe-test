import React, { FC } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { FiUserPlus, FiUserCheck } from "react-icons/fi";

export interface Props {
  children?: React.ReactNode;
  userId?: string;
}

const UsersOptions: FC<Props> = ({ children, userId }) => {
  return (
    <NavDropdown
      title={children}
      id="basic-nav-dropdown"
      className="users-options"
    >
      <NavDropdown.Item className="menu-item">
        <Link to={`/user-details/${userId}`}>
          <span>
            <AiOutlineEye className="m-1" />
          </span>
          Veiw Details
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item className="menu-item text-danger">
        <Link to="#" className="signout-link">
          <span>
            <FiUserPlus className="m-1" />
          </span>
          Blacklist User
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item className="menu-item text-danger">
        <Link to="#" className="signout-link">
          <span>
            <FiUserCheck className="m-1" />
          </span>
          Activate User
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default UsersOptions;
