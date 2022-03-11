import {SingletonRoom, Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {MainRoom} from "./MainRoom";

export class InitialRoom extends SingletonRoom implements Room {

    public processAction(command: string, params: string[], player: Player): void {
        switch (command) {
            case 'open':
            case 'enter':
                if (params.join(' ').indexOf('big door') > -1) player.moveTo(MainRoom.getInstance());
        }
    }

    getDescription(player: Player): string {
        return "This is the entrance of the dungeon. You see a big door at your front with 2 torches one at each side.";
    }

    getName(): string {
        return "Entrance";
    }
}
