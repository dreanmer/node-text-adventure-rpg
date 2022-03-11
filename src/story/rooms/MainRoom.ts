import {SingletonRoom, Room} from "../../lib/Room";
import {Player} from "../../lib/Player";
import {InitialRoom} from "./InitialRoom";
import {DarkRoom} from "./DarkRoom";

export class MainRoom extends SingletonRoom implements Room {

    public processAction(command: string, params: string[], player: Player): void {
        switch (command) {
            case 'open':
            case 'enter':
                if (params.join(' ').indexOf('entrance door') > -1) player.moveTo(InitialRoom.getInstance());
                if (params.join(' ').indexOf('staircase') > -1) player.moveTo(DarkRoom.getInstance());
                else if (['east', 'door'].every(i => params.includes(i))) player.moveTo(DarkRoom.getInstance());
                else if (['north', 'door'].every(i => params.includes(i))) this.broadcast(player.name + ' tries to open the north door but it is locked.')
        }
    }

    getDescription(player: Player): string {
        return "You enter the main hall, it's an obscure place and you can barely see the entire room, behind you there is the `entrance door`, at the south of the room there is lots of `wreckage`, probably from the second floor that collapsed. At the east side of the room there is an wooden `door` very degraded, also there is an `staircase` at his side. On the north side of the room, also there is an wooden `door` but in plain condition."
    }

    getName(): string {
        return "Entrance Hall";
    }
}
