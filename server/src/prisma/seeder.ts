import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    /**
     * @description demo User (ADMIN rights) [demo@area.com:demodemo]
     */
    await prisma.chicken.create({
        data: {
            name: "Paul",
            weight: 5
        },
    });
    await prisma.chicken.create({ // ACTION ISSUE FIELD : SELECT ACCOUNT
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
