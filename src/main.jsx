import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage.jsx";
import NotFound from "./routes/NotFound.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./routes/Characters.jsx";
import Comics from "./routes/Comics.jsx";
import CharactersDetail from "./routes/CharactersDetail.jsx";
import ComicsDetail from "./routes/ComicsDetail.jsx";
import Email from "./routes/Email.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "email",
        element: <Email />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "characters/:id",
        element: <CharactersDetail />,
      },
      {
        path: "comics",
        element: <Comics />,
      },
      {
        path: "comics/:id",
        element: <ComicsDetail />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
