import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slice/state/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {/* Left section: image + title/desc */}
      <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
        <img
          src={cartItem.image}
          alt={cartItem.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h5 className="text-base sm:text-lg font-medium text-gray-900 truncate">
            {cartItem.name}
          </h5>
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {cartItem.description}
          </p>
          <div className="sm:hidden mt-2">
            <p className="text-blue-600 font-semibold">
              ${(cartItem.price * cartItem.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Right section: quantity, price, delete */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto mt-3 sm:mt-0 gap-3 sm:gap-6">
        {/* Quantity control */}
        <div className="flex items-center">
          <button
            onClick={() => {
              dispatch(
                updateQuantity({
                  id: cartItem.id,
                  quantity: cartItem.quantity - 1,
                })
              );
            }}
            className="w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center border border-gray-400 rounded-full text-lg font-medium hover:bg-gray-200"
            disabled={cartItem.quantity === 1}
          >
            -
          </button>

          <span className="px-2 sm:px-4 min-w-[20px] sm:min-w-[30px] text-center">
            {cartItem.quantity}
          </span>

          <button
            onClick={() => {
              dispatch(
                updateQuantity({
                  id: cartItem.id,
                  quantity: cartItem.quantity + 1,
                })
              );
            }}
            className="w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center border border-gray-400 rounded-full text-lg font-medium hover:bg-gray-200"
          >
            +
          </button>
        </div>

        {/* Price - hidden on mobile, shown above */}
        <p className="hidden sm:block text-blue-600 font-semibold text-base sm:text-lg min-w-[80px] text-right">
          ${(cartItem.price * cartItem.quantity).toFixed(2)}
        </p>

        {/* Delete button */}
        <button
          onClick={() => dispatch(removeItem(cartItem))}
          className="w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center rounded-lg text-red-500 hover:bg-red-50 transition-colors"
          aria-label="Remove item"
        >
          <RiDeleteBin6Line className="text-sm sm:text-base" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
