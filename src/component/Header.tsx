import React from "react";
import logo from "../assets/pngegg.png";
import { GoHome } from "react-icons/go";
import { GoTasklist } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { LuLogIn } from "react-icons/lu";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="fixed top-0 w-[100%] flex justify-between items-center px-2 md:px-12 py-3">
      <div>
        <img src={logo} alt="" className="w-[55px] object-cover" />
      </div>
      <div
        id="glass"
        className="rounded-full max-w-[550px] w-[90%] border-[1px] border-slate-300 grid grid-cols-4 px-1 py-1 min-h-[50px]"
      >
        <div
          className="flex items-center gap-2 cursor-pointer hover:backdrop:blur-3xl hover:bg-slate-50 hover:bg-opacity-[0.2]
        font-semibold h-[100%] rounded-full justify-center "
        >
          <span className="text-xl">
            <GoHome />
          </span>
          Home
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:backdrop-blur-[100px] hover:bg-slate-50 hover:bg-opacity-[0.2]
        font-semibold h-[100%] rounded-full justify-center"
        >
          <span className="text-xl">
            <AiOutlineProduct />
          </span>
          Products
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:backdrop-blur-[100px] hover:bg-slate-50 hover:bg-opacity-[0.2]
        font-semibold h-[100%] rounded-full justify-center"
        >
          <span className="text-xl">
            <GoTasklist />
          </span>
          Todos
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:backdrop-blur-[100px] hover:bg-slate-50 hover:bg-opacity-[0.2]
        font-semibold h-[100%] rounded-full justify-center"
        >
          <span className="text-xl">
            <FiUsers />
          </span>
          Users
        </div>
      </div>
      <div
        className="border flex items-center py-3 px-3 gap-2 cursor-pointer hover:backdrop:blur-3xl hover:bg-slate-50 hover:bg-opacity-[0.2]
      font-semibold h-[100%] rounded-full justify-center"
        id="glass "
      >
        <span className="text-xl">
          <LuLogIn />
        </span>
      </div>
    </div>
  );
};
export default Header;
