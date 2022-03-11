"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WreckagePassage = void 0;
const Connection_1 = require("../../lib/interactive/Connection");
class WreckagePassage extends Connection_1.Connection {
    constructor() {
        super(...arguments);
        this.commands = ['search', 'examine', 'inspect', 'go'];
    }
    additionalChecks(player) {
        if (player.hasItem('shovel')) {
            player.output('With your shovel you removed some of the wreckage and found a passage.');
            return true;
        }
        player.output('Maybe you can find some tool to remove part of the wreckage.');
        return false;
    }
}
exports.WreckagePassage = WreckagePassage;
//# sourceMappingURL=WreckagePassage.js.map