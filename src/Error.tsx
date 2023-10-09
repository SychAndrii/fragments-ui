import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return <h1>err</h1>;
};

export default Error;
