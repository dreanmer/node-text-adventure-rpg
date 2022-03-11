import {InteractiveClient} from "./Client";
import {Room} from "./Room";

/**
 * This class represents the player and his possible actions
 */
export class Player {

    private client: InteractiveClient;
    private currentLocation: undefined | Room;
    public name: string;

    /**
     * as the game will be multi client, each player will carry his own client/connection
     * we also subscribe the processInput method to the input event from player client
     */
    constructor(name: string, client: InteractiveClient) {
        this.client = client;
        this.name = name;
        this.client.on('input', (data) => {
            let params = data.split(' ');
            // room actions
            if (this.currentLocation) this.currentLocation.processAction(params.shift(), params, this);
            // player actions
            this.processAction(data);
            // todo - if none action was triggered, we should output an `invalid action error`
        });
    }

    /**
     * move the player to a room
     */
    public moveTo(room: Room): void {
        if (this.currentLocation) this.currentLocation.removePlayer(this);
        room.addPlayer(this);
        this.currentLocation = room;
        this.output(room.getDescription(this));
    }

    /**
     * this method will process the raw input from user (through the client)
     */
    private processAction(input: string) {
        let action = input.split(' '),
            command = action.shift();

        switch (command) {
            case 'explore':
                this.output('current room: ' + this.currentLocation.getName());
                this.output(this.currentLocation.getDescription(this));
                this.output('players in this room: ' + this.currentLocation.getPlayers().reduce((pre, cur) => pre + ', ' + cur.name, ''));
                break;
        }
    }

    /**
     * Outputs a message to the player client
     */
    public output(message: string) {
        this.client.emit('output', message);
    }
}
