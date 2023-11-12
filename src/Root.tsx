import { Outlet } from "react-router-dom";
import Header from "./components/root/Header";
import Navigation from "./components/root/Navigation";
import { useUser } from "./hooks";
import 'react-tabs/style/react-tabs.css';

const Root = () => {
  const user = useUser();

  return (
    <div className="__container">
      <Header />
      <div className="flex __content">
        <div className="w-[250px] bg-main">
          {user && <Navigation />}
        </div>
        <div className="p-4 flex-1 text-regular">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Root;
