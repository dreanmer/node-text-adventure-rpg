import {Interactive} from "./Interactive";
import {Player} from "../Player";
import {Room} from "../Room";

/**
 * this class represents a generic connection between 2 rooms
 */
export class Connection extends Interactive {

    /**
     * the room the player will be sent if expectations was satisfied
     */
    private readonly target: Object;

    /**
     * list of valid commands to this interactive
     */
    commands = ['open', 'enter', 'go', 'move'];

    constructor(name: string, description: string, target: Object) {
        super();
        this.name = name;
        this.description = description;
        this.target = target;
    }

    match(command: string): boolean {
        return this.commands.includes(command);
    }

    run(command: string, params: string[], player: Player): boolean {
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
    getTarget(): Room {
        // @ts-ignore
        return this.target.getInstance();
    }

    /**
     * can be overridden to do additional checks, you can output things here, if returns false the move action will not happen
     */
    additionalChecks(player: Player): boolean {
        return true;
    }
}
