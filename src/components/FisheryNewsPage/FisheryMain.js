import FisheryNewsImg from "../../assets/images/fishery-news-1.png";

const FisheryMain = () => {
  return (
    <main className="agriculture-news container-fluid container-md">
      <header className="row">
        <div className="col-12">
          <div className="title pt-4 pb-3">
            <h1 className="text-uppercase">Fishery News</h1>
          </div>
        </div>
      </header>
      <section className="row">
        <article className="col-12 col-lg-7 col-xl-8">
          <div className="big-post-card">
            <div className="card border-0 shadow-sm">
              <img
                src={FisheryNewsImg}
                alt="agri-news-1.png"
                className="card-img-top"
              />
              <div className="card-body px-1 pb-0">
                <h2 className="card-title mb-md-3">
                  <a href="#" className="text-decoration-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </a>
                </h2>
                <div className="upload-time-box d-inline px-2 py-1">
                  <i className="bi bi-calendar"></i>
                  <span className="ms-2">Feb 22</span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <aside className="col-12 col-lg-5 col-xl-4">
          <div className="small-post-card d-flex flex-column gap-3">
            {[1, 2, 3].map((agriNews, index) => (
              <div key={index} className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 ">
                    <a href="#" className="">
                      <img
                        src={FisheryNewsImg}
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8">
                    <div className="card-body py-sm-0 pe-0">
                      <h3 className="card-title mb-0">
                        <a href="#" className="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet
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
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default FisheryMain;
