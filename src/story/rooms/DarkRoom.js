"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkRoom = void 0;
const Room_1 = require("../../lib/Room");
const Connection_1 = require("../../lib/interactive/Connection");
const EntranceHall_1 = require("./EntranceHall");
/**
 * todo - wip
 */
class DarkRoom extends Room_1.SingletonRoom {
    constructor() {
        super(...arguments);
        this.interactions = [
            new Connection_1.Connection('west door', 'Behind you, the `west door` where you come', EntranceHall_1.EntranceHall),
        ];
    }
    getDescription(player) {
        if (player.hasItem('torch')) {
            return "With your torch you can see everything in this room";
        }
        return "Its soo much dark in this room that you can see nothing";
    }
    getName() {
        return "Dark Room";
    }
}
exports.DarkRoom = DarkRoom;
//# sourceMappingURL=DarkRoom.js.map