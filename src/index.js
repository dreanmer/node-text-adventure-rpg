"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./lib/Client");
const Player_1 = require("./lib/Player");
const Server_1 = require("./lib/Server");
let playerA = new Player_1.Player('Alexandre', new Client_1.CliClient()), playerB = new Player_1.Player('Bruna', new Client_1.NullClient()), server = new Server_1.Server();
server.registerPlayer(playerA);
server.registerPlayer(playerB);
try {
    server.start();
}
catch (err) {
    // cli client will block this exception to be shown on console if the program gets interrupted
    // so, we catch and log it without interrupting the program.
    console.log(err);
}
//# sourceMappingURL=index.js.map