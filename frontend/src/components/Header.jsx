import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ResponsiveMenu from "./Responsivemenu";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="bg-black shadow-md">
      <div className="flex justify-between items-center max-w-7xl h-20 mx-auto p-3">
        <NavLink to="/">
          <h1 className="font-bold text-xl sm:text-4xl flex flex-wrap gap-2">
            <span className="text-slate-500">DEEPNET</span>
            <span className="text-slate-700">SOFT</span>
          </h1>
        </NavLink>
        <div className="flex">
        <ul className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hidden sm:inline text-white ${isActive ? "text-blue-700 " : ""}`
            }>
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/menus"
            className={({ isActive }) =>
              `hidden sm:inline text-white ${isActive ? "text-blue-700" : ""}`
            }>
            <li>Menu</li>
          </NavLink>
          <NavLink
            to="/create-menu"
            className={({ isActive }) =>
              `hidden sm:inline text-white ${isActive ? "text-blue-700" : ""}`
            }>
            <li>Create Menu</li>
          </NavLink>
        </ul>

      <div className="pt-4 sm:hidden">
            {showMenu ? (
              <IoMdClose onClick={toggleMenu} className="cursor-pointer text-white" size={30} />
            ) : (
              <IoMdMenu onClick={toggleMenu} className="cursor-pointer text-white" size={30} />
            )}
      </div>
       </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </header>
  );
};

export default Header;
