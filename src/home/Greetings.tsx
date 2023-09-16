import useUser from "../hooks/useUser";

const Greetings = () => {
  const user = useUser();

  return (
    <div>
      <h1>Hello, {user?.username}</h1>
    </div>
  );
};

export default Greetings;
