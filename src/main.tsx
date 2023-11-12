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
import Index from "./pages/index/Index";
import indexLoader from "./pages/index/indexLoader";
import fragmentLoader from "./pages/fragment/fragmentLoader";
import fragmentsAction from "./pages/fragments/fragmentsAction";
import Fragments from "./pages/fragments/Fragments";
import AddFragment from "./pages/fragment-add/AddFragment";
import Error from "./Error";
import Fragment from "./pages/fragment/Fragment";
import UserProvider from "./providers/UserProvider";
import RouteGuard from "./RouteGuard";
import '../style.css'

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
          element={
            <RouteGuard>
              <Fragments />
            </RouteGuard>
          }
          loader={fragmentLoader}
          action={fragmentsAction}
          path="/fragments"
        />
        <Route path="/fragment">
          <Route
            path="add"
            element={
              <RouteGuard>
                <AddFragment />
              </RouteGuard>
            }
          />
          <Route
            path=":id"
            element={
              <RouteGuard>
                <Fragment />
              </RouteGuard>
            }
            loader={fragmentLoader}
          />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
