"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveClient = void 0;
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
class InteractiveClient extends tiny_typed_emitter_1.TypedEmitter {
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
    output(data) {
        console.log(data);
    }
}
exports.InteractiveClient = InteractiveClient;
//# sourceMappingURL=EventInteractiveClient.js.map