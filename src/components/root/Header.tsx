import { useUser } from "../../hooks";
import Login from "../../pages/index/Login";
import Logout from "../../pages/index/Logout";

const Header = () => {
  const user = useUser();
  const isLoggedIn = user != null;
  console.log(user);

  return (
    <header className="text-center bg-main p-5 w-full">
      <div className=" float-left mt-2 text-lg text-regular">
        {user ? (
          <h2 className=" ">
            Hello, <b className=" text-highlight">{user.username}!</b>
          </h2>
        ) : (
          <h2>
            You are <b>NOT</b> logged in!
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
