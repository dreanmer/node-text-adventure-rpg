"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliClient = void 0;
const inquirer = require("inquirer");
const EventInteractiveClient_1 = require("./EventInteractiveClient");
class CliClient extends EventInteractiveClient_1.InteractiveClient {
    /**
     * starts the recursive prompt input
     */
    constructor() {
        super();
        this.recursivePrompt();
    }
    /**
     * recursively prompt input from cli and emit each input as event
     */
    recursivePrompt() {
        return inquirer.prompt({
            type: "input",
            name: "data",
            message: "Your action:"
        }).then((answer) => {
            this.emit('input', answer.data);
            return this.recursivePrompt();
        });
    }
}
exports.CliClient = CliClient;
//# sourceMappingURL=CliClient.js.map