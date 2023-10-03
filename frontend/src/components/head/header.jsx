import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import UserBand from './userBand'
import ActionBand from './actionBand'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <div className="w-full h-[70px] bg-slate-600 fixed flex items-center justify-between text-white z-50">
      <h1 className="sm:text-2xl md:text-3xl mx-[40px]">Movies@Mariana</h1>
      <div className="mx-[20px] text-lg">
        {toggleMenu ? (
          <AiOutlineClose
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex gap-[60px]">
          <li>About</li>
          <li>Contact</li>
          <li>
            <button className="h-[35px] bg-green-600 px-5 items-center rounded-xl">
              Login
            </button>
          </li>
        </ul>

        {/* Responsive Menu */}
        <ul
          className={`duration-500 w-full h-screen md:hidden fixed bg-black top-[70px] z-[40]
      ${toggleMenu ? "left-0" : "left-[-100%]"}
      `}
        >
          <li className="p-5">About</li>
          <hr className="w-[90%] mx-auto"></hr>
          <li className="p-5">Contact</li>
          <hr className="w-[90%] mx-auto"></hr>
          <li className="p-5">
            <button className="h-[35px] bg-green-600 px-5 items-center rounded-xl">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>

<div className='w-full pt-[90px] bg-slate-400 h-auto'>
<UserBand/>
<ActionBand/>
</div>
</>
  );
}

export default Header;
