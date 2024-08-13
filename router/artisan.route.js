import { Router } from "express";
const router = Router();

import ArtisanController from "../controller/artisan.controller.js"
import validate from "../middleware/validate.middleware.js";
import {updateArtisanLogIn, updateArtisan} from "../Schema/artisan.schema.js"
import {authenticateArtisan} from "../middleware/authenticate.middleware.js";

router.get('/', ArtisanController.findArtisans)
router.get('/:id', ArtisanController.findArtisan)
router.get('/:serviceId', ArtisanController.getArtisansByServiceId)
router.patch('/completelogin/:id', validate(updateArtisanLogIn), authenticateArtisan, ArtisanController.updateArtisan)
router.patch('/:id', validate(updateArtisan), authenticateArtisan, ArtisanController.updateArtisan)
router.delete('/:id', ArtisanController.deleteArtisan)

export default router;
