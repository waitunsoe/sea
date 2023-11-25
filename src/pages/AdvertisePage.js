import AdvertiseBanner from "../components/AdvertisePage/AdvertiseBanner";
import AdvertiseContact from "../components/AdvertisePage/AdvertiseContact";
import Product from "../components/AdvertisePage/Product";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Partials/LeaderBoard";
import Footer from "../components/footer/Footer";
const AdvertisePage = () => {
  return (
    <>
      <Header />
      <LeaderBoard />
      <div className="container">
        <h2 className="h2 fw-bold text-uppercase">Advertise with Us</h2>
      </div>
      <AdvertiseBanner />
      <section className="container">
        <h3 className="text-uppercase mb-5">Products</h3>
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((product, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-5" key={index}>
              <Product />
            </div>
          ))}
        </div>
        <AdvertiseContact />
      </section>
      <Footer />
    </>
  );
};

export default AdvertisePage;
