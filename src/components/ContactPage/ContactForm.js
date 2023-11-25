import React from "react";

const ContactForm = () => {
  return (
    <>
      <form className="my-5">
        <div className="mb-3">
          <input
            type="text"
            placeholder="What's your enjuiry?"
            className="form-control form-control-lg"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full name"
            className="form-control form-control-lg"
          />
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="Phone address"
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="email"
              placeholder="Email address"
              className="form-control form-control-lg"
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Comments"
            className="form-control form-control-lg"
            rows={5}
          ></textarea>
        </div>

        <button className="btn btn-lg btn-outline-secondary py-3 px-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
