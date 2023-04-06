import React, { FC } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

export interface Props {
  children?: React.ReactNode;
}

const TableFilter: FC<Props> = ({ children }) => {
  return (
    <NavDropdown
      title={children}
      id="basic-nav-dropdown"
      className="filter-drpdwn"
    >
      <form className="table-filter">
        <div className="input-div">
          <label htmlFor="select">Organization</label>
          <select>
            <option value="">select</option>
            <option value="">select</option>
            <option value="">select</option>
          </select>
        </div>
        <div className="input-div">
          <label htmlFor="user">Username</label>
          <input type="text" placeholder="User" />
        </div>
        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-div">
          <label htmlFor="date">Date</label>
          <input type="date" placeholder="Date" />
        </div>
        <div className="input-div">
          <label htmlFor="number">Phone Number</label>
          <input type="number" placeholder="Phone Number" />
        </div>
        <div className="input-div">
          <label htmlFor="select">Status</label>
          <select>
            <option value="">select</option>
            <option value="">select</option>
            <option value="">select</option>
          </select>
        </div>
        <div className="btns">
          <button className="reset">Reset</button>
          <button className="filter">Filter</button>
        </div>
      </form>
    </NavDropdown>
  );
};

export default TableFilter;
