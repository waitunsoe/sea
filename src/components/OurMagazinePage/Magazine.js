import MagazineImg from "../../assets/images/magazine-1.png";

const Magazine = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-body p-0">
          <img src={MagazineImg} className="w-100" />
        </div>
      </div>
      <div className="text-center mt-2">
        <p>
          <span>Vol 1, Issue 1</span> |{" "}
          <span className="d-block d-md-inline">Jan 26, 2022</span>
        </p>
        <button className="btn btn-warning opacity-75 fw-bold">
          Download <i className=" bi bi-download"></i>
        </button>
      </div>
    </>
  );
};

export default Magazine;
