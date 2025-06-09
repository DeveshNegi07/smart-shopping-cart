import { FiCreditCard } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/slice/state/cartSlice";

const CartSummary = ({ totalQuantity, totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">
            Subtotal ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
          </p>
          <p className="text-gray-900 font-medium">${totalPrice.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">Free</p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <p className="text-gray-900 font-bold">Total</p>
          <p className="text-blue-600 font-bold text-lg">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <Link to="/checkout">
        <button
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          <FiCreditCard />
          <span>Proceed to Checkout</span>
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
