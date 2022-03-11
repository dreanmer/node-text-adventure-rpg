import {TypedEmitter} from 'tiny-typed-emitter';

export interface EventInteractiveClient {
    'input': (data: string) => void;
    'output': (data: string) => void;
}

export class InteractiveClient extends TypedEmitter<EventInteractiveClient> {

    /**
     * Initializes client, subscribing output method to output event
     */
    constructor() {
        super();
        this.on('output', data => this.output(data));
    }

    /**
     * Defaults output method, should be overridden
     */
    public output(data: string) {
        console.log(data);
    }
}
