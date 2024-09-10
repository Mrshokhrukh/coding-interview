import React from "react";

// import { Link, Outlet } from "react-router-dom";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="grid grid-rows-2 h-[100vh]  bg-gray-950">
      <div className=" bg-gradient-to-bl from-green-500 to-blue-500 rounded-b-[55px] "></div>
      <div className="bg-gray-950 px-[100px] py-3 text-white grid grid-cols-4 gap-5">
        <div
          className="h-[200px] bg-zinc-800 cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glass"
        ></div>
        <div
          className="h-[200px]  bg-zinc-800 cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glass"
        ></div>
        <div
          className="h-[200px]  bg-zinc-800 cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glass"
        ></div>
        <div
          className="h-[200px]  bg-zinc-800 cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glass"
        ></div>
      </div>
    </div>
  );
};
export default App;
