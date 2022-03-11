"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliClient_1 = require("./clients/CliClient");
const Player_1 = require("./lib/Player");
const Server_1 = require("./lib/Server");
let client = new CliClient_1.CliClient(), player = new Player_1.Player(client), server = new Server_1.Server();
server.registerPlayer(player);
server.start();
//# sourceMappingURL=index.js.map