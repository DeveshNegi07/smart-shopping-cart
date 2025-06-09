import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      {totalQuantity > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Your Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <CartSummary
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default Cart;
