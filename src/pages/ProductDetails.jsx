import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data/products";
import { FaArrowLeft, FaCheck, FaShoppingCart } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";
import { addItem, removeItem } from "../redux/slice/state/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const productFeature = [
    "Latest generation technology",
    "Premium build quality",
    "1-year warranty included",
    "Free shipping available",
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mt-10 mx-auto p-4 md:p-6 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-64 md:h-[400px] border border-gray-300 rounded-lg object-fill"
        />

        {/* Details Section */}
        <div className="w-full flex-1 space-y-6">
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-500 mt-1">{product.description}</p>
          </div>

          <div className="text-blue-600 text-3xl font-semibold">
            ${product.price.toFixed(2)}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-200 pb-8">
            {isInCart ? (
              <button
                onClick={() => dispatch(removeItem({ id: product.id }))}
                className="flex justify-center items-center gap-2 px-4 py-2 rounded border border-gray-500 text-gray-700 hover:bg-gray-200 hover:text-black"
              >
                <IoMdCheckmark />
                In Cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(product))}
                className="flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            )}

            <Link
              to="/"
              className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded hover:bg-gray-100"
            >
              <FaArrowLeft />
              Back
            </Link>
          </div>

          <div>
            <h2 className="text-lg font-semibold mt-4">Product Features</h2>
            <ul className="mt-2 space-y-1 text-gray-600">
              {productFeature.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <IoCheckmark className="text-green-600" />
                  <span className="text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
