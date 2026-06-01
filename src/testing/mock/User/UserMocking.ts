import type { User } from "../../../api/types/User/User";
import type { UserCurrency } from "../../../api/types/User/UserCurrency";
import { MOCK_ARMORY_CHEST_PIECE, MOCK_ARMORY_WEAPON_PIECE } from "../Armory/ArmoryPieceMocking";

export const MOCK_USER_CURRENCY_1: UserCurrency = {
  tombolaTickets: 5,
  yabbieCoins: 350,
};

export const MOCK_USER_1: User = {
  username: "Wieland",
  currency: MOCK_USER_CURRENCY_1,
  character: {
    name: "Gregor",
    fightAbleUnit: {
      baseDamage: 50,
      baseDefence: 20,
      baseHealth: 100,
      armoryPieces: [MOCK_ARMORY_CHEST_PIECE, MOCK_ARMORY_WEAPON_PIECE],
      monsterUnit: null
    },
  },
};

export const mockUsers: User[] = [
  MOCK_USER_1,
];