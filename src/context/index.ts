import { createContext } from "react";
import User from "../interface/data/User";

export const UserContext = createContext<User | null>(null);
