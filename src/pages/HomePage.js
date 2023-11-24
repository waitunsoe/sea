/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "../components/footer/Footer";
import LatestNews from "../components/HomePage/LatestNews";
import AgriculturalNews from "../components/HomePage/AgriculturalNews";
import FisheryNews from "../components/HomePage/FisheryNews";
import LiveStock from "../components/HomePage/LiveStock";
import UpcomingEvent from "../components/HomePage/UpcomingEvent";
import Magazine from "../components/HomePage/Magazine";
import Subscribtion from "../components/HomePage/Subscribtion";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <LatestNews />
      <AgriculturalNews />
      <FisheryNews />
      <LiveStock />
      <UpcomingEvent />
      <Magazine />
      <Subscribtion />
      <Footer />
    </>
  );
};

export default HomePage;
