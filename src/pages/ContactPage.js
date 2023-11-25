import React from "react";
import Header from "../components/Header/Header";
import LeaderBoard from "../components/Partials/LeaderBoard";
import ContactBanner from "../components/ContactPage/ContactBanner";
import ContactForm from "../components/ContactPage/ContactForm";
import Contact from "../components/ContactPage/Contact";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <LeaderBoard />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h2 className="h2 fw-bold text-uppercase">Contact Us</h2>
          </div>
        </div>
      </div>
      <ContactBanner />
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <ContactForm />
            <Contact />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
