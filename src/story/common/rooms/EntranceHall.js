"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntranceHall = void 0;
const Room_1 = require("../../../lib/Room");
const InitialRoom_1 = require("./InitialRoom");
const DarkRoom_1 = require("./DarkRoom");
const Connection_1 = require("../../../lib/interactive/Connection");
const LockedDoor_1 = require("../interactive/LockedDoor");
const WreckagePassage_1 = require("../interactive/WreckagePassage");
class EntranceHall extends Room_1.SingletonRoom {
    constructor() {
        super(...arguments);
        this.interactions = [
            new Connection_1.Connection('entrance door', 'Behind you there is the `entrance door`', InitialRoom_1.InitialRoom),
            new Connection_1.Connection('east door', 'At the `east` side of the room there is an wooden `door` very degraded', DarkRoom_1.DarkRoom),
            new Connection_1.Connection('staircase', 'Also there is an `staircase` at his side', InitialRoom_1.InitialRoom),
            new LockedDoor_1.LockedDoor('north door', 'On the `north` side of the room, there is a wooden `door`, you can see some light under the door', InitialRoom_1.InitialRoom),
            new WreckagePassage_1.WreckagePassage('wreckage', 'At the south of the room there is lots of `wreckage`, probably from the second floor that collapsed', InitialRoom_1.InitialRoom)
        ];
    }
    getDescription(player) {
        return "You enter the entrance hall, it's an obscure place and you can barely see the entire room";
    }
    getName() {
        return "Entrance Hall";
    }
}
exports.EntranceHall = EntranceHall;
//# sourceMappingURL=EntranceHall.js.map