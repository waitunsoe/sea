import React from "react";

const Contact = () => {
  return (
    <>
      <h4 className="text-success mb-3">Contact Us</h4>
      <div className="row fs-5 fw-semibold justify-content-between">
        <div className="col-12 col-md-6">
          <div className=" d-flex gap-3">
            <p>
              <i className="bi bi-telephone"></i>
            </p>
            <div>
              <p>959 43125185</p>
              <p>959 443059422</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className=" d-flex gap-3">
            <p>
              <i className="bi bi-envelope"></i>
            </p>
            <div>
              <p>ims@silversea@gmail.com</p>
              <p>silverseamedia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
