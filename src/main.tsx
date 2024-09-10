import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./component/Root.tsx";
import "./index.css";
import Products from "./component/Products.tsx";
import Todos from "./component/Todos.tsx";
import Users from "./component/Users.tsx";
import Authentication from "./component/Authentication.tsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "*",
        element: <App />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
