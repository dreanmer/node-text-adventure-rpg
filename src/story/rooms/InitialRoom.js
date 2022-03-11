"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialRoom = void 0;
const Room_1 = require("../../lib/Room");
const MainRoom_1 = require("./MainRoom");
class InitialRoom extends Room_1.SingletonRoom {
    processAction(command, params, player) {
        switch (command) {
            case 'open':
            case 'enter':
                if (params.join(' ').indexOf('big door') > -1)
                    player.moveTo(MainRoom_1.MainRoom.getInstance());
        }
    }
    getDescription(player) {
        return "This is the entrance of the dungeon. You see a big door at your front with 2 torches one at each side.";
    }
    getName() {
        return "Entrance";
    }
}
exports.InitialRoom = InitialRoom;
//# sourceMappingURL=InitialRoom.js.map