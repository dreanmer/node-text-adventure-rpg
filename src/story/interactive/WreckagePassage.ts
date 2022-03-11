import {Connection} from "../../lib/interactive/Connection";
import {Player} from "../../lib/Player";

export class WreckagePassage extends Connection {

    commands = ['search', 'examine', 'inspect', 'go'];

    additionalChecks(player: Player): boolean {
        if (player.hasItem('shovel')) {
            player.output('With your shovel you removed some of the wreckage and found a passage.');
            return true;
        }
        player.output('Maybe you can find some tool to remove part of the wreckage.');
        return false;
    }
}
