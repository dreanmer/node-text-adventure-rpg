"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonRoom = void 0;
class SingletonRoom {
    constructor() {
        this.players = [];
        this.interactions = [];
    }
    static getInstance() {
        // @ts-ignore
        return this._instance || (this._instance = new this());
    }
    removePlayer(player) {
        const index = this.players.findIndex(p => p === player);
        this.players.splice(index, 1);
    }
    addPlayer(player) {
        this.players.push(player);
    }
    getPlayers() {
        return this.players;
    }
    broadcast(message) {
        this.players.forEach(player => player.output(message));
    }
    /**
     * this is the generic process action, this can be extended but in the majority of the time you'll want to call `super()` before.
     */
    processAction(command, params, player) {
        let isValidCommand = this.interactions.some(interaction => {
            if (interaction.match(command)) {
                return interaction.run(command, params, player);
            }
        });
        if (!isValidCommand) {
            player.output('invalid command');
        }
    }
    ;
    render(player) {
        let description = this.getDescription(player);
        description += '. ' + this.interactions.map(i => i.getDescription()).join('. ');
        return description;
    }
}
exports.SingletonRoom = SingletonRoom;
//# sourceMappingURL=Room.js.map