import type { User } from "../../api/types/User/User";
import type { UserCurrency } from "../../api/types/User/UserCurrency";

export const MOCK_USER_CURRENCY_1: UserCurrency = {
  user: null!,
  tombolaTickets: 5,
  yabbieCoins: 350,
};

export const MOCK_USER_1: User = {
  username: "Wieland",
  currency: MOCK_USER_CURRENCY_1,
};

MOCK_USER_CURRENCY_1.user = MOCK_USER_1;

export const MOCK_USER_CURRENCY_2: UserCurrency = {
  user: null!,
  tombolaTickets: 0,
  yabbieCoins: 50,
};

export const MOCK_USER_2: User = {
  username: "Guestplayer",
  currency: MOCK_USER_CURRENCY_2,
};

MOCK_USER_CURRENCY_2.user = MOCK_USER_2;

export const MOCK_USER_CURRENCY_3: UserCurrency = {
  user: null!,
  tombolaTickets: 20,
  yabbieCoins: 1200,
};

export const MOCK_USER_3: User = {
  username: "ProHunter99",
  currency: MOCK_USER_CURRENCY_3,
};

MOCK_USER_CURRENCY_3.user = MOCK_USER_3;

export const mockUsers: User[] = [
  MOCK_USER_1,
  MOCK_USER_2,
  MOCK_USER_3,
];
