import { Auth } from "../auth";
import Button from "../components/Button";

type Props = {
  isDisabled: boolean;
};

const Login = ({ isDisabled }: Props) => {
  return (
    <div className="mr-5">
      <Button text="Login" isDisabled={isDisabled} clickHandler={login} />
    </div>
  );

  function login() {
    Auth.federatedSignIn();
  }
};

export default Login;
