import type { UserArmory } from "./UserArmory";
import type { UserCurrency } from "./UserCurrency";

export interface User {
    currency: UserCurrency;
    armory: UserArmory[];
    activeArmory: UserArmory | null;

    username: string;
}