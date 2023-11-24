import LeaderBoardImg from "../../assets/images/leader-board.png";

const LeaderBoard = () => {
  return (
    <div className="card border-0 rounded-5 py-5">
      <img
        src={LeaderBoardImg}
        alt="leader-board.png"
        className="img-fluid w-100 rounded"
      />
    </div>
  );
};

export default LeaderBoard;
