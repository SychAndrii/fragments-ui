import React, { useEffect, useState } from "react";
import { UserContext } from "../context";
import { getUser } from "../auth";
import User from "../interface/data/User";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, [window.location.pathname]);

  return (
    <>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
