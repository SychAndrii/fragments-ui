import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import IndexError from "./pages/index/IndexError";
import Index, { indexLoader } from "./pages/index/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<IndexError />}>
        <Route
          loader={indexLoader}
          index
          errorElement={<IndexError />}
          element={<Index />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
