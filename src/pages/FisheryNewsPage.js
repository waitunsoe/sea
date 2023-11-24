/* eslint-disable jsx-a11y/anchor-is-valid */
import FisheryMain from "../components/FisheryNewsPage/FisheryMain";
import FisheryMoreNews from "../components/FisheryNewsPage/FisheryMoreNews";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Partials/LeaderBoard";
import Footer from "../components/footer/Footer";

const FisheryNewsPage = () => {
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
      <FisheryMain />
      <FisheryMoreNews />
      <Footer />
    </>
  );
};

export default FisheryNewsPage;
