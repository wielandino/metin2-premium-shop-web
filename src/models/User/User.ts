import type { UserAmory } from "./UserArmory";
import type { UserCurrency } from "./UserCurrency";

export interface User {
    currency: UserCurrency;
    armory: UserAmory[];

    username: string;
}