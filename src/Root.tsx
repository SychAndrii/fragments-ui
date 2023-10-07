import { Outlet } from "react-router-dom";
import Header from "./components/root/Header";
import Navigation from "./components/root/Navigation";

const Root = () => {
  return (
    <div className=" h-screen">
      <Header />
      <div className=" flex h-full">
        <div className=" w-[250px] h-full">
          <Navigation />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
