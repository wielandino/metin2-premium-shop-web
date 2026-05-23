import { createContext } from "react";
import { MOCK_USER_1 } from "../testing/mock/User/UserMocking";
import type { Player } from "../api/types/Player/Player";

interface UserProviderProps {
    children: React.ReactNode;
}

interface UserContextType {
    username: string;
    drBalance: number;
    tombolaTickets: number;
    player: Player;
}


const UserContext = createContext<UserContextType | undefined>(undefined);
const defaultUser = MOCK_USER_1;


const UserProvider = ({ children }: UserProviderProps) => {
    return (
        <UserContext.Provider value={{
            username: defaultUser.username,
            drBalance: defaultUser.currency.yabbieCoins,
            tombolaTickets: defaultUser.currency.tombolaTickets,
            player: defaultUser.player,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }