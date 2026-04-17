import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
              ? "bg-[#244D3F] text-white"
              : "text-gray-600 hover:bg-base-200"
            }`
          }
        >
          <IoHomeOutline size={20} /> Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/timeline"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
              ? "bg-[#244D3F] text-white"
              : "text-gray-600 hover:bg-base-200"
            }`
          }
        >
          <RiTimeLine size={20} /> Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/stats"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
              ? "bg-[#244D3F] text-white"
              : "text-gray-600 hover:bg-base-200"
            }`
          }
        >
          <ImStatsBars size={20} /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          
          <Link to="/" className="font-bold tracking-wide">
            <h1 className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              text-[#244D3F]
              transition-all duration-300
            ">
              Keen Keeper
            </h1>
          </Link>

          
          <ul className="hidden md:flex gap-3">{navLinks}</ul>

          
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              p-2
              rounded-lg
              hover:bg-base-200
              transition
            "
          >
            {open ? (
              <X size={28} className="transition-all duration-300" />
            ) : (
              <Menu size={28} className="transition-all duration-300" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col gap-2 pb-4">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;