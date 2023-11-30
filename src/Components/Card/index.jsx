import { useContext } from "react";
import { AppContext } from "../../Context";
import { HiPlusSm } from "react-icons/hi";

const Card = (data) => {
  const context = useContext(AppContext);
  return (
    <div className="bg-amber-600/80 cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 bg-white/60 rounded-lg text-black text-xs m-2 py-0.5 px-2">
          {data.data.category}
        </span>
        <img
          className="rounded-lg w-full h-full object-cover"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <HiPlusSm
          onClick={() => context.setCount(context.count + 1)}
          className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2"
        />
      </figure>
      <p className="flex justify-around">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
