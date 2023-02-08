import { Express } from "@providers";

(async () => {
    try {
        const server = new Express();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
