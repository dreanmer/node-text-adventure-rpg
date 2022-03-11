import {TypedEmitter} from 'tiny-typed-emitter';

const inquirer = require('inquirer');

interface EventInteractiveClient {
    'input': (data: string) => void;
    'output': (data: string) => void;
}

/**
 * As an eventEmitter each client implementation should:
 * -> emit `input` every time the user inputs a command from his user interface
 * -> listen `output` event and show it to the user (by default its calling the output method)
 */
export abstract class InteractiveClient extends TypedEmitter<EventInteractiveClient> {

    /**
     * Initializes client, subscribing output method to output event
     */
    constructor() {
        super();
        this.on('output', data => this.output(data));
    }

    /**
     * this method should handle a way to the output reach the client user interface
     */
    public abstract output(data: string): void;
}

/**
 * Cli client based on inquirer lib, made to help develop the game, should be improved
 */
export class CliClient extends InteractiveClient {

    /**
     * starts the recursive prompt input
     */
    public constructor() {
        super();
        this.recursivePrompt();
    }

    /**
     * recursively prompt input from cli and emit each input as event
     */
    private recursivePrompt() {
        return inquirer.prompt({
            type: "input",
            name: "data",
            message: "Your action:"
        }).then((answer) => {
            this.emit('input', answer.data);
            return this.recursivePrompt()
        })
    }

    /**
     * output to console
     */
    public output(data: string) {
        console.log(data);
    }
}

/**
 * throw away client, used to simulate an inactive player
 */
export class NullClient extends InteractiveClient {

    output(data: string): void {
        // just do nothing
    }
}
