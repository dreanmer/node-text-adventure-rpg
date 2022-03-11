import {SingletonRoom, Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {Connection} from "../../lib/interactive/Connection";
import {EntranceHall} from "./EntranceHall";

/**
 * todo - wip
 */
export class DarkRoom extends SingletonRoom implements Room {

    interactions = [
        new Connection(
            'west door',
            'Behind you, the `west door` where you come',
            EntranceHall
        ),
    ];

    getDescription(player: Player): string {
        if (player.hasItem('torch')) {
            return "With your torch you can see everything in this room";
        }

        return "Its soo much dark in this room that you can see nothing";
    }

    getName(): string {
        return "Dark Room";
    }
}
