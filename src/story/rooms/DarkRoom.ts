import {SingletonRoom, Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {MainRoom} from "./MainRoom";

export class DarkRoom extends SingletonRoom implements Room {

    public processAction(command: string, params: string[], player: Player): void {
        switch (command) {
            case 'open':
            case 'enter':
                if (['west', 'door'].every(i => params.includes(i))) player.moveTo(MainRoom.getInstance());
        }
    }

    getDescription(player: Player): string {
        return "You can see nothing. Behind you the west `door` of the room.";
    }

    getName(): string {
        return "Dark Room";
    }
}
