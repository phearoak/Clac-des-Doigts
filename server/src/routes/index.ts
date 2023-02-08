import chickenRoute from "@routes/chicken.route";
import { Router } from "express";

interface Route {
    path: string;
    route: Router;
}

const router = Router();
const routes: Route[] = [
    {
        path: "/chicken",
        route: chickenRoute,
    }
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
