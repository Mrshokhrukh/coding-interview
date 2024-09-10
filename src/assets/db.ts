import { GoHome } from "react-icons/go";
import { GoTasklist } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    icon: GoHome,
    path: "/",
  },
  {
    name: "Products",
    icon: AiOutlineProduct,
    path: "/products",
  },
  {
    name: "Todos",
    icon: GoTasklist,
    path: "/todos",
  },
  {
    name: "Users",
    icon: FiUsers,
    path: "/users",
  },
];
