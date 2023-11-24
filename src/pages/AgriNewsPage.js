/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/footer/Footer";

const AgriNewsPage = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <div className="rounded-5 py-5 text-center">
              <img
                src="../assets/images/leader-board.png"
                alt="leader-board.png"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="agriculture-news container-fluid container-md">
        <header className="row">
          <div className="col-12">
            <div className="title pt-4 pb-3">
              <h1 className="text-uppercase">Agriculture News</h1>
            </div>
          </div>
        </header>
        <section className="row">
          <article className="col-12 col-lg-7 col-xl-8">
            <div className="big-post-card">
              <div className="card border-0 shadow-sm">
                <img
                  src="../image/agriculture-news-1.png"
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
            <div className="small-post-card">
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agriculture-news-2.png"
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
                            elit.
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
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agriculture-news-3.png"
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
                            elit.
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
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agriculture-news-4.png"
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
                            elit.
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
            </div>
          </aside>
        </section>
      </main>

      <section className="agri-related-post container-fluid container-md">
        <div className="row">
          <article className="col-12  col-xl-8 order-2 order-xl-1">
            <header className="row">
              <div className="col-12">
                <div className=" pt-4 pb-3">
                  <h3 className="title">More about this topic</h3>
                </div>
              </div>
            </header>
            <div className="agri-news-more-about">
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-1.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-2.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-3.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-4.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-5.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-7.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-8.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-9.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-10.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-11.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
              <div className="card border-0 shadow-sm">
                <div className="row g-0 align-items-start">
                  <div className="col-12 col-sm-4 col-lg-5">
                    <a href="#" className="">
                      <img
                        src="../image/agri-related-post-12.png"
                        className="img-fluid w-100"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-7 col-xxl-6">
                    <div className="card-body py-sm-0">
                      <h4 className="card-title mb-3">
                        <a href="#" className="text-decoration-none">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
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
            </div>
          </article>
          <aside className="col-12  col-xl-4 order-1 order-xl-2">
            <header className="row">
              <div className="col-12">
                <div className=" pt-4 pb-3">
                  <h4 className="title">Most Read</h4>
                </div>
              </div>
            </header>
            <div className="agri-news-most-read">
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agri-most-read-1.png"
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
                            elit.
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
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agri-most-read-2.png"
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
                            elit.
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
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agri-most-read-3.png"
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
                            elit.
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
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agri-most-read-4.png"
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
                            elit.
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
              <article className="">
                <div className="card border-0 shadow-sm">
                  <div className="row g-0 align-items-start">
                    <div className="col-12 col-sm-4 ">
                      <a href="#" className="">
                        <img
                          src="../image/agri-most-read-5.png"
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
                            elit.
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
            </div>
            <div className="row side-ads mt-5">
              <div className="col-4 col-xl-12">
                <div className="side-ads-box text-xl-end text-center mb-5">
                  <img
                    src="../image/side-ads.png"
                    alt="side-ads.png"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-4 col-xl-12">
                <div className="side-ads-box text-xl-end text-center mb-5">
                  <img
                    src="../image/side-ads.png"
                    alt="side-ads.png"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-4 col-xl-12">
                <div className="side-ads-box text-xl-end text-center mb-5">
                  <img
                    src="../image/side-ads.png"
                    alt="side-ads.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">Prev</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <span aria-hidden="true">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default AgriNewsPage;
