import React from "react";

const AdvertiseContactForm = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="First name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Last name" className="form-control" />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Company" className="form-control" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Website address"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email address"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Phone address"
            className="form-control"
          />
        </div>
        <button className="btn btn-success px-5">Request</button>
      </form>
    </>
  );
};

export default AdvertiseContactForm;
