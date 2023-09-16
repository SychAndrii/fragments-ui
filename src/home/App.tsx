import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Login from "./Login";
import Logout from "./Logout";
import Greetings from "./Greetings";
import useUser from "../hooks/useUser";

function App() {
  const user = useUser();
  const isLoggedIn = user != null;

  return (
    <div>
      <div className="flex mt-8 mx-5 p-8">
        <Login isDisabled={isLoggedIn} />
        <Logout isDisabled={!isLoggedIn} />
      </div>
      {user && (
        <div>
          <Greetings />
        </div>
      )}
    </div>
  );
}

export default App;
