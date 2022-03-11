"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonRoom = void 0;
class SingletonRoom {
    constructor() {
        this.players = [];
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
    processAction(command, params, player) {
        // by default there is no room actions
    }
    ;
}
exports.SingletonRoom = SingletonRoom;
//# sourceMappingURL=Room.js.map