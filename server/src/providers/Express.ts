import type { Express as NativeExpress, Request, Response } from "express";
import { errorHandler } from "@middlewares/error.middleware";
import { Environment as env } from "@providers";
import cookieParser from "cookie-parser";
import express from "express";
import routes from "@routes";

class Express {
    private app: NativeExpress;

    constructor() {
        this.app = express();
        this.middleware();
        this.listen();
    }

    middleware = () => {
        this.app.use(cookieParser());

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(env.app.routePrefix, routes);
        this.app.all("*", (req: Request, res: Response) => {
            return res.send("404");
        });
        this.app.use(errorHandler);
    };

    listen = () => {
        this.app.listen(8080, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on ${env.app.host}`);
        });
    };
}

export default Express;
