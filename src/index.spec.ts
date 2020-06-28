import NodeCore from "./NodeCore"

describe("NodeCore", () => {
    let nodeCore: NodeCore;
    test("Construct NodeCore Class", () => {
        nodeCore = new NodeCore();
        expect(nodeCore).toBeTruthy();
    })
})
