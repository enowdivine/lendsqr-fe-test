import React from "react";
import { Links } from "./types";
import { Link } from "react-router-dom";

const links: Links[] = [
  { path: "/", exact: true, text: "test" },
  { path: "/dashboard", exact: true, text: "dame" },
];

const Sidebar = () => {
  return (
    <div>
      <div>
        {links.map(({ path, text }) => {
          return <Link to={path}>{text}</Link>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
