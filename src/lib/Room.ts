import {Player} from "./Player";
import {Interactive} from "./interactive/Interactive";

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
    broadcast(message: string): void;

    render(player: Player): string;
}

export abstract class SingletonRoom implements Room {

    private static _instance: Room;

    static getInstance() {
        // @ts-ignore
        return this._instance || (this._instance = new this());
    }

    private players: Array<Player> = [];

    interactions: Array<Interactive> = [];

    removePlayer(player: Player): void {
        const index = this.players.findIndex(p => p === player);
        this.players.splice(index, 1);
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    getPlayers(): Array<Player> {
        return this.players;
    }

    broadcast(message) {
        this.players.forEach(player => player.output(message));
    }

    /**
     * this is the generic process action, this can be extended but in the majority of the time you'll want to call `super()` before.
     */
    processAction(command: string, params: string[], player: Player): void {
        let isValidCommand = this.interactions.some(interaction => {
            if (interaction.match(command)) {
                return interaction.run(command, params, player);
            }
        })

        if (!isValidCommand) {
            player.output('invalid command');
        }
    };

    abstract getDescription(player: Player): string;

    abstract getName(): string;

    render(player: Player): string {
        let description = this.getDescription(player);
        description += '. ' + this.interactions.map(i => i.getDescription()).join('. ');

        return description;
    }
}
