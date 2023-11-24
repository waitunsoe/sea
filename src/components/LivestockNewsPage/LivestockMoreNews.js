import React from "react";
import Pagination from "../Partials/Pagination";
import SideAds from "../Partials/SideAds";
import LivestockNews from "./LiveStockNews";
import LivestockMostReadNews from "./LivestockMostReadNews";

const LivestockMoreNews = () => {
  return (
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
            {[1, 2, 3, 4, 5, 6].map((agriNews, index) => (
              <LivestockNews key={index} />
            ))}
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
            {[1, 2, 3, 4].map((mostRead, index) => (
              <LivestockMostReadNews key={index} />
            ))}
          </div>
          <div className="row side-ads mt-5">
            {[1, 2, 3].map((sideAds, index) => (
              <div key={index} className="col-4 col-xl-12">
                <SideAds />
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default LivestockMoreNews;
