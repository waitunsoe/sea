import LatestNews1 from "../../assets/images/latest_news_.jpg";

const LatestNews = () => {
  return (
    <section className="latest-news container">
      <div className="container">
        <div className="row gap-3 gap-lg-0">
          <div className="col-12">
            <div className="title pt-4 pb-3">
              <h1 className="text-uppercase">Latest News</h1>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="main-card">
              <div className=" card text-bg-dark">
                <a href="#" className="">
                  <img src={LatestNews1} className="card-img" alt="..." />
                </a>
                <div className="card-img-overlay p-md-5">
                  <h5 className="card-title mb-md-3">
                    <a href="#" className="text-decoration-none text-white">
                      NFU calls for fertiliser prices to be published
                      'immediately' to boost transparency
                    </a>
                  </h5>
                  <p className="card-text">
                    <i className="bi bi-calendar"></i>
                    <span className="ms-2">Feb 22</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="side-cards row gap-3">
              <div className="col-12">
                <div className="side-card-one">
                  <div className="card text-bg-dark">
                    <a href="#" className="">
                      <img src={LatestNews1} className="card-img" alt="..." />
                    </a>
                    <div className="card-img-overlay p-md-5 p-lg-3">
                      <h5 className="card-title mb-md-3">
                        <a href="#" className="text-decoration-none text-white">
                          NFU calls for fertiliser prices to be published
                          'immediately' to boost transparency
                        </a>
                      </h5>
                      <p className="card-text">
                        <i className="bi bi-calendar"></i>
                        <span className="ms-2">Feb 22</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="side-card-two">
                  <div className="card text-bg-dark">
                    <a href="#" className="">
                      <img src={LatestNews1} className="card-img" alt="..." />
                    </a>
                    <div className="card-img-overlay p-md-5 p-lg-3">
                      <h5 className="card-title mb-md-3">
                        <a href="#" className="text-decoration-none text-white">
                          NFU calls for fertiliser prices to be published
                          'immediately' to boost transparency
                        </a>
                      </h5>
                      <p className="card-text">
                        <i className="bi bi-calendar"></i>
                        <span className="ms-2">Feb 22</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
