import {Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {InitialRoom} from "./InitialRoom";

export class MainRoom implements Room {

    getConnection(keyword: string): undefined | Room {
        if (keyword == 'south') return new InitialRoom();
    }

    getDescription(player: Player): string {
        return "Congratulations you moved to the main room.";
    }
}
