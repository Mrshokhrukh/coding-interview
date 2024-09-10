import React from "react";
import logo from "../assets/pngegg.png";
import { LuLogIn } from "react-icons/lu";

import { useLocation, useNavigate } from "react-router-dom";
import { links } from "../assets/db";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  let navigate = useNavigate();
  let location = useLocation();

  console.log(location.pathname);

  return (
    <div className="fixed z-[1000] top-0 w-[100%] flex justify-between items-center px-2 md:px-12 py-3">
      <div onClick={() => navigate("/")}>
        <img src={logo} alt="" className="w-[55px] cursor-pointer" />
      </div>
      <div
        id="glass"
        className={`rounded-full ${
          location.pathname !== "/" ? "bg-[rgb(255,255,255,0.151)]" : ""
        } max-w-[550px] w-[90%] border-[1px]
           border-slate-300 border-opacity-[0.2] grid grid-cols-4 gap-1 px-1 py-1 min-h-[50px]`}
      >
        {links.map((val: any, i) => {
          return (
            <div
              key={i}
              className={`${location.pathname == val.path ? "bg-slate-50 bg-opacity-[0.2]" : "" } flex items-center gap-2 cursor-pointer hover:backdrop:blur-3xl hover:bg-slate-50 hover:bg-opacity-[0.2]
              font-semibold h-[100%] rounded-full justify-center`}
              onClick={() => navigate(`${val.path}`)}
            >
              <span className="text-xl">
                <val.icon />
              </span>
              {val.name}
            </div>
          );
        })}
      </div>

      <div
        className="border flex items-center py-3 px-3 gap-2 cursor-pointer hover:backdrop:blur-3xl hover:bg-slate-50 hover:bg-opacity-[0.2]
      font-semibold h-[100%] rounded-full justify-center"
        onClick={() => navigate("/authentication")}
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
