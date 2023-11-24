import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6">
              <div className="h-100">
                <h3 className="company-name text-center text-sm-start">
                  South East Asia <span className="">Agriculture</span>
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h1 className="contact">Contact</h1>
              <div className="contact-box">
                <i className="bi bi-telephone"></i>
                <p className="d-inline ms-3">+959 7308989005</p>
              </div>
              <div className="contact-box">
                <i className="bi bi-envelope"></i>
                <p className="d-inline ms-3">nevaeh.simmons@example.com</p>
              </div>
              <div className="contact-box">
                <i className="bi bi-geo-alt"></i>
                <p className="d-inline ms-3">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mt-5 text-center">
                <h5 className="copy-right">
                  © copyright innoscript web developement
                </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
