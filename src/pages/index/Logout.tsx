import { Auth } from "../../auth";
import Button from "../../components/ui/Button";

type Props = {
  isDisabled: boolean;
};

const Logout = ({ isDisabled }: Props) => {
  return (
    <div>
      <Button text="Logout" disabled={isDisabled} clickHandler={logout} />
    </div>
  );

  function logout() {
    Auth.signOut();
  }
};

export default Logout;
