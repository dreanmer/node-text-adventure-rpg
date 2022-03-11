import {Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {MainRoom} from "./MainRoom";

export class InitialRoom implements Room {

    getConnection(keyword: string): undefined | Room {
        if (keyword == 'north') return new MainRoom();
    }

    getDescription(player: Player): string {
        return "This is the entrance of the dungeon. You see a big door at your front with 2 torches one at each side.";
    }
}
