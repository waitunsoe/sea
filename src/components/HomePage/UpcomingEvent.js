import UpcomingEventImg from "../../assets/images/upcoming-event.png";

const UpcomingEvent = () => {
  return (
    <section className="container mb-5" id="upcoming-event">
      <div className="row">
        <div className="col-12 col-lg-10">
          <div className="title pt-4 pb-3">
            <h1 className="text-uppercase">Upcoming Events</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="upcoming-event-img-box">
            <img
              src={UpcomingEventImg}
              alt="upcoming-event.png"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
