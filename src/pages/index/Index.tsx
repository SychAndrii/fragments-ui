import "./Index.css";
import "@aws-amplify/ui-react/styles.css";
import Greetings from "./Greetings";
import useUser from "../../hooks/useUser";

function Index() {
  const user = useUser();

  return (
    <div>
      {user && (
        <div>
          <Greetings />
        </div>
      )}
    </div>
  );
}

export default Index;
