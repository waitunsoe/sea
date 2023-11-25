import AgriNewsImg from "../../assets/images/agri-news-1.png";

const AgriNewsDetail = () => {
  return (
    <div className="card border-0">
      <img src={AgriNewsImg} alt="agri-news-1.png" className="card-img-top" />
      <div className="card-body px-1 pb-0">
        <h2 className="card-title mb-md-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <div className=" bg-secondary opacity-75 text-white d-inline p-2">
          <i className="bi bi-calendar"></i>
          <span className="ms-2">Feb 22</span>
        </div>
        <div className="my-5">
          {[1, 2, 3, 4, 5, 6].map((text, index) => (
            <p key={index}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgriNewsDetail;
