"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkRoom = void 0;
const Room_1 = require("../../lib/Room");
const MainRoom_1 = require("./MainRoom");
class DarkRoom extends Room_1.SingletonRoom {
    processAction(command, params, player) {
        switch (command) {
            case 'open':
            case 'enter':
                if (['west', 'door'].every(i => params.includes(i)))
                    player.moveTo(MainRoom_1.MainRoom.getInstance());
        }
    }
    getDescription(player) {
        return "You can see nothing. Behind you the west `door` of the room.";
    }
    getName() {
        return "Dark Room";
    }
}
exports.DarkRoom = DarkRoom;
//# sourceMappingURL=DarkRoom.js.map