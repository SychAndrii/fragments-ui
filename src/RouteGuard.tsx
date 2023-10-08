import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "./hooks";

const unprotectedRoutes = ["/"];

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const user = useUser();
  const [canSee, setCanSee] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("HERE");

    if (!user && !unprotectedRoutes.includes(location.pathname)) {
      navigate("/");
    } else {
      setCanSee(true);
    }
  }, [location, user, navigate]);

  return <div>{canSee && children}</div>;
};

export default RouteGuard;
