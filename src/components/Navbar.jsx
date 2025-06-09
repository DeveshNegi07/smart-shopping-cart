import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user } = useContext(userContext);
  const cartItems = useSelector((state) => state.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <nav className="shadow bg-white px-4 sm:px-6 md:px-16 lg:px-32 py-4">
      <div className="flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-bold text-blue-600"
        >
          ShopHub
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 text-[17px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-medium" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-medium" : "hover:text-blue-600"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-medium" : "hover:text-blue-600"
            }
          >
            Profile
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="flex flex-col mt-4 md:hidden gap-4 text-gray-700 text-lg">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </NavLink>
          <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </NavLink>
        </div>
      )}

      {/* left Side: Welcome and Cart */}
      <div className="hidden md:flex items-center gap-6 mt-4 md:mt-0 text-gray-700">
        <p className="text-sm">
          Welcome,{" "}
          <span className="capitalize font-semibold text-black">
            {user.firstName} {user.lastName}
          </span>
        </p>
        <Link
          to="/cart"
          className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-300 transition-all duration-300 ease-in-out"
        >
          <CiShoppingCart className="text-blue-600 text-lg" />
          <span className="text-sm font-medium text-black">
            {totalQuantity} items
          </span>
          <span className="text-sm text-gray-500">
            ${totalPrice.toFixed(2)}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
