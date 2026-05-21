import type { User } from "../../../api/types/User/User";
import type { UserCurrency } from "../../../api/types/User/UserCurrency";
import { MOCK_ARMORY_EFFECT_DAMAGE_RESISTENCE_EFFECT, MOCK_ARMORY_EFFECT_ELEMENT_BONUS, MOCK_ARMORY_EFFECT_FLAT_DAMAGE } from "../ArmoryEffectMocking";

export const MOCK_USER_CURRENCY_1: UserCurrency = {
  tombolaTickets: 5,
  yabbieCoins: 350,
};

export const MOCK_USER_1: User = {
  username: "Wieland",
  currency: MOCK_USER_CURRENCY_1,
  armory: [],
  activeArmory: {
    name: "Mönchplattenpanzer",
    armoryEffect: [MOCK_ARMORY_EFFECT_DAMAGE_RESISTENCE_EFFECT, MOCK_ARMORY_EFFECT_ELEMENT_BONUS, MOCK_ARMORY_EFFECT_FLAT_DAMAGE, null],
  },
};

export const MOCK_USER_CURRENCY_2: UserCurrency = {
  tombolaTickets: 0,
  yabbieCoins: 50,
};

export const MOCK_USER_2: User = {
  username: "Guestplayer",
  currency: MOCK_USER_CURRENCY_2,
  armory: [],
  activeArmory: {
    name: "Mönchplattenpanzer",
    armoryEffect: [MOCK_ARMORY_EFFECT_DAMAGE_RESISTENCE_EFFECT],
  },
};

export const MOCK_USER_CURRENCY_3: UserCurrency = {
  tombolaTickets: 20,
  yabbieCoins: 1200,
};

export const MOCK_USER_3: User = {
  username: "ProHunter99",
  currency: MOCK_USER_CURRENCY_3,
  armory: [],
  activeArmory: null,
};

export const mockUsers: User[] = [
  MOCK_USER_1,
  MOCK_USER_2,
  MOCK_USER_3,
];
