import { Router } from "express";
const router = Router();

import ClientController from "../controller/client.controller.js"
import validate from "../middleware/validate.middleware.js";
import {updateSchema} from "../Schema/client.schema.js"
import {authenticateClient} from "../middleware/authenticate.middleware.js";

router.get('/', ClientController.findClients)
router.get('/:id', ClientController.findClient)
router.patch('/:id', validate(updateSchema), authenticateClient, ClientController.updateClient)
router.delete('/:id', ClientController.deleteClient)

export default router;