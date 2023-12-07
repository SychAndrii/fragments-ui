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
import fragmentsLoader from "./pages/fragments/fragmentsLoader";
import fragmentsAction from "./pages/fragments/fragmentsAction";
import fragmentAction from "./pages/fragment/fragmentAction";
import Fragments from "./pages/fragments/Fragments";
import AddFragment from "./pages/fragment-add/AddFragment";
import Error from "./Error";
import Fragment from "./pages/fragment/Fragment";
import UserProvider from "./providers/UserProvider";
import RouteGuard from "./RouteGuard";
import UpdateFragment from "./pages/fragment-update/UpdateFragment";
import '../style.css'
import deleteAction from "./pages/fragment-delete/deleteAction";

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
          loader={fragmentsLoader}
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
            action={fragmentAction}
          >
          </Route>
          <Route
            path=":id/update"
            element={
              <RouteGuard>
                <UpdateFragment />
              </RouteGuard>
            }
          />
          <Route
            path=":id/delete"
            action={deleteAction}
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
