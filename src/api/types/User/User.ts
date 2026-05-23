import type { Player } from "../Player/Player";
import type { UserCurrency } from "./UserCurrency";

export interface User {
    currency: UserCurrency;
    username: string;
    player: Player;
}