import type { UserArmory } from "./UserArmory";
import type { UserCurrency } from "./UserCurrency";

export interface User {
    id: number;
    
    currency: UserCurrency;
    armory: UserArmory[];
    activeArmory: UserArmory

    username: string;
}