import { createContext, useContext } from "react";

export type UserContextType = {
    username: string;
    drBalance: number;
    tombolaTickets: number;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext(): UserContextType {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("useUserContext must be used within <UserProvider>");
    }
    return ctx;
}