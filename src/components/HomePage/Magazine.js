import MagazineImg from "../../assets/images/magazine-1.png";

const Magazine = () => {
  return (
    <section className="my-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 px-0 pb-3">
            <div className="title">
              <h1 className="text-uppercase">Magazines</h1>
            </div>
          </div>
        </div>
        <div className="row magazine p-3">
          {[1, 2, 3, 4].map((magazine, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="magazine-book pb-3">
                <a href="#" className="text-decoration-none d-block text-center">
                  <img
                    src={MagazineImg}
                    alt="magazine-1"
                    className="card-img-top w-100"
                  />
                </a>
                <div className="text-center text-uppercase">
                  <a href="#" className="btn btn-warning">
                    <span className="d-none d-md-block">Download</span> <i className="bi bi-download"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col-12 col-md-6 col-lg-3">
            <div className="magazine-book h-100 pb-5">
              <a href="#" className="text-decoration-none text-muted">
                <img
                  src="../image/magazine-2.png"
                  alt="magazine-1"
                  className="card-img-top w-100 h-75"
                />
              </a>
              <div className="text-center text-uppercase pb-5">
                <a href="#" className="btn btn-warning">
                  Download <i className="bi bi-download ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="magazine-book h-100 pb-5">
              <a href="#" className="text-decoration-none text-muted">
                <img
                  src="../image/magazine-3.png"
                  alt="magazine-1"
                  className="card-img-top w-100 h-75"
                />
              </a>
              <div className="text-center text-uppercase pb-5">
                <a href="#" className="btn btn-warning">
                  Download <i className="bi bi-download ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="magazine-book h-100 pb-5">
              <a href="#" className="text-decoration-none text-muted">
                <img
                  src="../image/magazine-4.png"
                  alt="magazine-1"
                  className="card-img-top w-100 h-75"
                />
              </a>
              <div className="text-center text-uppercase pb-5">
                <a href="#" className="btn btn-warning">
                  Download <i className="bi bi-download ms-2"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Magazine;
