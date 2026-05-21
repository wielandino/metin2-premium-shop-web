import { createContext } from "react";
import { MOCK_USER_1 } from "../testing/mock/User/UserMocking";
import type { UserArmory } from "../api/types/User/UserArmory";

interface UserProviderProps {
    children: React.ReactNode;
}

interface UserContextType {
    username: string;
    drBalance: number;
    tombolaTickets: number;
    activeArmory: UserArmory | null;
}


const UserContext = createContext<UserContextType | undefined>(undefined);
const defaultUser = MOCK_USER_1;


const UserProvider = ({ children }: UserProviderProps) => {
    return (
        <UserContext.Provider value={{
            username: defaultUser.username,
            drBalance: defaultUser.currency.yabbieCoins,
            tombolaTickets: defaultUser.currency.tombolaTickets,
            activeArmory: defaultUser.activeArmory,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }