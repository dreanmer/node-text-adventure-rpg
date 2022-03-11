import {Player} from "../Player";

/**
 * this interface represents any interactive entity in a room
 */
export abstract class Interactive {

    /**
     * default name
     */
    protected name: string;

    /**
     * description that should be displayed to player
     */
    protected description: string;

    /**
     * this method should match if the command interacts with this entity or not
     */
    abstract match(command: string): boolean;

    /**
     * this method will execute further validations if it needs, then execute the action
     * should return true if the user tried to interact with a valid target
     */
    abstract run(command: string, params: string[], player: Player): boolean;

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }
}
