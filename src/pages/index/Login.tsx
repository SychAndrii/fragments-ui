import { Auth } from "../../auth";
import Button from "../../components/ui/Button";

type Props = {
  isDisabled: boolean;
};

const Login = ({ isDisabled }: Props) => {
  return (
    <div className="mr-5">
      <Button text="Login" disabled={isDisabled} clickHandler={login} />
    </div>
  );

  function login() {
    Auth.federatedSignIn();
  }
};

export default Login;
