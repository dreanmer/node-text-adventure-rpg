import {SingletonRoom, Room} from "../../../lib/Room";
import {Player} from "../../../lib/Player";
import {InitialRoom} from "./InitialRoom";
import {DarkRoom} from "./DarkRoom";
import {Connection} from "../../../lib/interactive/Connection";
import {LockedDoor} from "../interactive/LockedDoor";
import {WreckagePassage} from "../interactive/WreckagePassage";

export class EntranceHall extends SingletonRoom implements Room {

    interactions = [
        new Connection(
            'entrance door',
            'Behind you there is the `entrance door`',
            InitialRoom
        ),
        new Connection(
            'east door',
            'At the `east` side of the room there is an wooden `door` very degraded',
            DarkRoom
        ),
        new Connection(
            'staircase',
            'Also there is an `staircase` at his side',
            InitialRoom
        ),
        new LockedDoor(
            'north door',
            'On the `north` side of the room, there is a wooden `door`, you can see some light under the door',
            InitialRoom
        ),
        new WreckagePassage(
            'wreckage',
            'At the south of the room there is lots of `wreckage`, probably from the second floor that collapsed',
            InitialRoom
        )
    ];

    getDescription(player: Player): string {
        return "You enter the entrance hall, it's an obscure place and you can barely see the entire room"
    }

    getName(): string {
        return "Entrance Hall";
    }
}
