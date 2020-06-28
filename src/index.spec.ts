import NodeCore from "./NodeCore"
import { TCPTransport, TCPPeerMDNSDiscovery } from 'ataraxia-tcp';

describe("NodeCore", () => {
    let nodeCore: NodeCore;

    test("Construct NodeCore Class", () => {
        nodeCore = new NodeCore({ net: { name: "Testing" }, auth: { secret: "secret" } });
        nodeCore.addTransport(new TCPTransport({
            discovery: new TCPPeerMDNSDiscovery()
        }));
        expect(nodeCore).toBeTruthy();
    })

    test("Start NodeCore", () => {
        expect(nodeCore.start).resolves;
    })

    test("Stop NodeCore", () => {
        expect(nodeCore.stop).resolves;
    })
})
