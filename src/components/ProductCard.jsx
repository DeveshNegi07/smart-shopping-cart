import { IoMdCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice/state/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeItem({ id: product.id }));
  };

  return (
    <div className="w-full">
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="bg-white rounded-xl border-1 border-gray-200 shadow-md overflow-hidden h-full flex flex-col transition duration-300 hover:shadow-2xl group">
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 sm:h-48 w-full object-fill transition duration-300 transform group-hover:scale-105"
            />
          </div>

          <div className="p-4 flex flex-col gap-1 flex-grow">
            <h4 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            <div className="flex justify-between items-end mt-auto pt-3">
              <p className="text-lg font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </p>
              {isInCart ? (
                <button
                  onClick={handleRemoveFromCart}
                  className="px-2 py-1 flex items-center gap-2 rounded-md border border-gray-500 text-gray-700 hover:bg-gray-200 hover:text-black"
                >
                  <IoMdCheckmark />
                  In Cart
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-md hover:bg-blue-700 transition duration-300 whitespace-nowrap"
                >
                  + Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
