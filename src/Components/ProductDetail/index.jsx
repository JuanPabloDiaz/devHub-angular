import { HiOutlineX } from "react-icons/hi";

const ProductDetail = () => {
  return (
    <aside className="flex flex-col fixed right-0 w-[360px] h-[90vh] border border-black shadow-xl shadow-black rounded-lg bg-white/70 p-2 m-2">
      {/* top-[68px] w-[360px] h-[calc(100vh-68px)] */}
      <div className="flex justify-between items-center ">
        <h2 className="font-medium">Product Detail</h2>
        <HiOutlineX />
      </div>
    </aside>
  );
};

export default ProductDetail;
