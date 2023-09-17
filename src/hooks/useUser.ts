import { useEffect, useState } from "react";
import User from "../interface/User";
import { getUser } from "../auth";

const useUser = () => {
  const [user, setUser] = useState<null | User>(null);
  console.log(user);
  
  useEffect(() => {
    getCurrentUser();

    async function getCurrentUser() {
        const currentUser = await getUser();
        setUser(currentUser);
    }
  }, []);
  return user;
};

export default useUser;
