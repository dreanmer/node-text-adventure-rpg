import {InteractiveClient} from "../clients/EventInteractiveClient";
import {Room} from "./Room";

export class Player {
    private client: InteractiveClient;
    private currentLocation: Room;

    constructor(client: InteractiveClient) {
        this.client = client;
        this.client.on('input', (data) => {
            this.processInput(data);
        });
    }

    public moveTo(room: Room): void {
        this.currentLocation = room;
        this.output(room.getDescription(this));
    }

    private moveAction(params: string) : void {
        let room = this.currentLocation.getConnection(params);
        if (room) return this.moveTo(room);
        this.client.emit('output', 'invalid connection');
    }

    private output(data: string) {
        this.client.emit('output', data);
    }

    private processInput(data: string) {
        let action = data.split(' '),
            command = action.shift(),
            params = action.join(' ');

        switch (command) {
            case  'go':
            case  'move':
                this.moveAction(params);
                break;
            default:
                this.client.emit('output', 'invalid command');
        }
    }
}
