/* eslint-disable jsx-a11y/anchor-is-valid */
import LeaderBoard from "../components/Partials/LeaderBoard";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import LivestockMain from "../components/LivestockNewsPage/LivestockMain";
import LivestockMoreNews from "../components/LivestockNewsPage/LivestockMoreNews";

const LivestockNewsPage = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-12">
            <LeaderBoard />
          </div>
        </div>
      </section>
      <LivestockMain />
      <LivestockMoreNews />
      <Footer />
    </>
  );
};

export default LivestockNewsPage;
