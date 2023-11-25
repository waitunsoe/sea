import Icon from "../../assets/images/icon.png";

const Agri = () => {
  return (
    <>
      <div className="title border-2 border-bottom border-success">
        <h3 className="text-uppercase">Agriculture</h3>
      </div>
      <div className="row mt-3 mb-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((agri, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="card mb-3 p-3 text-center">
              <div className="card-body">
                <img src={Icon} className="w-25" />
                <p className=" fw-semibold mt-3">
                  Agriculture Machinery & Implements
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agri;
