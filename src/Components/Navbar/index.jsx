import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  const context = useContext(AppContext);

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/smartphones"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Phones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/laptops"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Laptops
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fragrances"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fragrances
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skincare"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Skin Care
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/groceries"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Groceries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home-decoration"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/card"
            className={`flex justify-center items-center ${({ isActive }) =>
              isActive ? activeStyle : undefined}`}
          >
            <HiOutlineShoppingCart className="mr-1" /> {context.count}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
