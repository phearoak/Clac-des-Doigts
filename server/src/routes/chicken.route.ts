import { ChickenController } from "@controllers";
import { Router } from "express";
import { validate } from "@middlewares/validator.middleware";
import { ChickenSchema } from "@validations";

const router = Router();

router.get("/", ChickenController.get);

router.get("/:id", ChickenController.getById);

router.post("/run/:id", ChickenController.run);

router.post("/",
    validate(ChickenSchema.CreateSchema),
    ChickenController.post
);

router.put("/:id", ChickenController.put);

router.patch("/:id", ChickenController.patch);

router.delete("/:id", ChickenController.delete);

export default router;
