import React from "react";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Partials/LeaderBoard";
import Ads from "../components/Partials/Ads";
import AgriNewsDetail from "../components/AgriNewsDetailPage/AgriNewsDetail";
import CommentForm from "../components/Partials/CommentForm";
import Footer from "../components/footer/Footer";
import AgriMostReadNews from "../components/AgriNewsDetailPage/AgriMostReadNews";
const AgriNewsDetailPage = () => {
  return (
    <>
      <Header />
      <LeaderBoard />
      <div className="container">
        <div className="title pt-4 pb-3">
          <h1 className="text-uppercase">Agriculture News</h1>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <AgriNewsDetail />
            <CommentForm />
          </div>
          <div className="col-lg-4">
            <div className="d-flex mt-5 mt-lg-0 d-lg-block gap-3">
              {[1, 2].map((ads, index) => (
                <Ads key={index} />
              ))}
            </div>

            <h4 className="title">Most Read</h4>
            <div className="agri-news-most-read">
              {[1, 2, 3, 4].map((mostRead, index) => (
                <AgriMostReadNews key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgriNewsDetailPage;
