import { Router } from "express";
const router = Router();
import validate from "../middleware/validate.middleware.js"
import ServiceController from "../controller/service.controller.js";
import createServiceSchema from "../schema/service.schema.js";
import { updateServiceSchema } from "../schema/service.schema.js";

router.post('/',validate(createServiceSchema), ServiceController.createService )
router.get('/', ServiceController.getServices)
router.get('/:id', ServiceController.getService)
router.patch('/:id', validate(updateServiceSchema), ServiceController.updateService)
router.delete('/:id', ServiceController.deleteService)



export default router;