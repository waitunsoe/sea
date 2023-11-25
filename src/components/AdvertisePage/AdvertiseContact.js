import React from "react";
import AdvertiseContactForm from "./AdvertiseContactForm";

const AdvertiseContact = () => {
  return (
    <>
      <div className="title border-2 border-bottom border-success mb-3">
        <h3 className="fs-3">Contact for Advertisement</h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className="row my-5">
        <div className="col-12 col-md-6">
          <AdvertiseContactForm />
        </div>
        <div className="col-12 col-md-6">
          <div className="mt-5 mt-md-0 text-md-center h-100 d-md-flex flex-column justify-content-center align-items-center">
            <p className=" display-3">
              <i className="bi bi-telephone-fill "></i>
              <span className="d-block mt-2">959 43125185</span>
            </p>
            <p>Mon-Thu 8:30am-6pm</p>
            <p>Fri 8:30am-5:30pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertiseContact;
