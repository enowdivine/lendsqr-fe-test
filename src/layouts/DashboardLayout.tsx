import React, { FC } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

export interface Props {
  children?: React.ReactNode;
}
const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="nav-bar">
        <Header />
      </div>
      <div className="layout-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
