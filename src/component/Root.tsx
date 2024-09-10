import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type RootProps = {};

const Root: React.FC<RootProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Root;
