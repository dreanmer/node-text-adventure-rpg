import {Connection} from "../../../lib/interactive/Connection";
import {Player} from "../../../lib/Player";

export class LockedDoor extends Connection {
    isLocked: boolean = true;

    additionalChecks(player: Player): boolean {
        if (!this.isLocked) {
            player.output('this door is locked');
            return false
        }
        return true;
    }
}
