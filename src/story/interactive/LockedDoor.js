"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedDoor = void 0;
const Connection_1 = require("../../lib/interactive/Connection");
class LockedDoor extends Connection_1.Connection {
    constructor() {
        super(...arguments);
        this.isLocked = true;
    }
    additionalChecks(player) {
        if (!this.isLocked) {
            player.output('this door is locked');
            return false;
        }
        return true;
    }
}
exports.LockedDoor = LockedDoor;
//# sourceMappingURL=LockedDoor.js.map