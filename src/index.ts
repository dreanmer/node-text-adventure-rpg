import {CliClient} from "./clients/CliClient";
import {Player} from "./lib/Player";
import {Server} from "./lib/Server";

let client = new CliClient(),
    player = new Player(client),
    server = new Server();

server.registerPlayer(player);
server.start();
