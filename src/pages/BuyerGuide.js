import Agri from "../components/BuyerGuidePage/Agri";
import Fishery from "../components/BuyerGuidePage/Fishery";
import Livestock from "../components/BuyerGuidePage/Livestock";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Partials/LeaderBoard";
import Footer from "../components/footer/Footer";

const BuyerGuide = () => {
  return (
    <>
      <Header />
      <LeaderBoard />
      <section className="container">
        <h2 className="h2 text-uppercase mb-5">DIRECTORY/BUYER'S GUIDE</h2>
        <Agri />
        <Fishery />
        <Livestock />
      </section>
      <Footer />
    </>
  );
};

export default BuyerGuide;
