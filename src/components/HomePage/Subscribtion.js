import React from "react";

const Subscribtion = () => {
  return (
    <section className="subscription my-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="text-center">
              <h1 className="title display-5 text-capitalize">Subscribe</h1>
              <h4 className="sub-title display-6 fw-lighter">
                to our magazine
              </h4>
              <p className="text text-black-50">
                Sapien laoreet nibh diam imperdiet massa.
              </p>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email address"
              />
              <button type="submit" className="btn btn-warning text-uppercase">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribtion;
