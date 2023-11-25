import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler ms-auto border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="bi bi-list"></i>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          // tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title d-none" id="offcanvasNavbarLabel">
              South East Asia Agriculture
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-between flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-uppercase dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={() => setShowModel(!showModel)}
                >
                  News
                </a>
                <ul
                  className={`dropdown-menu ${showModel? "d-block" : "d-none"} `}
                >
                  <li>
                    <Link className="dropdown-item" to={"/agri-news"}>
                      Agri News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/livestock-news"}>
                      Livestock News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/fishery-news"}>
                      Fishery News
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to={"/shows"}
                >
                  Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to={"/buyer-guide"}
                >
                  Directory/Buyer's Guide
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to={"/our-magazine"}
                >
                  Magazines
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to={"/advertise"}
                >
                  Advertie
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to={"/about"}
                >
                  Abouts
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
