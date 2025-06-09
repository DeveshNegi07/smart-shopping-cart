import { CiShoppingCart } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 max-w-md mx-auto">
      <div className="mb-6 p-4 bg-gray-100 rounded-full">
        <CiShoppingCart className="text-gray-500 text-4xl" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven't added anything to your cart yet
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FaArrowLeftLong className="text-sm" />
        <span>Continue Shopping</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
