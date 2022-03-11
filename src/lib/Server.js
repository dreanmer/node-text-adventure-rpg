"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const InitialRoom_1 = require("../story/rooms/InitialRoom");
class Server {
    constructor() {
        this.players = [];
    }
    /**
     * this method is responsible to bootstrap and start the game
     */
    start() {
        this.broadcast('Game is starting.');
        let initialRoom = new InitialRoom_1.InitialRoom();
        this.players.forEach(player => {
            player.moveTo(initialRoom);
        });
    }
    /**
     * add a user to the current server instance
     */
    registerPlayer(player) {
        this.broadcast(player.name + ' connected.');
        this.players.push(player);
    }
    /**
     * broadcast an output message to every connected player
     */
    broadcast(data) {
        this.players.forEach(player => player.output(data));
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map