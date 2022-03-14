"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
class Story {
    constructor() {
        this.name = "My Test Story";
        this.rooms.push(new Room({
            name: "Switch Room",
            description: "A big room with a switch at the center",
            interactions: [
                new Door({
                    target: "Passageway",
                    keywords: ["north"]
                }),
                new Switch({
                    description: "A lever switch... This should activate something, somewhere",
                    target: "Darkroom Door",
                    action: "toggle"
                }),
                new Item({
                    name: "Torch",
                    description: "A torch at the wall, this is illuminating the details of the door",
                    target: "Darkroom Door",
                    action: "toggle"
                })
            ]
        }), new Room({
            name: "Passageway",
            description: "A passageway with a locked door",
            interactions: [
                new Door({
                    target: "Switch Room",
                    keywords: ["south"]
                }),
                new LockedDoor({
                    name: "Darkroom Door",
                    target: "Darkroom",
                    keywords: ["north"]
                }),
            ]
        }), new Room({
            name: "Darkroom",
            description: function () {
                return this.isLight() ?
                    "With the light of the torch, you can see a treasure on the middle of the room" :
                    "You can see nothing";
            },
            interactions: [
                new HiddenInteraction(new Door({
                    target: "Switch Room",
                    keywords: ["south"]
                }), function () {
                    return this.isLight().some(p => p.hasItem("torch"));
                }),
                new LockedDoor({
                    name: "Darkroom Door",
                    target: "Darkroom",
                    keywords: ["north"]
                }),
            ],
            isLight() {
                return this.getPlayersHere().some(p => p.hasItem("torch"));
            }
        }));
    }
}
exports.Story = Story;
//# sourceMappingURL=Story.js.map