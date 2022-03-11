"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const Interactive_1 = require("./Interactive");
/**
 * this class represents a generic connection between 2 rooms
 */
class Connection extends Interactive_1.Interactive {
    constructor(name, description, target) {
        super();
        /**
         * list of valid commands to this interactive
         */
        this.commands = ['open', 'enter', 'go', 'move'];
        this.name = name;
        this.description = description;
        this.target = target;
    }
    match(command) {
        return this.commands.includes(command);
    }
    run(command, params, player) {
        if (params.join(' ').indexOf(this.name) > -1) {
            if (this.additionalChecks(player)) {
                player.moveTo(this.getTarget());
            }
            return true;
        }
        return false;
    }
    /**
     * this should return the room the player should go when the command matchs all rules
     */
    getTarget() {
        // @ts-ignore
        return this.target.getInstance();
    }
    /**
     * can be overridden to do additional checks, you can output things here, if returns false the move action will not happen
     */
    additionalChecks(player) {
        return true;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=Connection.js.map