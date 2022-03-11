"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(client) {
        this.client = client;
        this.client.on('input', (data) => {
            this.processInput(data);
        });
    }
    moveTo(room) {
        this.currentLocation = room;
        this.output(room.getDescription(this));
    }
    moveAction(params) {
        let room = this.currentLocation.getConnection(params);
        if (room)
            return this.moveTo(room);
        this.client.emit('output', 'invalid connection');
    }
    output(data) {
        this.client.emit('output', data);
    }
    processInput(data) {
        let action = data.split(' '), command = action.shift(), params = action.join(' ');
        switch (command) {
            case 'go':
            case 'move':
                this.moveAction(params);
                break;
            default:
                this.client.emit('output', 'invalid command');
        }
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map