import React from "react";
import { Links } from "./types";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { TbLogout, TbMoneybag } from "react-icons/tb";
import { FaHome, FaHandshake, FaCoins, FaScroll } from "react-icons/fa";
import { MdOutlineSavings, MdOutlineManageAccounts } from "react-icons/md";
import {
  GiPayMoney,
  GiTwirlyFlower,
  GiSettingsKnobs,
  GiCartwheel,
} from "react-icons/gi";
import { FiUserCheck, FiUserX, FiDivideCircle } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { BsBank, BsFileBarGraph } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import SwitchOrganization from "../switchOrganization/SwitchOrganization";

const customers: Links[] = [
  { path: "/users", exact: true, text: "Users", icon: HiOutlineUsers },
  {
    path: "/dashboard",
    exact: true,
    text: "Guarantors",
    icon: HiOutlineUserGroup,
  },
  { path: "#", exact: true, text: "Loans", icon: TbMoneybag },
  { path: "#", exact: true, text: "Decision Models", icon: FaHandshake },
  { path: "#", exact: true, text: "Savings", icon: MdOutlineSavings },
  { path: "#", exact: true, text: "Loan Requuest", icon: GiPayMoney },
  { path: "#", exact: true, text: "Whitelist", icon: FiUserCheck },
  { path: "#", exact: true, text: "Karma", icon: FiUserX },
];

const businesses: Links[] = [
  { path: "#", exact: true, text: "Organization", icon: BiBriefcase },
  { path: "#", exact: true, text: "Loan Products", icon: GiPayMoney },
  { path: "#", exact: true, text: "Savings Products", icon: BsBank },
  { path: "#", exact: true, text: "Fees and Charges", icon: FaCoins },
  { path: "#", exact: true, text: "Transactions", icon: AiOutlineTransaction },
  { path: "#", exact: true, text: "Services", icon: GiTwirlyFlower },
  {
    path: "#",
    exact: true,
    text: "Service Account",
    icon: MdOutlineManageAccounts,
  },
  { path: "#", exact: true, text: "Settlements", icon: FaScroll },
  { path: "#", exact: true, text: "Reports", icon: BsFileBarGraph },
];

const settings: Links[] = [
  { path: "#", exact: true, text: "Preferences", icon: GiSettingsKnobs },
  { path: "#", exact: true, text: "Fees and Pricing", icon: FiDivideCircle },
  {
    path: "#",
    exact: true,
    text: "Audit Logs",
    icon: HiOutlineClipboardList,
  },
  { path: "#", exact: true, text: "Systems Messages", icon: GiCartwheel },
];

const Sidebar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar-wrapper">
      <div className="select-organization">
        <SwitchOrganization />
      </div>
      <div className="dashboard-link">
        <Link to="#" className={splitLocation[1] === "#" ? "active" : ""}>
          <span>
            <FaHome />
          </span>{" "}
          Dashboard
        </Link>
      </div>
      <div className="customers">
        <h4>CUSTOMERS</h4>
        {customers.map(({ path, text, icon }) => {
          const Component = icon;
          return (
            <Link
              to={path}
              key={path}
              className={splitLocation[1] === path ? "active" : ""}
            >
              <span>
                <Component />
              </span>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="businesses">
        <h4>BUSINESSES</h4>
        {businesses.map(({ path, text, icon }) => {
          const Component = icon;
          return (
            <Link
              to={path}
              key={path}
              className={splitLocation[1] === path ? "active" : ""}
            >
              <span>
                <Component />
              </span>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="settings">
        <h4>SETTINGS</h4>
        {settings.map(({ path, text, icon }) => {
          const Component = icon;
          return (
            <Link
              to={path}
              key={path}
              className={splitLocation[1] === path ? "active" : ""}
            >
              <span>
                <Component />
              </span>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="logout-section">
        <Link to="#" className="logout">
          <span>
            <TbLogout />
          </span>
          Logout
        </Link>
        <Link to="#" className="version">
          v1.2.0
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
