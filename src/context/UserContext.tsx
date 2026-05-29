import { createContext } from "react";
import { MOCK_USER_1 } from "../testing/mock/User/UserMocking";
import type { Character } from "../api/types/User/Character";

interface UserProviderProps {
    children: React.ReactNode;
}

interface UserContextType {
    username: string;
    drBalance: number;
    tombolaTickets: number;
    character: Character;
}


const UserContext = createContext<UserContextType | undefined>(undefined);
const defaultUser = MOCK_USER_1;


const UserProvider = ({ children }: UserProviderProps) => {
    return (
        <UserContext.Provider value={{
            username: defaultUser.username,
            drBalance: defaultUser.currency.yabbieCoins,
            tombolaTickets: defaultUser.currency.tombolaTickets,
            character: defaultUser.character,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }