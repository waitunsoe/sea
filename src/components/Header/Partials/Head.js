import React from "react";

const Head = () => {
  return (
    <header id="top-header">
      <div className="container">
        <div className="row align-items-center p-2">
          <div className="col-12 col-xl-6">
            <h1 className="top-header-title text-uppercase mb-0 text-center text-xl-start">
              South East Asia <span className="fw-bold">Agriculture</span>
            </h1>
          </div>
          <div className="col-12 col-xl-6">
            <div className="top-header-others d-flex justify-content-between  justify-content-xl-end align-items-center pe-lg-3 pt-lg-3">
              <p className="phone-number mb-0">
                <i className="bi bi-telephone-fill"></i>
                <span className="ms-1">
                  Hotline
                  <span className="d-block d-md-inline">+959 7308989005</span>
                </span>
              </p>
              <div className="language-select mb-0 mx-4 ms-sm-5">
                <div className="select-box">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue={true}>English</option>
                    <option value="1">Myanmar</option>
                    <option value="2">Japan</option>
                  </select>
                </div>
              </div>
              <p className="login-box mb-0 ms-3 ms-sm-5 ">
                <i className="bi bi-person fs-5"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
