import { Link } from "react-router-dom";

const Nav = () => {

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
                <a
                  className="nav-link text-uppercase active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-uppercase dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Agri News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Livestock News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fishery News
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
                  Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
                  Directory/Buyer's Guide
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
                  Magazines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
                  Advertie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
                  Abouts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" aria-current="page" href="#">
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
