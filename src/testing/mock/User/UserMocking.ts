import type { User } from "../../../api/types/User/User";
import type { UserCurrency } from "../../../api/types/User/UserCurrency";

export const MOCK_USER_CURRENCY_1: UserCurrency = {
  tombolaTickets: 5,
  yabbieCoins: 350,
};

export const MOCK_USER_1: User = {
  username: "Wieland",
  currency: MOCK_USER_CURRENCY_1,
};

export const mockUsers: User[] = [
  MOCK_USER_1,
];