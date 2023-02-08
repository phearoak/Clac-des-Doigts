import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    await prisma.chicken.create({
        data: {
            name: "Paul",
            weight: 5
        },
    });
    await prisma.chicken.create({
        data:
        {
            name: "Chris",
            weight: 10
        },
    },
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
