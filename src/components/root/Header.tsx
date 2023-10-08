import { useUser } from "../../hooks";
import Login from "../../pages/index/Login";
import Logout from "../../pages/index/Logout";

const Header = () => {
  const user = useUser();
  const isLoggedIn = user != null;

  return (
    <header className="text-center bg-main p-5 w-full">
      <div className=" float-left -mt-10">
        {user && (
          <h2 className=" text-md">
            Hello, <b>{user.username}!</b>
          </h2>
        )}
      </div>
      <h1 className=" text-4xl font-bold text-header">Fragments UI</h1>
      <div className=" float-right flex -mt-10">
        <Login isDisabled={isLoggedIn} />
        <Logout isDisabled={!isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;
