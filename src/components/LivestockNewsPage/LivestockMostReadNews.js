import LivestockMostReadNewsImg from "../../assets/images/live-stock-news-2.png";

const LivestockMostReadNews = () => {
  return (
    <article className="">
      <div className="card border-0 shadow-sm">
        <div className="row g-0 align-items-start">
          <div className="col-12 col-sm-4 ">
            <a href="#" className="">
              <img
                src={LivestockMostReadNewsImg}
                className="img-fluid w-100"
                alt="..."
              />
            </a>
          </div>
          <div className="col-12 col-sm-8">
            <div className="card-body py-sm-0 pe-0">
              <h3 className="card-title mb-0">
                <a href="#" className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </h3>
              <div className="upload-time-box d-inline px-2 py-1">
                <i className="bi bi-calendar"></i>
                <span className="ms-2">Feb 22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LivestockMostReadNews;
