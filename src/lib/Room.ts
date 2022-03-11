import {Player} from "./Player";

export interface Room {

    getDescription(player: Player): string;

    processAction(command: string, params: Array<string>, player: Player): void;

    removePlayer(player: Player): void;

    addPlayer(player: Player): void;

    getPlayers(): Array<Player>;

    getName(): string;

    /**
     * Broadcast a message for every player in this room
     */
    broadcast(message): void;
}

export abstract class SingletonRoom implements Room {

    private static _instance: Room;

    public static getInstance() {
        // @ts-ignore
        return this._instance || (this._instance = new this());
    }

    private players: Array<Player> = [];

    public removePlayer(player: Player): void {
        const index = this.players.findIndex(p => p === player);
        this.players.splice(index, 1);
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
    }

    public getPlayers(): Array<Player> {
        return this.players
    }

    public broadcast(message) {
        this.players.forEach(player => player.output(message));
    }

    public processAction(command: string, params: string[], player: Player): void  {
        // by default there is no room actions
    };

    abstract getDescription(player: Player): string;

    abstract getName(): string;
}
