export interface NodeCoreConfiguration {
    auth: {
        secret: string;
    }
    net: {
        name: string;
        endpoint?: boolean;
    }
}