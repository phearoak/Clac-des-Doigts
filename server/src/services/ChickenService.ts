import { Prisma } from "@providers";

class ChickenService {

    create = async (name: string, weight: number, steps: number, isRunning: boolean) => {
        return await Prisma.chicken.create({
            data: {
                name: name,
                weight: weight,
                steps: steps,
                isRunning: isRunning,
            },
        });
    };

    get = async () => {
        return await Prisma.chicken.findMany();
    };

    getById = async (id: number) => {
        return await Prisma.chicken.findUnique({
            where: {
                id,
            }
        });
    };

    update = async (
        id: number,
        name: string,
        weight?: number,
        steps?: number,
        isRunning?: boolean
    ) => {
        return await Prisma.chicken.update({
            where: {
                id,
            },
            data: {
                name: name,
                weight: weight,
                steps: steps,
                isRunning: isRunning,
            },
        });
    };

    delete = async (id: number) => {
        return await Prisma.chicken.delete({
            where: {
                id,
            },
        });
    };
}

export default new ChickenService();
