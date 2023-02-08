import { NextFunction, Request, Response } from "express";
import { ChickenService } from "@services";
import { Environment as env } from "@providers";
import { BadRequestException, UnauthorizedException } from "@exceptions";

class ChickenController {
    run = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const runningChicken = await ChickenService.getById(parseInt(id));

            if (!runningChicken) throw new BadRequestException("Chicken does not exist");

            const chicken = await ChickenService.update(
                parseInt(id),
                runningChicken.name,
                runningChicken.weight,
                runningChicken.steps ? runningChicken.steps + 1 : 1,
                true);
            return res.status(200).json(chicken);
        } catch (err) {
            next(err);
        }

    }

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const chickens = await ChickenService.get();

            if (!chickens) throw new BadRequestException("Chicken does not exist");

            return res.status(200).json(chickens);
        } catch (err) {
            next(err);
        }
    }

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const chicken = await ChickenService.getById(parseInt(id));
            if (!chicken) {
                throw new BadRequestException("Chicken does not exist");
            }
            return res.status(200).json(chicken);
        } catch (err) {
            next(err);
        }
    }

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, weight, steps, isRunning } = req.body;
            const chicken = await ChickenService.create(name, weight, steps, isRunning);
            if (!chicken) {
                throw new BadRequestException("Chicken does not exist");
            }
            return res.status(200).json(chicken);
        } catch (err) {
            next(err);
        }
    }

    put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { name, weight, steps, isRunning } = req.body;
            const chicken = await ChickenService.update(parseInt(id), name, weight, steps, isRunning);
            if (!chicken) {
                throw new BadRequestException("Chicken does not exist");
            }
            return res.status(200).json(chicken);
        } catch (err) {
            next(err);
        }
    }

    patch = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const chicken = await ChickenService.getById(parseInt(id));
            if (!chicken) {
                throw new BadRequestException("Chicken does not exist");
            }
            return res.status(200).json(chicken);
        } catch (err) {
            next(err);
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const chicken = await ChickenService.delete(parseInt(id));
            if (!chicken) {
                throw new BadRequestException("Chicken does not exist");
            }
            return res.status(200).json(chicken);
        } catch (err) {
            next(err);
        }
    }
}

export default new ChickenController();
