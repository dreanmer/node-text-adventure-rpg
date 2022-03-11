"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const InitialRoom_1 = require("../story/rooms/InitialRoom");
class Server {
    constructor() {
        // private rooms: Array<Room> = [];
        this.players = [];
    }
    start() {
        let initialRoom = new InitialRoom_1.InitialRoom();
        // this.rooms.push(initialRoom);
        this.players.forEach(player => {
            player.moveTo(initialRoom);
        });
    }
    registerPlayer(player) {
        this.players.push(player);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map