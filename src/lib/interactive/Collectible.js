"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collectible = void 0;
const Interactive_1 = require("./Interactive");
/**
 * this class represents an interactive object that can be picked
 */
class Collectible extends Interactive_1.Interactive {
    constructor(name, description, qty) {
        super();
        this.qty = qty;
        this.name = name;
        this.description = description;
    }
    match(command) {
        return ['grab', 'get', 'pick'].includes(command);
    }
    run(command, params, player) {
        if (params.join(' ').indexOf(this.name) > -1) {
            if (this.isAvailable()) {
                this.qty--;
                player.grab(this);
                player.output('you got a `' + this.name + '`');
            }
            else {
                player.output('the is no more `' + this.name + '` available to pick');
            }
            return true;
        }
        return false;
    }
    isAvailable() {
        return this.qty === -1 || this.qty > 0;
    }
}
exports.Collectible = Collectible;
//# sourceMappingURL=Collectible.js.map