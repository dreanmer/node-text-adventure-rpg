import {Player} from "./Player";
import {InitialRoom} from "../story/Common/rooms/InitialRoom";

export class Server {

    private players: Array<Player> = [];

    /**
     * this method is responsible to bootstrap and start the game
     */
    public start(): void {
        this.broadcast('Game is starting.');
        let initialRoom = new InitialRoom();
        this.players.forEach(player => {
            player.moveTo(initialRoom);
        })
    }

    /**
     * add a user to the current server instance
     */
    public registerPlayer(player: Player): void {
        this.broadcast(player.name + ' connected.');
        this.players.push(player);
    }

    /**
     * broadcast an output message to every connected player
     */
    public broadcast(data: string): void {
        this.players.forEach(player => player.output(data));
    }
}
