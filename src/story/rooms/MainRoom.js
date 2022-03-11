"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoom = void 0;
const InitialRoom_1 = require("./InitialRoom");
class MainRoom {
    getConnection(keyword) {
        if (keyword == 'south')
            return new InitialRoom_1.InitialRoom();
    }
    getDescription(player) {
        return "Congratulations you moved to the main room.";
    }
}
exports.MainRoom = MainRoom;
//# sourceMappingURL=MainRoom.js.map