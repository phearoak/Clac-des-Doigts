declare module "express-serve-static-core" {
    interface Request {
        user: UserPayload;
    }
}

interface UserPayload {
    id: number;
    email: string;
    admin: boolean;
}

export interface IEnvironment {
    node: string;
    isProduction: boolean;
    isTest: boolean;
    isDevelopment: boolean;
    app: {
        host: string;
        routePrefix: string;
    };
    db: {
        host: string;
        port: string;
        username: string;
        password: string;
    }
}

export interface UserDetails {
    userId: number;
    ipAddress: string;
    userAgent: string;
}

export interface ValidationSchema {
    [key: string]: ValidationChain | ValidationChain[];
}
