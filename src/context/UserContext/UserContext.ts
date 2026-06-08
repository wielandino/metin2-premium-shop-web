import { createContext } from "react";

export type UserContextType = {
    username: string;
    drBalance: number;
    tombolaTickets: number;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
