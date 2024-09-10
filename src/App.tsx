import React from "react";
import chart from "./assets/clipart2365236.png";

// import { Link, Outlet } from "react-router-dom";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="grid grid-rows-2 h-[100vh] bg-gray-950 ">
      <div className=" bg-gradient-to-bl from-green-500 to-blue-500 flex items-center justify-center rounded-b-[55px] ">
        <img src={chart} alt="" className="w-[280px]" />
        <h1 className="font-bold text-5xl">
          Welcom to our <br /> coding interview
        </h1>
      </div>

      <div className="bg-gray-950 px-[100px] py-6 text-white grid grid-cols-4 gap-5">
        <div
          className="flex flex-col items-center justify-between text-center h-[190px] cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glassHomeCards"
        >
          <h1 className="font-semibold text-2xl">Shopping Products</h1>
          <div>
            <p>100 products</p>
            <p>Authentication</p>
            <p>User cart</p>
          </div>
          <button className="bg-slate-500 px-3 py-1 rounded-md active:bg-slate-600">Go to products</button>
        </div>
        <div
          className="flex flex-col items-center justify-between text-center h-[190px] cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glassHomeCards"
        >
          <h1 className="font-semibold text-2xl">Todo List</h1>
          <div>
            <p>CRUD Todo</p>
            <p>Authentication</p>
          </div>
          <button className="bg-slate-500 px-3 py-1 rounded-md active:bg-slate-600">Go to Todos</button>
        </div>
        <div
          className="flex flex-col items-center justify-between text-center h-[190px] cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glassHomeCards"
        >
          <h1 className="font-semibold text-2xl">Users</h1>
          <div>
            <p>Users</p>
            <p>Authentication</p>
          </div>
          <button className="bg-slate-500 px-3 py-1 rounded-md active:bg-slate-600">Go to Users</button>
        </div>
        <div
          className="flex flex-col items-center justify-between text-center h-[190px] cursor-pointer hover:scale-[102%] p-4 transition-all duration-200 text-white border-gray-600 rounded-3xl border"
          id="glassHomeCards"
        >
          <h1 className="font-semibold text-2xl">Registration</h1>
          <div>
            <p>Register</p>
            <p>Authentication</p>
          </div>
          <button className="bg-slate-500 px-3 py-1 rounded-md active:bg-slate-600">Registration</button>
        </div>
      </div>
    </div>
  );
};
export default App;
