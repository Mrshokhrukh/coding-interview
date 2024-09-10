import bgImg from "../assets/istockphoto-1400891277-612x612.jpg";
interface Props {}

const ProductCard = ({}: Props) => {
  return (
    <div className="h-[300px] rounded-2xl p-3 cursor-pointer overflow-hidden" id="productsGlass">
      <img src={bgImg} alt="" className="object-cover rounded-2xl" />
      <div className="flex flex-col gap-2 mt-2 items-start">
        <h2 className="text-2xl font-bold text-zinc-800">Product 2</h2>
        <p className="line-clamp-2 text-sm text-zinc-800">
          Lorem ipsum dolor sit, amet consecte turconsecte turconsecteturc onsecteturconsectet urconsectetur adipisicing
          elit. Rerum eos neque qui?
        </p>
        <div className="flex justify-between w-full items-center">
          <button className="bg-gradient-to-tr from-green-300 to-violet-400 outline-1 outline-emerald-800 active:outline-double capitalize text-slate-800  px-4 py-1 rounded-3xl font-semibold">
            add to cart
          </button>
          <h2 className="text-3xl font-semibold pr-3 font-mono">135$</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
