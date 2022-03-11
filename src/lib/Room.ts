import {Player} from "./Player";

export interface Room {

    getDescription(player: Player): string;

    getConnection(keyword: string): undefined | Room;
}
