/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "../components/footer/Footer";
import LeaderBoard from "../components/Partials/LeaderBoard";
import Header from "../components/Header/Header";
import AgriMain from "../components/AgriNewsPage/AgriMain";
import AgriMoreNews from "../components/AgriNewsPage/AgriMoreNews";
const AgriNewsPage = () => {
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
      <AgriMain />
      <AgriMoreNews />
      <Footer />
    </>
  );
};

export default AgriNewsPage;
