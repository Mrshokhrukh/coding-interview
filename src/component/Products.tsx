import bgImg from "../assets/istockphoto-1400891277-612x612.jpg";
const Products = ({}: {}) => {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute w-[100%] h-[100%] z-[-100]">
        <img src={bgImg} className="w-[100%] h-[100%] object-cover brightness-[0.8]" alt="" />
      </div>
      <div className="relative top-28 max-w-6xl mx-auto">

      </div>
    </div>
  );
};

export default Products;
