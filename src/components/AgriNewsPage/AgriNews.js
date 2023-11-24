import AgriRelatedNewsImg from "../../assets/images/agri-related-post-1.png";

const AgriNews = () => {
  return (
    <div className="card border-0 shadow-sm">
      <div className="row g-0 align-items-start">
        <div className="col-12 col-sm-4 col-lg-5">
          <a href="#" className="">
            <img
              src={AgriRelatedNewsImg}
              className="img-fluid w-100"
              alt="..."
            />
          </a>
        </div>
        <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
          <div className="card-body py-sm-0">
            <h4 className="card-title mb-3">
              <a href="#" className="text-decoration-none">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </h4>
            <div className="upload-time-box d-inline px-2 py-1">
              <i className="bi bi-calendar"></i>
              <span className="ms-2">Feb 22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriNews;
