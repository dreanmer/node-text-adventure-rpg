import {Interactive} from "./Interactive";
import {Player} from "../Player";

/**
 * this class represents an interactive object that can be picked
 */
export class Collectible extends Interactive {

    /**
     * qty of the item disposable. -1 if infinite
     */
    private qty: number;

    constructor(name: string, description: string, qty: number) {
        super();
        this.qty = qty;
        this.name = name;
        this.description = description;
    }

    match(command: string): boolean {
        return ['grab', 'get', 'pick'].includes(command);
    }

    run(command: string, params: string[], player: Player): boolean {
        if (params.join(' ').indexOf(this.name) > -1) {
            if (this.isAvailable()) {
                this.qty--;
                player.grab(this);
                player.output('you got a `' + this.name + '`');
            } else {
                player.output('the is no more `' + this.name + '` available to pick');
            }
            return true;
        }
        return false;
    }

    private isAvailable(): boolean {
        return this.qty === -1 || this.qty > 0;
    }
}
