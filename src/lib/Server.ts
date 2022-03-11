import {Player} from "./Player";
import {Room} from "./Room";
import {InitialRoom} from "../story/rooms/InitialRoom";

export class Server {

    // private rooms: Array<Room> = [];
    private players: Array<Player> = [];

    public start() {
        let initialRoom = new InitialRoom();
        // this.rooms.push(initialRoom);
        this.players.forEach(player => {
            player.moveTo(initialRoom);
        })
    }

    public registerPlayer(player: Player) {
        this.players.push(player);
    }
}
