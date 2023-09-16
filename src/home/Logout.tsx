import { Auth } from "../auth";
import Button from "../components/Button";

type Props = {
  isDisabled: boolean;
};

const Logout = ({ isDisabled }: Props) => {
  return (
    <div>
      <Button text="Logout" isDisabled={isDisabled} clickHandler={logout} />
    </div>
  );

  function logout() {
    Auth.signOut();
  }
};

export default Logout;
