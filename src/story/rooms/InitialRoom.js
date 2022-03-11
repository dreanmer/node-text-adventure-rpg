"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialRoom = void 0;
const Room_1 = require("../../lib/Room");
const EntranceHall_1 = require("./EntranceHall");
const Connection_1 = require("../../lib/interactive/Connection");
const Collectible_1 = require("../../lib/interactive/Collectible");
class InitialRoom extends Room_1.SingletonRoom {
    constructor() {
        super(...arguments);
        this.interactions = [
            new Connection_1.Connection('entrance door', 'You see a big `entrance door` at your front', EntranceHall_1.EntranceHall),
            new Collectible_1.Collectible('torch', 'There is 2 torches beside the door illuminating the door details', 2),
        ];
    }
    getDescription(player) {
        return "This is the entrance of the mansion";
    }
    getName() {
        return "Entrance";
    }
}
exports.InitialRoom = InitialRoom;
//# sourceMappingURL=InitialRoom.js.map