// pages/products/page.tsx
import Prodimage from "./prodimage";
import Productdescrip from "./productdescrip";
import Productitem from "./productitem";

const Products = () => {
  return (
    <div className="bg-purple-100 w-full h-auto flex flex-col items-center justify-start py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products Detail</h1>

      {/* Breadcrumbs */}
      <div className="mt-4 text-gray-600">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Page</span>
        <span className="mx-2">/</span>
        <span className="text-pink-500 font-semibold">Products</span>
      </div>

      {/* Product Components */}
      <div className="mt-8 w-full px-4 flex flex-col justify-center gap-8">
        <div className="w-full">
          <Productitem />
        </div>
        <div className="w-full">
          <Productdescrip />
        </div>
        <div className="w-full">
          <Prodimage />
        </div>
      </div>
    </div>
  );
};

export default Products;
