"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullClient = exports.CliClient = exports.InteractiveClient = void 0;
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const inquirer = require('inquirer');
/**
 * As an eventEmitter each client implementation should:
 * -> emit `input` every time the user inputs a command from his user interface
 * -> listen `output` event and show it to the user (by default its calling the output method)
 */
class InteractiveClient extends tiny_typed_emitter_1.TypedEmitter {
    /**
     * Initializes client, subscribing output method to output event
     */
    constructor() {
        super();
        this.on('output', data => this.output(data));
    }
}
exports.InteractiveClient = InteractiveClient;
/**
 * Cli client based on inquirer lib, made to help develop the game, should be improved
 */
class CliClient extends InteractiveClient {
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
    /**
     * output to console
     */
    output(data) {
        console.log(data);
    }
}
exports.CliClient = CliClient;
/**
 * throw away client, used to simulate an inactive player
 */
class NullClient extends InteractiveClient {
    output(data) {
        // just do nothing
    }
}
exports.NullClient = NullClient;
//# sourceMappingURL=Client.js.map