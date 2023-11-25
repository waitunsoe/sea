import React from "react";

const CommentForm = () => {
  return (
    <div className=" bg-light p-2 p-md-5">
      <form>
        <h4>Leave a Comment</h4>
        <p className=" fw-semibold">
          Youre email address will not be published. Require fileds are marked.
        </p>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your Name"
            className="form-control form-control-lg"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className=" form-check-input" />
          <label className=" form-check-label fw-semibold">
            Save my name, email, website in this browser for the next time I
            comment
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control form-control-lg"
            placeholder="Comment"
            rows={5}
          ></textarea>
        </div>
        <button className="btn btn-dark">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
