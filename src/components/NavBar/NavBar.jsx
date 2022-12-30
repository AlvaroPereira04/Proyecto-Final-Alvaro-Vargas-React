import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Btn from "../Btn/Btn";
import CartWidget from "../CartWidget/CartWidget";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const NavStyle =
  "hover:bg-slate-400 hover:border-slate-400 hover:shadow-slate-400 rounded-md font-serif text-lg py-3 px-2 hover:shadow-lg transition-all duration-300 mx-1 tracking-widest";
const NavActiveStyle = "bg-slate-400 rounded-md shadow-lg shadow-slate-400";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex flex-wrap justify-evenly items-center bg-slate-200 py-6 text-slate-600">
      <div className="z-50 flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
        <NavLink to="/">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-light font-serif hover:scale-110 rounded-md py-3 px-2 transition-all duration-300 border mx-4 truncate bg-gradient-to-r from-slate-600 via-indigo-400 to-slate-600 text-transparent bg-clip-text">
            OTTO & HANNA GAMING
          </h1>
        </NavLink>
        <div className="flex items-center gap-4">
          <DropdownMenu />
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "bg-slate-400 rounded-md shadow-lg shadow-slate-400"
                : ""
            }
          >
            <CartWidget className="flex justify-center items-center hover:bg-slate-400 hover:border-slate-400 hover:shadow-slate-400 rounded-md hover:shadow-lg transition-all duration-300 mx-1 py-2 w-20 min-w-fit opacity-90" />
          </NavLink>
          <div className="px-1 py-1 flex flex-col sm:flex-row sm:gap-2 font-serif">
            {user ? (
              <DropdownMenu />
            ) : (
              <>
                
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hidden xl:flex">
        <NavLink
          to="/category/PS5"
          className={({ isActive }) => (isActive ? NavActiveStyle : "")}
        >
          <Btn className={NavStyle}>PS5</Btn>
        </NavLink>
        <NavLink
          to="/category/XBOX"
          className={({ isActive }) => (isActive ? NavActiveStyle : "")}
        >
          <Btn className={NavStyle}>XBOX Serie X</Btn>
        </NavLink>
        <NavLink
          to="/category/Nintendo Switch"
          className={({ isActive }) => (isActive ? NavActiveStyle : "")}
        >
          <Btn className={NavStyle}>NINTENDO SWITCH</Btn>
        </NavLink>
        <NavLink
          to="/category/PS4"
          className={({ isActive }) => (isActive ? NavActiveStyle : "")}
        >
          <Btn className={NavStyle}>PS4</Btn>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
