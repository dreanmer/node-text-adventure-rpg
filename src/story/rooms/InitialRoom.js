"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialRoom = void 0;
const MainRoom_1 = require("./MainRoom");
class InitialRoom {
    getConnection(keyword) {
        if (keyword == 'north')
            return new MainRoom_1.MainRoom();
    }
    getDescription(player) {
        return "This is the entrance of the dungeon. You see a big door at your front with 2 torches one at each side.";
    }
}
exports.InitialRoom = InitialRoom;
//# sourceMappingURL=InitialRoom.js.map