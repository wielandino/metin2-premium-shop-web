import { MOCK_USER_1 } from "../../testing/mock/User/UserMocking";
import { UserContext } from "./UserContext";

type UserProviderProps = {
    children: React.ReactNode;
};

const defaultUser = MOCK_USER_1;

export const UserProvider = ({ children }: UserProviderProps) => {
    return (
        <UserContext.Provider value={{
            username: defaultUser.username,
            drBalance: defaultUser.currency.yabbieCoins,
            tombolaTickets: defaultUser.currency.tombolaTickets,
        }}>
            {children}
        </UserContext.Provider>
    );
};
