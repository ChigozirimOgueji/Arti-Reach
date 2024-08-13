import AuthController from "../controller/auth.controller.js";
import { Router } from "express";
import validate from "../middleware/validate.middleware.js"
import { signUpSchema, logInSchema, } from "../Schema/client.schema.js";
import {signUpArtisan, logInArtisan} from "../Schema/artisan.schema.js";
const router = Router();


  router.post("/client", validate(signUpSchema), AuthController.createClient);

  router.post("/loginclient", validate(logInSchema), AuthController.loginClient);

  router.post("/artisan", validate(signUpArtisan), AuthController.createArtisan);

  router.post("/loginartisan", validate(logInArtisan), AuthController.loginArtisan);


  router.post("/logout", AuthController.logout );

export default router;