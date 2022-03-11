import {CliClient, NullClient} from "./lib/Client";
import {Player} from "./lib/Player";
import {Server} from "./lib/Server";

let playerA = new Player('Alexandre', new CliClient()),
    playerB = new Player('Bruna', new NullClient()),
    server = new Server();

server.registerPlayer(playerA);
server.registerPlayer(playerB);

try {
    server.start();
} catch (err) {
    // cli client will block this exception to be shown on console if the program gets interrupted
    // so, we catch and log it without interrupting the program.
    console.log(err);
}
