import { NetKit } from "@runspace/netkit";
import { JSONWebTokenAuth } from "@runspace/netkit/dist/Authentication";
import { ServiceManager } from "@runspace/netkit/dist/ServiceManager/ServiceManager";
import { NodeCoreConfiguration } from "./NodeCore.interfaces";
import { Transport } from "ataraxia/transport";

export class NodeCore {
    public netKit: NetKit;
    public serviceManager: ServiceManager;

    constructor({ auth, net }: NodeCoreConfiguration) {
        this.netKit = new NetKit({
            authentication: [
                new JSONWebTokenAuth(auth.secret)
            ],
            endpoint: net.endpoint,
            name: net.name
        });
        this.serviceManager = new ServiceManager(this.netKit);
    }

    public addTransport(transport: Transport): void {
        return this.netKit.net.addTransport(transport);
    }

    public async start(): Promise<void> {
        await this.netKit.start()
        await this.serviceManager.start();
    }

    public async stop(): Promise<void> {
        await this.netKit.stop()
        await this.serviceManager.stop();
    }
}

export default NodeCore;
