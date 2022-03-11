import inquirer = require('inquirer');
import {InteractiveClient} from "./EventInteractiveClient";

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
}
