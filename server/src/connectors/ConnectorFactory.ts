import { IConnector } from "@interfaces";
import { GitHub } from "@connectors";

export class ConnectorFactory {
    private classes: {
        [key: string]: new (token?: string) => IConnector;
    };

    constructor() {
        this.classes = {
            github: GitHub,
        };
    }

    getConnector(service_name: string): (token?: string) => IConnector {
        return (token?: string) =>
            new this.classes[service_name.toLowerCase()](token);
    }
}
