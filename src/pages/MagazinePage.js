import Header from "../components/Header/Header";
import LeaderBoard from "../components/Partials/LeaderBoard";
import Magazine from "../components/OurMagazinePage/Magazine";
import Footer from "../components/footer/Footer";

const MagazinePage = () => {
  return (
    <>
      <Header />
      <LeaderBoard />
      <section className="container">
        <h2 className="text-uppercase mb-5">Our Magazine</h2>
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((magazine, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-5">
              <Magazine />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MagazinePage;
