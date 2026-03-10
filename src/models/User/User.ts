import type { UserCurrency } from "./UserCurrency";

export interface User {
    currency: UserCurrency;

    username: string;
}