import FisheryNewsImg from "../../assets/images/fishery-news-1.png";
import Ads from "./Partials/Ads";
import LeaderBoard from "./Partials/LeaderBoard";

const FisheryNews = () => {
  return (
    <section className="agriculture-news container">
      <div className="row">
        <div className="col-12 col-lg-10">
          <div className="title pt-4 pb-3">
            <h1 className="text-uppercase">Fishery News</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-10">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="big-post-card">
                <div className="card border-0 shadow-sm">
                  <img
                    src={FisheryNewsImg}
                    alt="agri-news-1.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-md-3">
                      <a href="#" className="text-decoration-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </h5>
                    <p className="card-text">
                      <i className="bi bi-calendar"></i>
                      <span className="ms-2">Feb 22</span>
                    </p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam proin amet eget semper erat erat massa. Amet
                      habitant dolor feugiat sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="small-post-card d-flex flex-column gap-3">
                {[1, 2, 3, 4].map((agriNews, index) => (
                  <div key={index} className="card border-0 shadow-sm mt-lg-0">
                    <div className="row g-0 align-items-start">
                      <div className="col-12 col-sm-4 col-md-3 col-lg-4">
                        <a href="#" className="">
                          <img
                            src={FisheryNewsImg}
                            className="img-fluid w-100"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="col-12 col-sm-8 col-md-6 col-lg-8">
                        <div className="card-body py-sm-0">
                          <h5 className="card-title">
                            <a href="#" className="">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </a>
                          </h5>
                          <p className="card-text bg-light w-50">
                            <small className="">
                              <i className="bi bi-calendar"></i>
                              <span className="ms-2">Feb 22</span>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <LeaderBoard />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div className="row">
            {[1, 2, 3].map((ads, index) => (
              <div key={index} className="col-4 col-lg-12">
                <Ads />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FisheryNews;
