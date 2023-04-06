/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = () => {
  return (
    <nav className="page-navigation">
      <ul className="pagination">
        <li className="page-item">
          <a href="#" aria-label="Previous" className="previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a href="#">1</a>
        </li>
        <li className="page-item">
          <a href="#">2</a>
        </li>
        <li className="page-item">
          <a href="#">3</a>
        </li>
        <li className="page-item">
          <a href="#">...</a>
        </li>
        <li className="page-item">
          <a href="#">15</a>
        </li>
        <li className="page-item">
          <a href="#">16</a>
        </li>
        <li className="page-item">
          <a href="#" aria-label="Next" className="next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
