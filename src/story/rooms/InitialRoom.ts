import {SingletonRoom, Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {EntranceHall} from "./EntranceHall";
import {Connection} from "../../lib/interactive/Connection";
import {Collectible} from "../../lib/interactive/Collectible";

export class InitialRoom extends SingletonRoom implements Room {

    interactions = [
        new Connection(
            'entrance door',
            'You see a big `entrance door` at your front',
            EntranceHall
        ),
        new Collectible(
            'torch',
            'There is 2 torches beside the door illuminating the door details',
            2
        ),
    ];

    getDescription(player: Player): string {
        return "This is the entrance of the mansion";
    }

    getName(): string {
        return "Entrance";
    }
}
