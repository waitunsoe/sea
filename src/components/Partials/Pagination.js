import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Previous">
            <span aria-hidden="true">Prev</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
