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
  player: {
    armory: null,
    activeArmory: {
      name: "Default Armory",
      armoryPieces: [MOCK_ARMORY_CHEST_PIECE, MOCK_ARMORY_WEAPON_PIECE],
    },
  },
};

export const mockUsers: User[] = [
  MOCK_USER_1,
];