"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
/**
 * This class represents the player and his possible actions
 */
class Player {
    /**
     * as the game will be multi client, each player will carry his own client/connection
     * we also subscribe the processInput method to the input event from player client
     */
    constructor(name, client) {
        this.client = client;
        this.name = name;
        this.client.on('input', (data) => {
            let params = data.split(' ');
            // room actions
            if (this.currentLocation)
                this.currentLocation.processAction(params.shift(), params, this);
            // player actions
            this.processAction(data);
            // todo - if none action was triggered, we should output an `invalid action error`
        });
    }
    /**
     * move the player to a room
     */
    moveTo(room) {
        if (this.currentLocation)
            this.currentLocation.removePlayer(this);
        room.addPlayer(this);
        this.currentLocation = room;
        this.output(room.getDescription(this));
    }
    /**
     * this method will process the raw input from user (through the client)
     */
    processAction(input) {
        let action = input.split(' '), command = action.shift();
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
    output(message) {
        this.client.emit('output', message);
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map