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
import Fragments, {
  fragmentsAction,
  fragmentsLoader,
} from "./pages/fragments/Fragments";
import AddFragment from "./pages/fragment-add/AddFragment";
import Error from "./Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<Error />}>
        <Route
          loader={indexLoader}
          index
          errorElement={<IndexError />}
          element={<Index />}
        />
        <Route
          element={<Fragments />}
          loader={fragmentsLoader}
          action={fragmentsAction}
          path="/fragments"
        />
        <Route path="/fragment">
          <Route path="add" element={<AddFragment />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
