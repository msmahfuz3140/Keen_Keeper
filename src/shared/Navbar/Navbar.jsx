import React from "react";
import nabLogo from '../../assets/Images/logo.png'
import { Link, NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar p-4 max-w-[1400px] mx-auto ">
        <div className=" sm:flex-1 justify-center ">
          <Link className="hidden sm:block" to={'/'}><img src={nabLogo} alt="Navlogo"  /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink  to={'/'} className={ ({isActive}) => isActive ? ' bg-[#244D3F] text-white' : 'text-gray-500'  }><IoHomeOutline />Home</NavLink>
            </li>
            <li>
              <NavLink to={'/timeline'} className={ ({isActive}) => isActive ? ' bg-[#244D3F] text-white' : 'text-gray-500'  }><RiTimeLine />Timeline</NavLink>
            </li>
             <li>
             <NavLink to={'/stats'} className={ ({isActive}) => isActive ? ' bg-[#244D3F] text-white' : 'text-gray-500'  }><ImStatsBars />Stats</NavLink>
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
