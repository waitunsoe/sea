import LeaderBoardImg from "../../assets/images/leader-board.png";

const LeaderBoard = () => {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className=" col-12 col-lg-8">
          <div className="card border-0 rounded-5 py-5">
            <img
              src={LeaderBoardImg}
              alt="leader-board.png"
              className="img-fluid w-100 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
