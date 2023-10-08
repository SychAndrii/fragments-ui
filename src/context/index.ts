import { createContext } from "react";
import User from "../interface/User";

export const UserContext = createContext<User | null>(null);
