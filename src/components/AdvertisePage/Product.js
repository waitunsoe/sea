import MagazineImg from "../../assets/images/magazine-3.png";

const Product = () => {
  return (
    <>
      <div className="card text-center border-0">
        <div className="card-body p-0">
          <img src={MagazineImg} className="w-100" />
        </div>
      </div>
      <div className="text-center mt-2">
        <h5 className=" fs-3 text-uppercase fw-bold">Lorem Ipsum</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </p>
      </div>
    </>
  );
};

export default Product;
